<?php

/*
Template Name: City Redirect
*/

	$site = home_url();
	$city_url = $_POST['city'];

	header( 'Location: ' . $site . '/' . $city_url ) ;

?>