jQuery(document).ready(function(e){function r(){stateSel=document.getElementById("state");cityList=t[stateSel.value];pageList=n[stateSel.value];s("city",cityList,pageList)}function s(e,t,n){selectField=document.getElementById(e);selectField.options.length=0;for(i=0;i<t.length;i++)selectField.options[selectField.length]=new Option(t[i],n[i])}function o(e){document.LocationForm.city.value!=""&&document.LocationForm.submit()}function u(){currState=document.getElementById("state");currState.value!="Please Select"&&r();return}var t=new Array,n=new Array;t.AL=new Array("Please Select","Birmingham","Huntsville","Mobile","Montgomery");n.AL=new Array("","corporate-housing-birmingham-al","corporate-housing-huntsville-al","corporate-housing-mobile-al","corporate-housing-montgomery-al");t.AZ=new Array("Please Select","Glendale","Mesa","Phoenix","Scottsdale","Tempe","Tucson");n.AZ=new Array("","corporate-housing-glendale-az","corporate-housing-mesa-az","corporate-housing-phoenix-az","corporate-housing-scottsdale-az","corporate-housing-tempe-az","corporate-housing-tucson-az");t.AR=new Array("Please Select","Bentonville","Little Rock","Rogers");n.AR=new Array("","corporate-housing-bentonville-ar","corporate-housing-little-rock-ar","corporate-housing-rogers-ar");t.CA=new Array("Please Select","Anaheim","Bakersfield","Burbank","Chino Hills","Chula Vista","Coronado","Costa Mesa","Escondido","Fremont","Fresno","Fullerton","Glendale","Hermosa Beach","Hollywood","Huntington Beach","Irvine","La Jolla","Laguna Beach","Lancaster","Long Beach","Los Angeles","Marina del Rey","Mission Viejo","Modesto","Monterey","Montrose","Newport Beach","Oakland","Oceanside","Ontario","Orange County","Oxnard","Palatine","Palm Desert","Palm Springs","Palmdale","Palo Alto","Pasadena","Playa Vista","Rancho Cucamonga","Redlands","Redondo Beach","Riverside","Sacramento","San Bernardino","San Diego","San Fernando Valley","San Francisco","San Jose","San Luis Obispo","San Marcos","Santa Ana","Santa Barbara","Santa Clara","Santa Clarita","Santa Monica","Santa Rosa","Stockton","West Los Angeles","Woodland Hills");n.CA=new Array("","corporate-housing-anaheim-ca","corporate-housing-bakersfield-ca","corporate-housing-burbank-ca","corporate-housing-chino-hills-ca","corporate-housing-chula-vista-ca","corporate-housing-coronado-ca","corporate-housing-costa-mesa-ca","corporate-housing-escondido-ca","corporate-housing-fremont-ca","corporate-housing-fresno-ca","corporate-housing-fullerton-ca","corporate-housing-glendale-ca","corporate-housing-hermosa-beach-ca","corporate-housing-hollywood-ca","corporate-housing-huntington-beach-ca","corporate-housing-irvine-ca","corporate-housing-la-jolla-ca","corporate-housing-laguna-beach-ca","corporate-housing-lancaster-ca","corporate-housing-long-beach-ca","corporate-housing-los-angeles-ca","corporate-housing-marina-del-rey-ca","corporate-housing-mission-viejo-ca","corporate-housing-modesto-ca","corporate-housing-monterey-ca","corporate-housing-montrose-ca","corporate-housing-newport-beach-ca","corporate-housing-oakland-ca","corporate-housing-oceanside-ca","corporate-housing-ontario-ca","corporate-housing-orange-county-ca","corporate-housing-oxnard-ca","corporate-housing-inland-empire-ca","corporate-housing-palm-desert-ca","corporate-housing-palm-springs-ca","corporate-housing-palmdale-ca","corporate-housing-palo-alto-ca","corporate-housing-pasadena-ca","corporate-housing-los-angeles-ca","corporate-housing-rancho-cucamonga-ca","corporate-housing-redlands-ca","corporate-housing-redondo-beach-ca","corporate-housing-riverside-ca","corporate-housing-sacramento-ca","corporate-housing-san-bernardino-ca","corporate-housing-san-diego-ca","corporate-housing-san-fernando-ca","corporate-housing-san-francisco-ca","corporate-housing-san-jose-ca","corporate-housing-san-luis-obispo-ca","corporate-housing-san-marcos-ca","corporate-housing-santa-ana-ca","corporate-housing-santa-barbara-ca","corporate-housing-santa-clara-ca","corporate-housing-santa-clarita-ca","corporate-housing-santa-monica-ca","corporate-housing-santa-rosa-ca","corporate-housing-stockton-ca","corporate-housing-west-los-angeles-ca","corporate-housing-woodland-hills-ca");t.CO=new Array("Please Select","Aurora","Boulder","Cherry Hills Village","Colorado Springs","Denver","Fort Collins","Grand Junction","Lakewood","Littleton","Westminster");n.CO=new Array("","corporate-housing-aurora-co","corporate-housing-boulder-co","corporate-housing-cherry-hills-village-co","corporate-housing-colorado-springs-co","corporate-housing-denver-co","corporate-housing-fort-collins-co","corporate-housing-grand-junction-co","corporate-housing-lakewood-co","corporate-housing-littleton-co","corporate-housing-westminster-co");t.CT=new Array("Please Select","Bridgeport","Hartford","New Haven","Stamford");n.CT=new Array("","corporate-housing-bridgeport-ct","corporate-housing-hartford-ct","corporate-housing-new-haven-ct","corporate-housing-stamford-ct");t.DC=new Array("Please Select","District of Columbia","Washington DC");n.DC=new Array("","corporate-housing-washington-dc","corporate-housing-washington-dc");t.FL=new Array("Please Select","Bradenton","Brandon","Cape Coral","Citrus Park","Clearwater","Fort Lauderdale","Fort Myers","Fort Walton Beach","Homestead","Jacksonville","Miami","Naples","Nokomis","Orlando","Pensacola","Plant City","Ruskin","Sarasota","St. Petersburg","Sun City Center","Tallahassee","Tampa","Tampa Palms","Temple Terrace","Thornotosassa","West Palm Beach");n.FL=new Array("","corporate-housing-bradenton-fl","corporate-housing-brandon-fl","corporate-housing-cape-coral-fl","corporate-housing-citrus-park-fl","corporate-housing-clearwater-fl","corporate-housing-fort-lauderdale-fl","corporate-housing-fort-myers-fl","corporate-housing-fort-walton-beach-fl","corporate-housing-homestead-fl","corporate-housing-jacksonville-fl","corporate-housing-miami-fl","corporate-housing-naples-fl","corporate-housing-nokomis-fl","corporate-housing-orlando-fl","corporate-housing-pensacola-fl","corporate-housing-plant-city-fl","corporate-housing-ruskin-fl","corporate-housing-sarasota-fl","corporate-housing-st-petersburg-fl","corporate-housing-sun-city-center-fl","corporate-housing-tallahassee-fl","corporate-housing-tampa-fl","corporate-housing-tampa-palms-fl","corporate-housing-temple-terrace-fl","corporate-housing-thornotosassa-fl","corporate-housing-west-palm-beach-fl");t.GA=new Array("Please Select","Alpharetta","Atlanta","Augusta","Buckhead","College Park","Decatur","Douglasville","Duluth","Dunwoody","East Point","Gainesville","Griffin","Johns Creek","Kennesaw","Lawrenceville","Mableton","Marietta","Newnan","North Atlanta","North Decatur","North Druid Hills","Peachtree City","Perimeter Center","Redan","Roswell","Sandy Springs","Savannah","Smyrna","Tucker");n.GA=new Array("","corporate-housing-alpharetta-ga","corporate-housing-atlanta-ga","corporate-housing-augusta-ga","corporate-housing-buckhead-ga","corporate-housing-college-park-ga","corporate-housing-decatur-ga","corporate-housing-douglasville-ga","corporate-housing-duluth-ga","corporate-housing-dunwoody-ga","corporate-housing-east-point-ga","corporate-housing-gainesville-ga","corporate-housing-griffin-ga","corporate-housing-johns-creek-ga","corporate-housing-kennesaw-ga","corporate-housing-lawrenceville-ga","corporate-housing-mableton-ga","corporate-housing-marietta-ga","corporate-housing-newnan-ga","corporate-housing-north-atlanta-ga","corporate-housing-north-decatur-ga","corporate-housing-north-druid-hills-ga","corporate-housing-peachtree-city-ga","corporate-housing-perimeter-center-ga","corporate-housing-redan-ga","corporate-housing-roswell-ga","corporate-housing-sandy-springs-ga","corporate-housing-savannah-ga","corporate-housing-smyrna-ga","corporate-housing-tucker-ga");t.ID=new Array("Please Select","Boise");n.ID=new Array("","corporate-housing-boise-id");t.IL=new Array("Please Select","Arlington Heights","Bolingbrook","Chicago","Cicero","Des Plaines","Elgin","Elmhurst","Evanston","Glencoe","Glendale Heights","Joliet","Kenilworth","Lake Bluff","Lincoln Park","Lombard","Naperville","Northbrook","Oak Park","Park Ridge","Peoria","Rockford","Schaumburg","Skokie","Springfield","Wheaton","Willowbrook","Wilmette","Winnetka");n.IL=new Array("","corporate-housing-arlington-heights-il","corporate-housing-bolingbrook-il","corporate-housing-chicago-il","corporate-housing-cicero-il","corporate-housing-des-plaines-il","corporate-housing-elgin-il","corporate-housing-elmhurst-il","corporate-housing-evanston-il","corporate-housing-glencoe-il","corporate-housing-glendale-heights-il","corporate-housing-joliet-il","corporate-housing-kenilworth-il","corporate-housing-lake-bluff-il","corporate-housing-lincoln-park-il","corporate-housing-lombard-il","corporate-housing-naperville-il","corporate-housing-northbrook-il","corporate-housing-oak-park-il","corporate-housing-park-ridge-il","corporate-housing-peoria-il","corporate-housing-rockford-il","corporate-housing-schaumburg-il","corporate-housing-skokie-il","corporate-housing-springfield-il","corporate-housing-wheaton-il","corporate-housing-willowbrook-ili","corporate-housing-wilmette-il","corporate-housing-winnetka-il");t.IN=new Array("Please Select","Carmel","Columbus","Fort Wayne","Gary","Hammond","Indianapolis","South Bend");n.IN=new Array("","corporate-housing-carmel-in","corporate-housing-columbus-in","corporate-housing-fort-wayne-in","corporate-housing-gary-in","corporate-housing-hammond-in","corporate-housing-indianapolis-in","corporate-housing-south-bend-in");t.IA=new Array("Please Select","Cedar Rapids","Davenport","Des Moines","Rock Island");n.IA=new Array("","corporate-housing-cedar-rapids-ia","corporate-housing-davenport-ia","corporate-housing-des-moines-ia","corporate-housing-rock-island-ia");t.KS=new Array("Please Select","Kansas City","Overland Park","Wichita");n.KS=new Array("","corporate-housing-kansas-city-ks","corporate-housing-overland-park-ks","corporate-housing-wichita-ks");t.KY=new Array("Please Select","Fayette County","Lexington","Louisville");n.KY=new Array("","corporate-housing-fayette-county-ky","corporate-housing-lexington-ky","corporate-housing-louisville-ky");t.LA=new Array("Please Select","Baton Rouge","Lafayette","New Orleans","Shreveport");n.LA=new Array("","corporate-housing-baton-rouge-la","corporate-housing-lafayette-la","corporate-housing-new-orleans-la","corporate-housing-shreveport-la");t.MD=new Array("Please Select","Annapolis","Baltimore","Bethesda");n.MD=new Array("","corporate-housing-annapolis-md","corporate-housing-baltimore-md","corporate-housing-bethesda-md");t.MA=new Array("Please Select","Back Bay","Beacon Hill","Boston","Cambridge","Dorchester","Hyde Park","Springfield","Worcester");n.MA=new Array("","corporate-housing-back-bay-ma","corporate-housing-beacon-hill-ma","corporate-housing-boston-ma","corporate-housing-cambridge-ma","corporate-housing-dorchester-ma","corporate-housing-hyde-park-ma","corporate-housing-springfield-ma","corporate-housing-worcester-ma");t.MI=new Array("Please Select","Detroit","Flint","Grand Rapids","Lansing","Wyoming");n.MI=new Array("","corporate-housing-detroit-mi","corporate-housing-flint-mi","corporate-housing-grand-rapids-mi","corporate-housing-lansing-mi","corporate-housing-wyoming-mi");t.MN=new Array("Please Select","Apple Valley","Eden Prairie","Edina","Minneapolis","Minnetonka","St. Louis Park","St. Paul");n.MN=new Array("","corporate-housing-apple-valley-mn","corporate-housing-eden-prairie-mn","corporate-housing-edina-mn","corporate-housing-minneapolis-mn","corporate-housing-minnetonka-mn","corporate-housing-st-louis-park-mn","corporate-housing-st-paul-mn");t.MS=new Array("Please Select","Jackson");n.MS=new Array("","corporate-housing-jackson-ms");t.MO=new Array("Please Select","Chesterfield","Clayton","Columbia","Creve Coeur","Independence","Kansas City","Ladue","Midtown","Richmond Heights","Riverview","Springfield","St. Louis");n.MO=new Array("","corporate-housing-chesterfield-mo","corporate-housing-clayton-mo","corporate-housing-columbia-mo","corporate-housing-creve-coeur-mo","corporate-housing-independence-mo","corporate-housing-kansas-city-mo","corporate-housing-ladue-mo","corporate-housing-st-louis-il","corporate-housing-richmond-heights-mo","corporate-housing-riverview-mo","corporate-housing-springfield-mo","corporate-housing-st-louis-mo");t.NE=new Array("Please Select","Lincoln","Omaha");n.NE=new Array("","corporate-housing-lincoln-ne","corporate-housing-omaha-ne");t.NV=new Array("Please Select","Las Vegas","Paradise","Reno");n.NV=new Array("","corporate-housing-las-vegas-nv","corporate-housing-paradise-nv","corporate-housing-reno-nv");t.NJ=new Array("Please Select","Jersey City","Newark");n.NJ=new Array("","corporate-housing-jersey-city-nj","corporate-housing-newark-nj");t.NM=new Array("Please Select","Albuquerque","Santa Fe");n.NM=new Array("","corporate-housing-albuquerque-nm","corporate-housing-santa-fe-nm");t.NY=new Array("Please Select","Bronx","Brooklyn","Glens Falls","Manhattan","New York","Queens");n.NY=new Array("","corporate-housing-bronx-ny","corporate-housing-brooklyn-ny","corporate-housing-glens-falls-ny","corporate-housing-manhattan-ny","corporate-housing-new-york-ny","corporate-housing-queens-ny");t.NC=new Array("Please Select","Chapel Hill","Charlotte","Durham","Greensboro","Raleigh","Winston-Salem");n.NC=new Array("","corporate-housing-chapel-hill-nc","corporate-housing-charlotte-nc","corporate-housing-durham-nc","corporate-housing-greensboro-nc","corporate-housing-raleigh-nc","corporate-housing-winston-salem-nc");t.OH=new Array("Please Select","Akron","Cincinnati","Cleveland","Columbus","Dayton","Toledo");n.OH=new Array("","corporate-housing-akron-oh","corporate-housing-cincinnati-oh","corporate-housing-cleveland-oh","corporate-housing-columbus-oh","corporate-housing-dayton-oh","corporate-housing-toledo-oh");t.OK=new Array("Please Select","Oklahoma City","Tulsa");n.OK=new Array("","corporate-housing-oklahoma-city-ok","corporate-housing-tulsa-ok");t.OR=new Array("Please Select","Eugene","Portland","Salem");n.OR=new Array("","corporate-housing-eugene-or","corporate-housing-portland-or","corporate-housing-salem-or");t.PA=new Array("Please Select","Belmont","Bryn Mawr","Center City","Chalfont","Chesterbrook","Doylestown","Exton","Great Valley","Harrisburg","Horsham","Jenkintown","King of Prussia","Kensington","Lansdale","Malvern","Mantua","Norristown","Northwest Philadelphia","Paoli","Philadelphia","Pittsburgh","Point Breeze","Southwest Philadelphia","Spring Garden","Stenton","University City","Upper Darby","West Chester","Williamsport");n.PA=new Array("","corporate-housing-belmont-pa","corporate-housing-bryn-mawr-pa","corporate-housing-center-city-pa","corporate-housing-chalfont-pa","corporate-housing-chesterbrook-pa","corporate-housing-doylestown-pa","corporate-housing-exton-pa","corporate-housing-great-valley-pa","corporate-housing-harrisburg-pa","corporate-housing-horsham-pa","corporate-housing-jenkintown-pa","corporate-housing-king-of-prussia-pa","corporate-housing-kensington-pa","corporate-housing-lansdale-pa","corporate-housing-malvern-pa","corporate-housing-mantua-pa","corporate-housing-norristown-pa","corporate-housing-northwest-philadelphia-pa","corporate-housing-paoli-pa","corporate-housing-philadelphia-pa","corporate-housing-pittsburgh-pa","corporate-housing-point-breeze-pa","corporate-housing-southwest-philadelphia-pa","corporate-housing-spring-garden-pa","corporate-housing-stenton-pa","corporate-housing-university-city-pa","corporate-housing-upper-darby-pa","corporate-housing-west-chester-pa","corporate-housing-williamsport-pa");t.RI=new Array("Please Select","Providence");n.RI=new Array("","corporate-housing-providence-ri");t.SC=new Array("Please Select","Charleston","Greenville","North Charleston","Summerville");n.SC=new Array("","corporate-housing-charleston-sc","corporate-housing-greenville-sc","corporate-housing-north-charleston-sc","corporate-housing-summerville-sc");t.SD=new Array("Please Select","Sioux Falls");n.SD=new Array("","corporate-housing-sioux-falls-sd");t.TN=new Array("Please Select","Knoxville","Memphis","Nashville");n.TN=new Array("","corporate-housing-knoxville-tn","corporate-housing-memphis-tn","corporate-housing-nashville-tn");t.TX=new Array("Please Select","Arlington","Austin","Corpus Christi","Dallas","Edinburg","El Paso","Fort Worth","Houston","Ingleside","Irving","Laredo","Lubbock","McAllen","Midland","Mission","Pasadena","Plano","Portland","San Angelo","San Antonio");n.TX=new Array("","corporate-housing-arlington-tx","corporate-housing-austin-tx","corporate-housing-corpus-christi-tx","corporate-housing-dallas-tx","corporate-housing-edinburg-tx","corporate-housing-el-paso-tx","corporate-housing-fort-worth-tx","corporate-housing-houston-tx","corporate-housing-ingleside-tx","corporate-housing-irving-tx","corporate-housing-laredo-tx","corporate-housing-lubbock-tx","corporate-housing-mcallen-tx","corporate-housing-midland-tx","corporate-housing-mission-tx","corporate-housing-pasadena-tx","corporate-housing-plano-tx","corporate-housing-portland-tx","corporate-housing-san-angelo-tx","corporate-housing-san-antonio-tx");t.UT=new Array("Please Select","Brigham City","Clearfield","Cottonwood Heights","Draper","Holladay","Layton","Logan","Midvale","Ogden","Orem","Provo","Salt Lake City","Sandy","St. George","Taylorsville","West Jordan","West Valley City");n.UT=new Array("","corporate-housing-brigham-city-ut","corporate-housing-cottonwood-heights-ut","corporate-housing-clearfield-ut","corporate-housing-draper-ut","corporate-housing-holladay-ut","corporate-housing-layton-ut","corporate-housing-logan-ut","corporate-housing-midvale-ut","corporate-housing-ogden-ut","corporate-housing-orem-ut","corporate-housing-provo-ut","corporate-housing-salt-lake-city-ut","corporate-housing-sandy-ut","corporate-housing-st-george-ut","corporate-housing-taylorsville-ut","corporate-housing-west-jordan-ut","corporate-housing-salt-lake-city");t.VA=new Array("Please Select","Alexandria","Arlington","Blacksburg","Christiansburg","Falls Church","Hampton","Newport News","Norfolk","Radford","Richmond","Roanoke","Virginia Beach","Williamsburg");n.VA=new Array("","corporate-housing-alexandria-va","corporate-housing-arlington-va","corporate-housing-blacksburg-va","corporate-housing-christiansburg-va","corporate-housing-hampton-va","corporate-housing-newport-news-va","corporate-housing-norfolk-va","corporate-housing-radford-va","corporate-housing-richmond-va","corporate-housing-roanoke-va","corporate-housing-virginia-beach-va","corporate-housing-williamsburg-va");t.WA=new Array("Please Select","Seattle","Spokane","Tacoma","Vancouver");n.WA=new Array("","corporate-housing-seattle-wa","corporate-housing-spokane-wa","corporate-housing-tacoma-wa","corporate-housing-vancouver-wa");t.WI=new Array("Please Select","Appleton","Brookfield","Eau Claire","Fond du Lac","Germantown","Green Bay","Kenosha","La Crosse","Madison","Manitowoc","Menomonee Falls","Mequon","Milwaukee","New Berlin","Oak Creek","Oshkosh","Pewaukee","Racine","Sheboygan","Stevens Point","Sturgeon Bay","Watertown","Waukesha","Wauwatosa","West Allis","West Bend");n.WI=new Array("","corporate-housing-appleton-wi","corporate-housing-brookfield-wi","corporate-housing-eau-claire-wi","corporate-housing-fond-du-lac-wi","corporate-housing-germantown-wi","corporate-housing-green-bay-wi","corporate-housing-kenosha-wi","corporate-housing-la-crosse-wi","corporate-housing-madison-wi","corporate-housing-manitowoc-wi","corporate-housing-menomonee-falls-wi","corporate-housing-mequon-wi","corporate-housing-milwaukee-wi","corporate-housing-new-berlin-wi","corporate-housing-oak-creek-wi","corporate-housing-oshkosh-wi","corporate-housing-pewaukee-wi","corporate-housing-racine-wi","corporate-housing-sheboygan-wi","corporate-housing-stevens-point-wi","corporate-housing-sturgeon-bay-wi","corporate-housing-watertown-wi","corporate-housing-waukesha-wi","corporate-housing-wauwatosa-wi","corporate-housing-west-allis-wi","corporate-housing-west-bend-wi");t.WY=new Array("Please Select","Casper");n.WY=new Array("","corporate-housing-casper-wy");e("#city").focus(function(){getCitites();console.log("city")});e("#state").change(function(){r()});jQuery.fn.labelify=function(t){t=jQuery.extend({text:"title",labelledClass:""},t);var n={title:function(t){return e(t).attr("title")},label:function(t){return e("label[for="+t.id+"]").text()}},r,i=e(this);return e(this).each(function(){typeof t.text=="string"?r=n[t.text]:r=t.text;if(typeof r!="function")return;var s=r(this);if(!s)return;e(this).data("label",r(this).replace(/\n/g,""));e(this).focus(function(){if(this.value===e(this).data("label")){this.value=this.defaultValue;e(this).removeClass(t.labelledClass)}}).blur(function(){if(this.value===this.defaultValue){this.value=e(this).data("label");e(this).addClass(t.labelledClass)}});var o=function(){i.each(function(){if(this.value===e(this).data("label")){this.value=this.defaultValue;e(this).removeClass(t.labelledClass)}})};e(this).parents("form").submit(o);e(window).unload(o);if(this.value!==this.defaultValue)return;this.value=e(this).data("label");e(this).addClass(t.labelledClass)})};e(".quote-form input").labelify({text:"label"});e(".testimonial-content").innerfade({speed:2e3,timeout:6e3,type:"sequence",containerheight:"300px"});e("#container").fitVids()});