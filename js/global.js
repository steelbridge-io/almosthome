jQuery(document).ready(function($) {

	var cities = new Array();
	var pages = new Array();
	// City lists
	cities['AL'] = new Array('Please Select','Birmingham','Huntsville','Mobile','Montgomery');
	pages['AL'] = new Array('','corporate-housing-birmingham-al','corporate-housing-huntsville-al','corporate-housing-mobile-al','corporate-housing-montgomery-al');

	cities['AZ'] = new Array('Please Select','Glendale','Phoenix','Scottsdale','Tempe','Tucson');
	pages['AZ'] = new Array('','corporate-housing-glendale-az','corporate-housing-phoenix-az','corporate-housing-scottsdale-az','corporate-housing-tempe-az','corporate-housing-tucson-az');

	cities['AR'] = new Array('Please Select','Bentonville','Little Rock');
	pages['AR'] = new Array('','corporate-housing-bentonville-ar','corporate-housing-little-rock-ar');
	cities['CA'] = new Array('Please Select','Bakersfield','Burbank','Chino Hills','Chula Vista','Coronado','Costa Mesa','Escondido','Fremont','Fresno','Fullerton','Glendale','Hermosa Beach','Hollywood','Huntington Beach','Irvine','Inland Empire','La Jolla','Laguna Beach','Lancaster','Long Beach','Los Angeles','Marina del Rey','Modesto','Monterey','Newport Beach','Oakland','Oceanside','Ontario','Orange County','Oxnard','Palo Alto','Pasadena','Rancho Cucamonga','Redondo Beach','Riverside','Sacramento','San Diego','San Fernando Valley','San Francisco','San Jose','San Luis Obispo','San Marcos','Santa Barbara','Santa Clarita','Santa Monica','Santa Rosa','Stockton','Woodland Hills');
	pages['CA'] = new Array('','corporate-housing-bakersfield-ca','corporate-housing-burbank-ca','corporate-housing-chino-hills-ca','corporate-housing-chula-vista-ca','corporate-housing-coronado-ca','corporate-housing-costa-mesa-ca','corporate-housing-escondido-ca','corporate-housing-fremont-ca','corporate-housing-fresno-ca','corporate-housing-fullerton-ca','corporate-housing-glendale-ca','corporate-housing-hermosa-beach-ca','corporate-housing-hollywood-ca','corporate-housing-huntington-beach-ca','corporate-housing-irvine-ca','corporate-housing-inland-empire-ca','corporate-housing-la-jolla-ca','corporate-housing-laguna-beach-ca','corporate-housing-lancaster-ca','corporate-housing-long-beach-ca','corporate-housing-los-angeles-ca','corporate-housing-marina-del-rey-ca','corporate-housing-modesto-ca','corporate-housing-monterey-ca','corporate-housing-newport-beach-ca','corporate-housing-oakland-ca','corporate-housing-oceanside-ca','corporate-housing-ontario-ca','corporate-housing-orange-county-ca','corporate-housing-oxnard-ca','corporate-housing-palo-alto-ca','corporate-housing-pasadena-ca','corporate-housing-rancho-cucamonga-ca','corporate-housing-redondo-beach-ca','corporate-housing-riverside-ca','corporate-housing-sacramento-ca','corporate-housing-san-diego-ca','corporate-housing-san-fernando-ca','corporate-housing-san-francisco-ca','corporate-housing-san-jose-ca','corporate-housing-san-luis-obispo-ca','corporate-housing-san-marcos-ca','corporate-housing-santa-barbara-ca','corporate-housing-santa-clarita-ca','corporate-housing-santa-monica-ca','corporate-housing-santa-rosa-ca','corporate-housing-stockton-ca','corporate-housing-woodland-hills-ca');
	cities['CO'] = new Array('Please Select','Aurora','Boulder','Colorado Springs','Denver','Fort Collins','Grand Junction','Lakewood','Littleton');
	pages['CO'] = new Array('','corporate-housing-aurora-co','corporate-housing-boulder-co','corporate-housing-colorado-springs-co','corporate-housing-denver-co','corporate-housing-fort-collins-co','corporate-housing-grand-junction-co','corporate-housing-lakewood-co','corporate-housing-littleton-co');
	cities['CT'] = new Array('Please Select','Bridgeport','Hartford','New Haven','Stamford');
	pages['CT'] = new Array('','corporate-housing-bridgeport-ct','corporate-housing-hartford-ct','corporate-housing-new-haven-ct','corporate-housing-stamford-ct');
	cities['DC'] = new Array('Please Select','District of Columbia','Washington DC');
	pages['DC'] = new Array('','corporate-housing-washington-dc','corporate-housing-washington-dc');
	cities['FL'] = new Array('Please Select','Bradenton','Brandon','Cape Coral','Clearwater','Crestview','Fort Lauderdale','Fort Myers','Fort Walton Beach','Homestead','Jacksonville','Miami','Naples','Nokomis','Orlando','Pensacola','Plant City','Sarasota','St. Petersburg','Tallahassee','Tampa','West Palm Beach');
	pages['FL'] = new Array('','corporate-housing-bradenton-fl','corporate-housing-brandon-fl','corporate-housing-cape-coral-fl','corporate-housing-clearwater-fl','corporate-housing-crestview-fl','corporate-housing-fort-lauderdale-fl','corporate-housing-fort-myers-fl','corporate-housing-fort-walton-beach-fl','corporate-housing-homestead-fl','corporate-housing-jacksonville-fl','corporate-housing-miami-fl','corporate-housing-naples-fl','corporate-housing-nokomis-fl','corporate-housing-orlando-fl','corporate-housing-pensacola-fl','corporate-housing-plant-city-fl','corporate-housing-sarasota-fl','corporate-housing-st-petersburg-fl','corporate-housing-tallahassee-fl','corporate-housing-tampa-fl','corporate-housing-west-palm-beach-fl');
	cities['GA'] = new Array('Please Select','Alpharetta','Atlanta','Augusta','Buckhead','Decatur','Douglasville','Duluth','Dunwoody','Gainesville','Griffin','Johns Creek','Kennesaw','Lawrenceville','Marietta','Newnan','Peachtree City','Roswell','Sandy Springs','Savannah','Smyrna','Tucker');
	pages['GA'] = new Array('','corporate-housing-alpharetta-ga','corporate-housing-atlanta-ga','corporate-housing-augusta-ga','corporate-housing-buckhead-ga','corporate-housing-decatur-ga','corporate-housing-douglasville-ga','corporate-housing-duluth-ga','corporate-housing-dunwoody-ga','corporate-housing-gainesville-ga','corporate-housing-griffin-ga','corporate-housing-johns-creek-ga','corporate-housing-kennesaw-ga','corporate-housing-lawrenceville-ga','corporate-housing-marietta-ga','corporate-housing-newnan-ga','corporate-housing-peachtree-city-ga','corporate-housing-roswell-ga','corporate-housing-sandy-springs-ga','corporate-housing-savannah-ga','corporate-housing-smyrna-ga','corporate-housing-tucker-ga');
	cities['ID'] = new Array('Please Select','Boise');
	pages['ID'] = new Array('','corporate-housing-boise-id');
	cities['IL'] = new Array('Please Select','Arlington Heights','Chicago','Des Plaines','Elgin','Elmhurst','Evanston','Glencoe','Glendale Heights','Joliet','Kenilworth','Lake Bluff','Lincoln Park','Lombard','Naperville','Northbrook','Oak Park','Park Ridge','Peoria','Rockford','Schaumburg','Springfield','Wheaton','Wilmette','Winnetka');
	pages['IL'] = new Array('','corporate-housing-arlington-heights-il','corporate-housing-chicago-il','corporate-housing-des-plaines-il','corporate-housing-elgin-il','corporate-housing-elmhurst-il','corporate-housing-evanston-il','corporate-housing-glencoe-il','corporate-housing-glendale-heights-il','corporate-housing-joliet-il','corporate-housing-kenilworth-il','corporate-housing-lake-bluff-il','corporate-housing-lincoln-park-il','corporate-housing-lombard-il','corporate-housing-naperville-il','corporate-housing-northbrook-il','corporate-housing-oak-park-il','corporate-housing-park-ridge-il','corporate-housing-peoria-il','corporate-housing-rockford-il','corporate-housing-schaumburg-il','corporate-housing-springfield-il','corporate-housing-wheaton-il','corporate-housing-wilmette-il','corporate-housing-winnetka-il');
	cities['IN'] = new Array('Please Select','Carmel','Columbus','Fort Wayne','Gary','Hammond','Indianapolis','South Bend');
	pages['IN'] = new Array('', 'corporate-housing-carmel-in','corporate-housing-columbus-in','corporate-housing-fort-wayne-in','corporate-housing-gary-in','corporate-housing-hammond-in','corporate-housing-indianapolis-in','corporate-housing-south-bend-in');
	cities['IA'] = new Array('Please Select','Cedar Rapids','Davenport','Des Moines','Rock Island');
	pages['IA'] = new Array('','corporate-housing-cedar-rapids-ia','corporate-housing-davenport-ia','corporate-housing-des-moines-ia','corporate-housing-rock-island-ia');
	cities['KS'] = new Array('Please Select','Kansas City','Overland Park','Wichita');
	pages['KS'] = new Array('','corporate-housing-kansas-city-ks','corporate-housing-overland-park-ks','corporate-housing-wichita-ks');
	cities['KY'] = new Array('Please Select','Fayette County','Lexington','Louisville');
	pages['KY'] = new Array('','corporate-housing-fayette-county-ky','corporate-housing-lexington-ky','corporate-housing-louisville-ky');
	cities['LA'] = new Array('Please Select','Baton Rouge','Lafayette','New Orleans','Shreveport');
	pages['LA'] = new Array('','corporate-housing-baton-rouge-la','corporate-housing-lafayette-la','corporate-housing-new-orleans-la','corporate-housing-shreveport-la');
	cities['MD'] = new Array('Please Select','Annapolis','Baltimore','Bethesda','Silver Spring');
	pages['MD'] = new Array('','corporate-housing-annapolis-md','corporate-housing-baltimore-md','corporate-housing-bethesda-md','corporate-housing-silver-spring-md');
	cities['MA'] = new Array('Please Select','Back Bay','Boston','Cambridge','Springfield','Worcester');
	pages['MA'] = new Array('','corporate-housing-back-bay-ma','corporate-housing-boston-ma','corporate-housing-cambridge-ma','corporate-housing-springfield-ma','corporate-housing-worcester-ma');
	cities['MI'] = new Array('Please Select','Detroit','Flint','Grand Rapids','Lansing','Wyoming');
	pages['MI'] = new Array('','corporate-housing-detroit-mi','corporate-housing-flint-mi','corporate-housing-grand-rapids-mi','corporate-housing-lansing-mi','corporate-housing-wyoming-mi');
	cities['MN'] = new Array('Please Select','Eden Prairie','Edina','Minneapolis','St. Paul');
	pages['MN'] = new Array('','corporate-housing-eden-prairie-mn','corporate-housing-edina-mn','corporate-housing-minneapolis-mn','corporate-housing-st-paul-mn');
	cities['MS'] = new Array('Please Select','Jackson');
	pages['MS'] = new Array('','corporate-housing-jackson-ms');
	cities['MO'] = new Array('Please Select','Columbia','Independence','Kansas City','Springfield','St. Louis');
	pages['MO'] = new Array('','corporate-housing-columbia-mo','corporate-housing-independence-mo','corporate-housing-kansas-city-mo','corporate-housing-springfield-mo','corporate-housing-st-louis-mo');
	cities['NC'] = new Array('Please Select','Chapel Hill','Charlotte','Durham','Greensboro','Raleigh','Winston-Salem');
	pages['NC'] = new Array('','corporate-housing-chapel-hill-nc','corporate-housing-charlotte-nc','corporate-housing-durham-nc','corporate-housing-greensboro-nc','corporate-housing-raleigh-nc','corporate-housing-winston-salem-nc');
	cities['NE'] = new Array('Please Select','Lincoln','Omaha');
	pages['NE'] = new Array('','corporate-housing-lincoln-ne','corporate-housing-omaha-ne');
	cities['NV'] = new Array('Please Select','Las Vegas','Reno','Sparks');
	pages['NV'] = new Array('','corporate-housing-las-vegas-nv','corporate-housing-reno-nv','corporate-housing-sparks-nv');
	cities['NJ'] = new Array('Please Select','Jersey City','Newark');
	pages['NJ'] = new Array('','corporate-housing-jersey-city-nj','corporate-housing-newark-nj');
	cities['NM'] = new Array('Please Select','Albuquerque', 'Santa Fe');
	pages['NM'] = new Array('','corporate-housing-albuquerque-nm','corporate-housing-santa-fe-nm');
	cities['OH'] = new Array('Please Select','Akron','Cincinnati','Cleveland','Columbus','Dayton','Toledo');
	pages['OH'] = new Array('','corporate-housing-akron-oh','corporate-housing-cincinnati-oh','corporate-housing-cleveland-oh','corporate-housing-columbus-oh','corporate-housing-dayton-oh','corporate-housing-toledo-oh');
	cities['OK'] = new Array('Please Select','Oklahoma City','Tulsa');
	pages['OK'] = new Array('','corporate-housing-oklahoma-city-ok','corporate-housing-tulsa-ok');
	cities['OR'] = new Array('Please Select','Eugene','Portland','Salem');
	pages['OR'] = new Array('','corporate-housing-eugene-or','corporate-housing-portland-or','corporate-housing-salem-or');
	cities['PA'] = new Array('Please Select','Bryn Mawr','Doylestown','Exton','Harrisburg','Horsham','King of Prussia','Kensington','Lansdale','Malvern','Philadelphia','Pittsburgh','West Chester');
	pages['PA'] = new Array('','corporate-housing-bryn-mawr-pa','corporate-housing-doylestown-pa','corporate-housing-exton-pa','corporate-housing-harrisburg-pa','corporate-housing-horsham-pa','corporate-housing-king-of-prussia-pa','corporate-housing-kensington-pa','corporate-housing-lansdale-pa','corporate-housing-malvern-pa','corporate-housing-philadelphia-pa','corporate-housing-pittsburgh-pa','corporate-housing-west-chester-pa');
	cities['RI'] = new Array('Please Select','Providence');
	pages['RI'] = new Array('','corporate-housing-providence-ri');
	cities['SC'] = new Array('Please Select','Charleston','Greenville','Summerville');
	pages['SC'] = new Array('','corporate-housing-charleston-sc','corporate-housing-greenville-sc','corporate-housing-summerville-sc');
	cities['SD'] = new Array('Please Select','Sioux Falls');
	pages['SD'] = new Array('','corporate-housing-sioux-falls-sd');
	cities['TN'] = new Array('Please Select','Knoxville','Memphis','Nashville');
	pages['TN'] = new Array('','corporate-housing-knoxville-tn','corporate-housing-memphis-tn','corporate-housing-nashville-tn');
	cities['TX'] = new Array('Please Select','Arlington','Austin','Corpus Christi','Dallas','El Paso','Fort Worth','Houston','Ingleside','Irving','Laredo','Lubbock','Midland','Pasadena','Plano','Portland','San Angelo','San Antonio');
	pages['TX'] = new Array('','corporate-housing-arlington-tx','corporate-housing-austin-tx','corporate-housing-corpus-christi-tx','corporate-housing-dallas-tx','corporate-housing-el-paso-tx','corporate-housing-fort-worth-tx','corporate-housing-houston-tx','corporate-housing-ingleside-tx','corporate-housing-irving-tx','corporate-housing-laredo-tx','corporate-housing-lubbock-tx','corporate-housing-midland-tx','corporate-housing-pasadena-tx','corporate-housing-plano-tx','corporate-housing-portland-tx','corporate-housing-san-angelo-tx','corporate-housing-san-antonio-tx');
	cities['UT'] = new Array('Please Select','Brigham City','Clearfield','Cottonwood Heights','Draper','Holladay','Layton','Logan','Ogden','Orem','Provo','Salt Lake City','Sandy','St. George','West Jordan');
	pages['UT'] = new Array('','corporate-housing-brigham-city-ut','corporate-housing-clearfield-ut','corporate-housing-cottonwood-heights-ut','corporate-housing-draper-ut','corporate-housing-holladay-ut','corporate-housing-layton-ut','corporate-housing-logan-ut','corporate-housing-ogden-ut','corporate-housing-orem-ut','corporate-housing-provo-ut','corporate-housing-salt-lake-city-ut','corporate-housing-sandy-ut','corporate-housing-st-george-ut','corporate-housing-west-jordan-ut');
	cities['VA'] = new Array('Please Select','Arlington','Blacksburg','Falls Church','Hampton','Newport News','Norfolk','Richmond','Virginia Beach','Williamsburg');
	pages['VA'] = new Array('','corporate-housing-arlington-va','corporate-housing-blacksburg-va','corporate-housing-arlington-va','corporate-housing-hampton-va','corporate-housing-newport-news-va','corporate-housing-norfolk-va','corporate-housing-richmond-va','corporate-housing-virginia-beach-va','corporate-housing-williamsburg-va');
	cities['WA'] = new Array('Please Select','Seattle','Spokane','Tacoma','Vancouver');
	pages['WA'] = new Array('','corporate-housing-seattle-wa','corporate-housing-spokane-wa','corporate-housing-tacoma-wa','corporate-housing-vancouver-wa');
	cities['WI'] = new Array('Please Select','Appleton','Brookfield','Eau Claire','Fond du Lac','Germantown','Green Bay','Kenosha','La Crosse','Madison','Manitowoc','Menomonee Falls','Mequon','Milwaukee','Oak Creek','Oshkosh','Racine','Sheboygan','Stevens Point','Sturgeon Bay','Waukesha','Wausau','West Bend');
	pages['WI'] = new Array('','corporate-housing-appleton-wi','corporate-housing-brookfield-wi','corporate-housing-eau-claire-wi','corporate-housing-fond-du-lac-wi','corporate-housing-germantown-wi','corporate-housing-green-bay-wi','corporate-housing-kenosha-wi','corporate-housing-la-crosse-wi','corporate-housing-madison-wi','corporate-housing-manitowoc-wi','corporate-housing-menomonee-falls-wi','corporate-housing-mequon-wi','corporate-housing-milwaukee-wi','corporate-housing-oak-creek-wi','corporate-housing-oshkosh-wi','corporate-housing-racine-wi','corporate-housing-sheboygan-wi','corporate-housing-stevens-point-wi','corporate-housing-sturgeon-bay-wi','corporate-housing-waukesha-wi','corporate-housing-wausau-wi','corporate-housing-west-bend-wi');
	cities['WY'] = new Array('Please Select','Casper');
	pages['WY'] = new Array('','corporate-housing-casper-wy');

	function setCities() {
		stateSel = document.getElementById('state');
		cityList = cities[stateSel.value];
		pageList = pages[stateSel.value];
		changeSelect('city', cityList, pageList);
	}
	function changeSelect(fieldID, newOptions, newValues) {
		selectField = document.getElementById(fieldID);
		selectField.options.length = 0;
		for (i=0; i<newOptions.length; i++) {
			selectField.options[selectField.length] = new Option(newOptions[i], newValues[i]);
		}
	}
	function submitForm(city) {
		if(document.LocationForm.city.value != '') {
			document.LocationForm.submit();
		}
	}
	function getCities() {
		currState = document.getElementById('state');
		if(currState.value != 'Please Select') {
			setCities();
		}
		return;
	}

	$('#city').focus(function() {
		getCitites();
		console.log('city');
	});

	$('#state').change(function() {
		setCities();
	});




	// home request change cities based on state selected
	

	$('#input_4_10').change(function(){
		
		$('#input_4_11').find('option').remove().end();

		var state = "";
		$('#input_4_10 option:selected').each(function() {
			state += $(this).text();
		});

		var cityList = cities[state];

		for (i=0; i<cityList.length; i++) {
			$('#input_4_11').append('<option value="' + cityList[i] + '">' + cityList[i] + '</option>');
		}

		$('#input_4_11').append('<option value="other">Other</option>');

	});

	// main request change cities based on state selected
	

	$('#input_3_25').change(function(){

		
		
		$('#input_3_9').find('option').remove().end();

		var state = "";
		$('#input_3_25 option:selected').each(function() {
			state += $(this).text();
		});

		var cityList = cities[state];

		for (i=0; i<cityList.length; i++) {
			$('#input_3_9').append('<option value="' + cityList[i] + '">' + cityList[i] + '</option>');
		}

		$('#input_3_9').append('<option value="other">Other</option>');

	});





	/**
	 * jQuery.labelify - Display in-textbox hints
	 * Stuart Langridge, http://www.kryogenix.org/
	 * Released into the public domain
	 * Date: 25th June 2008
	 * @author Stuart Langridge
	 * @version 1.3
	 *
	 *
	 * Basic calling syntax: $("input").labelify();
	 * Defaults to taking the in-field label from the field's title attribute
	 *
	 * You can also pass an options object with the following keys:
	 *   text
	 *     "title" to get the in-field label from the field's title attribute 
	 *      (this is the default)
	 *     "label" to get the in-field label from the inner text of the field's label
	 *      (note that the label must be attached to the field with for="fieldid")
	 *     a function which takes one parameter, the input field, and returns
	 *      whatever text it likes
	 *
	 *   labelledClass
	 *     a class that will be applied to the input field when it contains the
	 *      label and removed when it contains user input. Defaults to blank.
	 *  
	 */
	jQuery.fn.labelify = function(settings) {
	  settings = jQuery.extend({
	    text: "title",
	    labelledClass: ""
	  }, settings);
	  var lookups = {
	    title: function(input) {
	      return $(input).attr("title");
	    },
	    label: function(input) {
	      return $("label[for=" + input.id +"]").text();
	    }
	  };
	  var lookup;
	  var jQuery_labellified_elements = $(this);
	  return $(this).each(function() {
	    if (typeof settings.text === "string") {
	      lookup = lookups[settings.text]; // what if not there?
	    } else {
	      lookup = settings.text; // what if not a fn?
	    };
	    // bail if lookup isn't a function or if it returns undefined
	    if (typeof lookup !== "function") { return; }
	    var lookupval = lookup(this);
	    if (!lookupval) { return; }

	    // need to strip newlines because the browser strips them
	    // if you set textbox.value to a string containing them    
	    $(this).data("label",lookup(this).replace(/\n/g,''));
	    $(this).focus(function() {
	      if (this.value === $(this).data("label")) {
	        this.value = this.defaultValue;
	        $(this).removeClass(settings.labelledClass);
	      }
	    }).blur(function(){
	      if (this.value === this.defaultValue) {
	        this.value = $(this).data("label");
	        $(this).addClass(settings.labelledClass);
	      }
	    });
	    
	    var removeValuesOnExit = function() {
	      jQuery_labellified_elements.each(function(){
	        if (this.value === $(this).data("label")) {
	          this.value = this.defaultValue;
	          $(this).removeClass(settings.labelledClass);
	        }
	      })
	    };
	    
	    $(this).parents("form").submit(removeValuesOnExit);
	    $(window).unload(removeValuesOnExit);
	    
	    if (this.value !== this.defaultValue) {
	      // user already started typing; don't overwrite their work!
	      return;
	    }
	    // actually set the value
	    this.value = $(this).data("label");
	    $(this).addClass(settings.labelledClass);

	  });
	};

	// add label text inside of inputs
	// $(".quote-form input").labelify({
	// 	text: "label"
	// });

	// $('#input_4_8').labelify({
	// 	text: function(input) {
	// 		return 'Bed';
	// 	}
	// });

	// scrolling testimonials
	$('.testimonial-content-ahu').innerfade({
			speed: 1000,
			timeout: 8000,
			type: 'sequence',
			containerheight: '180px'
		});

	$("#container").fitVids();

	

});