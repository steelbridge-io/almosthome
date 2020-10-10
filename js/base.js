/**

 * Core

 *

 * @package WP Pro Real Estate 4

 * @subpackage JavaScript

 */



jQuery.noConflict();



jQuery(document).ready(function($){

	

	// Initialize PrettyPhoto

	$("a[rel^='prettyPhoto']").prettyPhoto();

	

	// Add last class to widgets on homepage

	$("#three-col-widget-area .widget-area .widget:nth-child(2n+2)").addClass("omega");

	$("#home #four-col-widget-area .widget:nth-child(4n), #footer-widgets .widget:nth-child(4n)").addClass("omega");

	

	// Add drop class to sub-menus

	$("ul.sub-menu").closest("li").addClass("drop");

	

	// Fade opacity on images when hovered

	$("#logo, #topbar img, #articles img, #archive article.post img, .post-type-archive-portfolio section img, .single .lead-image, .widget img, #listing-tools a, #featured-listings a img").hover(function() {

		$(this).stop().animate({opacity: "0.7"}, 'slow');

	},

	function() {

		$(this).stop().animate({opacity: "1"}, 'slow');

	});

	

	// Show Hide Map on Search Listings Results

	$(".show-hide").click(function(){

		$(".toggle").slideToggle("slow");

		$(this).toggleClass("active").html('Expand Map'); return false;

		$(this).toggleClass(":hidden").html('Hide Map'); return false;

	});

	

	/*-----------------------------------------------------------------------------------*/

	/* Mobile Nav for Header */

	/*-----------------------------------------------------------------------------------*/

	

	// Create the dropdown base

	$("<select />").appendTo("header nav");

	

	// Create default option "Go to..."

	$("<option />", {

	   "selected": "selected",

	   "value"   : "",

	   "text"    : "Go to..."

	}).appendTo("nav select");

	

	// Populate dropdown with menu items

	$("header nav a").each(function() {

		var el = $(this);

		$("<option />", {

		 "value"   : el.attr("href"),

		 "text"    : el.text()

		}).appendTo("nav select");

	});

	

	$("nav select").change(function() {

	  window.location = $(this).find("option:selected").val();

	});

	

	/*-----------------------------------------------------------------------------------*/

	/* Mobile Nav for Footer */

	/*-----------------------------------------------------------------------------------*/

	

	// Create the dropdown base

	$("<select />").appendTo("footer nav");

	

	// Create default option "Go to..."

	$("<option />", {

	   "selected": "selected",

	   "value"   : "",

	   "text"    : "Go to..."

	}).appendTo("footer nav select");

	

	// Populate dropdown with menu items

	$("footer nav a").each(function() {

	 var el = $(this);

	 $("<option />", {

		 "value"   : el.attr("href"),

		 "text"    : el.text()

	 }).appendTo("footer nav select");

	});

	

	$("footer nav select").change(function() {

	  window.location = $(this).find("option:selected").val();

	});

	

});



jQuery(window).load(function($){ 

	// Fade status in once images load

	jQuery(".flexslider .snipe").fadeIn("slow");

});



// Popups

function popup(pageURL,title,w,h) {

	var left = (screen.width/2)-(w/2);

	var top = (screen.height/2)-(h/2);

	var targetWin = window.open (pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);

}