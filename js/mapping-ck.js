/**
 * Contempo Mapping
 *
 * @package WP Pro Real Estate 4
 * @subpackage JavaScript
 */var estateMapping=function(){function a(t,i){var a=new MarkerWithLabel({map:e.map,draggable:!1,flat:!0,labelContent:i.price,labelAnchor:new google.maps.Point(22,0),labelClass:"label",labelStyle:{opacity:1},icon:"/almosthome/wp-content/themes/almosthome/images/blank.png",position:t});e.bounds.extend(t);e.map.fitBounds(e.bounds);e.map.setCenter(c(e.bounds.getCenter(),r,s));var f=new InfoBubble({maxWidth:275,content:h,borderRadius:3,disableAutoPan:!0}),l="";if(i["commercial"]!="commercial")var l='<p class="details">'+i.bed+"&nbsp;"+i.bath+"";var h='<div class="info-content"><a href="'+i.permalink+'"><img class="left" src="'+i.thumb+'" /></a>'+'<div class="listing-details left">'+'<h3><a href="'+i.permalink+'">'+i.street+"</a></h3>"+'<p class="location">'+i.city+", "+i.state+"&nbsp;"+i.zip+"</p>"+'<p class="price"><strong>'+i.fullPrice+"</strong></p>"+l+", "+i.size+"</p></div>"+"</div>",p='<div class="info-content"><img class="left" src="'+i.agentThumb+'" />'+'<div class="listing-details left">'+"<h3>"+i.agentName+"</h3>"+'<p class="tagline">'+i.agentTagline+"</p>"+'<p class="phone"><strong>Tel:</strong> '+i.agentPhone+"</p>"+'<p class="email"><a href="mailto:'+i.agentEmail+'">'+i.agentEmail+"</a></p>"+"</div>"+"</div>";f.addTab("Details",h);google.maps.event.addListener(a,"click",function(){n&&n.close();if(!f.isOpen()){f.open(e.map,a);e.map.panTo(c(this.position,o,u));n=f}})}function f(e){var t=new google.maps.Geocoder,n=e.street+", "+e.city+" "+e.state+", "+e.zip;if(e.latlong){var r=parseFloat(e.latlong.split(",")[0]),i=parseFloat(e.latlong.split(",")[1]),s=new google.maps.LatLng(r,i);a(s,e)}else t.geocode({address:n},function(t,n){if(n==google.maps.GeocoderStatus.OK){var r=t[0].geometry.location;a(r,e)}})}function l(){function t(){}t.prototype=new google.maps.OverlayView;t.prototype.constructor=t;t.prototype.onAdd=function(){};t.prototype.draw=function(){};t.prototype.onRemove=function(){};e.canvasProjectionOverlay=new t;e.canvasProjectionOverlay.setMap(e.map)}function c(t,n,r){var i=e.canvasProjectionOverlay.getProjection(),s=i.fromLatLngToContainerPixel(t);s.x=s.x+n;s.y=s.y+r;return i.fromContainerPixelToLatLng(s)}var e={},t=[],n=null,r=0,s=-100,o=0,u=-100;e.init_property_map=function(t,n){var r={zoom:1,center:new google.maps.LatLng(n.mapcenter),mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!1,streetViewControl:!1};e.map=new google.maps.Map(document.getElementById("map"),r);e.bounds=new google.maps.LatLngBounds;l();var s=google.maps.event.addListener(e.map,"idle",function(){for(i=0;i<t.length;i++)f(t[i]);google.maps.event.removeListener(s)})};return e}();