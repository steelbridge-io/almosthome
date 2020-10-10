/**
 * Contempo Mapping
 *
 * @package WP Pro Real Estate 4
 * @subpackage JavaScript
 */

var estateMapping = (function () {
	var self = {},
	    marker_list = [],
	    open_info_window = null,
	    x_center_offset = 0, // x,y offset in px when map gets built with marker bounds
	    y_center_offset = -10,
	    x_info_offset = 0, // x,y offset in px when map pans to marker -- to accomodate infoBubble
	    y_info_offset = -100;
	
	function build_marker(latlng, property) {
	    var marker = new MarkerWithLabel({
			map: self.map, 
			draggable: false,
			flat: true,
			labelContent: property.price,
			labelAnchor: new google.maps.Point(22, 0),
			labelClass: "label", // the CSS class for the label
			labelStyle: {opacity: 1},
			icon: '/wp-content/themes/almosthome/images/blank.png',   
			position: latlng
			});
		
		    self.bounds.extend(latlng);
			self.map.fitBounds(self.bounds);
            self.map.setCenter(convert_offset(self.bounds.getCenter(), x_center_offset, y_center_offset));

			var infoBubble = new InfoBubble({
				maxWidth: 275,
				content: contentString,
				borderRadius: 3,
				disableAutoPan: true
			});
      
			var residentialString = '';
			if(property['commercial'] != 'commercial') {
				var residentialString='<p class="details">'+property.bed+' Bed, &nbsp;'+property.bath+' Bath';
			}

			var contentString =
			'<div class="info-content">'+
			'<a href="'+property.permalink+'"><img class="left" src="'+property.thumb+'" /></a>'+
			'<div class="listing-details left">'+
			'<h3><a href="'+property.permalink+'">'+property.street+'</a></h3>'+
			'<p class="location">'+property.city+', '+property.state+'&nbsp;'+property.zip+'</p>'+
			''+residentialString+'</div>'+
			'</div>';

			var tabContent =
			'<div class="info-content">'+
			'<img class="left" src="'+property.agentThumb+'" />'+
			'<div class="listing-details left">'+
			'<h3>'+property.agentName+'</h3>'+
			'<p class="tagline">'+property.agentTagline+'</p>'+
			'<p class="phone"><strong>Tel:</strong> '+property.agentPhone+'</p>'+
			'<p class="email"><a href="mailto:'+property.agentEmail+'">'+property.agentEmail+'</a></p>'+
			'</div>'+
			'</div>';

	        infoBubble.addTab('Details', contentString);
	        // infoBubble.addTab('Contact Agent', tabContent);

			google.maps.event.addListener(marker, 'click', function() {
			    if(open_info_window) open_info_window.close();
			    
				if (!infoBubble.isOpen()) {
		            infoBubble.open(self.map, marker);
		            self.map.panTo(convert_offset(this.position, x_info_offset, y_info_offset));
		            open_info_window = infoBubble;
				}
			});
	}
	
    function geocode_and_place_marker(property) {
       var geocoder = new google.maps.Geocoder();
       var address = property.street+', '+property.city+' '+property.state+', '+property.zip;
           
           //If latlong exists build the marker, otherwise geocode then build the marker
           if (property['latlong']) {
               var lat = parseFloat(property['latlong'].split(',')[0]),
                    lng = parseFloat(property['latlong'].split(',')[1]);
                var latlng = new google.maps.LatLng(lat,lng);
                build_marker(latlng, property);
               
           } else {
               geocoder.geocode({ address : address }, function( results, status ) {
                   if(status == google.maps.GeocoderStatus.OK) {
        				var latlng = results[0].geometry.location;
        				build_marker(latlng, property);
        			}
        		});
            }
    }
    
    function init_canvas_projection() {
        function CanvasProjectionOverlay() {}
        CanvasProjectionOverlay.prototype = new google.maps.OverlayView();
        CanvasProjectionOverlay.prototype.constructor = CanvasProjectionOverlay;
        CanvasProjectionOverlay.prototype.onAdd = function(){};
        CanvasProjectionOverlay.prototype.draw = function(){};
        CanvasProjectionOverlay.prototype.onRemove = function(){};
        
        self.canvasProjectionOverlay = new CanvasProjectionOverlay();
        self.canvasProjectionOverlay.setMap(self.map);
    }
    
    function convert_offset(latlng, x_offset, y_offset) {
        var proj = self.canvasProjectionOverlay.getProjection();
        var point = proj.fromLatLngToContainerPixel(latlng);
        point.x = point.x + x_offset;
        point.y = point.y + y_offset;
        return proj.fromContainerPixelToLatLng(point);
    }
	
	self.init_property_map = function (properties, defaultmapcenter) {
    	var options = {
    		zoom: 2,
    		center: new google.maps.LatLng(defaultmapcenter.mapcenter),
    		mapTypeId: google.maps.MapTypeId.ROADMAP, 
    		disableDefaultUI: false,
    		streetViewControl: false
    	};
        
    	self.map = new google.maps.Map( document.getElementById( 'map' ), options );
        self.bounds = new google.maps.LatLngBounds();
        init_canvas_projection();

        //wait for idle to give time to grab the projection (for calculating offset)
        var idle_listener = google.maps.event.addListener(self.map, 'idle', function() {
            for (i=0;i<properties.length;i++) {
                geocode_and_place_marker(properties[i]);
            }
            google.maps.event.removeListener(idle_listener);
        });
	
	}
	
	return self;
}());