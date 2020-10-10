/*

Combines 

http://www.almosthomeusa.com/wp-content/themes/realestate-4/js/respond.min.js

and

http://html5shiv.googlecode.com/svn/trunk/html5.js

into one script for this case: 

 <!--[if lt IE 9]>



    <script src="http://www.almosthomeusa.com/wp-content/themes/realestate-4/js/respond.min.js"></script>



    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>



<![endif]-->

called like this, in functions.php:

<script src="http://www.almosthomeusa.com/wp-content/themes/almosthome/js/ltIE9.js"></script>



*/

// Contents of: http://www.almosthomeusa.com/wp-content/themes/realestate-4/js/respond.min.js

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */

/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */

window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);



/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */

(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var w=e.document,s=w.documentElement,i=[],k=[],q=[],o={},h=30,f=w.getElementsByTagName("head")[0]||s,g=w.getElementsByTagName("base")[0],b=f.getElementsByTagName("link"),d=[],a=function(){var D=b,y=D.length,B=0,A,z,C,x;for(;B<y;B++){A=D[B],z=A.href,C=A.media,x=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&x&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!g)||z.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:z,media:C})}}}}u()},u=function(){if(d.length){var x=d.shift();n(x.href,function(y){m(y,x.href,x.media);o[x.href]=true;u()})}},m=function(I,x,z){var G=I.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),J=G&&G.length||0,x=x.substring(0,x.lastIndexOf("/")),y=function(K){return K.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+x+"$2$3")},A=!J&&z,D=0,C,E,F,B,H;if(x.length){x+="/"}if(A){J=1}for(;D<J;D++){C=0;if(A){E=z;k.push(y(I))}else{E=G[D].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&y(RegExp.$2))}B=E.split(",");H=B.length;for(;C<H;C++){F=B[C];i.push({media:F.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:k.length-1,hasquery:F.indexOf("(")>-1,minw:F.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:F.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}j()},l,r,v=function(){var z,A=w.createElement("div"),x=w.body,y=false;A.style.cssText="position:absolute;font-size:1em;width:1em";if(!x){x=y=w.createElement("body");x.style.background="none"}x.appendChild(A);s.insertBefore(x,s.firstChild);z=A.offsetWidth;if(y){s.removeChild(x)}else{x.removeChild(A)}z=p=parseFloat(z);return z},p,j=function(I){var x="clientWidth",B=s[x],H=w.compatMode==="CSS1Compat"&&B||w.body[x]||B,D={},G=b[b.length-1],z=(new Date()).getTime();if(I&&l&&z-l<h){clearTimeout(r);r=setTimeout(j,h);return}else{l=z}for(var E in i){var K=i[E],C=K.minw,J=K.maxw,A=C===null,L=J===null,y="em";if(!!C){C=parseFloat(C)*(C.indexOf(y)>-1?(p||v()):1)}if(!!J){J=parseFloat(J)*(J.indexOf(y)>-1?(p||v()):1)}if(!K.hasquery||(!A||!L)&&(A||H>=C)&&(L||H<=J)){if(!D[K.media]){D[K.media]=[]}D[K.media].push(k[K.rules])}}for(var E in q){if(q[E]&&q[E].parentNode===f){f.removeChild(q[E])}}for(var E in D){var M=w.createElement("style"),F=D[E].join("\n");M.type="text/css";M.media=E;f.insertBefore(M,G.nextSibling);if(M.styleSheet){M.styleSheet.cssText=F}else{M.appendChild(w.createTextNode(F))}q.push(M)}},n=function(x,z){var y=c();if(!y){return}y.open("GET",x,true);y.onreadystatechange=function(){if(y.readyState!=4||y.status!=200&&y.status!=304){return}z(y.responseText)};if(y.readyState==4){return}y.send(null)},c=(function(){var x=false;try{x=new XMLHttpRequest()}catch(y){x=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return x}})();a();respond.update=a;function t(){j(true)}if(e.addEventListener){e.addEventListener("resize",t,false)}else{if(e.attachEvent){e.attachEvent("onresize",t)}}})(this);



// Contents of http://html5shiv.googlecode.com/svn/trunk/html5.js

/**

* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed

*/

;(function(window, document) {

/*jshint evil:true */

  /** version */

  var version = '3.7.3';



  /** Preset options */

  var options = window.html5 || {};



  /** Used to skip problem elements */

  var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;



  /** Not all elements can be cloned in IE **/

  var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;



  /** Detect whether the browser supports default html5 styles */

  var supportsHtml5Styles;



  /** Name of the expando, to work with multiple documents or to re-shiv one document */

  var expando = '_html5shiv';



  /** The id for the the documents expando */

  var expanID = 0;



  /** Cached data for each document */

  var expandoData = {};



  /** Detect whether the browser supports unknown elements */

  var supportsUnknownElements;



  (function() {

    try {

        var a = document.createElement('a');

        a.innerHTML = '<xyz></xyz>';

        //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles

        supportsHtml5Styles = ('hidden' in a);



        supportsUnknownElements = a.childNodes.length == 1 || (function() {

          // assign a false positive if unable to shiv

          (document.createElement)('a');

          var frag = document.createDocumentFragment();

          return (

            typeof frag.cloneNode == 'undefined' ||

            typeof frag.createDocumentFragment == 'undefined' ||

            typeof frag.createElement == 'undefined'

          );

        }());

    } catch(e) {

      // assign a false positive if detection fails => unable to shiv

      supportsHtml5Styles = true;

      supportsUnknownElements = true;

    }



  }());



  /*--------------------------------------------------------------------------*/



  /**

   * Creates a style sheet with the given CSS text and adds it to the document.

   * @private

   * @param {Document} ownerDocument The document.

   * @param {String} cssText The CSS text.

   * @returns {StyleSheet} The style element.

   */

  function addStyleSheet(ownerDocument, cssText) {

    var p = ownerDocument.createElement('p'),

        parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;



    p.innerHTML = 'x<style>' + cssText + '</style>';

    return parent.insertBefore(p.lastChild, parent.firstChild);

  }



  /**

   * Returns the value of `html5.elements` as an array.

   * @private

   * @returns {Array} An array of shived element node names.

   */

  function getElements() {

    var elements = html5.elements;

    return typeof elements == 'string' ? elements.split(' ') : elements;

  }



  /**

   * Extends the built-in list of html5 elements

   * @memberOf html5

   * @param {String|Array} newElements whitespace separated list or array of new element names to shiv

   * @param {Document} ownerDocument The context document.

   */

  function addElements(newElements, ownerDocument) {

    var elements = html5.elements;

    if(typeof elements != 'string'){

      elements = elements.join(' ');

    }

    if(typeof newElements != 'string'){

      newElements = newElements.join(' ');

    }

    html5.elements = elements +' '+ newElements;

    shivDocument(ownerDocument);

  }



   /**

   * Returns the data associated to the given document

   * @private

   * @param {Document} ownerDocument The document.

   * @returns {Object} An object of data.

   */

  function getExpandoData(ownerDocument) {

    var data = expandoData[ownerDocument[expando]];

    if (!data) {

        data = {};

        expanID++;

        ownerDocument[expando] = expanID;

        expandoData[expanID] = data;

    }

    return data;

  }



  /**

   * returns a shived element for the given nodeName and document

   * @memberOf html5

   * @param {String} nodeName name of the element

   * @param {Document|DocumentFragment} ownerDocument The context document.

   * @returns {Object} The shived element.

   */

  function createElement(nodeName, ownerDocument, data){

    if (!ownerDocument) {

        ownerDocument = document;

    }

    if(supportsUnknownElements){

        return ownerDocument.createElement(nodeName);

    }

    if (!data) {

        data = getExpandoData(ownerDocument);

    }

    var node;



    if (data.cache[nodeName]) {

        node = data.cache[nodeName].cloneNode();

    } else if (saveClones.test(nodeName)) {

        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();

    } else {

        node = data.createElem(nodeName);

    }



    // Avoid adding some elements to fragments in IE < 9 because

    // * Attributes like `name` or `type` cannot be set/changed once an element

    //   is inserted into a document/fragment

    // * Link elements with `src` attributes that are inaccessible, as with

    //   a 403 response, will cause the tab/window to crash

    // * Script elements appended to fragments will execute when their `src`

    //   or `text` property is set

    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;

  }



  /**

   * returns a shived DocumentFragment for the given document

   * @memberOf html5

   * @param {Document} ownerDocument The context document.

   * @returns {Object} The shived DocumentFragment.

   */

  function createDocumentFragment(ownerDocument, data){

    if (!ownerDocument) {

        ownerDocument = document;

    }

    if(supportsUnknownElements){

        return ownerDocument.createDocumentFragment();

    }

    data = data || getExpandoData(ownerDocument);

    var clone = data.frag.cloneNode(),

        i = 0,

        elems = getElements(),

        l = elems.length;

    for(;i<l;i++){

        clone.createElement(elems[i]);

    }

    return clone;

  }



  /**

   * Shivs the `createElement` and `createDocumentFragment` methods of the document.

   * @private

   * @param {Document|DocumentFragment} ownerDocument The document.

   * @param {Object} data of the document.

   */

  function shivMethods(ownerDocument, data) {

    if (!data.cache) {

        data.cache = {};

        data.createElem = ownerDocument.createElement;

        data.createFrag = ownerDocument.createDocumentFragment;

        data.frag = data.createFrag();

    }





    ownerDocument.createElement = function(nodeName) {

      //abort shiv

      if (!html5.shivMethods) {

          return data.createElem(nodeName);

      }

      return createElement(nodeName, ownerDocument, data);

    };



    ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +

      'var n=f.cloneNode(),c=n.createElement;' +

      'h.shivMethods&&(' +

        // unroll the `createElement` calls

        getElements().join().replace(/[\w\-:]+/g, function(nodeName) {

          data.createElem(nodeName);

          data.frag.createElement(nodeName);

          return 'c("' + nodeName + '")';

        }) +

      ');return n}'

    )(html5, data.frag);

  }



  /*--------------------------------------------------------------------------*/



  /**

   * Shivs the given document.

   * @memberOf html5

   * @param {Document} ownerDocument The document to shiv.

   * @returns {Document} The shived document.

   */

  function shivDocument(ownerDocument) {

    if (!ownerDocument) {

        ownerDocument = document;

    }

    var data = getExpandoData(ownerDocument);



    if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {

      data.hasCSS = !!addStyleSheet(ownerDocument,

        // corrects block display not defined in IE6/7/8/9

        'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +

        // adds styling not present in IE6/7/8/9

        'mark{background:#FF0;color:#000}' +

        // hides non-rendered elements

        'template{display:none}'

      );

    }

    if (!supportsUnknownElements) {

      shivMethods(ownerDocument, data);

    }

    return ownerDocument;

  }



  /*--------------------------------------------------------------------------*/



  /**

   * The `html5` object is exposed so that more elements can be shived and

   * existing shiving can be detected on iframes.

   * @type Object

   * @example

   *

   * // options can be changed before the script is included

   * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };

   */

  var html5 = {



    /**

     * An array or space separated string of node names of the elements to shiv.

     * @memberOf html5

     * @type Array|String

     */

    'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',



    /**

     * current version of html5shiv

     */

    'version': version,



    /**

     * A flag to indicate that the HTML5 style sheet should be inserted.

     * @memberOf html5

     * @type Boolean

     */

    'shivCSS': (options.shivCSS !== false),



    /**

     * Is equal to true if a browser supports creating unknown/HTML5 elements

     * @memberOf html5

     * @type boolean

     */

    'supportsUnknownElements': supportsUnknownElements,



    /**

     * A flag to indicate that the document's `createElement` and `createDocumentFragment`

     * methods should be overwritten.

     * @memberOf html5

     * @type Boolean

     */

    'shivMethods': (options.shivMethods !== false),



    /**

     * A string to describe the type of `html5` object ("default" or "default print").

     * @memberOf html5

     * @type String

     */

    'type': 'default',



    // shivs the document according to the specified `html5` object options

    'shivDocument': shivDocument,



    //creates a shived element

    createElement: createElement,



    //creates a shived documentFragment

    createDocumentFragment: createDocumentFragment,



    //extends list of elements

    addElements: addElements

  };



  /*--------------------------------------------------------------------------*/



  // expose html5

  window.html5 = html5;



  // shiv the document

  shivDocument(document);



  if(typeof module == 'object' && module.exports){

    module.exports = html5;

  }



}(typeof window !== "undefined" ? window : this, document));

