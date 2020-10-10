<?php

/**

 * Footer Template

 *

 * @package WP Pro Real Estate 4

 * @subpackage Template

 */



global $ct_options;

?>  
      <footer class="sixteen columns marT20">

          <?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Sidebar Footer') ) :else: endif; ?>

          <nav class="right">

              <?php wp_nav_menu( array( 'container_id' => 'footer-nav', 'theme_location' => 'footer') ); ?>

          </nav>

          <?php if($ct_options['ct_footer_text']) { ?>

              <p class="left"><?php echo stripslashes($ct_options['ct_footer_text']); ?>.</p>

          <?php } else { ?>

              <p class="left">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>, <?php _e( 'All Rights Reserved.', 'contempo' ); ?> </p>

          <?php } ?>

      </footer>
    </section>
  </div>
</div>

 <!-- Modal Center -->
  
  
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <?php
    $street = get_post_meta( $post->ID, '_ah_listing_street', true );
    $city_listing = get_post_meta( $post->ID, '_ah_listing_city', true );
    $state_listing = get_post_meta( $post->ID, '_ah_listing_state', true );
    $prop_name = get_post_meta( $post->ID, '_ah_prop_name', true );
    $prop_details = get_post_meta( $post->ID, '_ah_prop_det', true );
  ?>
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="request-modal modal-header text-center">
         <h4><?php echo $prop_name; ?></h4>
          <h5 class="modal-title" id="exampleModalCenterTitle">Please fill in our form with your information, click submit, and expect a prompt reply usually within hours or next business day.</h5>
          <h6>Call Us?&nbsp;<a href="tel:19207438765" title="telephone">(920) 743-8765</a></h6>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        
        <div class="quote-form">
        
        <?php 
           $prop_form_sc = '[gravityform id="25" name="Property Request a Quote" title="false" description="false" field_values="city='.$city_listing.'&state='.$state_listing.'&street='.$street.'&internal='.$prop_name.'&details='.$prop_details.'"]';
          
          echo do_shortcode($prop_form_sc); 
        ?>
         
        </div>
        
        </div>
        <div class="request-modal modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Modal  Scrolling -->
  
  <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <?php $page_ID = '4945'; ?>
          <h5 class="modal-title" id="exampleModalLongTitle"><?php echo get_the_title( $page_ID ); ?></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <?php cn_include_content('4945'); ?>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
<?php wp_footer('listings'); ?>

<?php if($ct_options['ct_tracking_code']) { ?>

  <?php echo stripslashes($ct_options['ct_tracking_code']); ?>

<?php } ?>

</body>
    
</html>