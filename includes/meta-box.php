<?php 

// for the page
add_action( 'add_meta_boxes', 'ah_city_meta_box_create' );
add_action( 'add_meta_boxes', 'ah_city_content_box_create' );
add_action( 'add_meta_boxes', 'ah_city_boiler_box_create' );
add_action( 'save_post', 'ah_city_save_meta' );

function ah_city_meta_box_create() {

	add_meta_box( 'ah-city-box', 'City Details', 'ah_city_details_function', 'page', 'normal', 'high' );
		
}

function ah_city_content_box_create() {
	add_meta_box( 'ah-city-content', 'City Below Map Content', 'ah_city_content_function', 'page', 'normal', 'high' );
}

function ah_city_content_function( $post ) {
		
	$city_content = get_post_meta( $post->ID, '_ah_city_content', true );
	
?>
<table class="form-table">
		<tr valign="top">
			<td>
				<?php 
					
					$args = array(
						'media_buttons' => false,
					);
				
					wp_editor( $city_content, 'ah_city_content', $args );
				?>
			</td>
			
		</tr>
	</table>

	
<?php 
}

function ah_city_details_function( $post ) {
		
	$city_news = get_post_meta( $post->ID, '_ah_latest_news', true );
	$city = get_post_meta( $post->ID, '_ah_city', true );
	$state = get_post_meta( $post->ID, '_ah_state', true );
	$form_sc = get_post_meta( $post->ID, '_ah_city_form_sc', true );
	$city_bg = get_post_meta( $post->ID, '_ah_city_bg', true );
	$city_links = get_post_meta( $post->ID, '_ah_city_links', true );
	
	wp_nonce_field( 'ah_meta_box_nonce', 'meta_box_nonce' ); 
	
?>

	<table class="form-table">
		<tr valign="top">
			<th scope="row">
				<label for="ah-city">City:</label>
			</th>
			<td>
				<input id="ah_city" class="widefat" type="text" name="ah_city" value="<?php echo esc_attr( $city ); ?>" />
			</td>
		</tr>
		<tr valign="top">
			<th scope="row">
				<label for="ah-state">State:</label>
			</th>
			<td>
				<input id="ah_state" class="widefat" type="text" name="ah_state" value="<?php echo esc_attr( $state ); ?>" />
			</td>
		</tr>
		<tr valign="top">
			<th scope="row">
				<label for="ah-city-sc">Form Shortcode:</label>
			</th>
			<td>
				<input id="ah_city_form_sc" class="widefat" type="text" name="ah_city_form_sc" value="<?php echo esc_attr( $form_sc ); ?>" />
			</td>
		</tr>
		<tr valign="top">
			<th scope="row">
				<label for="ah-city-bg">Background Image URL:</label>
			</th>
			<td>
				<input id="ah_city_bg" class="widefat" type="text" name="ah_city_bg" value="<?php echo esc_attr( $city_bg ); ?>" />
			</td>
		</tr>
		<tr valign="top">
			<th scope="row">
				<label for="ah-latest-news">Post IDs (for associated blog posts):</label>
			</th>
			<td>
				<input id="ah_latest_news" class="widefat" type="text" name="ah_latest_news" value="<?php echo $city_news; ?>" />
				<p class="cmb_metabox_description">Enter post ids, separated by commas</p>
			</td>
		</tr>
		<tr valign="top">
			<th scope="row">
				<label for="ah-city-links">Links to nearby cities:</label>
			</th>
			<td>
				<textarea id="ah_city_links" class="widefat" name="ah_city_links"><?php echo $city_links; ?></textarea>
				
			</td>
		</tr>
	</table>
<?php
}

function ah_city_boiler_box_create() {

	add_meta_box( 'ah-city-boiler', 'Boilerplate Content', 'ah_city_boiler_function', 'page', 'normal', 'high' );
}

function ah_city_boiler_function( $post ) {
		
	$boiler = get_post_meta( $post->ID, '_ah_city_boiler', true );
	
?>

	<table class="form-table">
		<tr valign="top">
			<td>
				<?php 
					
					$args = array(
						'media_buttons' => false,
					);
				
					wp_editor( $boiler, 'ah_city_boiler', $args );
				?>
			</td>
			
		</tr>
	</table>
<?php
}


function ah_city_save_meta( $post_id ) {

	if( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return; 
     
    // if our nonce isn't there, or we can't verify it, bail 
    if( !isset( $_POST['meta_box_nonce'] ) || !wp_verify_nonce( $_POST['meta_box_nonce'], 'ah_meta_box_nonce' ) ) return; 
     
    // if our current user can't edit this post, bail  
    if( !current_user_can( 'edit_post' ) ) return;  

	// verify the metadata is set
   

	if ( !empty( $_POST['ah_city'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_city',strip_tags( $_POST['ah_city'] ) );
	}

	if ( !empty( $_POST['ah_state'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_state',strip_tags( $_POST['ah_state'] ) );
	}

	if ( !empty( $_POST['ah_city_form_sc'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_city_form_sc',strip_tags( $_POST['ah_city_form_sc'] ) );
	}

	

		// save the metadata
		update_post_meta( $post_id, '_ah_city_bg',strip_tags( $_POST['ah_city_bg'] ) );
	

	if ( !empty( $_POST['ah_city_links'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_city_links', $_POST['ah_city_links'] );
	}

	if ( !empty( $_POST['ah_latest_news'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_latest_news', $_POST['ah_latest_news'] );
	}

	

		// save the metadata
	update_post_meta( $post_id, '_ah_city_boiler', $_POST['ah_city_boiler'] );
	

	if ( !empty( $_POST['ah_city_content'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_city_content', $_POST['ah_city_content'] );
	}

}


// for the listing cpt

add_action( 'add_meta_boxes', 'ah_listing_meta_box_create' );
add_action( 'add_meta_boxes', 'ah_listing_content_box_create' );
//add_action( 'add_meta_boxes', 'ah_listing_boiler_box_create' );
add_action( 'save_post', 'ah_listing_save_meta' );

function ah_listing_meta_box_create() {

	add_meta_box( 'ah-listing-features-box', 'Property Data', 'ah_listing_details_function', 'listings', 'normal', 'high' );

	add_meta_box( 'ah-city-backend', 'Property Backend Details', 'ah_city_backend_function', 'listings', 'normal', 'high' );
}

function ah_listing_content_box_create() {

	add_meta_box( 'ah-listing-content-box', 'Property Below Map Content', 'ah_listing_content_function', 'listings', 'normal', 'high' );

}

function ah_listing_content_function( $post ) {
		
	$listing_content = get_post_meta( $post->ID, '_ah_listing_content', true );
	
?>

	<table class="form-table">
		<tr valign="top">
			<td>
				<?php 
					
					$args = array(
						'media_buttons' => false,
					);
				
					wp_editor( $listing_content, 'ah_listing_content', $args );
				?>
			</td>
			
		</tr>
	</table>
<?php
}

function ah_city_backend_function( $post ) {
		
	$prop_name = get_post_meta( $post->ID, '_ah_prop_name', true );
	$prop_details = get_post_meta( $post->ID, '_ah_prop_det', true );
	
	wp_nonce_field( 'ah_meta_box_listing_nonce', 'meta_box_nonce' ); 
	
?>

	<table class="form-table">
		<tr valign="top">
			<th scope="row">
				<label for="ah-prop-name">Property Name:</label>
			</th>
			<td>
				<input id="ah_prop_name" class="widefat" type="text" name="ah_prop_name" value="<?php echo $prop_name; ?>" />
			</td>
		</tr>
		<tr valign="top">
			<th scope="row">
				<label for="ah-prop-det">Property Details:</label>
			</th>
			<td>
				<textarea id="ah_prop_det" class="widefat" name="ah_prop_det"><?php echo $prop_details; ?></textarea>
				
			</td>
		</tr>
	</table>

<?php }


function ah_listing_details_function( $post ) {

	$listing_h1 = get_post_meta( $post->ID, '_ah_listing_h1', true );

	$street = get_post_meta( $post->ID, '_ah_listing_street', true );
	$city = get_post_meta( $post->ID, '_ah_listing_city', true );
	$ah_post_id = get_post_meta( $post->ID, '_ah_post_id', true );
	$ah_prop_form_sc = get_post_meta( $post->ID, '_ah_prop_form_sc', true );

	$property_bg = get_post_meta( $post->ID, '_ah_property_bg', true );

	$features = get_post_meta( $post->ID, '_ah_listing_features', true );
	$amenities = get_post_meta( $post->ID, '_ah_listing_amenities', true );

	wp_nonce_field( 'ah_meta_box_listing_nonce', 'meta_box_nonce' ); 
	
?>

	<table class="form-table">
		<tr valign="top">
			<th scope="row">
				<label for="ah-listing-h1">H1 text for listing:</label>
			</th>
			<td>
				<input id="ah_listing_h1" class="widefat" type="text" name="ah_listing_h1" value="<?php echo esc_attr( $listing_h1 ); ?>" />
			</td>
		</tr>
		<tr valign="top">
			<th scope="row">
				<label for="ah-listing-street">Street Address:</label>
			</th>
			<td>
				<input id="ah_listing_street" class="widefat" type="text" name="ah_listing_street" value="<?php echo esc_attr( $street ); ?>" />
			</td>
		</tr>
		<tr valign="top">
			<th scope="row">
				<label for="ah-listing-city">City:</label>
			</th>
			<td>
				<input id="ah_listing_city" class="widefat" type="text" name="ah_listing_city" value="<?php echo esc_attr( $city ); ?>" />
			</td>
		</tr>
		<tr valign="top">
			<th scope="row">
				<label for="ah-post-ids">Post IDs (for associated blog posts):</label>
			</th>
			<td>
				<input id="ah_post_id" class="widefat" type="text" name="ah_post_id" value="<?php echo esc_attr( $ah_post_id ); ?>" />
				<p class="cmb_metabox_description">Enter post ids, separated by commas</p>
			</td>
		</tr>
		<tr valign="top">
			<th scope="row">
				<label for="ah-prop-form-sc">Form Shortcode:</label>
			</th>
			<td>
				<input id="ah_prop_form_sc" class="widefat" type="text" name="ah_prop_form_sc" value="<?php echo esc_attr( $ah_prop_form_sc ); ?>" />
		
			</td>
		</tr>
		<tr valign="top">
			<th scope="row">
				<label for="ah-prop-bg">Background Image URL:</label>
			</th>
			<td>
				<input id="ah_property_bg" class="widefat" type="text" name="ah_property_bg" value="<?php echo esc_attr( $property_bg ); ?>" />
		
			</td>
		</tr>

		<tr valign="top">
			<th scope="row">
				<label for="ah-listing-features">Features:</label>
			</th>
			<td>
				
				<?php 
					
					$args = array(
						'media_buttons' => false,
					);
				
					wp_editor( $features, 'ah_listing_features', $args );
				?>
			</td>
			
		</tr>
		<tr valign="top">
			<th scope="row">
				<label for="ah-listing-amenities">Amenities:</label>
			</th>
			<td>
				
				<?php 
					
					$args = array(
						'media_buttons' => false,
					);
				
					wp_editor( $amenities, 'ah_listing_amenities', $args );
				?>
			</td>
			
		</tr>
	</table>
<?php
}


function ah_listing_save_meta( $post_id ) {

	if( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return; 
     
    // if our nonce isn't there, or we can't verify it, bail 
    if( !isset( $_POST['meta_box_nonce'] ) || !wp_verify_nonce( $_POST['meta_box_nonce'], 'ah_meta_box_listing_nonce' ) ) return; 
     
    // if our current user can't edit this post, bail  
    if( !current_user_can( 'edit_post' ) ) return;  

	if ( isset( $_POST['ah_prop_name'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_prop_name',strip_tags( $_POST['ah_prop_name'] ) );
	}

	if ( isset( $_POST['ah_prop_det'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_prop_det',strip_tags( $_POST['ah_prop_det'] ) );
	}

	// verify the metadata is set
	if ( isset( $_POST['ah_listing_h1'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_listing_h1',$_POST['ah_listing_h1'] );
	}
	if ( isset( $_POST['ah_listing_street'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_listing_street',$_POST['ah_listing_street'] );
	}
	if ( isset( $_POST['ah_listing_city'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_listing_city',$_POST['ah_listing_city'] );
	}


	if ( isset( $_POST['ah_post_id'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_post_id',$_POST['ah_post_id'] );
	}
	if ( isset( $_POST['ah_prop_form_sc'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_prop_form_sc',$_POST['ah_prop_form_sc'] );
	}

	
		// save the metadata
		update_post_meta( $post_id, '_ah_property_bg',$_POST['ah_property_bg'] );
	

	if ( isset( $_POST['ah_listing_features'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_listing_features',$_POST['ah_listing_features'] );
	}

	if ( isset( $_POST['ah_listing_amenities'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_listing_amenities',$_POST['ah_listing_amenities'] );
	}

	if ( isset( $_POST['ah_listing_content'] ) ) {

		// save the metadata
		update_post_meta( $post_id, '_ah_listing_content',$_POST['ah_listing_content'] );
	}

	

}