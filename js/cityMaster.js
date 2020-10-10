/*

Combines all the JavaScript for city pages

Called like this: <script src="cityMaster.js"></script>

*/

// Google API - gmaps (https://maps.google.com/maps/api/js)

// AlmostHome - infobubble (https://almosthomeusa.com/wp-content/themes/almosthome/js/infobubble.js

// AlmostHome - marker (https://www.almosthomeusa.com/wp-content/themes/js/markerwithlabel.js)



//

// This section is the contents of:   https://maps.google.com/maps/api/js?ver=3.5.1

window.google = window.google || {};

google.maps = google.maps || {};

(function() {

  

  function getScript(src) {

    document.write('<' + 'script src="' + src + '"><' + '/script>');

  }

  

  var modules = google.maps.modules = {};

  google.maps.__gjsload__ = function(name, text) {

    modules[name] = text;

  };

  

  google.maps.Load = function(apiLoad) {

    delete google.maps.Load;

    //apiLoad([0.009999999776482582,[null,[["https://khm0.googleapis.com/kh?v=722\u0026hl=en-US\u0026","https://khm1.googleapis.com/kh?v=722\u0026hl=en-US\u0026"],null,null,null,1,"722",["https://khms0.google.com/kh?v=722\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=722\u0026hl=en-US\u0026"]],null,null,null,null,[["https://cbk0.googleapis.com/cbk?","https://cbk1.googleapis.com/cbk?"]],[["https://khm0.googleapis.com/kh?v=103\u0026hl=en-US\u0026","https://khm1.googleapis.com/kh?v=103\u0026hl=en-US\u0026"],null,null,null,null,"103",["https://khms0.google.com/kh?v=103\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=103\u0026hl=en-US\u0026"]],[["https://mt0.googleapis.com/mapslt?hl=en-US\u0026","https://mt1.googleapis.com/mapslt?hl=en-US\u0026"]],null,null,null,[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]]],["en-US","US",null,0,null,null,"https://maps.gstatic.com/mapfiles/","https://csi.gstatic.com","https://maps.googleapis.com","https://maps.googleapis.com",null,"https://maps.google.com","https://gg.google.com","https://maps.gstatic.com/maps-api-v3/api/images/","https://www.google.com/maps",0,"https://www.google.com"],["https://maps.google.com/maps-api-v3/api/js/28/18","3.28.18"],[1566677190],1,null,null,null,null,null,"",null,null,0,"https://khm.googleapis.com/mz?v=722\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"https://mt.googleapis.com/maps/vt/icon",[["https://maps.google.com/maps/vt"],["https://maps.google.com/maps/vt"],null,null,null,null,null,null,null,null,null,null,["https://www.google.com/maps/vt"],"/maps/vt",379000000,379],2,500,[null,null,null,null,"https://www.google.com/maps/preview/log204","","https://static.panoramio.com.storage.googleapis.com/photos/",["https://geo0.ggpht.com/cbk","https://geo1.ggpht.com/cbk","https://geo2.ggpht.com/cbk","https://geo3.ggpht.com/cbk"],"https://maps.googleapis.com/maps/api/js/GeoPhotoService.GetMetadata","https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch",["https://lh3.ggpht.com/","https://lh4.ggpht.com/","https://lh5.ggpht.com/","https://lh6.ggpht.com/"]],["https://www.google.com/maps/api/js/master?pb=!1m2!1u28!2s18!2sen-US!3sUS!4s28/18","https://www.google.com/maps/api/js/widget?pb=!1m2!1u28!2s18!2sen-US"],null,0,null,"/maps/api/js/ApplicationService.GetEntityDetails",0,null,null,[null,null,null,null,null,null,null,null,null,[0,0]],null,[],["28.18"]], loadScriptTime);
    
  };
  
   apiLoad([0.009999999776482582,[null,[["https://khm0.googleapis.com/kh?v=722\u0026hl=en-US\u0026","https://khm1.googleapis.com/kh?v=722\u0026hl=en-US\u0026"],null,null,null,1,"722",["https://khms0.google.com/kh?v=722\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=722\u0026hl=en-US\u0026"]],null,null,null,null,[["https://cbk0.googleapis.com/cbk?","https://cbk1.googleapis.com/cbk?"]],[["https://khm0.googleapis.com/kh?v=103\u0026hl=en-US\u0026","https://khm1.googleapis.com/kh?v=103\u0026hl=en-US\u0026"],null,null,null,null,"103",["https://khms0.google.com/kh?v=103\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=103\u0026hl=en-US\u0026"]],[["https://mt0.googleapis.com/mapslt?hl=en-US\u0026","https://mt1.googleapis.com/mapslt?hl=en-US\u0026"]],null,null,null,[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]]],["en-US","US",null,0,null,null,"https://maps.gstatic.com/mapfiles/","https://csi.gstatic.com","https://maps.googleapis.com","https://maps.googleapis.com",null,"https://maps.google.com","https://gg.google.com","https://maps.gstatic.com/maps-api-v3/api/images/","https://www.google.com/maps",0,"https://www.google.com"],["https://maps.google.com/maps-api-v3/api/js/28/18","3.28.18"],[1566677190],1,null,null,null,null,null,"",null,null,0,"https://khm.googleapis.com/mz?v=722\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"https://mt.googleapis.com/maps/vt/icon",[["https://maps.google.com/maps/vt"],["https://maps.google.com/maps/vt"],null,null,null,null,null,null,null,null,null,null,["https://www.google.com/maps/vt"],"/maps/vt",379000000,379],2,500,[null,null,null,null,"https://www.google.com/maps/preview/log204","","https://static.panoramio.com.storage.googleapis.com/photos/",["https://geo0.ggpht.com/cbk","https://geo1.ggpht.com/cbk","https://geo2.ggpht.com/cbk","https://geo3.ggpht.com/cbk"],"https://maps.googleapis.com/maps/api/js/GeoPhotoService.GetMetadata","https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch", "https://maps.googleapis.com/maps/api/js?key=AIzaSyC3DS8cVrnxRdP8n1UXK6s-hSf708L9RDY&callback=initMap"["https://lh3.ggpht.com/","https://lh4.ggpht.com/","https://lh5.ggpht.com/","https://lh6.ggpht.com/"]],["https://www.google.com/maps/api/js/master?pb=!1m2!1u28!2s18!2sen-US!3sUS!4s28/18","https://www.google.com/maps/api/js/widget?pb=!1m2!1u28!2s18!2sen-US"],null,0,null,"/maps/api/js/ApplicationService.GetEntityDetails",0,null,null,[null,null,null,null,null,null,null,null,null,[0,0]],null,[],["28.18"]], loadScriptTime);
    

  var loadScriptTime = (new Date).getTime();

})();

// inlined

(function(_){var ta,va,Da,Pa,Qa,Va,Za,qb,wb,xb,yb,zb,Db,Eb,Hb,Kb,Gb,Ob,Tb,Vb,Yb,$b,ec,dc,fc,gc,mc,rc,Dc,Hc,Ic,Lc,Oc,Pc,Rc,Tc,Vc,Qc,Sc,Xc,$c,ad,bd,id,ud,zd,Cd,Ed,Ld,Nd,Rd,Td,Wd,ce,ee,de,je,le,me,ne,Ee,Fe,He,Ke,Me,Le,Ne,Se,Te,Ue,Xe,Ye,bf,cf,df,ef,hf,kf,lf,uf,vf,wf,xf,yf,zf,Af,Cf,Df,Mf,Qf,Vf,Xf,cg,dg,eg,jg,kg,lg,mg,ng,og,qg,rg,sg,tg,Ag,yg,Bg,Cg,Gg,Ng,Og,Sg,Tg,Wg,Xg,Yg,Zg,$g,za,ua,wa,ah,bh,ch,Ma,Na;_.aa="ERROR";_.ca="INVALID_REQUEST";_.da="MAX_DIMENSIONS_EXCEEDED";_.ea="MAX_ELEMENTS_EXCEEDED";_.fa="MAX_WAYPOINTS_EXCEEDED";

_.ga="NOT_FOUND";_.ha="OK";_.ia="OVER_QUERY_LIMIT";_.ja="REQUEST_DENIED";_.ka="UNKNOWN_ERROR";_.la="ZERO_RESULTS";_.ma=function(){return function(a){return a}};_.na=function(){return function(){}};_.oa=function(a){return function(b){this[a]=b}};_.pa=function(a){return function(){return this[a]}};_.qa=function(a){return function(){return a}};_.sa=function(a){return function(){return _.ra[a].apply(this,arguments)}};ta=function(){ta=_.na();ua.Symbol||(ua.Symbol=va)};

va=function(a){return"jscomp_symbol_"+(a||"")+wa++};_.Ba=function(){ta();var a=ua.Symbol.iterator;a||(a=ua.Symbol.iterator=ua.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&za(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return _.Aa(this)}});_.Ba=_.na()};_.Aa=function(a){var b=0;return Da(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};Da=function(a){(0,_.Ba)();a={next:a};a[ua.Symbol.iterator]=function(){return this};return a};

_.m=function(a){return void 0!==a};_.Ea=_.na();

_.Fa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";

else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.Ga=function(a){return"array"==_.Fa(a)};_.Ha=function(a){var b=_.Fa(a);return"array"==b||"object"==b&&"number"==typeof a.length};_.Ia=function(a){return"string"==typeof a};_.Ja=function(a){return"number"==typeof a};_.Ka=function(a){return"function"==_.Fa(a)};_.La=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};_.Oa=function(a){return a[Ma]||(a[Ma]=++Na)};

Pa=function(a,b,c){return a.call.apply(a.bind,arguments)};Qa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};_.p=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_.p=Pa:_.p=Qa;return _.p.apply(null,arguments)};_.Ra=function(){return+new Date};

_.t=function(a,b){function c(){}c.prototype=b.prototype;a.ib=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ie=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};_.Sa=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};_.Ua=function(){return-1!=_.Ta.toLowerCase().indexOf("webkit")};

_.Wa=function(a,b){var c=0;a=_.Sa(String(a)).split(".");b=_.Sa(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=Va(0==f[1].length?0:(0,window.parseInt)(f[1],10),0==g[1].length?0:(0,window.parseInt)(g[1],10))||Va(0==f[2].length,0==g[2].length)||Va(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c};

Va=function(a,b){return a<b?-1:a>b?1:0};_.Ya=function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(_.Ia(a))return _.Ia(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};_.v=function(a,b,c){for(var d=a.length,e=_.Ia(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};Za=function(a,b){for(var c=a.length,d=_.Ia(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return e;return-1};

_.ab=function(a,b){b=_.Ya(a,b);var c;(c=0<=b)&&_.$a(a,b);return c};_.$a=function(a,b){Array.prototype.splice.call(a,b,1)};_.bb=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};_.w=function(a){return a?a.length:0};_.db=function(a,b){_.cb(b,function(c){a[c]=b[c]})};_.eb=function(a){for(var b in a)return!1;return!0};_.fb=function(a,b,c){null!=b&&(a=Math.max(a,b));null!=c&&(a=Math.min(a,c));return a};

_.gb=function(a,b,c){c-=b;return((a-b)%c+c)%c+b};_.hb=function(a,b,c){return Math.abs(a-b)<=(c||1E-9)};_.ib=function(a,b){for(var c=[],d=_.w(a),e=0;e<d;++e)c.push(b(a[e],e));return c};_.kb=function(a,b){for(var c=_.jb(void 0,_.w(b)),d=_.jb(void 0,0);d<c;++d)a.push(b[d])};_.y=function(a){return"number"==typeof a};_.lb=function(a){return"object"==typeof a};_.jb=function(a,b){return null==a?b:a};_.mb=function(a){return"string"==typeof a};_.nb=function(a){return a===!!a};

_.cb=function(a,b){for(var c in a)b(c,a[c])};_.pb=function(a){return function(){var b=this,c=arguments;_.ob(function(){a.apply(b,c)})}};_.ob=function(a){return window.setTimeout(a,0)};qb=function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};_.rb=function(a){window.console&&window.console.error&&window.console.error(a)};_.sb=function(a){a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()};

_.tb=function(a){a.preventDefault&&_.m(a.defaultPrevented)?a.preventDefault():a.returnValue=!1};_.ub=function(a){a=a||window.event;_.sb(a);_.tb(a)};_.vb=function(a){a.handled=!0;_.m(a.bubbles)||(a.returnValue="handled")};wb=function(a,b){a.__e3_||(a.__e3_={});a=a.__e3_;a[b]||(a[b]={});return a[b]};xb=function(a,b){var c=a.__e3_||{};if(b)a=c[b]||{};else for(b in a={},c)_.db(a,c[b]);return a};yb=function(a,b){return function(c){return b.call(a,c,this)}};

zb=function(a,b,c){return function(d){var e=[b,a];_.kb(e,arguments);_.z.trigger.apply(this,e);c&&_.vb.apply(null,arguments)}};Db=function(a,b,c,d){this.f=a;this.b=b;this.j=c;this.l=null;this.m=d;this.id=++Ab;wb(a,b)[this.id]=this;Bb&&"tagName"in a&&(Cb[this.id]=this)};Eb=function(a){return a.l=function(b){b||(b=window.event);if(b&&!b.target)try{b.target=b.srcElement}catch(d){}var c=a.j.apply(a.f,[b]);return b&&"click"==b.type&&(b=b.srcElement)&&"A"==b.tagName&&"javascript:void(0)"==b.href?!1:c}};

_.Fb=function(a){return""+(_.La(a)?_.Oa(a):a)};_.E=_.na();Hb=function(a,b){var c=b+"_changed";if(a[c])a[c]();else a.changed(b);var c=Gb(a,b),d;for(d in c){var e=c[d];Hb(e.Ec,e.cb)}_.z.trigger(a,b.toLowerCase()+"_changed")};_.Jb=function(a){return Ib[a]||(Ib[a]=a.substr(0,1).toUpperCase()+a.substr(1))};Kb=function(a){a.gm_accessors_||(a.gm_accessors_={});return a.gm_accessors_};Gb=function(a,b){a.gm_bindings_||(a.gm_bindings_={});a.gm_bindings_.hasOwnProperty(b)||(a.gm_bindings_[b]={});return a.gm_bindings_[b]};

_.Lb=function(a){return-1!=_.Ta.indexOf(a)};_.Mb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};_.Nb=function(){return _.Lb("Trident")||_.Lb("MSIE")};_.Pb=function(){return _.Lb("Safari")&&!(Ob()||_.Lb("Coast")||_.Lb("Opera")||_.Lb("Edge")||_.Lb("Silk")||_.Lb("Android"))};Ob=function(){return(_.Lb("Chrome")||_.Lb("CriOS"))&&!_.Lb("Edge")};_.Qb=function(){return _.Lb("iPhone")&&!_.Lb("iPod")&&!_.Lb("iPad")};_.Rb=function(a){_.Rb[" "](a);return a};

Tb=function(a,b){var c=Sb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};Vb=function(){var a=_.Ub.document;return a?a.documentMode:void 0};_.Xb=function(a){return Tb(a,function(){return 0<=_.Wa(_.Wb,a)})};Yb=function(a,b,c){this.l=c;this.j=a;this.m=b;this.f=0;this.b=null};_.Zb=_.ma();$b=function(a){_.Ub.setTimeout(function(){throw a;},0)};

ec=function(){var a=_.ac.f,a=bc(a);!_.Ka(_.Ub.setImmediate)||_.Ub.Window&&_.Ub.Window.prototype&&!_.Lb("Edge")&&_.Ub.Window.prototype.setImmediate==_.Ub.setImmediate?(cc||(cc=dc()),cc(a)):_.Ub.setImmediate(a)};

dc=function(){var a=_.Ub.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!_.Lb("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=(0,_.p)(function(a){if(("*"==

d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!_.Nb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(_.m(c.next)){c=c.next;var a=c.og;c.og=null;a()}};return function(a){d.next={og:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");

b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};window.document.documentElement.appendChild(b)}:function(a){_.Ub.setTimeout(a,0)}};fc=function(){this.f=this.b=null};gc=function(){this.next=this.b=this.Bc=null};_.ac=function(a,b){_.ac.b||_.ac.m();_.ac.j||(_.ac.b(),_.ac.j=!0);_.ac.l.add(a,b)};_.hc=function(a){return a*Math.PI/180};_.lc=function(a){return 180*a/Math.PI};mc=function(a){this.message=a;this.name="InvalidValueError";this.stack=Error().stack};

_.nc=function(a,b){var c="";if(null!=b){if(!(b instanceof mc))return b;c=": "+b.message}return new mc(a+c)};_.oc=function(a){if(!(a instanceof mc))throw a;_.rb(a.name+": "+a.message)};

_.pc=function(a,b){var c=c?c+": ":"";return function(d){if(!d||!_.lb(d))throw _.nc(c+"not an Object");var e={},f;for(f in d)if(e[f]=d[f],!b&&!a[f])throw _.nc(c+"unknown property "+f);for(f in a)try{var g=a[f](e[f]);if(_.m(g)||Object.prototype.hasOwnProperty.call(d,f))e[f]=a[f](e[f])}catch(h){throw _.nc(c+"in property "+f,h);}return e}};rc=function(a){try{return!!a.cloneNode}catch(b){return!1}};

_.sc=function(a,b,c){return c?function(c){if(c instanceof a)return c;try{return new a(c)}catch(e){throw _.nc("when calling new "+b,e);}}:function(c){if(c instanceof a)return c;throw _.nc("not an instance of "+b);}};_.tc=function(a){return function(b){for(var c in a)if(a[c]==b)return b;throw _.nc(b);}};_.uc=function(a){return function(b){if(!_.Ga(b))throw _.nc("not an Array");return _.ib(b,function(b,d){try{return a(b)}catch(e){throw _.nc("at index "+d,e);}})}};

_.vc=function(a,b){return function(c){if(a(c))return c;throw _.nc(b||""+c);}};_.wc=function(a){return function(b){for(var c=[],d=0,e=a.length;d<e;++d){var f=a[d];try{(f.Lf||f)(b)}catch(g){if(!(g instanceof mc))throw g;c.push(g.message);continue}return(f.then||f)(b)}throw _.nc(c.join("; and "));}};_.xc=function(a,b){return function(c){return b(a(c))}};_.yc=function(a){return function(b){return null==b?b:a(b)}};

Dc=function(a){return function(b){if(b&&null!=b[a])return b;throw _.nc("no "+a+" property");}};_.F=function(a,b,c){if(a&&(void 0!==a.lat||void 0!==a.lng))try{Ec(a),b=a.lng,a=a.lat,c=!1}catch(d){_.oc(d)}a-=0;b-=0;c||(a=_.fb(a,-90,90),180!=b&&(b=_.gb(b,-180,180)));this.lat=function(){return a};this.lng=function(){return b}};_.Fc=function(a){return _.hc(a.lat())};_.Gc=function(a){return _.hc(a.lng())};Hc=function(a,b){b=Math.pow(10,b);return Math.round(a*b)/b};Ic=_.na();

_.Jc=function(a){try{if(a instanceof _.F)return a;a=Ec(a);return new _.F(a.lat,a.lng)}catch(b){throw _.nc("not a LatLng or LatLngLiteral",b);}};_.Kc=function(a){this.b=_.Jc(a)};Lc=function(a){if(a instanceof Ic)return a;try{return new _.Kc(_.Jc(a))}catch(b){}throw _.nc("not a Geometry or LatLng or LatLngLiteral object");};_.Mc=function(a,b){if(a)return function(){--a||b()};b();return _.Ea};

_.Nc=function(a,b,c){var d=a.getElementsByTagName("head")[0];a=a.createElement("script");a.type="text/javascript";a.charset="UTF-8";a.src=b;c&&(a.onerror=c);d.appendChild(a);return a};Oc=function(a){for(var b="",c=0,d=arguments.length;c<d;++c){var e=arguments[c];e.length&&"/"==e[0]?b=e:(b&&"/"!=b[b.length-1]&&(b+="/"),b+=e)}return b};Pc=function(a){this.j=window.document;this.b={};this.f=a};Rc=function(){this.l={};this.f={};this.m={};this.b={};this.j=new Qc};

Tc=function(a,b){a.l[b]||(a.l[b]=!0,Sc(a.j,function(c){for(var d=c.b[b],e=d?d.length:0,f=0;f<e;++f){var g=d[f];a.b[g]||Tc(a,g)}c=c.j;c.b[b]||_.Nc(c.j,Oc(c.f,b)+".js")}))};Vc=function(a,b){var c=Uc;this.j=a;this.b=c;a={};for(var d in c)for(var e=c[d],f=0,g=e.length;f<g;++f){var h=e[f];a[h]||(a[h]=[]);a[h].push(d)}this.l=a;this.f=b};Qc=function(){this.b=[]};Sc=function(a,b){a.f?b(a.f):a.b.push(b)};_.G=function(a,b,c){var d=Rc.b();a=""+a;d.b[a]?b(d.b[a]):((d.f[a]=d.f[a]||[]).push(b),c||Tc(d,a))};

_.Wc=function(a,b){Rc.b().b[""+a]=b};Xc=function(a,b,c){var d=[],e=_.Mc(a.length,function(){b.apply(null,d)});_.v(a,function(a,b){_.G(a,function(a){d[b]=a;e()},c)})};_.Yc=function(a){a=a||{};this.j=a.id;this.b=null;try{this.b=a.geometry?Lc(a.geometry):null}catch(b){_.oc(b)}this.f=a.properties||{}};_.J=function(a,b){this.x=a;this.y=b};$c=function(a){if(a instanceof _.J)return a;try{_.pc({x:_.Zc,y:_.Zc},!0)(a)}catch(b){throw _.nc("not a Point",b);}return new _.J(a.x,a.y)};

_.L=function(a,b,c,d){this.width=a;this.height=b;this.j=c||"px";this.f=d||"px"};ad=function(a){if(a instanceof _.L)return a;try{_.pc({height:_.Zc,width:_.Zc},!0)(a)}catch(b){throw _.nc("not a Size",b);}return new _.L(a.width,a.height)};bd=function(a,b){-180==a&&180!=b&&(a=180);-180==b&&180!=a&&(b=180);this.b=a;this.f=b};_.cd=function(a){return a.b>a.f};_.ed=function(a,b){return 1E-9>=Math.abs(b.b-a.b)%360+Math.abs(_.dd(b)-_.dd(a))};_.fd=function(a,b){var c=b-a;return 0<=c?c:b+180-(a-180)};

_.dd=function(a){return a.isEmpty()?0:_.cd(a)?360-(a.b-a.f):a.f-a.b};id=function(a,b){this.f=a;this.b=b};_.jd=function(a){return a.isEmpty()?0:a.b-a.f};_.kd=function(a,b){a=a&&_.Jc(a);b=b&&_.Jc(b);if(a){b=b||a;var c=_.fb(a.lat(),-90,90),d=_.fb(b.lat(),-90,90);this.f=new id(c,d);a=a.lng();b=b.lng();360<=b-a?this.b=new bd(-180,180):(a=_.gb(a,-180,180),b=_.gb(b,-180,180),this.b=new bd(a,b))}else this.f=new id(1,-1),this.b=new bd(180,-180)};

_.ld=function(a,b,c,d){return new _.kd(new _.F(a,b,!0),new _.F(c,d,!0))};_.nd=function(a){if(a instanceof _.kd)return a;try{return a=md(a),_.ld(a.south,a.west,a.north,a.east)}catch(b){throw _.nc("not a LatLngBounds or LatLngBoundsLiteral",b);}};_.od=function(a,b){this.f=a||0;this.j=b||0};_.pd=function(a){return function(){return this.get(a)}};_.qd=function(a,b){return b?function(c){try{this.set(a,b(c))}catch(d){_.oc(_.nc("set"+_.Jb(a),d))}}:function(b){this.set(a,b)}};

_.rd=function(a,b){_.cb(b,function(b,d){var c=_.pd(b);a["get"+_.Jb(b)]=c;d&&(d=_.qd(b,d),a["set"+_.Jb(b)]=d)})};_.vd=function(a){this.b=a||[];ud(this)};ud=function(a){a.set("length",a.b.length)};_.wd=function(a){this.j=a||_.Fb;this.f={}};_.xd=function(a,b){var c=a.f,d=a.j(b);c[d]||(c[d]=b,_.z.trigger(a,"insert",b),a.b&&a.b(b))};_.yd=_.oa("b");zd=function(a){this.P=[];this.b=a&&a.gd||_.Ea;this.f=a&&a.jd||_.Ea};

_.Bd=function(a,b,c,d){function e(){_.v(f,function(a){b.call(c||null,function(b){if(a.once){if(a.once.mg)return;a.once.mg=!0;_.ab(g.P,a);g.P.length||g.b()}a.Bc.call(a.context,b)})})}var f=a.P.slice(0),g=a;d&&d.sync?e():Ad(e)};Cd=function(a,b){return function(c){return c.Bc==a&&c.context==(b||null)}};_.Dd=function(){this.P=new zd({gd:(0,_.p)(this.gd,this),jd:(0,_.p)(this.jd,this)})};Ed=_.na();_.Fd=function(a,b){this.size=new Ed;this.b=a;this.heading=b};

_.Gd=function(a){this.J=this.I=window.Infinity;this.L=this.K=-window.Infinity;_.v(a||[],this.extend,this)};_.Hd=function(a,b,c,d){var e=new _.Gd;e.I=a;e.J=b;e.K=c;e.L=d;return e};_.Id=function(a,b,c){this.heading=a;this.pitch=_.fb(b,-90,90);this.zoom=Math.max(0,c)};_.Jd=function(){this.__gm=new _.E;this.l=null};_.Kd=function(){_.Dd.call(this)};_.Md=function(a){return new Ld(a)};Ld=function(a){_.Dd.call(this);this.b=a};Nd=_.na();

Rd=function(a){var b=a;if(a instanceof Array)b=Array(a.length),_.Od(b,a);else if(a instanceof Object){var c=b={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=Rd(a[d]))}return b};_.Od=function(a,b){for(var c=0;c<b.length;++c)b.hasOwnProperty(c)&&(a[c]=Rd(b[c]))};_.Sd=function(a,b){a[b]||(a[b]=[]);return a[b]};

_.Ud=function(a,b){if(null==a||null==b)return null==a==(null==b);if(a.constructor!=Array&&a.constructor!=Object)throw Error("Invalid object type passed into jsproto.areObjectsEqual()");if(a===b)return!0;if(a.constructor!=b.constructor)return!1;for(var c in a)if(!(c in b&&Td(a[c],b[c])))return!1;for(var d in b)if(!(d in a))return!1;return!0};

Td=function(a,b){if(a===b||!(!0!==a&&1!==a||!0!==b&&1!==b)||!(!1!==a&&0!==a||!1!==b&&0!==b))return!0;if(a instanceof Object&&b instanceof Object){if(!_.Ud(a,b))return!1}else return!1;return!0};_.Vd=function(a,b,c,d){this.type=a;this.label=b;this.sk=c;this.zc=d};Wd=function(a){switch(a){case "d":case "f":case "i":case "j":case "u":case "v":case "x":case "y":case "g":case "h":case "n":case "o":case "e":return 0;case "s":case "z":case "B":return"";case "b":return!1;default:return null}};

_.Xd=function(a,b,c){return new _.Vd(a,1,_.m(b)?b:Wd(a),c)};_.Yd=function(a,b,c){return new _.Vd(a,2,_.m(b)?b:Wd(a),c)};_.Zd=function(a){return _.Xd("i",a)};_.$d=function(a){return _.Xd("v",a)};_.ae=function(a){return _.Xd("b",a)};_.be=function(a){return _.Xd("e",a)};_.M=function(a,b){return _.Xd("m",a,b)};ce=_.na();ee=function(a,b,c){for(var d=1;d<b.A.length;++d){var e=b.A[d],f=a[d+b.b];if(e&&null!=f)if(3==e.label)for(var g=0;g<f.length;++g)de(f[g],d,e,c);else de(f,d,e,c)}};

de=function(a,b,c,d){if("m"==c.type){var e=d.length;ee(a,c.zc,d);d.splice(e,0,[b,"m",d.length-e].join(""))}else"b"==c.type&&(a=a?"1":"0"),d.push([b,c.type,(0,window.encodeURIComponent)(a)].join(""))};_.N=function(a){this.data=a||[]};_.fe=function(a,b,c){a=a.data[b];return null!=a?a:c};_.O=function(a,b,c){return _.fe(a,b,c||0)};_.P=function(a,b,c){return _.fe(a,b,c||"")};_.Q=function(a,b){var c=a.data[b];c||(c=a.data[b]=[]);return c};_.ge=function(a,b){return _.Sd(a.data,b)};

_.he=function(a,b,c){return _.ge(a,b)[c]};_.ie=function(a,b){return a.data[b]?a.data[b].length:0};je=_.na();_.ke=_.oa("__gm");le=function(){this.b={};this.j={};this.f={}};me=function(){this.b={}};ne=function(a){this.b=new me;var b=this;_.z.addListenerOnce(a,"addfeature",function(){_.G("data",function(c){c.b(b,a,b.b)})})};_.se=function(a){this.b=[];try{this.b=re(a)}catch(b){_.oc(b)}};_.ue=function(a){this.b=(0,_.te)(a)};_.we=function(a){this.b=ve(a)};_.xe=function(a){this.b=(0,_.te)(a)};

_.ye=function(a){this.b=(0,_.te)(a)};_.Ae=function(a){this.b=ze(a)};_.Ce=function(a){this.b=Be(a)};Ee=function(a){var b=De,c=Rc.b().j;a=c.f=new Vc(new Pc(a),b);for(var b=0,d=c.b.length;b<d;++b)c.b[b](a);c.b.length=0};Fe=function(a){a=a||{};a.clickable=_.jb(a.clickable,!0);a.visible=_.jb(a.visible,!0);this.setValues(a);_.G("marker",_.Ea)};_.Ge=function(a){this.__gm={set:null,Kd:null,Hb:{map:null,ae:null}};Fe.call(this,a)};He=function(a){a=a||{};a.visible=_.jb(a.visible,!0);return a};

_.Ie=function(a){return a&&a.radius||6378137};Ke=function(a){return a instanceof _.vd?Je(a):new _.vd((0,_.te)(a))};Me=function(a){if(_.Ga(a)||a instanceof _.vd)if(0==_.w(a))var b=!0;else b=a instanceof _.vd?a.getAt(0):a[0],b=_.Ga(b)||b instanceof _.vd;else b=!1;return b?a instanceof _.vd?Le(Je)(a):new _.vd(_.uc(Ke)(a)):new _.vd([Ke(a)])};

Le=function(a){return function(b){if(!(b instanceof _.vd))throw _.nc("not an MVCArray");b.forEach(function(b,d){try{a(b)}catch(e){throw _.nc("at index "+d,e);}});return b}};Ne=function(a){this.set("latLngs",new _.vd([new _.vd]));this.setValues(He(a));_.G("poly",_.Ea)};_.Oe=function(a){Ne.call(this,a)};_.Pe=function(a){Ne.call(this,a)};

_.Qe=function(a,b,c){function d(a){if(!a)throw _.nc("not a Feature");if("Feature"!=a.type)throw _.nc('type != "Feature"');var b=a.geometry;try{b=null==b?null:e(b)}catch(K){throw _.nc('in property "geometry"',K);}var d=a.properties||{};if(!_.lb(d))throw _.nc("properties is not an Object");var f=c.idPropertyName;a=f?d[f]:a.id;if(null!=a&&!_.y(a)&&!_.mb(a))throw _.nc((f||"id")+" is not a string or number");return{id:a,geometry:b,properties:d}}function e(a){if(null==a)throw _.nc("is null");var b=(a.type+

"").toLowerCase(),c=a.coordinates;try{switch(b){case "point":return new _.Kc(h(c));case "multipoint":return new _.xe(n(c));case "linestring":return g(c);case "multilinestring":return new _.we(q(c));case "polygon":return f(c);case "multipolygon":return new _.Ce(u(c))}}catch(H){throw _.nc('in property "coordinates"',H);}if("geometrycollection"==b)try{return new _.se(B(a.geometries))}catch(H){throw _.nc('in property "geometries"',H);}throw _.nc("invalid type");}function f(a){return new _.Ae(r(a))}function g(a){return new _.ue(n(a))}

function h(a){a=l(a);return _.Jc({lat:a[1],lng:a[0]})}if(!b)return[];c=c||{};var l=_.uc(_.Zc),n=_.uc(h),q=_.uc(g),r=_.uc(function(a){a=n(a);if(!a.length)throw _.nc("contains no elements");if(!a[0].b(a[a.length-1]))throw _.nc("first and last positions are not equal");return new _.ye(a.slice(0,-1))}),u=_.uc(f),B=_.uc(e),x=_.uc(d);if("FeatureCollection"==b.type){b=b.features;try{return _.ib(x(b),function(b){return a.add(b)})}catch(A){throw _.nc('in property "features"',A);}}if("Feature"==b.type)return[a.add(d(b))];

throw _.nc("not a Feature or FeatureCollection");};Se=function(a){var b=this;a=a||{};this.setValues(a);this.b=new le;_.z.forward(this.b,"addfeature",this);_.z.forward(this.b,"removefeature",this);_.z.forward(this.b,"setgeometry",this);_.z.forward(this.b,"setproperty",this);_.z.forward(this.b,"removeproperty",this);this.f=new ne(this.b);this.f.bindTo("map",this);this.f.bindTo("style",this);_.v(_.Re,function(a){_.z.forward(b.f,a,b)});this.j=!1};Te=function(a){a.j||(a.j=!0,_.G("drawing_impl",function(b){b.nl(a)}))};

Ue=function(a){if(!a)return null;if(_.Ia(a)){var b=window.document.createElement("div");b.style.overflow="auto";b.innerHTML=a}else 3==a.nodeType?(b=window.document.createElement("div"),b.appendChild(a)):b=a;return b};

Xe=function(a,b){this.b=a;this.f=b;a.addListener("map_changed",(0,_.p)(this.jm,this));this.bindTo("map",a);this.bindTo("disableAutoPan",a);this.bindTo("maxWidth",a);this.bindTo("position",a);this.bindTo("zIndex",a);this.bindTo("internalAnchor",a,"anchor");this.bindTo("internalContent",a,"content");this.bindTo("internalPixelOffset",a,"pixelOffset")};Ye=function(a,b,c,d){c?a.bindTo(b,c,d):(a.unbind(b),a.set(b,void 0))};

_.Ze=function(a){function b(){e||(e=!0,_.G("infowindow",function(a){a.Rj(d)}))}window.setTimeout(function(){_.G("infowindow",_.Ea)},100);a=a||{};var c=!!a.b;delete a.b;var d=new Xe(this,c),e=!1;_.z.addListenerOnce(this,"anchor_changed",b);_.z.addListenerOnce(this,"map_changed",b);this.setValues(a)};_.af=function(a){_.$e&&a&&_.$e.push(a)};bf=function(a){this.setValues(a)};cf=_.na();df=_.na();ef=_.na();_.ff=function(){_.G("geocoder",_.Ea)};

_.gf=function(a,b,c){this.H=null;this.set("url",a);this.set("bounds",_.yc(_.nd)(b));this.setValues(c)};hf=function(a,b){_.mb(a)?(this.set("url",a),this.setValues(b)):this.setValues(a)};_.jf=function(){var a=this;_.G("layers",function(b){b.b(a)})};kf=function(a){this.setValues(a);var b=this;_.G("layers",function(a){a.f(b)})};lf=function(){var a=this;_.G("layers",function(b){b.j(a)})};_.mf=function(){this.b=""};_.nf=function(a){var b=new _.mf;b.b=a;return b};

_.pf=function(){this.Ye="";this.jj=_.of;this.b=null};_.qf=function(a,b){var c=new _.pf;c.Ye=a;c.b=b;return c};_.rf=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};_.sf=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)};_.tf=_.na();uf=function(a,b,c,d,e){this.b=!!b;this.node=null;this.f=0;this.j=!1;this.l=!c;a&&this.setPosition(a,d);this.depth=void 0!=e?e:this.f||0;this.b&&(this.depth*=-1)};vf=function(a,b,c,d){uf.call(this,a,b,c,null,d)};

wf=function(a){this.data=a||[]};xf=function(a){this.data=a||[]};yf=function(a){this.data=a||[]};zf=function(a){this.data=a||[]};Af=function(a){this.data=a||[]};_.Bf=function(a){this.data=a||[]};Cf=function(a){this.data=a||[]};Df=function(a){this.data=a||[]};Mf=function(a){this.data=a||[]};_.Nf=function(a){return _.P(a,0)};_.Of=function(a){return _.P(a,1)};_.Pf=function(a){return new Af(a.data[2])};

Qf=function(a,b,c,d,e){var f=_.P(_.Pf(_.R),7);this.b=a;this.f=d;this.j=_.m(e)?e:_.Ra();var g=f+"/csi?v=2&s=mapsapi3&v3v="+_.P(new Mf(_.R.data[36]),0)+"&action="+a;_.Mb(c,function(a,b){g+="&"+(0,window.encodeURIComponent)(b)+"="+(0,window.encodeURIComponent)(a)});b&&(g+="&e="+b);this.l=g};_.Sf=function(a,b){var c={};c[b]=void 0;_.Rf(a,c)};

_.Rf=function(a,b){var c="";_.Mb(b,function(a,b){var d=(null!=a?a:_.Ra())-this.j;c&&(c+=",");c+=b+"."+Math.round(d);null==a&&window.performance&&window.performance.mark&&window.performance.mark("mapsapi:"+this.b+":"+b)},a);b=a.l+"&rt="+c;a.f.createElement("img").src=b;(a=_.Ub.__gm_captureCSI)&&a(b)};

_.Tf=function(a,b){b=b||{};var c=b.Dm||{},d=_.ge(_.R,12).join(",");d&&(c.libraries=d);var d=_.P(_.R,6),e=new wf(_.R.data[33]),f=[];d&&f.push(d);_.v(e.data,function(a,b){a&&_.v(a,function(a,c){null!=a&&f.push(b+1+"_"+(c+1)+"_"+a)})});b.Gk&&(f=f.concat(b.Gk));return new Qf(a,f.join(","),c,b.document||window.document,b.startTime)};Vf=function(){this.f=_.Tf("apiboot2",{startTime:_.Uf});_.Sf(this.f,"main");this.b=!1};Xf=function(){var a=Wf;a.b||(a.b=!0,_.Sf(a.f,"firstmap"))};

_.Yf=function(){this.b=new _.J(128,128);this.j=256/360;this.l=256/(2*Math.PI);this.f=!0};_.Zf=function(a,b,c){if(a=a.fromLatLngToPoint(b))c=Math.pow(2,c),a.x*=c,a.y*=c;return a};_.$f=function(a,b){var c=a.lat()+_.lc(b);90<c&&(c=90);var d=a.lat()-_.lc(b);-90>d&&(d=-90);b=Math.sin(b);var e=Math.cos(_.hc(a.lat()));if(90==c||-90==d||1E-6>e)return new _.kd(new _.F(d,-180),new _.F(c,180));b=_.lc(Math.asin(b/e));return new _.kd(new _.F(d,a.lng()-b),new _.F(c,a.lng()+b))};

cg=function(a,b){_.Jd.call(this);_.af(a);this.__gm=new _.E;this.f=null;b&&b.client&&(this.f=_.ag[b.client]||null);var c=this.controls=[];_.cb(_.bg,function(a,b){c[b]=new _.vd});this.j=!0;this.b=a;this.m=!1;this.__gm.ea=b&&b.ea||new _.wd;this.set("standAlone",!0);this.setPov(new _.Id(0,0,1));b&&b.ld&&!_.y(b.ld.zoom)&&(b.ld.zoom=_.y(b.zoom)?b.zoom:1);this.setValues(b);void 0==this.getVisible()&&this.setVisible(!0);_.z.addListenerOnce(this,"pano_changed",_.pb(function(){_.G("marker",(0,_.p)(function(a){a.b(this.__gm.ea,

this)},this))}))};dg=function(){this.l=[];this.j=this.b=this.f=null};eg=function(a,b,c){this.R=b;this.b=_.Md(new _.yd([]));this.B=new _.wd;new _.vd;this.D=new _.wd;this.F=new _.wd;this.l=new _.wd;var d=this.ea=new _.wd;d.b=function(){delete d.b;_.G("marker",_.pb(function(b){b.b(d,a)}))};this.j=new cg(c,{visible:!1,enableCloseButton:!0,ea:d});this.j.bindTo("reportErrorControl",a);this.j.j=!1;this.f=new dg;this.overlayLayer=null};_.fg=function(){this.P=new zd};

_.gg=function(a){this.mi=a||0;_.z.bind(this,"forceredraw",this,this.C)};_.hg=function(a,b){a=a.style;a.width=b.width+b.j;a.height=b.height+b.f};_.ig=function(a){return new _.L(a.offsetWidth,a.offsetHeight)};jg=function(a){this.data=a||[]};kg=function(a){this.data=a||[]};lg=function(a){this.data=a||[]};mg=function(a){this.data=a||[]};ng=function(a){this.data=a||[]};

og=function(a,b,c,d,e){_.gg.call(this);this.G=b;this.F=new _.Yf;this.O=c+"/maps/api/js/StaticMapService.GetMapImage";this.b=this.f=null;this.B=d;this.j=e?new Ld(null):null;this.l=null;this.m=!1;this.set("div",a);this.set("loading",!0)};qg=function(a){var b=a.get("tilt")||_.w(a.get("styles"));a=a.get("mapTypeId");return b?null:pg[a]};rg=function(a){a.parentNode&&a.parentNode.removeChild(a)};

sg=function(a,b){var c=a.b;c.onload=null;c.onerror=null;var d=a.get("size");d&&(b&&(c.parentNode||a.f.appendChild(c),a.j||_.hg(c,d),_.z.trigger(a,"staticmaploaded"),a.B.set(_.Ra())),a.set("loading",!1))};tg=function(a,b){var c=a.b;b!=c.src?(a.j||rg(c),c.onload=function(){sg(a,!0)},c.onerror=function(){sg(a,!1)},c.src=b):!c.parentNode&&b&&a.f.appendChild(c)};_.vg=function(a){for(var b;b=a.firstChild;)_.ug(b),a.removeChild(b)};

_.ug=function(a){a=new vf(a);try{for(;;)_.z.clearInstanceListeners(a.next())}catch(b){if(b!==_.wg)throw b;}};

Ag=function(a,b){var c=_.Ra();Wf&&Xf();var d=new _.fg,e=b||{};e.noClear||_.vg(a);var f="undefined"==typeof window.document?null:window.document.createElement("div");f&&a.appendChild&&(a.appendChild(f),f.style.width=f.style.height="100%");_.ke.call(this,new eg(this,a,f));_.m(e.mapTypeId)||(e.mapTypeId="roadmap");this.setValues(e);this.U=_.xg[15]&&e.noControlsOrLogging;this.mapTypes=new je;this.features=new _.E;_.af(f);this.notify("streetView");a=_.ig(f);var g=null;_.R&&yg(e.useStaticMap,a)&&(g=new og(f,

_.zg,_.P(_.Pf(_.R),9),new Ld(null),!1),_.z.forward(g,"staticmaploaded",this),g.set("size",a),g.bindTo("center",this),g.bindTo("zoom",this),g.bindTo("mapTypeId",this),g.bindTo("styles",this));this.overlayMapTypes=new _.vd;var h=this.controls=[];_.cb(_.bg,function(a,b){h[b]=new _.vd});var l=this,n=!0;_.G("map",function(a){l.getDiv()&&f&&a.f(l,e,f,g,n,c,d)});n=!1;this.data=new Se({map:this})};yg=function(a,b){if(_.m(a))return!!a;a=b.width;b=b.height;return 384E3>=a*b&&800>=a&&800>=b};

Bg=function(){_.G("maxzoom",_.Ea)};Cg=function(a,b){!a||_.mb(a)||_.y(a)?(this.set("tableId",a),this.setValues(b)):this.setValues(a)};_.Dg=_.na();_.Eg=function(a){this.setValues(He(a));_.G("poly",_.Ea)};_.Fg=function(a){this.setValues(He(a));_.G("poly",_.Ea)};Gg=function(){this.b=null};_.Hg=function(){this.b=null};

_.Mg=function(a){var b=this;this.tileSize=a.tileSize||new _.L(256,256);this.name=a.name;this.alt=a.alt;this.minZoom=a.minZoom;this.maxZoom=a.maxZoom;this.j=(0,_.p)(a.getTileUrl,a);this.b=new _.wd;this.f=null;this.set("opacity",a.opacity);_.G("map",function(a){var c=b.f=a.b,e=b.tileSize||new _.L(256,256);b.b.forEach(function(a){var d=a.__gmimt,f=d.W,l=d.zoom,n=b.j(f,l);d.Kb=c({ca:f.x,ba:f.y,da:l},e,a,n,function(){return _.z.trigger(a,"load")})})})};

Ng=function(a,b){null!=a.style.opacity?a.style.opacity=b:a.style.filter=b&&"alpha(opacity="+Math.round(100*b)+")"};Og=function(a){a=a.get("opacity");return"number"==typeof a?a:1};_.Pg=function(){_.Pg.Ie(this,"constructor")};_.Qg=function(a,b){_.Qg.Ie(this,"constructor");this.set("styles",a);a=b||{};this.f=a.baseMapTypeId||"roadmap";this.minZoom=a.minZoom;this.maxZoom=a.maxZoom||20;this.name=a.name;this.alt=a.alt;this.projection=null;this.tileSize=new _.L(256,256)};

_.Rg=function(a,b){_.vc(rc,"container is not a Node")(a);this.setValues(b);_.G("controls",(0,_.p)(function(b){b.Cl(this,a)},this))};Sg=_.oa("b");Tg=function(a,b,c){for(var d=Array(b.length),e=0,f=b.length;e<f;++e)d[e]=b.charCodeAt(e);d.unshift(c);a=a.b;c=b=0;for(e=d.length;c<e;++c)b*=1729,b+=d[c],b%=a;return b};

Wg=function(){var a=_.O(new Cf(_.R.data[4]),0),b=new Sg(131071),c=(0,window.unescape)("%26%74%6F%6B%65%6E%3D");return function(d){d=d.replace(Ug,"%27");var e=d+c;Vg||(Vg=/(?:https?:\/\/[^/]+)?(.*)/);d=Vg.exec(d);return e+Tg(b,d&&d[1],a)}};Xg=function(){var a=new Sg(2147483647);return function(b){return Tg(a,b,0)}};Yg=function(a){for(var b=a.split("."),c=window,d=window,e=0;e<b.length;e++)if(d=c,c=c[b[e]],!c)throw _.nc(a+" is not a function");return function(){c.apply(d)}};

Zg=function(){for(var a in Object.prototype)window.console&&window.console.error("This site adds property <"+a+"> to Object.prototype. Extending Object.prototype breaks JavaScript for..in loops, which are used heavily in Google Maps API v3.")};$g=function(a){(a="version"in a)&&window.console&&window.console.error("You have included the Google Maps API multiple times on this page. This may cause unexpected errors.");return a};_.ra=[];

za="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};ua="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;wa=0;ah=ua;bh=["Array","prototype","fill"];ch=0;for(;ch<bh.length-1;ch++){var dh=bh[ch];dh in ah||(ah[dh]={});ah=ah[dh]}

var eh=bh[bh.length-1],fh=ah[eh],gh=fh?fh:function(a,b,c){var d=this.length||0;0>b&&(b=Math.max(0,d+b));if(null==c||c>d)c=d;c=Number(c);0>c&&(c=Math.max(0,d+c));for(b=Number(b||0);b<c;b++)this[b]=a;return this};gh!=fh&&null!=gh&&za(ah,eh,{configurable:!0,writable:!0,value:gh});_.Ub=this;Ma="closure_uid_"+(1E9*Math.random()>>>0);Na=0;var Bb,Cb;_.z={};Bb="undefined"!=typeof window.navigator&&-1!=window.navigator.userAgent.toLowerCase().indexOf("msie");Cb={};_.z.addListener=function(a,b,c){return new Db(a,b,c,0)};_.z.hasListeners=function(a,b){b=(a=a.__e3_)&&a[b];return!!b&&!_.eb(b)};_.z.removeListener=function(a){a&&a.remove()};_.z.clearListeners=function(a,b){_.cb(xb(a,b),function(a,b){b&&b.remove()})};_.z.clearInstanceListeners=function(a){_.cb(xb(a),function(a,c){c&&c.remove()})};

_.z.trigger=function(a,b,c){if(_.z.hasListeners(a,b)){var d=_.bb(arguments,2),e=xb(a,b),f;for(f in e){var g=e[f];g&&g.j.apply(g.f,d)}}};_.z.addDomListener=function(a,b,c,d){if(a.addEventListener){var e=d?4:1;a.addEventListener(b,c,d);c=new Db(a,b,c,e)}else a.attachEvent?(c=new Db(a,b,c,2),a.attachEvent("on"+b,Eb(c))):(a["on"+b]=c,c=new Db(a,b,c,3));return c};_.z.addDomListenerOnce=function(a,b,c,d){var e=_.z.addDomListener(a,b,function(){e.remove();return c.apply(this,arguments)},d);return e};

_.z.T=function(a,b,c,d){return _.z.addDomListener(a,b,yb(c,d))};_.z.bind=function(a,b,c,d){return _.z.addListener(a,b,(0,_.p)(d,c))};_.z.addListenerOnce=function(a,b,c){var d=_.z.addListener(a,b,function(){d.remove();return c.apply(this,arguments)});return d};_.z.forward=function(a,b,c){return _.z.addListener(a,b,zb(b,c))};_.z.Ka=function(a,b,c,d){return _.z.addDomListener(a,b,zb(b,c,!d))};_.z.Zh=function(){var a=Cb,b;for(b in a)a[b].remove();Cb={};(a=_.Ub.CollectGarbage)&&a()};

_.z.Rm=function(){Bb&&_.z.addDomListener(window,"unload",_.z.Zh)};var Ab=0;Db.prototype.remove=function(){if(this.f){switch(this.m){case 1:this.f.removeEventListener(this.b,this.j,!1);break;case 4:this.f.removeEventListener(this.b,this.j,!0);break;case 2:this.f.detachEvent("on"+this.b,this.l);break;case 3:this.f["on"+this.b]=null}delete wb(this.f,this.b)[this.id];this.l=this.j=this.f=null;delete Cb[this.id]}};_.k=_.E.prototype;_.k.get=function(a){var b=Kb(this);a+="";b=qb(b,a);if(_.m(b)){if(b){a=b.cb;var b=b.Ec,c="get"+_.Jb(a);return b[c]?b[c]():b.get(a)}return this[a]}};_.k.set=function(a,b){var c=Kb(this);a+="";var d=qb(c,a);if(d)if(a=d.cb,d=d.Ec,c="set"+_.Jb(a),d[c])d[c](b);else d.set(a,b);else this[a]=b,c[a]=null,Hb(this,a)};_.k.notify=function(a){var b=Kb(this);a+="";(b=qb(b,a))?b.Ec.notify(b.cb):Hb(this,a)};

_.k.setValues=function(a){for(var b in a){var c=a[b],d="set"+_.Jb(b);if(this[d])this[d](c);else this.set(b,c)}};_.k.setOptions=_.E.prototype.setValues;_.k.changed=_.na();var Ib={};_.E.prototype.bindTo=function(a,b,c,d){a+="";c=(c||a)+"";this.unbind(a);var e={Ec:this,cb:a},f={Ec:b,cb:c,kg:e};Kb(this)[a]=f;Gb(b,c)[_.Fb(e)]=e;d||Hb(this,a)};_.E.prototype.unbind=function(a){var b=Kb(this),c=b[a];c&&(c.kg&&delete Gb(c.Ec,c.cb)[_.Fb(c.kg)],this[a]=this.get(a),b[a]=null)};

_.E.prototype.unbindAll=function(){var a=(0,_.p)(this.unbind,this),b=Kb(this),c;for(c in b)a(c)};_.E.prototype.addListener=function(a,b){return _.z.addListener(this,a,b)};_.hh={ROADMAP:"roadmap",SATELLITE:"satellite",HYBRID:"hybrid",TERRAIN:"terrain"};_.bg={TOP_LEFT:1,TOP_CENTER:2,TOP:2,TOP_RIGHT:3,LEFT_CENTER:4,LEFT_TOP:5,LEFT:5,LEFT_BOTTOM:6,RIGHT_TOP:7,RIGHT:7,RIGHT_CENTER:8,RIGHT_BOTTOM:9,BOTTOM_LEFT:10,BOTTOM_CENTER:11,BOTTOM:11,BOTTOM_RIGHT:12,CENTER:13};a:{var ih=_.Ub.navigator;if(ih){var jh=ih.userAgent;if(jh){_.Ta=jh;break a}}_.Ta=""};_.Rb[" "]=_.Ea;var wh,Sb;_.kh=_.Lb("Opera");_.lh=_.Nb();_.mh=_.Lb("Edge");_.nh=_.Lb("Gecko")&&!(_.Ua()&&!_.Lb("Edge"))&&!(_.Lb("Trident")||_.Lb("MSIE"))&&!_.Lb("Edge");_.oh=_.Ua()&&!_.Lb("Edge");_.ph=_.Lb("Macintosh");_.qh=_.Lb("Windows");_.rh=_.Lb("Linux")||_.Lb("CrOS");_.sh=_.Lb("Android");_.th=_.Qb();_.uh=_.Lb("iPad");_.vh=_.Lb("iPod");

a:{var xh="",yh=function(){var a=_.Ta;if(_.nh)return/rv\:([^\);]+)(\)|;)/.exec(a);if(_.mh)return/Edge\/([\d\.]+)/.exec(a);if(_.lh)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.oh)return/WebKit\/(\S+)/.exec(a);if(_.kh)return/(?:Version)[ \/]?(\S+)/.exec(a)}();yh&&(xh=yh?yh[1]:"");if(_.lh){var zh=Vb();if(null!=zh&&zh>(0,window.parseFloat)(xh)){wh=String(zh);break a}}wh=xh}_.Wb=wh;Sb={};var Bh=_.Ub.document;_.Ah=Bh&&_.lh?Vb()||("CSS1Compat"==Bh.compatMode?(0,window.parseInt)(_.Wb,10):5):void 0;_.Ch=_.Lb("Firefox");_.Dh=_.Qb()||_.Lb("iPod");_.Eh=_.Lb("iPad");_.Fh=_.Lb("Android")&&!(Ob()||_.Lb("Firefox")||_.Lb("Opera")||_.Lb("Silk"));_.Gh=Ob();_.Hh=_.Pb()&&!(_.Qb()||_.Lb("iPad")||_.Lb("iPod"));Yb.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.j();return a};var Ih=function(a){return function(){return a}}(null);var cc,bc=_.Zb;var Jh=new Yb(function(){return new gc},function(a){a.reset()},100);fc.prototype.add=function(a,b){var c=Jh.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};fc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};gc.prototype.set=function(a,b){this.Bc=a;this.b=b;this.next=null};gc.prototype.reset=function(){this.next=this.b=this.Bc=null};_.ac.m=function(){if(-1!=String(_.Ub.Promise).indexOf("[native code]")){var a=_.Ub.Promise.resolve(void 0);_.ac.b=function(){a.then(_.ac.f)}}else _.ac.b=function(){ec()}};_.ac.B=function(a){_.ac.b=function(){ec();a&&a(_.ac.f)}};_.ac.j=!1;_.ac.l=new fc;_.ac.f=function(){for(var a;a=_.ac.l.remove();){try{a.Bc.call(a.b)}catch(c){$b(c)}var b=Jh;b.m(a);b.f<b.l&&(b.f++,a.next=b.b,b.b=a)}_.ac.j=!1};_.t(mc,Error);var Kh,Mh;_.Zc=_.vc(_.y,"not a number");Kh=_.xc(_.Zc,function(a){if((0,window.isNaN)(a))throw _.nc("NaN is not an accepted value");return a});_.Lh=_.vc(_.mb,"not a string");Mh=_.vc(_.nb,"not a boolean");_.Nh=_.yc(_.Zc);_.Oh=_.yc(_.Lh);_.Ph=_.yc(Mh);var Ec=_.pc({lat:_.Zc,lng:_.Zc},!0);_.F.prototype.toString=function(){return"("+this.lat()+", "+this.lng()+")"};_.F.prototype.toJSON=function(){return{lat:this.lat(),lng:this.lng()}};_.F.prototype.b=function(a){return a?_.hb(this.lat(),a.lat())&&_.hb(this.lng(),a.lng()):!1};_.F.prototype.equals=_.F.prototype.b;_.F.prototype.toUrlValue=function(a){a=_.m(a)?a:6;return Hc(this.lat(),a)+","+Hc(this.lng(),a)};_.te=_.uc(_.Jc);_.t(_.Kc,Ic);_.Kc.prototype.getType=_.qa("Point");_.Kc.prototype.forEachLatLng=function(a){a(this.b)};_.Kc.prototype.get=_.pa("b");var re=_.uc(Lc);Rc.f=void 0;Rc.b=function(){return Rc.f?Rc.f:Rc.f=new Rc};Rc.prototype.eb=function(a,b){var c=this,d=c.m;Sc(c.j,function(e){for(var f=e.b[a]||[],g=e.l[a]||[],h=d[a]=_.Mc(f.length,function(){delete d[a];b(e.f);for(var f=c.f[a],h=f?f.length:0,l=0;l<h;++l)f[l](c.b[a]);delete c.f[a];l=0;for(f=g.length;l<f;++l)h=g[l],d[h]&&d[h]()}),l=0,n=f.length;l<n;++l)c.b[f[l]]&&h()})};_.k=_.Yc.prototype;_.k.getId=_.pa("j");_.k.getGeometry=_.pa("b");_.k.setGeometry=function(a){var b=this.b;try{this.b=a?Lc(a):null}catch(c){_.oc(c);return}_.z.trigger(this,"setgeometry",{feature:this,newGeometry:this.b,oldGeometry:b})};_.k.getProperty=function(a){return qb(this.f,a)};_.k.setProperty=function(a,b){if(void 0===b)this.removeProperty(a);else{var c=this.getProperty(a);this.f[a]=b;_.z.trigger(this,"setproperty",{feature:this,name:a,newValue:b,oldValue:c})}};

_.k.removeProperty=function(a){var b=this.getProperty(a);delete this.f[a];_.z.trigger(this,"removeproperty",{feature:this,name:a,oldValue:b})};_.k.forEachProperty=function(a){for(var b in this.f)a(this.getProperty(b),b)};_.k.toGeoJson=function(a){var b=this;_.G("data",function(c){c.f(b,a)})};var Qh={mo:"Point",ko:"LineString",POLYGON:"Polygon"};_.Rh=new _.J(0,0);_.J.prototype.toString=function(){return"("+this.x+", "+this.y+")"};_.J.prototype.b=function(a){return a?a.x==this.x&&a.y==this.y:!1};_.J.prototype.equals=_.J.prototype.b;_.J.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y)};_.J.prototype.Nd=_.sa(0);_.Sh=new _.L(0,0);_.L.prototype.toString=function(){return"("+this.width+", "+this.height+")"};_.L.prototype.b=function(a){return a?a.width==this.width&&a.height==this.height:!1};_.L.prototype.equals=_.L.prototype.b;var Th={CIRCLE:0,FORWARD_CLOSED_ARROW:1,FORWARD_OPEN_ARROW:2,BACKWARD_CLOSED_ARROW:3,BACKWARD_OPEN_ARROW:4};_.k=bd.prototype;_.k.isEmpty=function(){return 360==this.b-this.f};_.k.intersects=function(a){var b=this.b,c=this.f;return this.isEmpty()||a.isEmpty()?!1:_.cd(this)?_.cd(a)||a.b<=this.f||a.f>=b:_.cd(a)?a.b<=c||a.f>=b:a.b<=c&&a.f>=b};_.k.contains=function(a){-180==a&&(a=180);var b=this.b,c=this.f;return _.cd(this)?(a>=b||a<=c)&&!this.isEmpty():a>=b&&a<=c};_.k.extend=function(a){this.contains(a)||(this.isEmpty()?this.b=this.f=a:_.fd(a,this.b)<_.fd(this.f,a)?this.b=a:this.f=a)};

_.k.xb=function(){var a=(this.b+this.f)/2;_.cd(this)&&(a=_.gb(a+180,-180,180));return a};_.k=id.prototype;_.k.isEmpty=function(){return this.f>this.b};_.k.intersects=function(a){var b=this.f,c=this.b;return b<=a.f?a.f<=c&&a.f<=a.b:b<=a.b&&b<=c};_.k.contains=function(a){return a>=this.f&&a<=this.b};_.k.extend=function(a){this.isEmpty()?this.b=this.f=a:a<this.f?this.f=a:a>this.b&&(this.b=a)};_.k.xb=function(){return(this.b+this.f)/2};_.k=_.kd.prototype;_.k.getCenter=function(){return new _.F(this.f.xb(),this.b.xb())};_.k.toString=function(){return"("+this.getSouthWest()+", "+this.getNorthEast()+")"};_.k.toJSON=function(){return{south:this.f.f,west:this.b.b,north:this.f.b,east:this.b.f}};_.k.toUrlValue=function(a){var b=this.getSouthWest(),c=this.getNorthEast();return[b.toUrlValue(a),c.toUrlValue(a)].join()};

_.k.Gi=function(a){if(!a)return!1;a=_.nd(a);var b=this.f,c=a.f;return(b.isEmpty()?c.isEmpty():1E-9>=Math.abs(c.f-b.f)+Math.abs(b.b-c.b))&&_.ed(this.b,a.b)};_.kd.prototype.equals=_.kd.prototype.Gi;_.k=_.kd.prototype;_.k.contains=function(a){a=_.Jc(a);return this.f.contains(a.lat())&&this.b.contains(a.lng())};_.k.intersects=function(a){a=_.nd(a);return this.f.intersects(a.f)&&this.b.intersects(a.b)};_.k.extend=function(a){a=_.Jc(a);this.f.extend(a.lat());this.b.extend(a.lng());return this};

_.k.union=function(a){a=_.nd(a);if(!a||a.isEmpty())return this;this.extend(a.getSouthWest());this.extend(a.getNorthEast());return this};_.k.getSouthWest=function(){return new _.F(this.f.f,this.b.b,!0)};_.k.getNorthEast=function(){return new _.F(this.f.b,this.b.f,!0)};_.k.toSpan=function(){return new _.F(_.jd(this.f),_.dd(this.b),!0)};_.k.isEmpty=function(){return this.f.isEmpty()||this.b.isEmpty()};var md=_.pc({south:_.Zc,west:_.Zc,north:_.Zc,east:_.Zc},!1);_.od.prototype.heading=_.pa("f");_.od.prototype.b=_.pa("j");_.od.prototype.toString=function(){return this.f+","+this.j};_.Uh=new _.od;_.t(_.vd,_.E);_.k=_.vd.prototype;_.k.getAt=function(a){return this.b[a]};_.k.indexOf=function(a){for(var b=0,c=this.b.length;b<c;++b)if(a===this.b[b])return b;return-1};_.k.forEach=function(a){for(var b=0,c=this.b.length;b<c;++b)a(this.b[b],b)};_.k.setAt=function(a,b){var c=this.b[a],d=this.b.length;if(a<d)this.b[a]=b,_.z.trigger(this,"set_at",a,c),this.l&&this.l(a,c);else{for(c=d;c<a;++c)this.insertAt(c,void 0);this.insertAt(a,b)}};

_.k.insertAt=function(a,b){this.b.splice(a,0,b);ud(this);_.z.trigger(this,"insert_at",a);this.f&&this.f(a)};_.k.removeAt=function(a){var b=this.b[a];this.b.splice(a,1);ud(this);_.z.trigger(this,"remove_at",a,b);this.j&&this.j(a,b);return b};_.k.push=function(a){this.insertAt(this.b.length,a);return this.b.length};_.k.pop=function(){return this.removeAt(this.b.length-1)};_.k.getArray=_.pa("b");_.k.clear=function(){for(;this.get("length");)this.pop()};_.rd(_.vd.prototype,{length:null});_.wd.prototype.remove=function(a){var b=this.f,c=this.j(a);b[c]&&(delete b[c],_.z.trigger(this,"remove",a),this.onRemove&&this.onRemove(a))};_.wd.prototype.contains=function(a){return!!this.f[this.j(a)]};_.wd.prototype.forEach=function(a){var b=this.f,c;for(c in b)a.call(this,b[c])};_.yd.prototype.Va=_.sa(1);_.yd.prototype.forEach=function(a,b){_.v(this.b,function(c,d){a.call(b,c,d)})};zd.prototype.addListener=function(a,b,c){c=c?{mg:!1}:null;var d=!this.P.length;var e=this.P;var f=Za(e,Cd(a,b));(e=0>f?null:_.Ia(e)?e.charAt(f):e[f])?e.once=e.once&&c:this.P.push({Bc:a,context:b||null,once:c});d&&this.f();return a};zd.prototype.addListenerOnce=function(a,b){this.addListener(a,b,!0);return a};zd.prototype.removeListener=function(a,b){if(this.P.length){var c=this.P;a=Za(c,Cd(a,b));0<=a&&_.$a(c,a);this.P.length||this.b()}};var Ad=_.ac;_.k=_.Dd.prototype;_.k.jd=_.na();_.k.gd=_.na();_.k.addListener=function(a,b){return this.P.addListener(a,b)};_.k.addListenerOnce=function(a,b){return this.P.addListenerOnce(a,b)};_.k.removeListener=function(a,b){return this.P.removeListener(a,b)};_.k.notify=function(a){_.Bd(this.P,function(a){a(this.get())},this,a)};_.Vh=new _.Fd(0,0);_.Gd.prototype.isEmpty=function(){return!(this.I<this.K&&this.J<this.L)};_.Gd.prototype.extend=function(a){a&&(this.I=Math.min(this.I,a.x),this.K=Math.max(this.K,a.x),this.J=Math.min(this.J,a.y),this.L=Math.max(this.L,a.y))};_.Gd.prototype.getCenter=function(){return new _.J((this.I+this.K)/2,(this.J+this.L)/2)};_.Wh=_.Hd(-window.Infinity,-window.Infinity,window.Infinity,window.Infinity);_.Xh=_.Hd(0,0,0,0);var Yh=_.pc({zoom:_.yc(Kh),heading:Kh,pitch:Kh});_.t(_.Jd,_.E);_.t(_.Kd,_.Dd);_.Kd.prototype.set=function(a){this.Jh(a);this.notify()};_.t(Ld,_.Kd);Ld.prototype.get=_.pa("b");Ld.prototype.Jh=_.oa("b");_.t(Nd,_.E);_.Zh=_.Xd("d",void 0);_.$h=_.Xd("f",void 0);_.S=_.Zd();_.ai=_.Yd("i",void 0);_.bi=new _.Vd("i",3,void 0,void 0);_.ci=new _.Vd("j",3,"",void 0);_.di=_.Xd("u",void 0);_.ei=_.Yd("u",void 0);_.fi=new _.Vd("u",3,void 0,void 0);_.gi=_.$d();_.T=_.ae();_.U=_.be();_.hi=new _.Vd("e",3,void 0,void 0);_.V=_.Xd("s",void 0);_.ii=_.Yd("s",void 0);_.ji=new _.Vd("s",3,void 0,void 0);_.ki=_.Xd("B",void 0);_.li=_.Xd("x",void 0);_.mi=_.Yd("x",void 0);_.ni=new _.Vd("x",3,void 0,void 0);_.oi=new _.Vd("y",3,void 0,void 0);var qi;_.pi=new ce;qi=/'/g;ce.prototype.b=function(a,b){var c=[];ee(a,b,c);return c.join("&").replace(qi,"%27")};_.N.prototype.Wh=_.sa(2);_.t(je,_.E);je.prototype.set=function(a,b){if(null!=b&&!(b&&_.y(b.maxZoom)&&b.tileSize&&b.tileSize.width&&b.tileSize.height&&b.getTile&&b.getTile.apply))throw Error("Expected value implementing google.maps.MapType");return _.E.prototype.set.apply(this,arguments)};_.t(_.ke,_.E);_.k=le.prototype;_.k.contains=function(a){return this.b.hasOwnProperty(_.Fb(a))};_.k.getFeatureById=function(a){return qb(this.f,a)};

_.k.add=function(a){a=a||{};a=a instanceof _.Yc?a:new _.Yc(a);if(!this.contains(a)){var b=a.getId();if(b){var c=this.getFeatureById(b);c&&this.remove(c)}c=_.Fb(a);this.b[c]=a;b&&(this.f[b]=a);var d=_.z.forward(a,"setgeometry",this),e=_.z.forward(a,"setproperty",this),f=_.z.forward(a,"removeproperty",this);this.j[c]=function(){_.z.removeListener(d);_.z.removeListener(e);_.z.removeListener(f)};_.z.trigger(this,"addfeature",{feature:a})}return a};

_.k.remove=function(a){var b=_.Fb(a),c=a.getId();if(this.b[b]){delete this.b[b];c&&delete this.f[c];if(c=this.j[b])delete this.j[b],c();_.z.trigger(this,"removefeature",{feature:a})}};_.k.forEach=function(a){for(var b in this.b)a(this.b[b])};me.prototype.get=function(a){return this.b[a]};me.prototype.set=function(a,b){var c=this.b;c[a]||(c[a]={});_.db(c[a],b);_.z.trigger(this,"changed",a)};me.prototype.reset=function(a){delete this.b[a];_.z.trigger(this,"changed",a)};me.prototype.forEach=function(a){_.cb(this.b,a)};_.t(ne,_.E);ne.prototype.overrideStyle=function(a,b){this.b.set(_.Fb(a),b)};ne.prototype.revertStyle=function(a){a?this.b.reset(_.Fb(a)):this.b.forEach((0,_.p)(this.b.reset,this.b))};_.t(_.se,Ic);_.k=_.se.prototype;_.k.getType=_.qa("GeometryCollection");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.t(_.ue,Ic);_.k=_.ue.prototype;_.k.getType=_.qa("LineString");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(a)};var ve=_.uc(_.sc(_.ue,"google.maps.Data.LineString",!0));_.t(_.we,Ic);_.k=_.we.prototype;_.k.getType=_.qa("MultiLineString");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.t(_.xe,Ic);_.k=_.xe.prototype;_.k.getType=_.qa("MultiPoint");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(a)};_.t(_.ye,Ic);_.k=_.ye.prototype;_.k.getType=_.qa("LinearRing");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(a)};var ze=_.uc(_.sc(_.ye,"google.maps.Data.LinearRing",!0));_.t(_.Ae,Ic);_.k=_.Ae.prototype;_.k.getType=_.qa("Polygon");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};var Be=_.uc(_.sc(_.Ae,"google.maps.Data.Polygon",!0));_.t(_.Ce,Ic);_.k=_.Ce.prototype;_.k.getType=_.qa("MultiPolygon");_.k.getLength=function(){return this.b.length};_.k.getAt=function(a){return this.b[a]};_.k.getArray=function(){return this.b.slice()};_.k.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};var Uc={main:[],common:["main"],util:["common"],adsense:["main"],controls:["util"],data:["util"],directions:["util","geometry"],distance_matrix:["util"],drawing:["main"],drawing_impl:["controls"],elevation:["util","geometry"],geocoder:["util"],geojson:["main"],imagery_viewer:["main"],geometry:["main"],infowindow:["util"],kml:["onion","util","map"],layers:["map"],map:["common"],marker:["util"],maxzoom:["util"],onion:["util","map"],overlay:["common"],panoramio:["main"],places:["main"],places_impl:["controls"],

poly:["util","map","geometry"],search:["main"],search_impl:["onion"],stats:["util"],streetview:["util","geometry"],usage:["util"],visualization:["main"],visualization_impl:["onion"],weather:["main"],zombie:["main"]};var ri=_.Ub.google.maps,si=Rc.b(),ti=(0,_.p)(si.eb,si);ri.__gjsload__=ti;_.cb(ri.modules,ti);delete ri.modules;_.ui=_.yc(_.sc(_.ke,"Map"));var vi=_.pc({source:_.Lh,webUrl:_.Oh,iosDeepLinkId:_.Oh});var wi=_.xc(_.pc({placeId:_.Oh,query:_.Oh,location:_.Jc}),function(a){if(a.placeId&&a.query)throw _.nc("cannot set both placeId and query");if(!a.placeId&&!a.query)throw _.nc("must set one of placeId or query");return a});_.t(Fe,_.E);

_.rd(Fe.prototype,{position:_.yc(_.Jc),title:_.Oh,icon:_.yc(_.wc([_.Lh,{Lf:Dc("url"),then:_.pc({url:_.Lh,scaledSize:_.yc(ad),size:_.yc(ad),origin:_.yc($c),anchor:_.yc($c),labelOrigin:_.yc($c),path:_.vc(function(a){return null==a})},!0)},{Lf:Dc("path"),then:_.pc({path:_.wc([_.Lh,_.tc(Th)]),anchor:_.yc($c),labelOrigin:_.yc($c),fillColor:_.Oh,fillOpacity:_.Nh,rotation:_.Nh,scale:_.Nh,strokeColor:_.Oh,strokeOpacity:_.Nh,strokeWeight:_.Nh,url:_.vc(function(a){return null==a})},!0)}])),label:_.yc(_.wc([_.Lh,{Lf:Dc("text"),

then:_.pc({text:_.Lh,fontSize:_.Oh,fontWeight:_.Oh,fontFamily:_.Oh},!0)}])),shadow:_.Zb,shape:_.Zb,cursor:_.Oh,clickable:_.Ph,animation:_.Zb,draggable:_.Ph,visible:_.Ph,flat:_.Zb,zIndex:_.Nh,opacity:_.Nh,place:_.yc(wi),attribution:_.yc(vi)});var xi=_.yc(_.sc(_.Jd,"StreetViewPanorama"));_.t(_.Ge,Fe);_.Ge.prototype.map_changed=function(){this.__gm.set&&this.__gm.set.remove(this);var a=this.get("map");this.__gm.set=a&&a.__gm.ea;this.__gm.set&&_.xd(this.__gm.set,this)};_.Ge.MAX_ZINDEX=1E6;_.rd(_.Ge.prototype,{map:_.wc([_.ui,xi])});var Je=Le(_.sc(_.F,"LatLng"));_.t(Ne,_.E);Ne.prototype.map_changed=Ne.prototype.visible_changed=function(){var a=this;_.G("poly",function(b){b.f(a)})};Ne.prototype.getPath=function(){return this.get("latLngs").getAt(0)};Ne.prototype.setPath=function(a){try{this.get("latLngs").setAt(0,Ke(a))}catch(b){_.oc(b)}};_.rd(Ne.prototype,{draggable:_.Ph,editable:_.Ph,map:_.ui,visible:_.Ph});_.t(_.Oe,Ne);_.Oe.prototype.Da=!0;_.Oe.prototype.getPaths=function(){return this.get("latLngs")};_.Oe.prototype.setPaths=function(a){this.set("latLngs",Me(a))};_.t(_.Pe,Ne);_.Pe.prototype.Da=!1;_.Re="click dblclick mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");_.t(Se,_.E);_.k=Se.prototype;_.k.contains=function(a){return this.b.contains(a)};_.k.getFeatureById=function(a){return this.b.getFeatureById(a)};_.k.add=function(a){return this.b.add(a)};_.k.remove=function(a){this.b.remove(a)};_.k.forEach=function(a){this.b.forEach(a)};_.k.addGeoJson=function(a,b){return _.Qe(this.b,a,b)};_.k.loadGeoJson=function(a,b,c){var d=this.b;_.G("data",function(e){e.Jk(d,a,b,c)})};_.k.toGeoJson=function(a){var b=this.b;_.G("data",function(c){c.Fk(b,a)})};

_.k.overrideStyle=function(a,b){this.f.overrideStyle(a,b)};_.k.revertStyle=function(a){this.f.revertStyle(a)};_.k.controls_changed=function(){this.get("controls")&&Te(this)};_.k.drawingMode_changed=function(){this.get("drawingMode")&&Te(this)};_.rd(Se.prototype,{map:_.ui,style:_.Zb,controls:_.yc(_.uc(_.tc(Qh))),controlPosition:_.yc(_.tc(_.bg)),drawingMode:_.yc(_.tc(Qh))});_.Gi={METRIC:0,IMPERIAL:1};_.Hi={DRIVING:"DRIVING",WALKING:"WALKING",BICYCLING:"BICYCLING",TRANSIT:"TRANSIT"};_.Ii={BEST_GUESS:"bestguess",OPTIMISTIC:"optimistic",PESSIMISTIC:"pessimistic"};_.Ji={BUS:"BUS",RAIL:"RAIL",SUBWAY:"SUBWAY",TRAIN:"TRAIN",TRAM:"TRAM"};_.Ki={LESS_WALKING:"LESS_WALKING",FEWER_TRANSFERS:"FEWER_TRANSFERS"};var Li=_.pc({routes:_.uc(_.vc(_.lb))},!0);_.t(Xe,_.E);_.k=Xe.prototype;_.k.internalAnchor_changed=function(){var a=this.get("internalAnchor");Ye(this,"attribution",a);Ye(this,"place",a);Ye(this,"internalAnchorMap",a,"map");Ye(this,"internalAnchorPoint",a,"anchorPoint");a instanceof _.Ge?Ye(this,"internalAnchorPosition",a,"internalPosition"):Ye(this,"internalAnchorPosition",a,"position")};

_.k.internalAnchorPoint_changed=Xe.prototype.internalPixelOffset_changed=function(){var a=this.get("internalAnchorPoint")||_.Rh,b=this.get("internalPixelOffset")||_.Sh;this.set("pixelOffset",new _.L(b.width+Math.round(a.x),b.height+Math.round(a.y)))};_.k.internalAnchorPosition_changed=function(){var a=this.get("internalAnchorPosition");a&&this.set("position",a)};_.k.internalAnchorMap_changed=function(){this.get("internalAnchor")&&this.b.set("map",this.get("internalAnchorMap"))};

_.k.jm=function(){var a=this.get("internalAnchor");!this.b.get("map")&&a&&a.get("map")&&this.set("internalAnchor",null)};_.k.internalContent_changed=function(){this.set("content",Ue(this.get("internalContent")))};_.k.trigger=function(a){_.z.trigger(this.b,a)};_.k.close=function(){this.b.set("map",null)};_.t(_.Ze,_.E);_.rd(_.Ze.prototype,{content:_.wc([_.Oh,_.vc(rc)]),position:_.yc(_.Jc),size:_.yc(ad),map:_.wc([_.ui,xi]),anchor:_.yc(_.sc(_.E,"MVCObject")),zIndex:_.Nh});_.Ze.prototype.open=function(a,b){this.set("anchor",b);b?!this.get("map")&&a&&this.set("map",a):this.set("map",a)};_.Ze.prototype.close=function(){this.set("map",null)};_.$e=[];_.t(bf,_.E);bf.prototype.changed=function(a){if("map"==a||"panel"==a){var b=this;_.G("directions",function(c){c.ol(b,a)})}"panel"==a&&_.af(this.getPanel())};_.rd(bf.prototype,{directions:Li,map:_.ui,panel:_.yc(_.vc(rc)),routeIndex:_.Nh});cf.prototype.route=function(a,b){_.G("directions",function(c){c.Hh(a,b,!0)})};df.prototype.getDistanceMatrix=function(a,b){_.G("distance_matrix",function(c){c.b(a,b)})};ef.prototype.getElevationAlongPath=function(a,b){_.G("elevation",function(c){c.getElevationAlongPath(a,b)})};ef.prototype.getElevationForLocations=function(a,b){_.G("elevation",function(c){c.getElevationForLocations(a,b)})};_.Mi=_.sc(_.kd,"LatLngBounds");_.ff.prototype.geocode=function(a,b){_.G("geocoder",function(c){c.geocode(a,b)})};_.t(_.gf,_.E);_.gf.prototype.map_changed=function(){var a=this;_.G("kml",function(b){b.b(a)})};_.rd(_.gf.prototype,{map:_.ui,url:null,bounds:null,opacity:_.Nh});_.Oi={UNKNOWN:"UNKNOWN",OK:_.ha,INVALID_REQUEST:_.ca,DOCUMENT_NOT_FOUND:"DOCUMENT_NOT_FOUND",FETCH_ERROR:"FETCH_ERROR",INVALID_DOCUMENT:"INVALID_DOCUMENT",DOCUMENT_TOO_LARGE:"DOCUMENT_TOO_LARGE",LIMITS_EXCEEDED:"LIMITS_EXECEEDED",TIMED_OUT:"TIMED_OUT"};_.t(hf,_.E);_.k=hf.prototype;_.k.vd=function(){var a=this;_.G("kml",function(b){b.f(a)})};_.k.url_changed=hf.prototype.vd;_.k.driveFileId_changed=hf.prototype.vd;_.k.map_changed=hf.prototype.vd;_.k.zIndex_changed=hf.prototype.vd;_.rd(hf.prototype,{map:_.ui,defaultViewport:null,metadata:null,status:null,url:_.Oh,screenOverlays:_.Ph,zIndex:_.Nh});_.t(_.jf,_.E);_.rd(_.jf.prototype,{map:_.ui});_.t(kf,_.E);_.rd(kf.prototype,{map:_.ui});_.t(lf,_.E);_.rd(lf.prototype,{map:_.ui});!_.nh&&!_.lh||_.lh&&9<=Number(_.Ah)||_.nh&&_.Xb("1.9.1");_.lh&&_.Xb("9");_.mf.prototype.cf=!0;_.mf.prototype.zb=_.sa(4);_.mf.prototype.Xg=!0;_.mf.prototype.Hd=_.sa(6);_.nf("about:blank");_.pf.prototype.Xg=!0;_.pf.prototype.Hd=_.sa(5);_.pf.prototype.cf=!0;_.pf.prototype.zb=_.sa(3);_.of={};_.qf("<!DOCTYPE html>",0);_.qf("",0);_.qf("<br>",0);_.wg="StopIteration"in _.Ub?_.Ub.StopIteration:{message:"StopIteration",stack:""};_.tf.prototype.next=function(){throw _.wg;};_.tf.prototype.Ee=function(){return this};_.t(uf,_.tf);uf.prototype.setPosition=function(a,b,c){if(this.node=a)this.f=_.Ja(b)?b:1!=this.node.nodeType?0:this.b?-1:1;_.Ja(c)&&(this.depth=c)};

uf.prototype.next=function(){if(this.j){if(!this.node||this.l&&0==this.depth)throw _.wg;var a=this.node;var b=this.b?-1:1;if(this.f==b){var c=this.b?a.lastChild:a.firstChild;c?this.setPosition(c):this.setPosition(a,-1*b)}else(c=this.b?a.previousSibling:a.nextSibling)?this.setPosition(c):this.setPosition(a.parentNode,-1*b);this.depth+=this.f*(this.b?-1:1)}else this.j=!0;a=this.node;if(!this.node)throw _.wg;return a};

uf.prototype.splice=function(a){var b=this.node,c=this.b?1:-1;this.f==c&&(this.f=-1*c,this.depth+=this.f*(this.b?-1:1));this.b=!this.b;uf.prototype.next.call(this);this.b=!this.b;for(var c=_.Ha(arguments[0])?arguments[0]:arguments,d=c.length-1;0<=d;d--)_.rf(c[d],b);_.sf(b)};_.t(vf,uf);vf.prototype.next=function(){do vf.ib.next.call(this);while(-1==this.f);return this.node};var Pi;_.t(wf,_.N);var Qi;_.t(xf,_.N);var Ri;_.t(yf,_.N);var Si;_.t(zf,_.N);_.t(Af,_.N);_.t(_.Bf,_.N);_.t(Cf,_.N);_.t(Df,_.N);_.t(Mf,_.N);_.xg={};var Wf;_.Yf.prototype.fromLatLngToPoint=function(a,b){b=b||new _.J(0,0);var c=this.b;b.x=c.x+a.lng()*this.j;a=_.fb(Math.sin(_.hc(a.lat())),-(1-1E-15),1-1E-15);b.y=c.y+.5*Math.log((1+a)/(1-a))*-this.l;return b};_.Yf.prototype.fromPointToLatLng=function(a,b){var c=this.b;return new _.F(_.lc(2*Math.atan(Math.exp((a.y-c.y)/-this.l))-Math.PI/2),(a.x-c.x)/this.j,b)};_.ag={japan_prequake:20,japan_postquake2010:24};_.Ui={NEAREST:"nearest",BEST:"best"};_.Vi={DEFAULT:"default",OUTDOOR:"outdoor"};_.t(cg,_.Jd);cg.prototype.visible_changed=function(){var a=this;!a.m&&a.getVisible()&&(a.m=!0,_.G("streetview",function(b){if(a.f)var c=a.f;b.Bm(a,c)}))};_.rd(cg.prototype,{visible:_.Ph,pano:_.Oh,position:_.yc(_.Jc),pov:_.yc(Yh),motionTracking:Mh,photographerPov:null,location:null,links:_.uc(_.vc(_.lb)),status:null,zoom:_.Nh,enableCloseButton:_.Ph});cg.prototype.registerPanoProvider=function(a,b){this.set("panoProvider",{yh:a,options:b||{}})};_.t(eg,Nd);_.fg.prototype.addListener=function(a,b){this.P.addListener(a,b)};_.fg.prototype.addListenerOnce=function(a,b){this.P.addListenerOnce(a,b)};_.fg.prototype.removeListener=function(a,b){this.P.removeListener(a,b)};_.fg.prototype.b=_.sa(7);_.t(_.gg,_.E);_.gg.prototype.N=function(){var a=this;a.D||(a.D=window.setTimeout(function(){a.D=void 0;a.aa()},a.mi))};_.gg.prototype.C=function(){this.D&&window.clearTimeout(this.D);this.D=void 0;this.aa()};var Wi;_.t(jg,_.N);var Xi;_.t(kg,_.N);var Yi;_.t(lg,_.N);var Zi;_.t(mg,_.N);var $i;_.t(ng,_.N);ng.prototype.getZoom=function(){return _.O(this,2)};ng.prototype.setZoom=function(a){this.data[2]=a};_.t(og,_.gg);var pg={roadmap:0,satellite:2,hybrid:3,terrain:4},aj={0:1,2:2,3:2,4:2};_.k=og.prototype;_.k.Jg=_.pd("center");_.k.$f=_.pd("zoom");_.k.changed=function(){var a=this.Jg(),b=this.$f(),c=qg(this);if(a&&!a.b(this.V)||this.S!=b||this.Z!=c)this.j||rg(this.b),this.N(),this.S=b,this.Z=c;this.V=a};

_.k.aa=function(){var a=qg(this);if(this.j&&this.m)this.l!=a&&rg(this.b);else{var b="",c=this.Jg(),d=this.$f(),e=this.get("size");if(e){if(c&&(0,window.isFinite)(c.lat())&&(0,window.isFinite)(c.lng())&&1<d&&null!=a&&e&&e.width&&e.height&&this.f){_.hg(this.f,e);if(c=_.Zf(this.F,c,d)){var f=new _.Gd;f.I=Math.round(c.x-e.width/2);f.K=f.I+e.width;f.J=Math.round(c.y-e.height/2);f.L=f.J+e.height}else f=null;c=aj[a];if(f){this.m=!0;this.l=a;this.j&&this.b&&this.j.set({Sa:this.b,ya:{min:new Ed,max:new Ed},

size:{width:e.width,height:e.height}});var b=new ng,g=new lg(_.Q(b,0));g.data[0]=f.I;g.data[1]=f.J;b.data[1]=c;b.setZoom(d);d=new mg(_.Q(b,3));d.data[0]=f.K-f.I;d.data[1]=f.L-f.J;d=new kg(_.Q(b,4));d.data[0]=a;d.data[4]=_.Nf(_.Pf(_.R));d.data[5]=_.Of(_.Pf(_.R)).toLowerCase();d.data[9]=!0;d.data[11]=!0;a=this.O+(0,window.unescape)("%3F");if(!$i){d=$i={b:-1,A:[]};c=new lg([]);Yi||(Yi={b:-1,A:[,_.S,_.S]});c=_.M(c,Yi);f=new mg([]);Zi||(Zi={b:-1,A:[]},Zi.A=[,_.di,_.di,_.be(1)]);f=_.M(f,Zi);g=new kg([]);

if(!Xi){var h=[];Xi={b:-1,A:h};h[1]=_.U;h[2]=_.T;h[3]=_.T;h[5]=_.V;h[6]=_.V;var l=new jg([]);Wi||(Wi={b:-1,A:[,_.hi,_.T]});h[9]=_.M(l,Wi);h[10]=_.T;h[11]=_.T;h[12]=_.T;h[13]=_.hi;h[100]=_.T}g=_.M(g,Xi);h=new wf([]);if(!Pi){var l=Pi={b:-1,A:[]},n=new xf([]);Qi||(Qi={b:-1,A:[,_.T]});var n=_.M(n,Qi),q=new zf([]);Si||(Si={b:-1,A:[,_.T,_.T]});var q=_.M(q,Si),r=new yf([]);Ri||(Ri={b:-1,A:[,_.T]});l.A=[,n,,,,,,,,,q,,_.M(r,Ri)]}d.A=[,c,_.U,_.di,f,g,_.M(h,Pi)]}b=_.pi.b(b.data,$i);b=this.G(a+b)}}this.b&&(_.hg(this.b,

e),tg(this,b))}}};_.k.div_changed=function(){var a=this.get("div"),b=this.f;if(a)if(b)a.appendChild(b);else{b=this.f=window.document.createElement("div");b.style.overflow="hidden";var c=this.b=window.document.createElement("img");_.z.addDomListener(b,"contextmenu",function(a){_.tb(a);_.vb(a)});c.ontouchstart=c.ontouchmove=c.ontouchend=c.ontouchcancel=function(a){_.ub(a);_.vb(a)};_.hg(c,_.Sh);a.appendChild(b);this.aa()}else b&&(rg(b),this.f=null)};_.t(Ag,_.ke);_.k=Ag.prototype;_.k.streetView_changed=function(){var a=this.get("streetView");a?a.set("standAlone",!1):this.set("streetView",this.__gm.j)};_.k.getDiv=function(){return this.__gm.R};_.k.panBy=function(a,b){var c=this.__gm;_.G("map",function(){_.z.trigger(c,"panby",a,b)})};_.k.panTo=function(a){var b=this.__gm;a=_.Jc(a);_.G("map",function(){_.z.trigger(b,"panto",a)})};_.k.panToBounds=function(a){var b=this.__gm,c=_.nd(a);_.G("map",function(){_.z.trigger(b,"pantolatlngbounds",c)})};

_.k.fitBounds=function(a,b){var c=this;a=_.nd(a);_.G("map",function(d){d.fitBounds(c,a,b)})};_.rd(Ag.prototype,{bounds:null,streetView:xi,center:_.yc(_.Jc),zoom:_.Nh,mapTypeId:_.Oh,projection:null,heading:_.Nh,tilt:_.Nh,clickableIcons:Mh});Bg.prototype.getMaxZoomAtLatLng=function(a,b){_.G("maxzoom",function(c){c.getMaxZoomAtLatLng(a,b)})};_.t(Cg,_.E);Cg.prototype.changed=function(a){if("suppressInfoWindows"!=a&&"clickable"!=a){var b=this;_.G("onion",function(a){a.b(b)})}};_.rd(Cg.prototype,{map:_.ui,tableId:_.Nh,query:_.yc(_.wc([_.Lh,_.vc(_.lb,"not an Object")]))});_.t(_.Dg,_.E);_.Dg.prototype.map_changed=function(){var a=this;_.G("overlay",function(b){b.Tj(a)})};_.rd(_.Dg.prototype,{panes:null,projection:null,map:_.wc([_.ui,xi])});_.t(_.Eg,_.E);_.Eg.prototype.map_changed=_.Eg.prototype.visible_changed=function(){var a=this;_.G("poly",function(b){b.b(a)})};_.Eg.prototype.center_changed=function(){_.z.trigger(this,"bounds_changed")};_.Eg.prototype.radius_changed=_.Eg.prototype.center_changed;_.Eg.prototype.getBounds=function(){var a=this.get("radius"),b=this.get("center");if(b&&_.y(a)){var c=this.get("map"),c=c&&c.__gm.get("baseMapType");return _.$f(b,a/_.Ie(c))}return null};

_.rd(_.Eg.prototype,{center:_.yc(_.Jc),draggable:_.Ph,editable:_.Ph,map:_.ui,radius:_.Nh,visible:_.Ph});_.t(_.Fg,_.E);_.Fg.prototype.map_changed=_.Fg.prototype.visible_changed=function(){var a=this;_.G("poly",function(b){b.j(a)})};_.rd(_.Fg.prototype,{draggable:_.Ph,editable:_.Ph,bounds:_.yc(_.nd),map:_.ui,visible:_.Ph});_.t(Gg,_.E);Gg.prototype.map_changed=function(){var a=this;_.G("streetview",function(b){b.Sj(a)})};_.rd(Gg.prototype,{map:_.ui});_.Hg.prototype.getPanorama=function(a,b){var c=this.b||void 0;_.G("streetview",function(d){_.G("geometry",function(e){d.Pk(a,b,e.computeHeading,e.computeOffset,c)})})};_.Hg.prototype.getPanoramaByLocation=function(a,b,c){this.getPanorama({location:a,radius:b,preference:50>(b||0)?"best":"nearest"},c)};_.Hg.prototype.getPanoramaById=function(a,b){this.getPanorama({pano:a},b)};_.t(_.Mg,_.E);_.k=_.Mg.prototype;_.k.getTile=function(a,b,c){if(!a||!c)return null;var d=c.createElement("div");c={W:a,zoom:b,Kb:null};d.__gmimt=c;_.xd(this.b,d);var e=Og(this);1!=e&&Ng(d,e);if(this.f){var e=this.tileSize||new _.L(256,256),f=this.j(a,b);c.Kb=this.f({ca:a.x,ba:a.y,da:b},e,d,f,function(){_.z.trigger(d,"load")})}return d};_.k.releaseTile=function(a){a&&this.b.contains(a)&&(this.b.remove(a),(a=a.__gmimt.Kb)&&a.release())};_.k.Te=_.sa(8);

_.k.opacity_changed=function(){var a=Og(this);this.b.forEach(function(b){return Ng(b,a)})};_.k.qd=!0;_.rd(_.Mg.prototype,{opacity:_.Nh});_.t(_.Pg,_.E);_.Pg.prototype.getTile=Ih;_.Pg.prototype.tileSize=new _.L(256,256);_.Pg.prototype.qd=!0;_.t(_.Qg,_.Pg);_.t(_.Rg,_.E);_.rd(_.Rg.prototype,{attribution:_.yc(vi),place:_.yc(wi)});var bj={Animation:{BOUNCE:1,DROP:2,no:3,lo:4},Circle:_.Eg,ControlPosition:_.bg,Data:Se,GroundOverlay:_.gf,ImageMapType:_.Mg,InfoWindow:_.Ze,LatLng:_.F,LatLngBounds:_.kd,MVCArray:_.vd,MVCObject:_.E,Map:Ag,MapTypeControlStyle:{DEFAULT:0,HORIZONTAL_BAR:1,DROPDOWN_MENU:2,INSET:3,INSET_LARGE:4},MapTypeId:_.hh,MapTypeRegistry:je,Marker:_.Ge,MarkerImage:function(a,b,c,d,e){this.url=a;this.size=b||e;this.origin=c;this.anchor=d;this.scaledSize=e;this.labelOrigin=null},NavigationControlStyle:{DEFAULT:0,SMALL:1,

ANDROID:2,ZOOM_PAN:3,oo:4,Dj:5},OverlayView:_.Dg,Point:_.J,Polygon:_.Oe,Polyline:_.Pe,Rectangle:_.Fg,ScaleControlStyle:{DEFAULT:0},Size:_.L,StreetViewPreference:_.Ui,StreetViewSource:_.Vi,StrokePosition:{CENTER:0,INSIDE:1,OUTSIDE:2},SymbolPath:Th,ZoomControlStyle:{DEFAULT:0,SMALL:1,LARGE:2,Dj:3},event:_.z};

_.db(bj,{BicyclingLayer:_.jf,DirectionsRenderer:bf,DirectionsService:cf,DirectionsStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,OVER_QUERY_LIMIT:_.ia,REQUEST_DENIED:_.ja,INVALID_REQUEST:_.ca,ZERO_RESULTS:_.la,MAX_WAYPOINTS_EXCEEDED:_.fa,NOT_FOUND:_.ga},DirectionsTravelMode:_.Hi,DirectionsUnitSystem:_.Gi,DistanceMatrixService:df,DistanceMatrixStatus:{OK:_.ha,INVALID_REQUEST:_.ca,OVER_QUERY_LIMIT:_.ia,REQUEST_DENIED:_.ja,UNKNOWN_ERROR:_.ka,MAX_ELEMENTS_EXCEEDED:_.ea,MAX_DIMENSIONS_EXCEEDED:_.da},DistanceMatrixElementStatus:{OK:_.ha,

NOT_FOUND:_.ga,ZERO_RESULTS:_.la},ElevationService:ef,ElevationStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,OVER_QUERY_LIMIT:_.ia,REQUEST_DENIED:_.ja,INVALID_REQUEST:_.ca,ho:"DATA_NOT_AVAILABLE"},FusionTablesLayer:Cg,Geocoder:_.ff,GeocoderLocationType:{ROOFTOP:"ROOFTOP",RANGE_INTERPOLATED:"RANGE_INTERPOLATED",GEOMETRIC_CENTER:"GEOMETRIC_CENTER",APPROXIMATE:"APPROXIMATE"},GeocoderStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,OVER_QUERY_LIMIT:_.ia,REQUEST_DENIED:_.ja,INVALID_REQUEST:_.ca,ZERO_RESULTS:_.la,ERROR:_.aa},KmlLayer:hf,

KmlLayerStatus:_.Oi,MaxZoomService:Bg,MaxZoomStatus:{OK:_.ha,ERROR:_.aa},SaveWidget:_.Rg,StreetViewCoverageLayer:Gg,StreetViewPanorama:cg,StreetViewService:_.Hg,StreetViewStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,ZERO_RESULTS:_.la},StyledMapType:_.Qg,TrafficLayer:kf,TrafficModel:_.Ii,TransitLayer:lf,TransitMode:_.Ji,TransitRoutePreference:_.Ki,TravelMode:_.Hi,UnitSystem:_.Gi});_.db(Se,{Feature:_.Yc,Geometry:Ic,GeometryCollection:_.se,LineString:_.ue,LinearRing:_.ye,MultiLineString:_.we,MultiPoint:_.xe,MultiPolygon:_.Ce,Point:_.Kc,Polygon:_.Ae});_.Wc("main",{});var Ug=/'/g,Vg;var De=arguments[0];

window.google.maps.Load(function(a,b){var c=window.google.maps;Zg();var d=$g(c);_.R=new Df(a);_.cj=Math.random()<_.O(_.R,0,1);_.dj=Math.round(1E15*Math.random()).toString(36);_.zg=Wg();_.Ni=Xg();_.Ti=new _.vd;_.Uf=b;for(a=0;a<_.ie(_.R,8);++a)_.xg[_.he(_.R,8,a)]=!0;a=new _.Bf(_.R.data[3]);Ee(_.P(a,0));_.cb(bj,function(a,b){c[a]=b});c.version=_.P(a,1);window.setTimeout(function(){Xc(["util","stats"],function(a,b){a.f.b();a.j();d&&b.b.b({ev:"api_alreadyloaded",client:_.P(_.R,6),key:_.P(_.R,16)})})},

5E3);_.z.Rm();Wf=new Vf;(a=_.P(_.R,11))&&Xc(_.ge(_.R,12),Yg(a),!0)});}).call(this,{});



// This section is the contents of:  https://almosthomeusa.com/wp-content/themes/almosthome/js/infobubble.js

// External source was: https://cdn.rawgit.com/googlemaps/js-info-bubble/gh-pages/src/infobubble.js

// was loaded in header.php by: <!-- script type='text/javascript' src='https://cdn.rawgit.com/googlemaps/js-info-bubble/gh-pages/src/infobubble.js

// OR <script type='text/javascript' src='https://almosthomeusa.com/wp-content/themes/almosthome/js/infobubble.js'></script>

// ==ClosureCompiler==

// @compilation_level ADVANCED_OPTIMIZATIONS

// @externs_url https://raw.githubusercontent.com/google/closure-compiler/master/contrib/externs/maps/google_maps_api_v3_16.js

// ==/ClosureCompiler==



/**

 * @name CSS3 InfoBubble with tabs for Google Maps API V3

 * @version 0.8

 * @author Luke Mahe

 * @fileoverview

 * This library is a CSS Infobubble with tabs. It uses css3 rounded corners and

 * drop shadows and animations. It also allows tabs

 */



/*

 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.

 * You may obtain a copy of the License at

 *

 *     https://www.apache.org/licenses/LICENSE-2.0

 *

 * Unless required by applicable law or agreed to in writing, software

 * distributed under the License is distributed on an "AS IS" BASIS,

 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

 * See the License for the specific language governing permissions and

 * limitations under the License.

 */





/**

 * A CSS3 InfoBubble v0.8

 * @param {Object.<string, *>=} opt_options Optional properties to set.

 * @extends {google.maps.OverlayView}

 * @constructor

 */

function InfoBubble(opt_options) {

  this.extend(InfoBubble, google.maps.OverlayView);

  this.tabs_ = [];

  this.activeTab_ = null;

  this.baseZIndex_ = 100;

  this.isOpen_ = false;



  var options = opt_options || {};



  if (options['backgroundColor'] == undefined) {

    options['backgroundColor'] = this.BACKGROUND_COLOR_;

  }



  if (options['borderColor'] == undefined) {

    options['borderColor'] = this.BORDER_COLOR_;

  }



  if (options['borderRadius'] == undefined) {

    options['borderRadius'] = this.BORDER_RADIUS_;

  }



  if (options['borderWidth'] == undefined) {

    options['borderWidth'] = this.BORDER_WIDTH_;

  }



  if (options['padding'] == undefined) {

    options['padding'] = this.PADDING_;

  }



  if (options['arrowPosition'] == undefined) {

    options['arrowPosition'] = this.ARROW_POSITION_;

  }



  if (options['disableAutoPan'] == undefined) {

    options['disableAutoPan'] = false;

  }



  if (options['disableAnimation'] == undefined) {

    options['disableAnimation'] = false;

  }



  if (options['minWidth'] == undefined) {

    options['minWidth'] = this.MIN_WIDTH_;

  }



  if (options['shadowStyle'] == undefined) {

    options['shadowStyle'] = this.SHADOW_STYLE_;

  }



  if (options['arrowSize'] == undefined) {

    options['arrowSize'] = this.ARROW_SIZE_;

  }



  if (options['arrowStyle'] == undefined) {

    options['arrowStyle'] = this.ARROW_STYLE_;

  }



  if (options['closeSrc'] == undefined) {

    options['closeSrc'] = this.CLOSE_SRC_;

  }



  this.buildDom_();

  this.setValues(options);

}

window['InfoBubble'] = InfoBubble;





/**

 * Default arrow size

 * @const

 * @private

 */

InfoBubble.prototype.ARROW_SIZE_ = 15;





/**

 * Default arrow style

 * @const

 * @private

 */

InfoBubble.prototype.ARROW_STYLE_ = 0;





/**

 * Default shadow style

 * @const

 * @private

 */

InfoBubble.prototype.SHADOW_STYLE_ = 1;





/**

 * Default min width

 * @const

 * @private

 */

InfoBubble.prototype.MIN_WIDTH_ = 50;





/**

 * Default arrow position

 * @const

 * @private

 */

InfoBubble.prototype.ARROW_POSITION_ = 50;





/**

 * Default padding

 * @const

 * @private

 */

InfoBubble.prototype.PADDING_ = 10;





/**

 * Default border width

 * @const

 * @private

 */

InfoBubble.prototype.BORDER_WIDTH_ = 1;





/**

 * Default border color

 * @const

 * @private

 */

InfoBubble.prototype.BORDER_COLOR_ = '#ccc';





/**

 * Default border radius

 * @const

 * @private

 */

InfoBubble.prototype.BORDER_RADIUS_ = 10;





/**

 * Default background color

 * @const

 * @private

 */

InfoBubble.prototype.BACKGROUND_COLOR_ = '#fff';



/**

 * Default close image source

 * @const

 * @private

 */

InfoBubble.prototype.CLOSE_SRC_ = 'https://maps.gstatic.com/intl/en_us/mapfiles/iw_close.gif';



/**

 * Extends a objects prototype by anothers.

 *

 * @param {Object} obj1 The object to be extended.

 * @param {Object} obj2 The object to extend with.

 * @return {Object} The new extended object.

 * @ignore

 */

InfoBubble.prototype.extend = function(obj1, obj2) {

  return (function(object) {

    for (var property in object.prototype) {

      this.prototype[property] = object.prototype[property];

    }

    return this;

  }).apply(obj1, [obj2]);

};





/**

 * Builds the InfoBubble dom

 * @private

 */

InfoBubble.prototype.buildDom_ = function() {

  var bubble = this.bubble_ = document.createElement('DIV');

  bubble.style['position'] = 'absolute';

  bubble.style['zIndex'] = this.baseZIndex_;



  var tabsContainer = this.tabsContainer_ = document.createElement('DIV');

  tabsContainer.style['position'] = 'relative';



  // Close button

  var close = this.close_ = document.createElement('IMG');

  close.style['position'] = 'absolute';

  close.style['border'] = 0;

  close.style['zIndex'] = this.baseZIndex_ + 1;

  close.style['cursor'] = 'pointer';

  close.className = 'js-info-bubble-close';

  close.src = this.get('closeSrc');



  var that = this;

  google.maps.event.addDomListener(close, 'click', function() {

    that.close();

    google.maps.event.trigger(that, 'closeclick');

  });



  // Content area

  var contentContainer = this.contentContainer_ = document.createElement('DIV');

  contentContainer.style['overflowX'] = 'auto';

  contentContainer.style['overflowY'] = 'auto';

  contentContainer.style['cursor'] = 'default';

  contentContainer.style['clear'] = 'both';

  contentContainer.style['position'] = 'relative';



  var content = this.content_ = document.createElement('DIV');

  contentContainer.appendChild(content);



  // Arrow

  var arrow = this.arrow_ = document.createElement('DIV');

  arrow.style['position'] = 'relative';



  var arrowOuter = this.arrowOuter_ = document.createElement('DIV');

  var arrowInner = this.arrowInner_ = document.createElement('DIV');



  var arrowSize = this.getArrowSize_();



  arrowOuter.style['position'] = arrowInner.style['position'] = 'absolute';

  arrowOuter.style['left'] = arrowInner.style['left'] = '50%';

  arrowOuter.style['height'] = arrowInner.style['height'] = '0';

  arrowOuter.style['width'] = arrowInner.style['width'] = '0';

  arrowOuter.style['marginLeft'] = this.px(-arrowSize);

  arrowOuter.style['borderWidth'] = this.px(arrowSize);

  arrowOuter.style['borderBottomWidth'] = 0;



  // Shadow

  var bubbleShadow = this.bubbleShadow_ = document.createElement('DIV');

  bubbleShadow.style['position'] = 'absolute';



  // Hide the InfoBubble by default

  bubble.style['display'] = bubbleShadow.style['display'] = 'none';



  bubble.appendChild(this.tabsContainer_);

  bubble.appendChild(close);

  bubble.appendChild(contentContainer);

  arrow.appendChild(arrowOuter);

  arrow.appendChild(arrowInner);

  bubble.appendChild(arrow);



  var stylesheet = document.createElement('style');

  stylesheet.setAttribute('type', 'text/css');



  /**

   * The animation for the infobubble

   * @type {string}

   */

  this.animationName_ = '_ibani_' + Math.round(Math.random() * 10000);



  var css = '.' + this.animationName_ + '{-webkit-animation-name:' +

      this.animationName_ + ';-webkit-animation-duration:0.5s;' +

      '-webkit-animation-iteration-count:1;}' +

      '@-webkit-keyframes ' + this.animationName_ + ' {from {' +

      '-webkit-transform: scale(0)}50% {-webkit-transform: scale(1.2)}90% ' +

      '{-webkit-transform: scale(0.95)}to {-webkit-transform: scale(1)}}';



  stylesheet.textContent = css;

  document.getElementsByTagName('head')[0].appendChild(stylesheet);

};





/**

 * Sets the background class name

 *

 * @param {string} className The class name to set.

 */

InfoBubble.prototype.setBackgroundClassName = function(className) {

  this.set('backgroundClassName', className);

};

InfoBubble.prototype['setBackgroundClassName'] = InfoBubble.prototype.setBackgroundClassName;





/**

 * changed MVC callback

 */

InfoBubble.prototype.backgroundClassName_changed = function() {

  this.content_.className = this.get('backgroundClassName');

};

InfoBubble.prototype['backgroundClassName_changed'] = InfoBubble.prototype.backgroundClassName_changed;





/**

 * Sets the class of the tab

 *

 * @param {string} className the class name to set.

 */

InfoBubble.prototype.setTabClassName = function(className) {

  this.set('tabClassName', className);

};

InfoBubble.prototype['setTabClassName'] = InfoBubble.prototype.setTabClassName;





/**

 * tabClassName changed MVC callback

 */

InfoBubble.prototype.tabClassName_changed = function() {

  this.updateTabStyles_();

};

InfoBubble.prototype['tabClassName_changed'] = InfoBubble.prototype.tabClassName_changed;





/**

 * Gets the style of the arrow

 *

 * @private

 * @return {number} The style of the arrow.

 */

InfoBubble.prototype.getArrowStyle_ = function() {

  return parseInt(this.get('arrowStyle'), 10) || 0;

};





/**

 * Sets the style of the arrow

 *

 * @param {number} style The style of the arrow.

 */

InfoBubble.prototype.setArrowStyle = function(style) {

  this.set('arrowStyle', style);

};

InfoBubble.prototype['setArrowStyle'] = InfoBubble.prototype.setArrowStyle;





/**

 * Arrow style changed MVC callback

 */

InfoBubble.prototype.arrowStyle_changed = function() {

  this.arrowSize_changed();

};

InfoBubble.prototype['arrowStyle_changed'] = InfoBubble.prototype.arrowStyle_changed;





/**

 * Gets the size of the arrow

 *

 * @private

 * @return {number} The size of the arrow.

 */

InfoBubble.prototype.getArrowSize_ = function() {

  return parseInt(this.get('arrowSize'), 10) || 0;

};





/**

 * Sets the size of the arrow

 *

 * @param {number} size The size of the arrow.

 */

InfoBubble.prototype.setArrowSize = function(size) {

  this.set('arrowSize', size);

};

InfoBubble.prototype['setArrowSize'] = InfoBubble.prototype.setArrowSize;





/**

 * Arrow size changed MVC callback

 */

InfoBubble.prototype.arrowSize_changed = function() {

  this.borderWidth_changed();

};

InfoBubble.prototype['arrowSize_changed'] = InfoBubble.prototype.arrowSize_changed;





/**

 * Set the position of the InfoBubble arrow

 *

 * @param {number} pos The position to set.

 */

InfoBubble.prototype.setArrowPosition = function(pos) {

  this.set('arrowPosition', pos);

};

InfoBubble.prototype['setArrowPosition'] = InfoBubble.prototype.setArrowPosition;





/**

 * Get the position of the InfoBubble arrow

 *

 * @private

 * @return {number} The position..

 */

InfoBubble.prototype.getArrowPosition_ = function() {

  return parseInt(this.get('arrowPosition'), 10) || 0;

};





/**

 * arrowPosition changed MVC callback

 */

InfoBubble.prototype.arrowPosition_changed = function() {

  var pos = this.getArrowPosition_();

  this.arrowOuter_.style['left'] = this.arrowInner_.style['left'] = pos + '%';



  this.redraw_();

};

InfoBubble.prototype['arrowPosition_changed'] = InfoBubble.prototype.arrowPosition_changed;





/**

 * Set the zIndex of the InfoBubble

 *

 * @param {number} zIndex The zIndex to set.

 */

InfoBubble.prototype.setZIndex = function(zIndex) {

  this.set('zIndex', zIndex);

};

InfoBubble.prototype['setZIndex'] = InfoBubble.prototype.setZIndex;





/**

 * Get the zIndex of the InfoBubble

 *

 * @return {number} The zIndex to set.

 */

InfoBubble.prototype.getZIndex = function() {

  return parseInt(this.get('zIndex'), 10) || this.baseZIndex_;

};





/**

 * zIndex changed MVC callback

 */

InfoBubble.prototype.zIndex_changed = function() {

  var zIndex = this.getZIndex();



  this.bubble_.style['zIndex'] = this.baseZIndex_ = zIndex;

  this.close_.style['zIndex'] = zIndex + 1;

};

InfoBubble.prototype['zIndex_changed'] = InfoBubble.prototype.zIndex_changed;





/**

 * Set the style of the shadow

 *

 * @param {number} shadowStyle The style of the shadow.

 */

InfoBubble.prototype.setShadowStyle = function(shadowStyle) {

  this.set('shadowStyle', shadowStyle);

};

InfoBubble.prototype['setShadowStyle'] = InfoBubble.prototype.setShadowStyle;





/**

 * Get the style of the shadow

 *

 * @private

 * @return {number} The style of the shadow.

 */

InfoBubble.prototype.getShadowStyle_ = function() {

  return parseInt(this.get('shadowStyle'), 10) || 0;

};





/**

 * shadowStyle changed MVC callback

 */

InfoBubble.prototype.shadowStyle_changed = function() {

  var shadowStyle = this.getShadowStyle_();



  var display = '';

  var shadow = '';

  var backgroundColor = '';

  switch (shadowStyle) {

    case 0:

      display = 'none';

      break;

    case 1:

      shadow = '40px 15px 10px rgba(33,33,33,0.3)';

      backgroundColor = 'transparent';

      break;

    case 2:

      shadow = '0 0 2px rgba(33,33,33,0.3)';

      backgroundColor = 'rgba(33,33,33,0.35)';

      break;

  }

  this.bubbleShadow_.style['boxShadow'] =

      this.bubbleShadow_.style['webkitBoxShadow'] =

      this.bubbleShadow_.style['MozBoxShadow'] = shadow;

  this.bubbleShadow_.style['backgroundColor'] = backgroundColor;

  if (this.isOpen_) {

    this.bubbleShadow_.style['display'] = display;

    this.draw();

  }

};

InfoBubble.prototype['shadowStyle_changed'] = InfoBubble.prototype.shadowStyle_changed;





/**

 * Show the close button

 */

InfoBubble.prototype.showCloseButton = function() {

  this.set('hideCloseButton', false);

};

InfoBubble.prototype['showCloseButton'] = InfoBubble.prototype.showCloseButton;





/**

 * Hide the close button

 */

InfoBubble.prototype.hideCloseButton = function() {

  this.set('hideCloseButton', true);

};

InfoBubble.prototype['hideCloseButton'] = InfoBubble.prototype.hideCloseButton;





/**

 * hideCloseButton changed MVC callback

 */

InfoBubble.prototype.hideCloseButton_changed = function() {

  this.close_.style['display'] = this.get('hideCloseButton') ? 'none' : '';

};

InfoBubble.prototype['hideCloseButton_changed'] = InfoBubble.prototype.hideCloseButton_changed;





/**

 * Set the background color

 *

 * @param {string} color The color to set.

 */

InfoBubble.prototype.setBackgroundColor = function(color) {

  if (color) {

    this.set('backgroundColor', color);

  }

};

InfoBubble.prototype['setBackgroundColor'] = InfoBubble.prototype.setBackgroundColor;





/**

 * backgroundColor changed MVC callback

 */

InfoBubble.prototype.backgroundColor_changed = function() {

  var backgroundColor = this.get('backgroundColor');

  this.contentContainer_.style['backgroundColor'] = backgroundColor;



  this.arrowInner_.style['borderColor'] = backgroundColor +

      ' transparent transparent';

  this.updateTabStyles_();

};

InfoBubble.prototype['backgroundColor_changed'] = InfoBubble.prototype.backgroundColor_changed;





/**

 * Set the border color

 *

 * @param {string} color The border color.

 */

InfoBubble.prototype.setBorderColor = function(color) {

  if (color) {

    this.set('borderColor', color);

  }

};

InfoBubble.prototype['setBorderColor'] = InfoBubble.prototype.setBorderColor;





/**

 * borderColor changed MVC callback

 */

InfoBubble.prototype.borderColor_changed = function() {

  var borderColor = this.get('borderColor');



  var contentContainer = this.contentContainer_;

  var arrowOuter = this.arrowOuter_;

  contentContainer.style['borderColor'] = borderColor;



  arrowOuter.style['borderColor'] = borderColor +

      ' transparent transparent';



  contentContainer.style['borderStyle'] =

      arrowOuter.style['borderStyle'] =

      this.arrowInner_.style['borderStyle'] = 'solid';



  this.updateTabStyles_();

};

InfoBubble.prototype['borderColor_changed'] = InfoBubble.prototype.borderColor_changed;





/**

 * Set the radius of the border

 *

 * @param {number} radius The radius of the border.

 */

InfoBubble.prototype.setBorderRadius = function(radius) {

  this.set('borderRadius', radius);

};

InfoBubble.prototype['setBorderRadius'] = InfoBubble.prototype.setBorderRadius;





/**

 * Get the radius of the border

 *

 * @private

 * @return {number} The radius of the border.

 */

InfoBubble.prototype.getBorderRadius_ = function() {

  return parseInt(this.get('borderRadius'), 10) || 0;

};





/**

 * borderRadius changed MVC callback

 */

InfoBubble.prototype.borderRadius_changed = function() {

  var borderRadius = this.getBorderRadius_();

  var borderWidth = this.getBorderWidth_();



  this.contentContainer_.style['borderRadius'] =

      this.contentContainer_.style['MozBorderRadius'] =

      this.contentContainer_.style['webkitBorderRadius'] =

      this.bubbleShadow_.style['borderRadius'] =

      this.bubbleShadow_.style['MozBorderRadius'] =

      this.bubbleShadow_.style['webkitBorderRadius'] = this.px(borderRadius);



  this.tabsContainer_.style['paddingLeft'] =

      this.tabsContainer_.style['paddingRight'] =

      this.px(borderRadius + borderWidth);



  this.redraw_();

};

InfoBubble.prototype['borderRadius_changed'] = InfoBubble.prototype.borderRadius_changed;





/**

 * Get the width of the border

 *

 * @private

 * @return {number} width The width of the border.

 */

InfoBubble.prototype.getBorderWidth_ = function() {

  return parseInt(this.get('borderWidth'), 10) || 0;

};





/**

 * Set the width of the border

 *

 * @param {number} width The width of the border.

 */

InfoBubble.prototype.setBorderWidth = function(width) {

  this.set('borderWidth', width);

};

InfoBubble.prototype['setBorderWidth'] = InfoBubble.prototype.setBorderWidth;





/**

 * borderWidth change MVC callback

 */

InfoBubble.prototype.borderWidth_changed = function() {

  var borderWidth = this.getBorderWidth_();



  this.contentContainer_.style['borderWidth'] = this.px(borderWidth);

  this.tabsContainer_.style['top'] = this.px(borderWidth);



  this.updateArrowStyle_();

  this.updateTabStyles_();

  this.borderRadius_changed();

  this.redraw_();

};

InfoBubble.prototype['borderWidth_changed'] = InfoBubble.prototype.borderWidth_changed;





/**

 * Update the arrow style

 * @private

 */

InfoBubble.prototype.updateArrowStyle_ = function() {

  var borderWidth = this.getBorderWidth_();

  var arrowSize = this.getArrowSize_();

  var arrowStyle = this.getArrowStyle_();

  var arrowOuterSizePx = this.px(arrowSize);

  var arrowInnerSizePx = this.px(Math.max(0, arrowSize - borderWidth));



  var outer = this.arrowOuter_;

  var inner = this.arrowInner_;



  this.arrow_.style['marginTop'] = this.px(-borderWidth);

  outer.style['borderTopWidth'] = arrowOuterSizePx;

  inner.style['borderTopWidth'] = arrowInnerSizePx;



  // Full arrow or arrow pointing to the left

  if (arrowStyle == 0 || arrowStyle == 1) {

    outer.style['borderLeftWidth'] = arrowOuterSizePx;

    inner.style['borderLeftWidth'] = arrowInnerSizePx;

  } else {

    outer.style['borderLeftWidth'] = inner.style['borderLeftWidth'] = 0;

  }



  // Full arrow or arrow pointing to the right

  if (arrowStyle == 0 || arrowStyle == 2) {

    outer.style['borderRightWidth'] = arrowOuterSizePx;

    inner.style['borderRightWidth'] = arrowInnerSizePx;

  } else {

    outer.style['borderRightWidth'] = inner.style['borderRightWidth'] = 0;

  }



  if (arrowStyle < 2) {

    outer.style['marginLeft'] = this.px(-(arrowSize));

    inner.style['marginLeft'] = this.px(-(arrowSize - borderWidth));

  } else {

    outer.style['marginLeft'] = inner.style['marginLeft'] = 0;

  }



  // If there is no border then don't show thw outer arrow

  if (borderWidth == 0) {

    outer.style['display'] = 'none';

  } else {

    outer.style['display'] = '';

  }

};





/**

 * Set the padding of the InfoBubble

 *

 * @param {number} padding The padding to apply.

 */

InfoBubble.prototype.setPadding = function(padding) {

  this.set('padding', padding);

};

InfoBubble.prototype['setPadding'] = InfoBubble.prototype.setPadding;





/**

 * Set the close image url

 *

 * @param {string} src The url of the image used as a close icon

 */

InfoBubble.prototype.setCloseSrc = function(src) {

  if (src && this.close_) {

    this.close_.src = src;

  }

};

InfoBubble.prototype['setCloseSrc'] = InfoBubble.prototype.setCloseSrc;





/**

 * Set the padding of the InfoBubble

 *

 * @private

 * @return {number} padding The padding to apply.

 */

InfoBubble.prototype.getPadding_ = function() {

  return parseInt(this.get('padding'), 10) || 0;

};





/**

 * padding changed MVC callback

 */

InfoBubble.prototype.padding_changed = function() {

  var padding = this.getPadding_();

  this.contentContainer_.style['padding'] = this.px(padding);

  this.updateTabStyles_();



  this.redraw_();

};

InfoBubble.prototype['padding_changed'] = InfoBubble.prototype.padding_changed;





/**

 * Add px extention to the number

 *

 * @param {number} num The number to wrap.

 * @return {string|number} A wrapped number.

 */

InfoBubble.prototype.px = function(num) {

  if (num) {

    // 0 doesn't need to be wrapped

    return num + 'px';

  }

  return num;

};





/**

 * Add events to stop propagation

 * @private

 */

InfoBubble.prototype.addEvents_ = function() {

  // We want to cancel all the events so they do not go to the map

  var events = ['mousedown', 'mousemove', 'mouseover', 'mouseout', 'mouseup',

      'mousewheel', 'DOMMouseScroll', 'touchstart', 'touchend', 'touchmove',

      'dblclick', 'contextmenu', 'click'];



  var bubble = this.bubble_;

  this.listeners_ = [];

  for (var i = 0, event; event = events[i]; i++) {

    this.listeners_.push(

      google.maps.event.addDomListener(bubble, event, function(e) {

        e.cancelBubble = true;

        if (e.stopPropagation) {

          e.stopPropagation();

        }

      })

    );

  }

};





/**

 * On Adding the InfoBubble to a map

 * Implementing the OverlayView interface

 */

InfoBubble.prototype.onAdd = function() {

  if (!this.bubble_) {

    this.buildDom_();

  }



  this.addEvents_();



  var panes = this.getPanes();

  if (panes) {

    panes.floatPane.appendChild(this.bubble_);

    panes.floatShadow.appendChild(this.bubbleShadow_);

  }



  /* once the infoBubble has been added to the DOM, fire 'domready' event */

  google.maps.event.trigger(this, 'domready');

};

InfoBubble.prototype['onAdd'] = InfoBubble.prototype.onAdd;





/**

 * Draw the InfoBubble

 * Implementing the OverlayView interface

 */

InfoBubble.prototype.draw = function() {

  var projection = this.getProjection();



  if (!projection) {

    // The map projection is not ready yet so do nothing

    return;

  }



  var latLng = /** @type {google.maps.LatLng} */ (this.get('position'));



  if (!latLng) {

    this.close();

    return;

  }



  var tabHeight = 0;



  if (this.activeTab_) {

    tabHeight = this.activeTab_.offsetHeight;

  }



  var anchorHeight = this.getAnchorHeight_();

  var arrowSize = this.getArrowSize_();

  var arrowPosition = this.getArrowPosition_();



  arrowPosition = arrowPosition / 100;



  var pos = projection.fromLatLngToDivPixel(latLng);

  var width = this.contentContainer_.offsetWidth;

  var height = this.bubble_.offsetHeight;



  if (!width) {

    return;

  }



  // Adjust for the height of the info bubble

  var top = pos.y - (height + arrowSize);



  if (anchorHeight) {

    // If there is an anchor then include the height

    top -= anchorHeight;

  }



  var left = pos.x - (width * arrowPosition);



  this.bubble_.style['top'] = this.px(top);

  this.bubble_.style['left'] = this.px(left);



  var shadowStyle = parseInt(this.get('shadowStyle'), 10);



  switch (shadowStyle) {

    case 1:

      // Shadow is behind

      this.bubbleShadow_.style['top'] = this.px(top + tabHeight - 1);

      this.bubbleShadow_.style['left'] = this.px(left);

      this.bubbleShadow_.style['width'] = this.px(width);

      this.bubbleShadow_.style['height'] =

          this.px(this.contentContainer_.offsetHeight - arrowSize);

      break;

    case 2:

      // Shadow is below

      width = width * 0.8;

      if (anchorHeight) {

        this.bubbleShadow_.style['top'] = this.px(pos.y);

      } else {

        this.bubbleShadow_.style['top'] = this.px(pos.y + arrowSize);

      }

      this.bubbleShadow_.style['left'] = this.px(pos.x - width * arrowPosition);



      this.bubbleShadow_.style['width'] = this.px(width);

      this.bubbleShadow_.style['height'] = this.px(2);

      break;

  }

};

InfoBubble.prototype['draw'] = InfoBubble.prototype.draw;





/**

 * Removing the InfoBubble from a map

 */

InfoBubble.prototype.onRemove = function() {

  if (this.bubble_ && this.bubble_.parentNode) {

    this.bubble_.parentNode.removeChild(this.bubble_);

  }

  if (this.bubbleShadow_ && this.bubbleShadow_.parentNode) {

    this.bubbleShadow_.parentNode.removeChild(this.bubbleShadow_);

  }



  for (var i = 0, listener; listener = this.listeners_[i]; i++) {

    google.maps.event.removeListener(listener);

  }

};

InfoBubble.prototype['onRemove'] = InfoBubble.prototype.onRemove;





/**

 * Is the InfoBubble open

 *

 * @return {boolean} If the InfoBubble is open.

 */

InfoBubble.prototype.isOpen = function() {

  return this.isOpen_;

};

InfoBubble.prototype['isOpen'] = InfoBubble.prototype.isOpen;





/**

 * Close the InfoBubble

 */

InfoBubble.prototype.close = function() {

  if (this.bubble_) {

    this.bubble_.style['display'] = 'none';

    // Remove the animation so we next time it opens it will animate again

    this.bubble_.className =

        this.bubble_.className.replace(this.animationName_, '');

  }



  if (this.bubbleShadow_) {

    this.bubbleShadow_.style['display'] = 'none';

    this.bubbleShadow_.className =

        this.bubbleShadow_.className.replace(this.animationName_, '');

  }

  this.isOpen_ = false;

};

InfoBubble.prototype['close'] = InfoBubble.prototype.close;





/**

 * Open the InfoBubble (asynchronous).

 *

 * @param {google.maps.Map=} opt_map Optional map to open on.

 * @param {google.maps.MVCObject=} opt_anchor Optional anchor to position at.

 */

InfoBubble.prototype.open = function(opt_map, opt_anchor) {

  var that = this;

  window.setTimeout(function() {

    that.open_(opt_map, opt_anchor);

  }, 0);

};





/**

 * Open the InfoBubble

 * @private

 * @param {google.maps.Map=} opt_map Optional map to open on.

 * @param {google.maps.MVCObject=} opt_anchor Optional anchor to position at.

 */

InfoBubble.prototype.open_ = function(opt_map, opt_anchor) {

  this.updateContent_();



  if (opt_map) {

    this.setMap(opt_map);

  }



  if (opt_anchor) {

    this.set('anchor', opt_anchor);

    this.bindTo('anchorPoint', opt_anchor);

    this.bindTo('position', opt_anchor);

  }



  // Show the bubble and the show

  this.bubble_.style['display'] = this.bubbleShadow_.style['display'] = '';

  var animation = !this.get('disableAnimation');



  if (animation) {

    // Add the animation

    this.bubble_.className += ' ' + this.animationName_;

    this.bubbleShadow_.className += ' ' + this.animationName_;

  }



  this.redraw_();

  this.isOpen_ = true;



  var pan = !this.get('disableAutoPan');

  if (pan) {

    var that = this;

    window.setTimeout(function() {

      // Pan into view, done in a time out to make it feel nicer :)

      that.panToView();

    }, 200);

  }

};

InfoBubble.prototype['open'] = InfoBubble.prototype.open;





/**

 * Set the position of the InfoBubble

 *

 * @param {google.maps.LatLng} position The position to set.

 */

InfoBubble.prototype.setPosition = function(position) {

  if (position) {

    this.set('position', position);

  }

};

InfoBubble.prototype['setPosition'] = InfoBubble.prototype.setPosition;





/**

 * Returns the position of the InfoBubble

 *

 * @return {google.maps.LatLng} the position.

 */

InfoBubble.prototype.getPosition = function() {

  return /** @type {google.maps.LatLng} */ (this.get('position'));

};

InfoBubble.prototype['getPosition'] = InfoBubble.prototype.getPosition;





/**

 * position changed MVC callback

 */

InfoBubble.prototype.position_changed = function() {

  this.draw();

};

InfoBubble.prototype['position_changed'] = InfoBubble.prototype.position_changed;





/**

 * Pan the InfoBubble into view

 */

InfoBubble.prototype.panToView = function() {

  var projection = this.getProjection();



  if (!projection) {

    // The map projection is not ready yet so do nothing

    return;

  }



  if (!this.bubble_) {

    // No Bubble yet so do nothing

    return;

  }



  var anchorHeight = this.getAnchorHeight_();

  var height = this.bubble_.offsetHeight + anchorHeight;

  var map = this.get('map');

  var mapDiv = map.getDiv();

  var mapHeight = mapDiv.offsetHeight;



  var latLng = this.getPosition();

  var centerPos = projection.fromLatLngToContainerPixel(map.getCenter());

  var pos = projection.fromLatLngToContainerPixel(latLng);



  // Find out how much space at the top is free

  var spaceTop = centerPos.y - height;



  // Fine out how much space at the bottom is free

  var spaceBottom = mapHeight - centerPos.y;



  var needsTop = spaceTop < 0;

  var deltaY = 0;



  if (needsTop) {

    spaceTop *= -1;

    deltaY = (spaceTop + spaceBottom) / 2;

  }



  pos.y -= deltaY;

  latLng = projection.fromContainerPixelToLatLng(pos);



  if (map.getCenter() != latLng) {

    map.panTo(latLng);

  }

};

InfoBubble.prototype['panToView'] = InfoBubble.prototype.panToView;





/**

 * Converts a HTML string to a document fragment.

 *

 * @param {string} htmlString The HTML string to convert.

 * @return {Node} A HTML document fragment.

 * @private

 */

InfoBubble.prototype.htmlToDocumentFragment_ = function(htmlString) {

  htmlString = htmlString.replace(/^\s*([\S\s]*)\b\s*$/, '$1');

  var tempDiv = document.createElement('DIV');

  tempDiv.innerHTML = htmlString;

  if (tempDiv.childNodes.length == 1) {

    return /** @type {!Node} */ (tempDiv.removeChild(tempDiv.firstChild));

  } else {

    var fragment = document.createDocumentFragment();

    while (tempDiv.firstChild) {

      fragment.appendChild(tempDiv.firstChild);

    }

    return fragment;

  }

};





/**

 * Removes all children from the node.

 *

 * @param {Node} node The node to remove all children from.

 * @private

 */

InfoBubble.prototype.removeChildren_ = function(node) {

  if (!node) {

    return;

  }



  var child;

  while (child = node.firstChild) {

    node.removeChild(child);

  }

};





/**

 * Sets the content of the infobubble.

 *

 * @param {string|Node} content The content to set.

 */

InfoBubble.prototype.setContent = function(content) {

  this.set('content', content);

};

InfoBubble.prototype['setContent'] = InfoBubble.prototype.setContent;





/**

 * Get the content of the infobubble.

 *

 * @return {string|Node} The marker content.

 */

InfoBubble.prototype.getContent = function() {

  return /** @type {Node|string} */ (this.get('content'));

};

InfoBubble.prototype['getContent'] = InfoBubble.prototype.getContent;





/**

 * Sets the marker content and adds loading events to images

 */

InfoBubble.prototype.updateContent_ = function() {

  if (!this.content_) {

    // The Content area doesnt exist.

    return;

  }



  this.removeChildren_(this.content_);

  var content = this.getContent();

  if (content) {

    if (typeof content == 'string') {

      content = this.htmlToDocumentFragment_(content);

    }

    this.content_.appendChild(content);



    var that = this;

    var images = this.content_.getElementsByTagName('IMG');

    for (var i = 0, image; image = images[i]; i++) {

      // Because we don't know the size of an image till it loads, add a

      // listener to the image load so the marker can resize and reposition

      // itself to be the correct height.

      google.maps.event.addDomListener(image, 'load', function() {

        that.imageLoaded_();

      });

    }

  }

  this.redraw_();

};





/**

 * Image loaded

 * @private

 */

InfoBubble.prototype.imageLoaded_ = function() {

  var pan = !this.get('disableAutoPan');

  this.redraw_();

  if (pan && (this.tabs_.length == 0 || this.activeTab_.index == 0)) {

    this.panToView();

  }

};





/**

 * Updates the styles of the tabs

 * @private

 */

InfoBubble.prototype.updateTabStyles_ = function() {

  if (this.tabs_ && this.tabs_.length) {

    for (var i = 0, tab; tab = this.tabs_[i]; i++) {

      this.setTabStyle_(tab.tab);

    }

    this.activeTab_.style['zIndex'] = this.baseZIndex_;

    var borderWidth = this.getBorderWidth_();

    var padding = this.getPadding_() / 2;

    this.activeTab_.style['borderBottomWidth'] = 0;

    this.activeTab_.style['paddingBottom'] = this.px(padding + borderWidth);

  }

};





/**

 * Sets the style of a tab

 * @private

 * @param {Element} tab The tab to style.

 */

InfoBubble.prototype.setTabStyle_ = function(tab) {

  var backgroundColor = this.get('backgroundColor');

  var borderColor = this.get('borderColor');

  var borderRadius = this.getBorderRadius_();

  var borderWidth = this.getBorderWidth_();

  var padding = this.getPadding_();



  var marginRight = this.px(-(Math.max(padding, borderRadius)));

  var borderRadiusPx = this.px(borderRadius);



  var index = this.baseZIndex_;

  if (tab.index) {

    index -= tab.index;

  }



  // The styles for the tab

  var styles = {

    'cssFloat': 'left',

    'position': 'relative',

    'cursor': 'pointer',

    'backgroundColor': backgroundColor,

    'border': this.px(borderWidth) + ' solid ' + borderColor,

    'padding': this.px(padding / 2) + ' ' + this.px(padding),

    'marginRight': marginRight,

    'whiteSpace': 'nowrap',

    'borderRadiusTopLeft': borderRadiusPx,

    'MozBorderRadiusTopleft': borderRadiusPx,

    'webkitBorderTopLeftRadius': borderRadiusPx,

    'borderRadiusTopRight': borderRadiusPx,

    'MozBorderRadiusTopright': borderRadiusPx,

    'webkitBorderTopRightRadius': borderRadiusPx,

    'zIndex': index,

    'display': 'inline'

  };



  for (var style in styles) {

    tab.style[style] = styles[style];

  }



  var className = this.get('tabClassName');

  if (className != undefined) {

    tab.className += ' ' + className;

  }

};





/**

 * Add user actions to a tab

 * @private

 * @param {Object} tab The tab to add the actions to.

 */

InfoBubble.prototype.addTabActions_ = function(tab) {

  var that = this;

  tab.listener_ = google.maps.event.addDomListener(tab, 'click', function() {

    that.setTabActive_(this);

  });

};





/**

 * Set a tab at a index to be active

 *

 * @param {number} index The index of the tab.

 */

InfoBubble.prototype.setTabActive = function(index) {

  var tab = this.tabs_[index - 1];



  if (tab) {

    this.setTabActive_(tab.tab);

  }

};

InfoBubble.prototype['setTabActive'] = InfoBubble.prototype.setTabActive;





/**

 * Set a tab to be active

 * @private

 * @param {Object} tab The tab to set active.

 */

InfoBubble.prototype.setTabActive_ = function(tab) {

  if (!tab) {

    this.setContent('');

    this.updateContent_();

    return;

  }



  var padding = this.getPadding_() / 2;

  var borderWidth = this.getBorderWidth_();



  if (this.activeTab_) {

    var activeTab = this.activeTab_;

    activeTab.style['zIndex'] = this.baseZIndex_ - activeTab.index;

    activeTab.style['paddingBottom'] = this.px(padding);

    activeTab.style['borderBottomWidth'] = this.px(borderWidth);

  }



  tab.style['zIndex'] = this.baseZIndex_;

  tab.style['borderBottomWidth'] = 0;

  tab.style['marginBottomWidth'] = '-10px';

  tab.style['paddingBottom'] = this.px(padding + borderWidth);



  this.setContent(this.tabs_[tab.index].content);

  this.updateContent_();



  this.activeTab_ = tab;



  this.redraw_();

};





/**

 * Set the max width of the InfoBubble

 *

 * @param {number} width The max width.

 */

InfoBubble.prototype.setMaxWidth = function(width) {

  this.set('maxWidth', width);

};

InfoBubble.prototype['setMaxWidth'] = InfoBubble.prototype.setMaxWidth;





/**

 * maxWidth changed MVC callback

 */

InfoBubble.prototype.maxWidth_changed = function() {

  this.redraw_();

};

InfoBubble.prototype['maxWidth_changed'] = InfoBubble.prototype.maxWidth_changed;





/**

 * Set the max height of the InfoBubble

 *

 * @param {number} height The max height.

 */

InfoBubble.prototype.setMaxHeight = function(height) {

  this.set('maxHeight', height);

};

InfoBubble.prototype['setMaxHeight'] = InfoBubble.prototype.setMaxHeight;





/**

 * maxHeight changed MVC callback

 */

InfoBubble.prototype.maxHeight_changed = function() {

  this.redraw_();

};

InfoBubble.prototype['maxHeight_changed'] = InfoBubble.prototype.maxHeight_changed;





/**

 * Set the min width of the InfoBubble

 *

 * @param {number} width The min width.

 */

InfoBubble.prototype.setMinWidth = function(width) {

  this.set('minWidth', width);

};

InfoBubble.prototype['setMinWidth'] = InfoBubble.prototype.setMinWidth;





/**

 * minWidth changed MVC callback

 */

InfoBubble.prototype.minWidth_changed = function() {

  this.redraw_();

};

InfoBubble.prototype['minWidth_changed'] = InfoBubble.prototype.minWidth_changed;





/**

 * Set the min height of the InfoBubble

 *

 * @param {number} height The min height.

 */

InfoBubble.prototype.setMinHeight = function(height) {

  this.set('minHeight', height);

};

InfoBubble.prototype['setMinHeight'] = InfoBubble.prototype.setMinHeight;





/**

 * minHeight changed MVC callback

 */

InfoBubble.prototype.minHeight_changed = function() {

  this.redraw_();

};

InfoBubble.prototype['minHeight_changed'] = InfoBubble.prototype.minHeight_changed;





/**

 * Add a tab

 *

 * @param {string} label The label of the tab.

 * @param {string|Element} content The content of the tab.

 */

InfoBubble.prototype.addTab = function(label, content) {

  var tab = document.createElement('DIV');

  tab.innerHTML = label;



  this.setTabStyle_(tab);

  this.addTabActions_(tab);



  this.tabsContainer_.appendChild(tab);



  this.tabs_.push({

    label: label,

    content: content,

    tab: tab

  });



  tab.index = this.tabs_.length - 1;

  tab.style['zIndex'] = this.baseZIndex_ - tab.index;



  if (!this.activeTab_) {

    this.setTabActive_(tab);

  }



  tab.className = tab.className + ' ' + this.animationName_;



  this.redraw_();

};

InfoBubble.prototype['addTab'] = InfoBubble.prototype.addTab;





/**

 * Update a tab at a speicifc index

 *

 * @param {number} index The index of the tab.

 * @param {?string} opt_label The label to change to.

 * @param {?string} opt_content The content to update to.

 */

InfoBubble.prototype.updateTab = function(index, opt_label, opt_content) {

  if (!this.tabs_.length || index < 0 || index >= this.tabs_.length) {

    return;

  }



  var tab = this.tabs_[index];

  if (opt_label != undefined) {

    tab.tab.innerHTML = tab.label = opt_label;

  }



  if (opt_content != undefined) {

    tab.content = opt_content;

  }



  if (this.activeTab_ == tab.tab) {

    this.setContent(tab.content);

    this.updateContent_();

  }

  this.redraw_();

};

InfoBubble.prototype['updateTab'] = InfoBubble.prototype.updateTab;





/**

 * Remove a tab at a specific index

 *

 * @param {number} index The index of the tab to remove.

 */

InfoBubble.prototype.removeTab = function(index) {

  if (!this.tabs_.length || index < 0 || index >= this.tabs_.length) {

    return;

  }



  var tab = this.tabs_[index];

  tab.tab.parentNode.removeChild(tab.tab);



  google.maps.event.removeListener(tab.tab.listener_);



  this.tabs_.splice(index, 1);



  delete tab;



  for (var i = 0, t; t = this.tabs_[i]; i++) {

    t.tab.index = i;

  }



  if (tab.tab == this.activeTab_) {

    // Removing the current active tab

    if (this.tabs_[index]) {

      // Show the tab to the right

      this.activeTab_ = this.tabs_[index].tab;

    } else if (this.tabs_[index - 1]) {

      // Show a tab to the left

      this.activeTab_ = this.tabs_[index - 1].tab;

    } else {

      // No tabs left to sho

      this.activeTab_ = undefined;

    }



    this.setTabActive_(this.activeTab_);

  }



  this.redraw_();

};

InfoBubble.prototype['removeTab'] = InfoBubble.prototype.removeTab;





/**

 * Get the size of an element

 * @private

 * @param {Node|string} element The element to size.

 * @param {number=} opt_maxWidth Optional max width of the element.

 * @param {number=} opt_maxHeight Optional max height of the element.

 * @return {google.maps.Size} The size of the element.

 */

InfoBubble.prototype.getElementSize_ = function(element, opt_maxWidth,

                                                opt_maxHeight) {

  var sizer = document.createElement('DIV');

  sizer.style['display'] = 'inline';

  sizer.style['position'] = 'absolute';

  sizer.style['visibility'] = 'hidden';



  if (typeof element == 'string') {

    sizer.innerHTML = element;

  } else {

    sizer.appendChild(element.cloneNode(true));

  }



  document.body.appendChild(sizer);

  var size = new google.maps.Size(sizer.offsetWidth, sizer.offsetHeight);



  // If the width is bigger than the max width then set the width and size again

  if (opt_maxWidth && size.width > opt_maxWidth) {

    sizer.style['width'] = this.px(opt_maxWidth);

    size = new google.maps.Size(sizer.offsetWidth, sizer.offsetHeight);

  }



  // If the height is bigger than the max height then set the height and size

  // again

  if (opt_maxHeight && size.height > opt_maxHeight) {

    sizer.style['height'] = this.px(opt_maxHeight);

    size = new google.maps.Size(sizer.offsetWidth, sizer.offsetHeight);

  }



  document.body.removeChild(sizer);

  delete sizer;

  return size;

};





/**

 * Redraw the InfoBubble

 * @private

 */

InfoBubble.prototype.redraw_ = function() {

  this.figureOutSize_();

  this.positionCloseButton_();

  this.draw();

};





/**

 * Figure out the optimum size of the InfoBubble

 * @private

 */

InfoBubble.prototype.figureOutSize_ = function() {

  var map = this.get('map');



  if (!map) {

    return;

  }



  var padding = this.getPadding_();

  var borderWidth = this.getBorderWidth_();

  var borderRadius = this.getBorderRadius_();

  var arrowSize = this.getArrowSize_();



  var mapDiv = map.getDiv();

  var gutter = arrowSize * 2;

  var mapWidth = mapDiv.offsetWidth - gutter;

  var mapHeight = mapDiv.offsetHeight - gutter - this.getAnchorHeight_();

  var tabHeight = 0;

  var width = /** @type {number} */ (this.get('minWidth') || 0);

  var height = /** @type {number} */ (this.get('minHeight') || 0);

  var maxWidth = /** @type {number} */ (this.get('maxWidth') || 0);

  var maxHeight = /** @type {number} */ (this.get('maxHeight') || 0);



  maxWidth = Math.min(mapWidth, maxWidth);

  maxHeight = Math.min(mapHeight, maxHeight);



  var tabWidth = 0;

  if (this.tabs_.length) {

    // If there are tabs then you need to check the size of each tab's content

    for (var i = 0, tab; tab = this.tabs_[i]; i++) {

      var tabSize = this.getElementSize_(tab.tab, maxWidth, maxHeight);

      var contentSize = this.getElementSize_(tab.content, maxWidth, maxHeight);



      if (width < tabSize.width) {

        width = tabSize.width;

      }



      // Add up all the tab widths because they might end up being wider than

      // the content

      tabWidth += tabSize.width;



      if (height < tabSize.height) {

        height = tabSize.height;

      }



      if (tabSize.height > tabHeight) {

        tabHeight = tabSize.height;

      }



      if (width < contentSize.width) {

        width = contentSize.width;

      }



      if (height < contentSize.height) {

        height = contentSize.height;

      }

    }

  } else {

    var content = /** @type {string|Node} */ (this.get('content'));

    if (typeof content == 'string') {

      content = this.htmlToDocumentFragment_(content);

    }

    if (content) {

      var contentSize = this.getElementSize_(content, maxWidth, maxHeight);



      if (width < contentSize.width) {

        width = contentSize.width;

      }



      if (height < contentSize.height) {

        height = contentSize.height;

      }

    }

  }



  if (maxWidth) {

    width = Math.min(width, maxWidth);

  }



  if (maxHeight) {

    height = Math.min(height, maxHeight);

  }



  width = Math.max(width, tabWidth);



  if (width == tabWidth) {

    width = width + 2 * padding;

  }



  arrowSize = arrowSize * 2;

  width = Math.max(width, arrowSize);



  // Maybe add this as a option so they can go bigger than the map if the user

  // wants

  if (width > mapWidth) {

    width = mapWidth;

  }



  if (height > mapHeight) {

    height = mapHeight - tabHeight;

  }



  if (this.tabsContainer_) {

    this.tabHeight_ = tabHeight;

    this.tabsContainer_.style['width'] = this.px(tabWidth);

  }



  this.contentContainer_.style['width'] = this.px(width);

  this.contentContainer_.style['height'] = this.px(height);

};





/**

 *  Get the height of the anchor

 *

 *  This function is a hack for now and doesn't really work that good, need to

 *  wait for pixelBounds to be correctly exposed.

 *  @private

 *  @return {number} The height of the anchor.

 */

InfoBubble.prototype.getAnchorHeight_ = function() {

  var anchor = this.get('anchor');

  if (anchor) {

    var anchorPoint = /** @type google.maps.Point */(this.get('anchorPoint'));



    if (anchorPoint) {

      return -1 * anchorPoint.y;

    }

  }

  return 0;

};



InfoBubble.prototype.anchorPoint_changed = function() {

  this.draw();

};

InfoBubble.prototype['anchorPoint_changed'] = InfoBubble.prototype.anchorPoint_changed;





/**

 * Position the close button in the right spot.

 * @private

 */

InfoBubble.prototype.positionCloseButton_ = function() {

  var br = this.getBorderRadius_();

  var bw = this.getBorderWidth_();



  var right = 2;

  var top = 2;



  if (this.tabs_.length && this.tabHeight_) {

    top += this.tabHeight_;

  }



  top += bw;

  right += bw;



  var c = this.contentContainer_;

  if (c && c.clientHeight < c.scrollHeight) {

    // If there are scrollbars then move the cross in so it is not over

    // scrollbar

    right += 15;

  }



  this.close_.style['right'] = this.px(right);

  this.close_.style['top'] = this.px(top);

};



// This section is the contents of:  https://almosthomeusa.com/wp-content/themes/almosthome/js/markerwithlabel.js

/**

 * @name MarkerWithLabel for V3

 * @version 1.1.9 [June 30, 2013]

 * @author Gary Little (inspired by code from Marc Ridey of Google).

 * @copyright Copyright 2012 Gary Little [gary at luxcentral.com]

 * @fileoverview MarkerWithLabel extends the Google Maps JavaScript API V3

 *  <code>google.maps.Marker</code> class.

 *  <p>

 *  MarkerWithLabel allows you to define markers with associated labels. As you would expect,

 *  if the marker is draggable, so too will be the label. In addition, a marker with a label

 *  responds to all mouse events in the same manner as a regular marker. It also fires mouse

 *  events and "property changed" events just as a regular marker would. Version 1.1 adds

 *  support for the raiseOnDrag feature introduced in API V3.3.

 *  <p>

 *  If you drag a marker by its label, you can cancel the drag and return the marker to its

 *  original position by pressing the <code>Esc</code> key. This doesn't work if you drag the marker

 *  itself because this feature is not (yet) supported in the <code>google.maps.Marker</code> class.

 */



/*!

 *

 * Licensed under the Apache License, Version 2.0 (the "License");

 * you may not use this file except in compliance with the License.

 * You may obtain a copy of the License at

 *

 *       https://www.apache.org/licenses/LICENSE-2.0

 *

 * Unless required by applicable law or agreed to in writing, software

 * distributed under the License is distributed on an "AS IS" BASIS,

 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

 * See the License for the specific language governing permissions and

 * limitations under the License.

 */



/*jslint browser:true */

/*global document,google */



/**

 * @param {Function} childCtor Child class.

 * @param {Function} parentCtor Parent class.

 */

function inherits(childCtor, parentCtor) {

  /** @constructor */

  function tempCtor() {};

  tempCtor.prototype = parentCtor.prototype;

  childCtor.superClass_ = parentCtor.prototype;

  childCtor.prototype = new tempCtor();

  /** @override */

  childCtor.prototype.constructor = childCtor;

}



/**

 * This constructor creates a label and associates it with a marker.

 * It is for the private use of the MarkerWithLabel class.

 * @constructor

 * @param {Marker} marker The marker with which the label is to be associated.

 * @param {string} crossURL The URL of the cross image =.

 * @param {string} handCursor The URL of the hand cursor.

 * @private

 */

function MarkerLabel_(marker, crossURL, handCursorURL) {

  this.marker_ = marker;

  this.handCursorURL_ = marker.handCursorURL;



  this.labelDiv_ = document.createElement("div");

  this.labelDiv_.style.cssText = "position: absolute; overflow: hidden;";



  // Set up the DIV for handling mouse events in the label. This DIV forms a transparent veil

  // in the "overlayMouseTarget" pane, a veil that covers just the label. This is done so that

  // events can be captured even if the label is in the shadow of a google.maps.InfoWindow.

  // Code is included here to ensure the veil is always exactly the same size as the label.

  this.eventDiv_ = document.createElement("div");

  this.eventDiv_.style.cssText = this.labelDiv_.style.cssText;



  // This is needed for proper behavior on MSIE:

  this.eventDiv_.setAttribute("onselectstart", "return false;");

  this.eventDiv_.setAttribute("ondragstart", "return false;");



  // Get the DIV for the "X" to be displayed when the marker is raised.

  this.crossDiv_ = MarkerLabel_.getSharedCross(crossURL);

}

inherits(MarkerLabel_, google.maps.OverlayView);



/**

 * Returns the DIV for the cross used when dragging a marker when the

 * raiseOnDrag parameter set to true. One cross is shared with all markers.

 * @param {string} crossURL The URL of the cross image =.

 * @private

 */

MarkerLabel_.getSharedCross = function (crossURL) {

  var div;

  if (typeof MarkerLabel_.getSharedCross.crossDiv === "undefined") {

    div = document.createElement("img");

    div.style.cssText = "position: absolute; z-index: 1000002; display: none;";

    // Hopefully Google never changes the standard "X" attributes:

    div.style.marginLeft = "-8px";

    div.style.marginTop = "-9px";

    div.src = crossURL;

    MarkerLabel_.getSharedCross.crossDiv = div;

  }

  return MarkerLabel_.getSharedCross.crossDiv;

};



/**

 * Adds the DIV representing the label to the DOM. This method is called

 * automatically when the marker's <code>setMap</code> method is called.

 * @private

 */

MarkerLabel_.prototype.onAdd = function () {

  var me = this;

  var cMouseIsDown = false;

  var cDraggingLabel = false;

  var cSavedZIndex;

  var cLatOffset, cLngOffset;

  var cIgnoreClick;

  var cRaiseEnabled;

  var cStartPosition;

  var cStartCenter;

  // Constants:

  var cRaiseOffset = 20;

  var cDraggingCursor = "url(" + this.handCursorURL_ + ")";



  // Stops all processing of an event.

  //

  var cAbortEvent = function (e) {

    if (e.preventDefault) {

      e.preventDefault();

    }

    e.cancelBubble = true;

    if (e.stopPropagation) {

      e.stopPropagation();

    }

  };



  var cStopBounce = function () {

    me.marker_.setAnimation(null);

  };



  this.getPanes().overlayImage.appendChild(this.labelDiv_);

  this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_);

  // One cross is shared with all markers, so only add it once:

  if (typeof MarkerLabel_.getSharedCross.processed === "undefined") {

    this.getPanes().overlayImage.appendChild(this.crossDiv_);

    MarkerLabel_.getSharedCross.processed = true;

  }



  this.listeners_ = [

    google.maps.event.addDomListener(this.eventDiv_, "mouseover", function (e) {

      if (me.marker_.getDraggable() || me.marker_.getClickable()) {

        this.style.cursor = "pointer";

        google.maps.event.trigger(me.marker_, "mouseover", e);

      }

    }),

    google.maps.event.addDomListener(this.eventDiv_, "mouseout", function (e) {

      if ((me.marker_.getDraggable() || me.marker_.getClickable()) && !cDraggingLabel) {

        this.style.cursor = me.marker_.getCursor();

        google.maps.event.trigger(me.marker_, "mouseout", e);

      }

    }),

    google.maps.event.addDomListener(this.eventDiv_, "mousedown", function (e) {

      cDraggingLabel = false;

      if (me.marker_.getDraggable()) {

        cMouseIsDown = true;

        this.style.cursor = cDraggingCursor;

      }

      if (me.marker_.getDraggable() || me.marker_.getClickable()) {

        google.maps.event.trigger(me.marker_, "mousedown", e);

        cAbortEvent(e); // Prevent map pan when starting a drag on a label

      }

    }),

    google.maps.event.addDomListener(document, "mouseup", function (mEvent) {

      var position;

      if (cMouseIsDown) {

        cMouseIsDown = false;

        me.eventDiv_.style.cursor = "pointer";

        google.maps.event.trigger(me.marker_, "mouseup", mEvent);

      }

      if (cDraggingLabel) {

        if (cRaiseEnabled) { // Lower the marker & label

          position = me.getProjection().fromLatLngToDivPixel(me.marker_.getPosition());

          position.y += cRaiseOffset;

          me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));

          // This is not the same bouncing style as when the marker portion is dragged,

          // but it will have to do:

          try { // Will fail if running Google Maps API earlier than V3.3

            me.marker_.setAnimation(google.maps.Animation.BOUNCE);

            setTimeout(cStopBounce, 1406);

          } catch (e) {}

        }

        me.crossDiv_.style.display = "none";

        me.marker_.setZIndex(cSavedZIndex);

        cIgnoreClick = true; // Set flag to ignore the click event reported after a label drag

        cDraggingLabel = false;

        mEvent.latLng = me.marker_.getPosition();

        google.maps.event.trigger(me.marker_, "dragend", mEvent);

      }

    }),

    google.maps.event.addListener(me.marker_.getMap(), "mousemove", function (mEvent) {

      var position;

      if (cMouseIsDown) {

        if (cDraggingLabel) {

          // Change the reported location from the mouse position to the marker position:

          mEvent.latLng = new google.maps.LatLng(mEvent.latLng.lat() - cLatOffset, mEvent.latLng.lng() - cLngOffset);

          position = me.getProjection().fromLatLngToDivPixel(mEvent.latLng);

          if (cRaiseEnabled) {

            me.crossDiv_.style.left = position.x + "px";

            me.crossDiv_.style.top = position.y + "px";

            me.crossDiv_.style.display = "";

            position.y -= cRaiseOffset;

          }

          me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));

          if (cRaiseEnabled) { // Don't raise the veil; this hack needed to make MSIE act properly

            me.eventDiv_.style.top = (position.y + cRaiseOffset) + "px";

          }

          google.maps.event.trigger(me.marker_, "drag", mEvent);

        } else {

          // Calculate offsets from the click point to the marker position:

          cLatOffset = mEvent.latLng.lat() - me.marker_.getPosition().lat();

          cLngOffset = mEvent.latLng.lng() - me.marker_.getPosition().lng();

          cSavedZIndex = me.marker_.getZIndex();

          cStartPosition = me.marker_.getPosition();

          cStartCenter = me.marker_.getMap().getCenter();

          cRaiseEnabled = me.marker_.get("raiseOnDrag");

          cDraggingLabel = true;

          me.marker_.setZIndex(1000000); // Moves the marker & label to the foreground during a drag

          mEvent.latLng = me.marker_.getPosition();

          google.maps.event.trigger(me.marker_, "dragstart", mEvent);

        }

      }

    }),

    google.maps.event.addDomListener(document, "keydown", function (e) {

      if (cDraggingLabel) {

        if (e.keyCode === 27) { // Esc key

          cRaiseEnabled = false;

          me.marker_.setPosition(cStartPosition);

          me.marker_.getMap().setCenter(cStartCenter);

          google.maps.event.trigger(document, "mouseup", e);

        }

      }

    }),

    google.maps.event.addDomListener(this.eventDiv_, "click", function (e) {

      if (me.marker_.getDraggable() || me.marker_.getClickable()) {

        if (cIgnoreClick) { // Ignore the click reported when a label drag ends

          cIgnoreClick = false;

        } else {

          google.maps.event.trigger(me.marker_, "click", e);

          cAbortEvent(e); // Prevent click from being passed on to map

        }

      }

    }),

    google.maps.event.addDomListener(this.eventDiv_, "dblclick", function (e) {

      if (me.marker_.getDraggable() || me.marker_.getClickable()) {

        google.maps.event.trigger(me.marker_, "dblclick", e);

        cAbortEvent(e); // Prevent map zoom when double-clicking on a label

      }

    }),

    google.maps.event.addListener(this.marker_, "dragstart", function (mEvent) {

      if (!cDraggingLabel) {

        cRaiseEnabled = this.get("raiseOnDrag");

      }

    }),

    google.maps.event.addListener(this.marker_, "drag", function (mEvent) {

      if (!cDraggingLabel) {

        if (cRaiseEnabled) {

          me.setPosition(cRaiseOffset);

          // During a drag, the marker's z-index is temporarily set to 1000000 to

          // ensure it appears above all other markers. Also set the label's z-index

          // to 1000000 (plus or minus 1 depending on whether the label is supposed

          // to be above or below the marker).

          me.labelDiv_.style.zIndex = 1000000 + (this.get("labelInBackground") ? -1 : +1);

        }

      }

    }),

    google.maps.event.addListener(this.marker_, "dragend", function (mEvent) {

      if (!cDraggingLabel) {

        if (cRaiseEnabled) {

          me.setPosition(0); // Also restores z-index of label

        }

      }

    }),

    google.maps.event.addListener(this.marker_, "position_changed", function () {

      me.setPosition();

    }),

    google.maps.event.addListener(this.marker_, "zindex_changed", function () {

      me.setZIndex();

    }),

    google.maps.event.addListener(this.marker_, "visible_changed", function () {

      me.setVisible();

    }),

    google.maps.event.addListener(this.marker_, "labelvisible_changed", function () {

      me.setVisible();

    }),

    google.maps.event.addListener(this.marker_, "title_changed", function () {

      me.setTitle();

    }),

    google.maps.event.addListener(this.marker_, "labelcontent_changed", function () {

      me.setContent();

    }),

    google.maps.event.addListener(this.marker_, "labelanchor_changed", function () {

      me.setAnchor();

    }),

    google.maps.event.addListener(this.marker_, "labelclass_changed", function () {

      me.setStyles();

    }),

    google.maps.event.addListener(this.marker_, "labelstyle_changed", function () {

      me.setStyles();

    })

  ];

};



/**

 * Removes the DIV for the label from the DOM. It also removes all event handlers.

 * This method is called automatically when the marker's <code>setMap(null)</code>

 * method is called.

 * @private

 */

MarkerLabel_.prototype.onRemove = function () {

  var i;

  this.labelDiv_.parentNode.removeChild(this.labelDiv_);

  this.eventDiv_.parentNode.removeChild(this.eventDiv_);



  // Remove event listeners:

  for (i = 0; i < this.listeners_.length; i++) {

    google.maps.event.removeListener(this.listeners_[i]);

  }

};



/**

 * Draws the label on the map.

 * @private

 */

MarkerLabel_.prototype.draw = function () {

  this.setContent();

  this.setTitle();

  this.setStyles();

};



/**

 * Sets the content of the label.

 * The content can be plain text or an HTML DOM node.

 * @private

 */

MarkerLabel_.prototype.setContent = function () {

  var content = this.marker_.get("labelContent");

  if (typeof content.nodeType === "undefined") {

    this.labelDiv_.innerHTML = content;

    this.eventDiv_.innerHTML = this.labelDiv_.innerHTML;

  } else {

    this.labelDiv_.innerHTML = ""; // Remove current content

    this.labelDiv_.appendChild(content);

    content = content.cloneNode(true);

    this.eventDiv_.appendChild(content);

  }

};



/**

 * Sets the content of the tool tip for the label. It is

 * always set to be the same as for the marker itself.

 * @private

 */

MarkerLabel_.prototype.setTitle = function () {

  this.eventDiv_.title = this.marker_.getTitle() || "";

};



/**

 * Sets the style of the label by setting the style sheet and applying

 * other specific styles requested.

 * @private

 */

MarkerLabel_.prototype.setStyles = function () {

  var i, labelStyle;



  // Apply style values from the style sheet defined in the labelClass parameter:

  this.labelDiv_.className = this.marker_.get("labelClass");

  this.eventDiv_.className = this.labelDiv_.className;



  // Clear existing inline style values:

  this.labelDiv_.style.cssText = "";

  this.eventDiv_.style.cssText = "";

  // Apply style values defined in the labelStyle parameter:

  labelStyle = this.marker_.get("labelStyle");

  for (i in labelStyle) {

    if (labelStyle.hasOwnProperty(i)) {

      this.labelDiv_.style[i] = labelStyle[i];

      this.eventDiv_.style[i] = labelStyle[i];

    }

  }

  this.setMandatoryStyles();

};



/**

 * Sets the mandatory styles to the DIV representing the label as well as to the

 * associated event DIV. This includes setting the DIV position, z-index, and visibility.

 * @private

 */

MarkerLabel_.prototype.setMandatoryStyles = function () {

  this.labelDiv_.style.position = "absolute";

  this.labelDiv_.style.overflow = "hidden";

  // Make sure the opacity setting causes the desired effect on MSIE:

  if (typeof this.labelDiv_.style.opacity !== "undefined" && this.labelDiv_.style.opacity !== "") {

    this.labelDiv_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(opacity=" + (this.labelDiv_.style.opacity * 100) + ")\"";

    this.labelDiv_.style.filter = "alpha(opacity=" + (this.labelDiv_.style.opacity * 100) + ")";

  }



  this.eventDiv_.style.position = this.labelDiv_.style.position;

  this.eventDiv_.style.overflow = this.labelDiv_.style.overflow;

  this.eventDiv_.style.opacity = 0.01; // Don't use 0; DIV won't be clickable on MSIE

  this.eventDiv_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(opacity=1)\"";

  this.eventDiv_.style.filter = "alpha(opacity=1)"; // For MSIE



  this.setAnchor();

  this.setPosition(); // This also updates z-index, if necessary.

  this.setVisible();

};



/**

 * Sets the anchor point of the label.

 * @private

 */

MarkerLabel_.prototype.setAnchor = function () {

  var anchor = this.marker_.get("labelAnchor");

  this.labelDiv_.style.marginLeft = -anchor.x + "px";

  this.labelDiv_.style.marginTop = -anchor.y + "px";

  this.eventDiv_.style.marginLeft = -anchor.x + "px";

  this.eventDiv_.style.marginTop = -anchor.y + "px";

};



/**

 * Sets the position of the label. The z-index is also updated, if necessary.

 * @private

 */

MarkerLabel_.prototype.setPosition = function (yOffset) {

  var position = this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());

  if (typeof yOffset === "undefined") {

    yOffset = 0;

  }

  this.labelDiv_.style.left = Math.round(position.x) + "px";

  this.labelDiv_.style.top = Math.round(position.y - yOffset) + "px";

  this.eventDiv_.style.left = this.labelDiv_.style.left;

  this.eventDiv_.style.top = this.labelDiv_.style.top;



  this.setZIndex();

};



/**

 * Sets the z-index of the label. If the marker's z-index property has not been defined, the z-index

 * of the label is set to the vertical coordinate of the label. This is in keeping with the default

 * stacking order for Google Maps: markers to the south are in front of markers to the north.

 * @private

 */

MarkerLabel_.prototype.setZIndex = function () {

  var zAdjust = (this.marker_.get("labelInBackground") ? -1 : +1);

  if (typeof this.marker_.getZIndex() === "undefined") {

    this.labelDiv_.style.zIndex = parseInt(this.labelDiv_.style.top, 10) + zAdjust;

    this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;

  } else {

    this.labelDiv_.style.zIndex = this.marker_.getZIndex() + zAdjust;

    this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;

  }

};



/**

 * Sets the visibility of the label. The label is visible only if the marker itself is

 * visible (i.e., its visible property is true) and the labelVisible property is true.

 * @private

 */

MarkerLabel_.prototype.setVisible = function () {

  if (this.marker_.get("labelVisible")) {

    this.labelDiv_.style.display = this.marker_.getVisible() ? "block" : "none";

  } else {

    this.labelDiv_.style.display = "none";

  }

  this.eventDiv_.style.display = this.labelDiv_.style.display;

};



/**

 * @name MarkerWithLabelOptions

 * @class This class represents the optional parameter passed to the {@link MarkerWithLabel} constructor.

 *  The properties available are the same as for <code>google.maps.Marker</code> with the addition

 *  of the properties listed below. To change any of these additional properties after the labeled

 *  marker has been created, call <code>google.maps.Marker.set(propertyName, propertyValue)</code>.

 *  <p>

 *  When any of these properties changes, a property changed event is fired. The names of these

 *  events are derived from the name of the property and are of the form <code>propertyname_changed</code>.

 *  For example, if the content of the label changes, a <code>labelcontent_changed</code> event

 *  is fired.

 *  <p>

 * @property {string|Node} [labelContent] The content of the label (plain text or an HTML DOM node).

 * @property {Point} [labelAnchor] By default, a label is drawn with its anchor point at (0,0) so

 *  that its top left corner is positioned at the anchor point of the associated marker. Use this

 *  property to change the anchor point of the label. For example, to center a 50px-wide label

 *  beneath a marker, specify a <code>labelAnchor</code> of <code>google.maps.Point(25, 0)</code>.

 *  (Note: x-values increase to the right and y-values increase to the top.)

 * @property {string} [labelClass] The name of the CSS class defining the styles for the label.

 *  Note that style values for <code>position</code>, <code>overflow</code>, <code>top</code>,

 *  <code>left</code>, <code>zIndex</code>, <code>display</code>, <code>marginLeft</code>, and

 *  <code>marginTop</code> are ignored; these styles are for internal use only.

 * @property {Object} [labelStyle] An object literal whose properties define specific CSS

 *  style values to be applied to the label. Style values defined here override those that may

 *  be defined in the <code>labelClass</code> style sheet. If this property is changed after the

 *  label has been created, all previously set styles (except those defined in the style sheet)

 *  are removed from the label before the new style values are applied.

 *  Note that style values for <code>position</code>, <code>overflow</code>, <code>top</code>,

 *  <code>left</code>, <code>zIndex</code>, <code>display</code>, <code>marginLeft</code>, and

 *  <code>marginTop</code> are ignored; these styles are for internal use only.

 * @property {boolean} [labelInBackground] A flag indicating whether a label that overlaps its

 *  associated marker should appear in the background (i.e., in a plane below the marker).

 *  The default is <code>false</code>, which causes the label to appear in the foreground.

 * @property {boolean} [labelVisible] A flag indicating whether the label is to be visible.

 *  The default is <code>true</code>. Note that even if <code>labelVisible</code> is

 *  <code>true</code>, the label will <i>not</i> be visible unless the associated marker is also

 *  visible (i.e., unless the marker's <code>visible</code> property is <code>true</code>).

 * @property {boolean} [raiseOnDrag] A flag indicating whether the label and marker are to be

 *  raised when the marker is dragged. The default is <code>true</code>. If a draggable marker is

 *  being created and a version of Google Maps API earlier than V3.3 is being used, this property

 *  must be set to <code>false</code>.

 * @property {boolean} [optimized] A flag indicating whether rendering is to be optimized for the

 *  marker. <b>Important: The optimized rendering technique is not supported by MarkerWithLabel,

 *  so the value of this parameter is always forced to <code>false</code>.

 * @property {string} [crossImage="https://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png"]

 *  The URL of the cross image to be displayed while dragging a marker.

 * @property {string} [handCursor="https://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur"]

 *  The URL of the cursor to be displayed while dragging a marker.

 */

/**

 * Creates a MarkerWithLabel with the options specified in {@link MarkerWithLabelOptions}.

 * @constructor

 * @param {MarkerWithLabelOptions} [opt_options] The optional parameters.

 */

function MarkerWithLabel(opt_options) {

  opt_options = opt_options || {};

  opt_options.labelContent = opt_options.labelContent || "";

  opt_options.labelAnchor = opt_options.labelAnchor || new google.maps.Point(0, 0);

  opt_options.labelClass = opt_options.labelClass || "markerLabels";

  opt_options.labelStyle = opt_options.labelStyle || {};

  opt_options.labelInBackground = opt_options.labelInBackground || false;

  if (typeof opt_options.labelVisible === "undefined") {

    opt_options.labelVisible = true;

  }

  if (typeof opt_options.raiseOnDrag === "undefined") {

    opt_options.raiseOnDrag = true;

  }

  if (typeof opt_options.clickable === "undefined") {

    opt_options.clickable = true;

  }

  if (typeof opt_options.draggable === "undefined") {

    opt_options.draggable = false;

  }

  if (typeof opt_options.optimized === "undefined") {

    opt_options.optimized = false;

  }

  /* opt_options.crossImage = opt_options.crossImage || "https" + (document.location.protocol === "https:" ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png"; */

  /* opt_options.handCursor = opt_options.handCursor || "https" + (document.location.protocol === "https:" ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur"; */

  opt_options.crossImage =  "https://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png";

  opt_options.handCursor = opt_options.handCursor || "https" + (document.location.protocol === "https:" ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur";

  opt_options.optimized = false; // Optimized rendering is not supported



  this.label = new MarkerLabel_(this, opt_options.crossImage, opt_options.handCursor); // Bind the label to the marker



  // Call the parent constructor. It calls Marker.setValues to initialize, so all

  // the new parameters are conveniently saved and can be accessed with get/set.

  // Marker.set triggers a property changed event (called "propertyname_changed")

  // that the marker label listens for in order to react to state changes.

  google.maps.Marker.apply(this, arguments);

}

inherits(MarkerWithLabel, google.maps.Marker);



/**

 * Overrides the standard Marker setMap function.

 * @param {Map} theMap The map to which the marker is to be added.

 * @private

 */

MarkerWithLabel.prototype.setMap = function (theMap) {



  // Call the inherited function...

  google.maps.Marker.prototype.setMap.apply(this, arguments);



  // ... then deal with the label:

  this.label.setMap(theMap);

};