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

<?php wp_footer(); ?>

<?php if($ct_options['ct_tracking_code']) { ?>
  
  <?php echo stripslashes($ct_options['ct_tracking_code']); ?>

<?php } ?>

<!-- Request a quote modal -->
<div id="fp-request-quote-modal" class="modal fade fp-request-quote-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="inner container">
        <div id="advanced-search-inner" class="quote-form">
          <?php echo do_shortcode('[gravityform id="4" name="Request A Quote" title="true" description="false"]'); ?><!-- ?php include 'quote-request-form.php'; ? -->
        </div>
      </div>
    </div>
  </div>
</div>

</body>
</html>
