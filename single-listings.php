<?php

 error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

/**
 * Template Name: Single Listings Template
 * Single Listings Template
 *
 * @package WP Pro Real Estate 4
 * @subpackage Template
 */
 
 $ahimgslider1   = get_post_meta(get_the_ID(), 'ah-custom-image-slider-1', true);
 
 if (!empty($ahimgslider1)) {
  
  // META BOX VALUES
  include_once('listing-slider/meta-box-value/meta-box-value.php');
  $layout = $ct_options['ct_listing_single_layout'];

  /*$prop_form_sc = get_post_meta( $post->ID, '_ah_prop_form_sc', true );*/

  $prop_name = get_post_meta( $post->ID, '_ah_prop_name', true );
  $prop_city = get_post_meta( $post->ID, '_ah_listing_city', true );
  $term_list = wp_get_post_terms($post->ID, 'state', array("fields" => "names"));
  $prop_state = $term_list[0];
  $prop_form_sc = '[gravityform id="18" name="Property Request a Quote" title="false" description="false" field_values="city='.$prop_city.'&state='.$prop_state.'&internal='.$prop_name.'"]';

get_header(); ?>
		
  <section id="content" class="full-width columns">

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); 
    $city = get_post_meta( $post->ID, '_ah_listing_city', true );
    $features = get_post_meta( $post->ID, '_ah_listing_features', true );
    $amenities = get_post_meta( $post->ID, '_ah_listing_amenities', true );
    $ah_post_id = get_post_meta( $post->ID, '_ah_post_id', true );
    $listing_content = get_post_meta( $post->ID, '_ah_listing_content', true );
    ?>

    <article id="post-<?php the_ID(); ?>" <?php post_class('marB20'); ?>>

    <?php if ( !( $title = get_post_meta( $post->ID, '_ah_listing_h1', true ) ) ) $title = get_the_title(); ?>

    <h1 class="entry-title marB0"><?php echo $title; ?></h1>

    <p class="prop-location"><?php echo $city; ?>, <?php state(); ?> <?php zipcode(); ?></p>

    <p class="propinfo"><strong><?php if(has_type('land') || has_type('lot')) { ?><?php echo get_post_meta($post->ID, "_ct_lotsize", true); ?> <?php acres(); ?><?php } elseif(has_type('commercial')) { ?><?php // Display Nothing ?><?php } else { ?><?php beds(); ?> <?php baths(); ?> <?php  if((get_post_meta($post->ID, "_ct_sqft", true))) { ?>&nbsp;|&nbsp; <?php echo get_post_meta($post->ID, "_ct_sqft", true); ?> <?php sqftsqm(); ?><?php } ?><?php } ?> <?php if((get_post_meta($post->ID, "_ct_mls", true))) { ?>&nbsp;|&nbsp; <?php _e('MLS', 'contempo'); ?> # <?php echo get_post_meta($post->ID, "_ct_mls", true); ?><?php } ?></strong></p>

    <?php ahu_tag_line_content(); ?>

    <?php /******* NEW SLIDER BY STEELBRIDGE.IO ******/
    include_once('listing-slider/modern-listing-slider.php'); ?>
    
    <!-- Page Content -->
    <div id="right-sidebar" class="post-content marT20">
    
    <div class="panel panel-green mt-2618">
      <div class="panel-heading prop-features">
        <h4 class="panel-title medium">Property Features</h4>
      </div>
      <div class="panel-body">
      
      <div class="post-content marT20">
      <?php the_content(); ?>
       <?php if(get_post_meta($post->ID, "_ct_video", true)) { 
       echo '<div class="videoplayer">' .
        stripslashes(get_post_meta($post->ID, "_ct_video", true));
       echo '</div>';       
      } ?>
      
      <div class="panel panel-default cust-gradient">
      <div class="panel-body">
      <div class="row-4">
      <div class="col-6 flex-middle">
        <p class="lead-white text-center">Get A Quote. Let's Plan Your Stay</p><i class="fas fa-hand-point-right fa-2x"></i>
      </div>
      <div class="col-6 flex-middle">
        <button class="ah-button f-r ah-button-wide" data-toggle="modal" data-target="#exampleModalCenter">Click To Request Quote</button>
      </div>
      </div>
      </div>
      </div>
      
        
        <aside class="listing widget">
        <h4 class="medium mt-1618">This Home Offers These Features</h4>
        <div id="containerul">
        <?php echo $features; ?>
        </div>
        </aside>
        

        <?php if ( $amenities ) { ?>
        
         <aside class="listing widget">
          <h4 class="medium mt-1618">Community Amenities</h4>
           <div id="containerul2">
          <?php echo $amenities; ?>
          </div>
         </aside>
         

        <?php } ?>
        
          <div class="panel panel-default cust-gradient-2">
            <div class="panel-body">
              <div class="row-4">
              <div class="col-6 flex-middle">
                <button class="ah-button f-r ah-button-wide" data-toggle="modal" data-target="#exampleModalLong">Click To View Housing Package</button>
              </div>
               <div class="col-6 flex-middle">
                <i class="fas fa-hand-point-left fa-2x"></i><p class="lead-white-reverse text-center">See what our housing packages include.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="panel panel-green">
    <div class="panel-heading prop-features">
    <h4 class="panel-title medium">Client Testimonials</h4>
    </div>
    
    <div class="panel-body testimonial-widget">
     <?php ah_testimonials(); ?>
    </div>
    </div>
    <div id="location">
      <h5 class="listingsnew medium marB10"><?php _e('Location', 'contempo'); ?></h5>
      <div id="map">
      <?php ah_listing_map(); ?>
      </div>
    </div>

    <?php if ( $listing_content ) {
      echo $listing_content;
    } ?>

    <?php if ( $ah_post_id ) { 
      //ah_latest_news( $ah_post_id );
    } ?>

    </div>
  </article>
  
  <!-- Comments -->
  <?php if($ct_options['ct_post_comments'] == "Yes" && comments_open()) { ?>
  <?php comments_template( '', true ); ?>
  <?php } ?>
  <?php endwhile; ?>
  <?php //wp_link_pages(); ?>
  <?php endif; ?>

  </section>
  
  <!-- Form Request A Quote -->
  <div id="" class="<?php if($layout == "12-column") { echo '12'; } else { echo '12'; } ?> columns omega">

  <!--<div class="12 columns alpha omega">-->
  <div class="container-fluid">
    <div class="panel panel-green">
      <div class="panel-heading prop-features">
          <h4 class="panel-title medium">Nearby Properties</h4>
      </div>
    <div class="panel-body">
      <div class="container-fluid">
        <div class="row d-flex justify-content-center">

            <?php 
            $terms_as_text = strip_tags( get_the_term_list( $post->ID, 'city', '', ', ', '' ) );
            $tags = strtolower( $terms_as_text );
            $terms = get_the_terms( $post->ID, 'city');
            if ( $terms && ! is_wp_error( $terms ) ) {
            $tag_list = array();
            foreach( $terms as $term ) {
            $tag_list[] = $term->term_id;
            }
            $the_tags = join( ", ", $tag_list );
            }
            $current_id = get_the_ID(); // get id of current property, so it doesn't display in this list

            // var_dump($tag_list);
            $args = array(
            'post_type' => 'listings',
            'tax_query' => array(
              array(
            'taxonomy' => 'city',
            'field' => 'id',
            'terms' => $tag_list,
              )
            ),
            'post__not_in' => array( $current_id )
            );
            $rowCount = 0;
            $numOfCols = 4;
            // The Query
            $the_query = new WP_Query( $args );
            if ( $the_query->have_posts() ) {
            $property_page = 1;
              while ( $the_query->have_posts() ) {
            $the_query->the_post();                                
            echo '<div class="col-md-3">' .
                 '<div class="thumbnail">';
            echo '<a href="' . get_permalink() . '">';
            ah_first_image_thumb( $the_query->post->ID, $property_page );
            echo '</a>';
            echo '<div class="caption">';
            echo '<p class="text-center card-text"><a href="' . get_permalink() . '">' . get_the_title() . '</a></p>';
            echo '</div>' .
                 '</div>' .
                 '</div>';

                 $rowCount++;
                 if($rowCount % $numOfCols == 0) echo '</div><div class="row d-flex justify-content-center">';  
              } 
            } else {
            echo 'No other properties are available';
            }

            /* Restore original Post Data 

            * NB: Because we are using new WP_Query we aren't stomping on the 

            * original $wp_query and it does not need to be reset.

            */

         wp_reset_postdata(); ?>
       </div>
     </div>
     
     <div class="panel panel-default cust-gradient mb-1618">
        <div class="panel-body">
        <div class="row-4">
         <div class="col-6 flex-middle">
          <p class="lead-white text-center">Get A Quote. Let's Plan Your Stay.</p><i class="fas fa-hand-point-right fa-2x"></i>
        </div>
        <div class="col-6 flex-middle">
          <button class="ah-button f-r ah-button-wide" data-toggle="modal" data-target="#exampleModalCenter">Click Here To Request A Quote</button>
        </div>
        </div>
        </div>
      </div>
     
     
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-body">
      <img src="<?php bloginfo('stylesheet_directory' ); ?>/images/chpa-logo.png" alt="CHPA">
      <p> Almost Home is a proud member of The Corporate Housing Providers Association (CHPA), the association worldwide for the industry of corporate housing. We've been a member since 2003.</p>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-body">
      <h4>7 Secrets to Finding the Best Corporate Housing</h4>
      <p>Receive helpful advice on how to find the best corporate housing that meets your needs.</p>

      <form action="https://almosthome.infusionsoft.com/AddForms/processFormSecure.jsp" method="post">

         <input value="eedba9b65e06620389783e889da9d2a8" id="infusion_xid" name="infusion_xid" type="hidden">

         <input value="CustomFormWeb" id="infusion_type" name="infusion_type" type="hidden">

         <input value="AH 7 Secrets Opt-In Form for Homepage" id="infusion_name" name="infusion_name" type="hidden">

         <input size="15" name="Contact0FirstName" value="First Name" type="text">

         <input size="15" name="Contact0Email" value="Email" type="text">

         <?php echo apply_filters( 'cptch_display', '' ); ?>

         <input value="Submit" class="button np inf-button" id="Submit" name="Submit" type="submit"></td>

       </form>

       <small>Your information will be not be sold or distributed.</small>
    </div>
  </div>

  <?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Listing Single Right') ) :else: endif; ?>
  
  <div class="clear"></div>
</div>
  
  <?php } else { 
  // Loads original layout including old style slider
  include_once('single-listings-original.php'); }

if (!empty($ahimgslider1)) {
get_footer('listingsnew'); } ?>