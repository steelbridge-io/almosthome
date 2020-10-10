<?php


// custom functions
include 'admin/theme-functions.php';

// all meta boxes for cities and listings pages

include 'includes/meta-box.php';

// extra widgets
include 'includes/widgets/ah-widget-listings.php';

add_theme_support('post-thumbnails');

// Gutenberg Theme Mod
add_theme_support('align-wide');
add_theme_support('editor-styles');


function ahusa_wp_headers($headers)
{
  //$headers = response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
  $headers = ['Set-Cookie' => 'HttpOnly;Secure;SameSite=Strict'];
  return $headers;
}

add_filter('wp_headers', 'ahusa_wp_headers');


// image size for main image on listings slider
add_image_size('listing-slider', 598, 400, true);
function ah_add_listing_taxonomies_to_posts()
{
  
  register_taxonomy_for_object_type('city', 'post');
  
  register_taxonomy_for_object_type('state', 'post');
}

add_action('init', 'ah_add_listing_taxonomies_to_posts', 50);


function ah_slider_images()
{
  
  $photos = ah_get_images(); // get only listing-slider sized images
  
  if ($photos) {
    
    foreach ($photos as $photo) { ?>
      <li>
        <img class="photo" src="<?php echo $photo[0]; ?>">
      </li>
    
    <?php }
  }
}

// For the listings page. Adds /housing-package content to modal window
function cn_include_content($pid)
{
  $thepageinquestion = get_post($pid);
  $content = $thepageinquestion->post_content;
  $content = apply_filters('the_content', $content);
  echo $content;
}

function ah_get_images()
{
  
  // get listing-slider sized images
  global $post;
  
  $photos = get_children(array('post_parent' => $post->ID, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => 'ASC', 'orderby' => 'menu_order ID'));
  
  $results = array();
  
  if ($photos) {
    
    foreach ($photos as $photo) {
      
      // get the correct image html for the selected size
      
      $results[] = wp_get_attachment_image_src($photo->ID, 'listing-slider');
    }
  }
  return $results;
}

function ah_first_image_lrg($postID)
{
  
  $args = array(
    
    'numberposts' => 1,
    'order' => 'ASC',
    'post_mime_type' => 'image',
    'post_parent' => $post->ID,
    'post_status' => null,
    'post_type' => 'attachment',
  );
  
  $attachments = get_children($args);
  
  if ($attachments) {
    
    foreach ($attachments as $attachment) {
      
      $image_attributes = wp_get_attachment_image_src($attachment->ID, 'listing-slider') ? wp_get_attachment_image_src($attachment->ID, 'listing-slider') : wp_get_attachment_image_src($attachment->ID, 'listing-slider');
      
      echo '<img src="' . wp_get_attachment_thumb_url($attachment->ID) . '" class="current">';
    }
  }
}

function ah_first_image_thumb($postID, $property_page = NULL)
{
  
  $args = array(
    
    'numberposts' => 1,
    'order' => 'ASC',
    'post_mime_type' => 'image',
    'post_parent' => $postID,
    'post_status' => null,
    'post_type' => 'attachment',
  );
  
  $attachments = get_children($args);
  
  if ($attachments) {
    
    foreach ($attachments as $attachment) {
      
      $image_attributes = wp_get_attachment_image_src($attachment->ID, 'thumbnail') ? wp_get_attachment_image_src($attachment->ID, 'thumbnail') : wp_get_attachment_image_src($attachment->ID, 'full');
      
      if ($property_page == 1) {
        
        echo '<img width=200 src="' . wp_get_attachment_thumb_url($attachment->ID) . '" class="alignleft">';
        
      } else {
        
        echo '<img src="' . wp_get_attachment_thumb_url($attachment->ID) . '" class="alignleft">';
        
      }
      
    }
    
  }
  
}

function ah_slider_images_thumb()
{
  
  $photos = ct_get_images('thumbnail');
  
  if ($photos) {
    
    foreach ($photos as $photo) { ?>
      
      <li data-thumb="<?php echo get_template_directory_uri(); ?>/img_resize/timthumb.php?src=<?php echo $photo ?>&amp;w=500&amp;zc=1">
        
        <!-- <img class="photo" src="<?php echo get_template_directory_uri(); ?>/img_resize/timthumb.php?src=<?php echo $photo ?>&amp;h=400&amp;w=945&amp;zc=1" title="<?php the_title(); ?>" /> -->
        
        <img class="photo" src="<?php echo $photo ?>" title="<?php the_title(); ?>"/>
      </li>
    
    <?php }
    
  }
}

function ah_listing_map()
{
  
  global $ct_options;
  
  $street = get_post_meta(get_the_ID(), '_ah_listing_street', true);
  
  $city = get_post_meta(get_the_ID(), '_ah_listing_city', true);
  
  ?>
  
  <script>

    function setMapAddress(address) {

      var geocoder = new google.maps.Geocoder();


      geocoder.geocode({address: address}, function (results, status) {


        if (status == google.maps.GeocoderStatus.OK) {
          
          
          
          <?php  if((get_post_meta(get_the_ID(), "_ct_latlng", true))) { ?>



          var location = new google.maps.LatLng(<?php echo get_post_meta(get_the_ID(), "_ct_latlng", true); ?>);
          
          
          
          <?php } else { ?>



          var location = results[0].geometry.location;
          
          
          
          <?php } ?>



          var options = {


            zoom: 15,


            center: location,


            mapTypeId: google.maps.MapTypeId.<?php echo strtoupper($ct_options['ct_contact_map_type']); ?>,


            streetViewControl: true


          };


          var mymap = new google.maps.Map(document.getElementById('map'), options);


          var marker = new MarkerWithLabel({


            map: mymap,


            draggable: false,


            flat: true,


            labelContent: '',


            labelAnchor: new google.maps.Point(22, 0),


            labelClass: "label", // the CSS class for the label


            labelStyle: {opacity: 1},


            icon: '<?php echo get_template_directory_uri(); ?>/images/blank.png',
            
            
            
            <?php  if((get_post_meta(get_the_ID(), "_ct_latlng", true))) { ?>



            position: new google.maps.LatLng(<?php echo get_post_meta(get_the_ID(), "_ct_latlng", true); ?>)
            
            
            
            <?php } else { ?>



            position: results[0].geometry.location
            
            
            
            <?php } ?>



          });


        }


      });


    }


    setMapAddress("<?php echo $street; ?>, <?php echo $city; ?>, <?php state(); ?>, <?php zipcode(); ?>");
  
  
  </script>
  
  
  <div id="map"></div>


<?php }

function ah_wp_head()
{
  
  /* Load Theme Options */
  
  global $ct_options;
  
  if ($ct_options['ct_custom_favicon']) { ?>
    
    
    <link rel="shortcut icon" href="<?php echo $ct_options['ct_custom_favicon']; ?>"/>
  
  
  <?php } ?>
  
  
  <!--[if lt IE 9]>
  
  <script src="http://www.almosthomeusa.com/wp-content/themes/almosthome/js/ltIE9.js"></script>
  
  <![endif]-->
  
  
  <?php if (is_home() || is_archive('listings')) { ?>
  
  
  <script type="text/javascript">


    jQuery(window).load(function () {


      // Slider


      jQuery('#slider').flexslider({


        animation: "<?php echo strtolower($ct_options['ct_flex_animation']); ?>",


        slideDirection: "<?php echo strtolower($ct_options['ct_flex_direction']); ?>",


        slideshow: true,


        slideshowSpeed: <?php echo $ct_options['ct_flex_speed']; ?>,

        animationDuration: <?php echo $ct_options['ct_flex_duration']; ?>,

        directionNav: true,

        keyboardNav: true,
        randomize: <?php echo strtolower($ct_options['ct_flex_randomize']); ?>,
        pauseOnAction: true,
        pauseOnHover: false,
        <?php if (is_home()) {
          echo 'controlsContainer: ".slideshow",';
        } ?>
        
        <?php if (is_single()) {
          
          echo 'animation: "slide",';
          
          echo 'controlNav: "thumbnails",';
        } ?>
        animationLoop: true
      });

      // Carousel

      jQuery('#carousel').flexslider({

        animation: "slide",

        animationLoop: false,

        directionNav: true,

        controlNav: false,
        
        <?php if (is_home()) {
          
          echo 'itemWidth: 227,';
          
        } elseif (is_archive('listings')) {
          
          echo 'itemWidth: 580,';
          
          
        } ?>

        itemMargin: 10

      });

    });
  
  </script>

<?php } ?>
  
  <?php if (is_single()) { ?>
  
  <script type="text/javascript">

    jQuery(window).load(function () {

      jQuery('#carousel').flexslider({

        animation: "slide",

        controlNav: false,

        directionNav: true,

        animationLoop: false,

        slideshow: false,

        slideshowSpeed: <?php echo $ct_options['ct_flex_speed']; ?>,

        animationDuration: <?php echo $ct_options['ct_flex_duration']; ?>,

        itemWidth: 120,

        itemMargin: 0,

        asNavFor: '#slider'

      });

      jQuery('#slider').flexslider({

        animation: "slide",

        controlNav: false,

        animationLoop: false,

        slideshow: false,

        sync: "#carousel"

      });

    });
  
  </script>

<?php } ?>
  
  <!-- FitVids & Backstretch -->
  
  <script>
    jQuery(document).ready(function ($) {
      
      <?php
      // if you are on a listing or property page, then check to see if there is a custom image background in the meta fields. If not, then load the default background image
      ?>
      
      <?php if ( is_page_template('page-city.php') || is_page() ) {
      
      $bg_img = get_post_meta(get_the_ID(), '_ah_city_bg', true);
      
      if ( $bg_img ) { ?>

      $.backstretch("<?php echo get_post_meta(get_the_ID(), '_ah_city_bg', true); ?>");
      
      <?php } ?>
      
      <?php } else if ( 'listings' == get_post_type() && !(is_home()) ) {
      
      $bg_img = get_post_meta(get_the_ID(), '_ah_property_bg', true);
      
      if ( $bg_img ) { ?>

      $.backstretch("<?php echo $bg_img; ?>");
      
      <?php } ?>
      
      <?php } else if ( is_home() ) { ?>

      $.backstretch("https://www.almosthomeusa.com/wp-content/uploads/body_bg-1.jpg");
      
      <?php } else {
      
      if($ct_options['ct_header_bg'] != '') { ?>

      $.backstretch("<?php echo $ct_options['ct_header_bg']; ?>")
      
      <?php } else { ?>

      $.backstretch("<?php echo get_template_directory_uri(); ?>/images/body_bg.jpg")
      
      <?php }
      
      } ?>
      
      
      <?php if ( is_home() || is_page_template('page-city.php') || 'listings' == get_post_type() ) { ?>



      $(".datepicker").datepicker({minDate: 0});
      
      
      
      <?php } ?>

    });
  
  </script>
  
  <?php if ($ct_options['ct_home_map'] == "No") { ?>
  
  <style type="text/css">

      #home #map {
          display: none;
      }

      #home .container[role="masthead"] {
          margin-bottom: 0 !important;
      }
  
  </style>

<?php } ?>
  
  <?php
  
  /* Inject Custom Stylesheet */
  
  if ($ct_options['ct_use_styles'] == "Yes") {
    
    include(TEMPLATEPATH . '/includes/custom-stylesheet.php');
    
    
  }
  
  
  /* Date format */
  
  $GLOBALS['ctdate'] = get_option('ct_dateformat');
  
  if ($GLOBALS['ctdate'] == "")
    
    $GLOBALS['ctdate'] = "M j, Y";
  
}

remove_filter('wp_head', 'ct_wp_head');

add_action('wp_head', 'ah_wp_head');

function ah_city_map($city, $cty_state)
{
  
  global $ct_options;
  
  $count = 1;
  
  ?>
  
  <script>

    var property_list = [];

    var default_mapcenter = [];
    
    <?php
    
    // get featured properties first
    
    $args = array(
      
      'post_type' => 'listings',
      
      'orderby' => 'modified',
      
      'tax_query' => array(
        
        'relation' => 'AND',
        
        array(
          
          'taxonomy' => 'city',
          
          'field' => 'slug',
          
          'terms' => $city
        
        ),
        
        array(
          
          'taxonomy' => 'state',
          
          'field' => 'slug',
          
          'terms' => $cty_state
        
        ),
        
        array(
          
          'taxonomy' => 'status',
          
          'field' => 'slug',
          
          'terms' => 'featured'
        
        )
      
      )
    
    );
    
    $map_query = new WP_Query($args);
    
    
    if ( $map_query->have_posts() ) : while ( $map_query->have_posts() ) : $map_query->the_post();
    
    // get state of listing
    
    $terms_as_text = strip_tags(get_the_term_list($wp_query->post->ID, 'state', '', ', ', ''));
    
    $state = $terms_as_text;
    
    // get beds
    
    $terms_as_text = strip_tags(get_the_term_list($wp_query->post->ID, 'beds', '', ', ', ''));
    
    $beds = $terms_as_text;
    
    // get baths
    
    $terms_as_text = strip_tags(get_the_term_list($wp_query->post->ID, 'baths', '', ', ', ''));
    
    $baths = $terms_as_text;
    
    ?>

    var property = {

      thumb: "<?php ct_first_image_tn_map() ?>",

      price: "<?php echo $count; ?>",

      fullPrice: "<?php currency(); ?><?php listing_price(); ?>",

      bed: "<?php echo $beds; ?>",

      bath: "<?php echo $baths; ?>",

      size: "<?php echo get_post_meta(get_the_ID(), "_ct_sqft", true); ?> <?php sqftsqm(); ?>",

      street: "<?php echo get_post_meta(get_the_ID(), '_ah_listing_street', true); ?>",

      city: "<?php echo get_post_meta(get_the_ID(), '_ah_listing_city', true); ?>",

      state: "<?php echo $state; ?>",

      zip: "<?php zipcode(); ?>",

      latlong: "<?php echo get_post_meta(get_the_ID(), "_ct_latlng", true); ?>",

      permalink: "<?php the_permalink(); ?>",

      agentThumb: "<?php echo get_template_directory_uri(); ?>/img_resize/timthumb.php?src=<?php the_author_meta('ct_profile_url'); ?>&w=40&zc=1'",

      agentName: "<?php the_author_meta('first_name'); ?> <?php the_author_meta('last_name'); ?>",

      agentTagline: "<?php if (get_the_author_meta('tagline')) {
        the_author_meta('tagline');
      } ?>",

      agentPhone: "<?php if (get_the_author_meta('office')) {
        the_author_meta('office');
      } ?>",

      agentEmail: "<?php if (get_the_author_meta('email')) {
        the_author_meta('email');
      } ?>",

      isHome: "<?php if (is_home()) {
        echo "false";
      } else {
        echo "true";
      } ?>",

      commercial: "<?php if (has_type('commercial')) {
        echo 'commercial';
      } ?>"

    }

    property_list.push(property);
    
    <?php
    
    $count++;
    
    endwhile; endif;
    
    wp_reset_query();
    
    ?>
    
    <?php
    
    // get not featured properties
    
    $args = array(
      
      'post_type' => 'listings',
      
      'orderby' => 'modified',
      
      'tax_query' => array(
        
        'relation' => 'AND',
        
        array(
          
          'taxonomy' => 'city',
          
          'field' => 'slug',
          
          'terms' => $city
        
        ),
        
        array(
          
          'taxonomy' => 'state',
          
          'field' => 'slug',
          
          'terms' => $cty_state
        ),
        array(
          
          'taxonomy' => 'status',
          
          'field' => 'slug',
          
          'terms' => 'featured',
          
          'operator' => 'NOT IN'
        
        )
      
      )
    
    );
    
    $map_query = new WP_Query($args);
    
    if ( $map_query->have_posts() ) : while ( $map_query->have_posts() ) : $map_query->the_post();
    
    // get state
    
    $terms_as_text = strip_tags(get_the_term_list($wp_query->post->ID, 'state', '', ', ', ''));
    
    $state = $terms_as_text;
    
    // get beds
    
    $terms_as_text = strip_tags(get_the_term_list($wp_query->post->ID, 'beds', '', ', ', ''));
    
    $beds = $terms_as_text;
    
    // get baths
    
    $terms_as_text = strip_tags(get_the_term_list($wp_query->post->ID, 'baths', '', ', ', ''));
    
    $baths = $terms_as_text;
    
    ?>

    var property = {

      thumb: "<?php ct_first_image_tn_map() ?>",
      price: "<?php echo $count; ?>",
      fullPrice: "<?php currency(); ?><?php listing_price(); ?>",
      bed: "<?php echo $beds; ?>",
      bath: "<?php echo $baths; ?>",
      size: "<?php echo get_post_meta(get_the_ID(), "_ct_sqft", true); ?> <?php sqftsqm(); ?>",
      street: "<?php echo get_post_meta(get_the_ID(), '_ah_listing_street', true); ?>",
      city: "<?php echo get_post_meta(get_the_ID(), '_ah_listing_city', true); ?>",
      state: "<?php echo $state; ?>",
      zip: "<?php zipcode(); ?>",
      latlong: "<?php echo get_post_meta(get_the_ID(), "_ct_latlng", true); ?>",
      permalink: "<?php the_permalink(); ?>",
      agentThumb: "<?php echo get_template_directory_uri(); ?>/img_resize/timthumb.php?src=<?php the_author_meta('ct_profile_url'); ?>&w=40&zc=1'",
      agentName: "<?php the_author_meta('first_name'); ?> <?php the_author_meta('last_name'); ?>",
      agentTagline: "<?php if (get_the_author_meta('tagline')) {
        the_author_meta('tagline');
      } ?>",
      agentPhone: "<?php if (get_the_author_meta('office')) {
        the_author_meta('office');
      } ?>",
      agentEmail: "<?php if (get_the_author_meta('email')) {
        the_author_meta('email');
      } ?>",
      isHome: "<?php if (is_home()) {
        echo "false";
      } else {
        echo "true";
      } ?>",
      commercial: "<?php if (has_type('commercial')) {
        echo 'commercial';
      } ?>"

    }

    property_list.push(property);
    
    <?php
    
    $count++;
    
    endwhile; endif;
    
    wp_reset_query();
    
    ?>
    
  </script>
  
  <script>
    var defaultmapcenter = {mapcenter: "<?php echo $ct_options['ct_map_center']; ?>"};
    google.maps.event.addDomListener(window, 'load', function () {
      estateMapping.init_property_map(property_list, defaultmapcenter);
    });
  </script>
<?php }

function ah_city_quote_form()
{
  
  
  $form_sc = get_post_meta(get_the_ID(), '_ah_city_form_sc', true);
  
  
  $form_city = get_post_meta(get_the_ID(), '_ah_city', true);
  
  
  $form_state = get_post_meta(get_the_ID(), '_ah_state', true); /* Added */
  
  
  ?>
  
  <div class="container">
    
    <div id="request-quote-for" class="six columns offset-by-two alpha omega">
      
      <div class="quote-form">
        
        <h3>Request a Quote for <?php echo $form_city; ?></h3>
        
        <?php /*echo do_shortcode($form_sc);*/
        echo do_shortcode('[gravityform id="10" name="City Request a Quote" title="false" description="false" field_values="city=' . $form_city . '&state=' . $form_state . '"]'); ?>
      
      </div>
      
      <div class="clear"></div>
    
    </div>
  
  </div>
  
  <?php
}

function ah_testimonials($tag = '')
{
  
  if ($tag == 'military') {
    
    $args = array(
      
      'post_type' => 'testimonial',
      
      'posts_per_page' => 5,
      
      'tag' => 'military'
    
    );
    
  } else {
    
    $args = array(
      
      'post_type' => 'testimonial',
      
      'posts_per_page' => 5,
      
      'orderby' => 'rand'
    );
    
  }
  
  $query = new WP_Query($args);
  
  if ($query->have_posts()) {
    
    echo '<ul class="testimonial-content-ahu">';
    while ($query->have_posts()) {
      $query->the_post();
      echo '<li>';
      echo '<blockquote>';
      
      the_content();
      
      echo '</blockquote>';
      echo '<em class="testimonial-author">';
      
      the_title();
      
      echo '</em>';
      
      echo '</li>';
      
    }
    
  } else {
    
    // no posts found
  }
  
  echo '</ul>';
  
  wp_reset_postdata();
}

function ah_latest_news($ah_post_id)
{ ?>
  
  
  <div class="recent-news marT10">
    
    <h5 class="marB10">Recent News</h5>
    
    <?php
    
    $args = array(
      
      'post_type' => 'post',
      
      'posts_per_page' => 5,
      
      'post__in' => array_map('trim', explode(',', $ah_post_id)),
    
    
    );
    
    // The Query
    
    $query = new WP_Query($args);
    
    // The Loop
    
    if ($query->have_posts()) {
      
      echo '<ul>';
      
      while ($query->have_posts()) {
        
        $query->the_post();
        
        echo '<li>';
        
        if (has_post_thumbnail()) {
          
          echo '<a class="recent-news-thumb" href="' . get_permalink() . '">' . get_the_post_thumbnail($query->post->ID, array(96, 96)) . '</a>';
          
        }
        
        echo '<a class="recent-news" href="' . get_permalink() . '">' . get_the_title() . '</a>';
        
        echo '<p>';
        
        the_excerpt();
        
        echo '</p>';
        
        echo '</li>';
        
      }
      
      echo '</ul>';
      
      echo '<div class="clear"></div>';
      
    } else {
      
      // no posts found
    }
    
    /* Restore original Post Data */
    
    wp_reset_postdata();
    ?>
  
  </div>

<?php }

// send data to infusionsoft

add_action('gform_after_submission', 'post_to_infusionsoft', 10, 2);

function post_to_infusionsoft($entry, $form)
{
  
  $post_url = 'https://almosthome.infusionsoft.com/app/form/process/b135155886aac3f633e5f6cb5d92daeb';
  
  $body = array(
    
    'first_name' => $entry['1.3'],
    
    'last_name' => $entry['1.6'],
    
    'message' => $entry['3']
  
  );
  
  $request = new WP_Http();
  
  $response = $request->post($post_url, array('body' => $body));
  
}

function ah_state_abbr()
{
  
  return array('AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY');
  
}


function ah_city_list()
{
  
  return array('Akron', 'Albuquerque', 'Alexandria', 'Alpharetta', 'Anaheim', 'Ann Arbor', 'Annapolis', 'Apple Valley', 'Appleton', 'Arlington', 'Arlington Heights', 'Atlanta', 'Augusta', 'Aurora', 'Austin', 'Back Bay', 'Bakersfield', 'Baltimore', 'Baton Rouge', 'Beacon Hill', 'Belmont', 'Bethesda', 'Birmingham', 'Blacksburg', 'Boise', 'Bolingbrook', 'Boston', 'Boulder', 'Bradenton', 'Brandon', 'Bridgeport', 'Brigham City', 'Bronx', 'Brookfield', 'Brooklyn', 'Bryn Mawr', 'Buckhead', 'Burbank', 'Cambridge', 'Cape Coral', 'Carmel', 'Carrollwood', 'Casper', 'Cedar Rapids', 'Center City', 'Chalfont', 'Chapel Hill', 'Charleston', 'Charlotte', 'Chattanooga', 'Cherry Hills Village', 'Chesterbrook', 'Chesterfield', 'Chicago', 'Chino Hills', 'Christiansburg', 'Chula Vista', 'Cicero', 'Cincinnati', 'Citrus Park', 'Clayton', 'Clearfield', 'Clearwater', 'Cleveland', 'College Park', 'Colorado Springs', 'Columbus', 'Coronado', 'Corpus Christi', 'Costa Mesa', 'Creve Coeur', 'Cumberland', 'Dallas', 'Davenport', 'Dayton', 'Decatur', 'Denver', 'Des Moines', 'Des Plaines', 'Detroit', 'District of Columbia', 'Dorchester', 'Douglasville', 'Doylestown', 'Draper', 'Duluth', 'Dunwoody', 'Durham', 'East Point', 'Eau Claire', 'Eden Prairie', 'Edina', 'Edinburg', 'El Paso', 'Elgin', 'Elmhurst', 'Escondido', 'Eugene', 'Evanston', 'Exton', 'Falls Church', 'Fayette County', 'Flint', 'Fond du Lac', 'Fort Collins', 'Fort Lauderdale', 'Fort Myers', 'Fort Walton Beach', 'Fort Wayne', 'Fort Worth', 'Fremont', 'Fresno', 'Fullerton', 'Gainesville', 'Gary', 'Germantown', 'Glencoe', 'Glendale', 'Glendale Heights', 'Glens Falls', 'Grand Junction', 'Grand Rapids', 'Great Valley', 'Green Bay', 'Greensboro', 'Greenville', 'Griffin', 'Hammond', 'Hampton', 'Harbor Island', 'Harrisburg', 'Hartford', 'Hermosa Beach', 'Hollywood', 'Homestead', 'Horsham', 'Houston', 'Huntington Beach', 'Huntsville', 'Hyde Park', 'Independence', 'Indianapolis', 'Ingleside', 'Iowa City', 'Irvine', 'Irving', 'Jackson', 'Jacksonville', 'Jenkintown', 'Jersey City', 'Johns Creek', 'Joliet', 'Kansas City', 'Kenilworth', 'Kennesaw', 'Kenosha', 'King of Prussia', 'Kingsessing', 'Knoxville', 'La Crosse', 'La Jolla', 'Ladue', 'Lafayette', 'Laguna Beach', 'Lake Bluff', 'Lakewood', 'Lancaster', 'Lansdale', 'Lansing', 'Laredo', 'Las Vegas', 'Lawrenceville', 'Layton', 'Lexington', 'Lincoln', 'Little Rock', 'Littleton', 'Logan', 'Lombard', 'Long Beach', 'Los Angeles', 'Louisville', 'Lubbock', 'Mableton', 'Madison', 'Malvern', 'Manitowoc', 'Manhattan', 'Mantua', 'Marietta', 'Marina del Rey', 'McAllen', 'Memphis', 'Menomonee Falls', 'Mesa', 'Mequon', 'Miami', 'Midland', 'Midtown', 'Midvale', 'Milwaukee', 'Minneapolis', 'Minnetonka', 'Mission', 'Mission Viejo', 'Mobile', 'Modesto', 'Monterey', 'Montgomery', 'Naperville', 'Naples', 'Nashville', 'New Berlin', 'New Haven', 'New Orleans', 'New York', 'Newark', 'Newnan', 'Newport Beach', 'Newport News', 'Norfolk', 'Norristown', 'North Atlanta', 'North Charleston', 'North Decatur', 'North Druid Hills', 'Northbrook', 'Northwest Philadelphia', 'Oak Creek', 'Oak Park', 'Oakland', 'Oceanside', 'Odessa', 'Ogden', 'Oklahoma City', 'Omaha', 'Ontario', 'Orange County', 'Orem', 'Orlando', 'Oshkosh', 'Overland Park', 'Oxnard', 'Palatine', 'Palm Desert', 'Palm Springs', 'Palmdale', 'Palo Alto', 'Paoli', 'Paradise', 'Park Ridge', 'Pasadena', 'Peachtree City', 'Pensacola', 'Peoria', 'Perimeter Center', 'Pewaukee', 'Philadelphia', 'Phoenix', 'Pittsburgh', 'Plano', 'Plant City', 'Playa Vista', 'Point Breeze', 'Portland', 'Providence', 'Provo', 'Queens', 'Racine', 'Radford', 'Raleigh', 'Rancho Cucamonga', 'Redan', 'Redlands', 'Redondo Beach', 'Reno', 'Richmond', 'Richmond Heights', 'Riverside', 'Riverview', 'Roanoke', 'Rock Island', 'Rockford', 'Roswell', 'Ruskin', 'Sacramento', 'Salem', 'Salt Lake City', 'San Angelo', 'San Antonio', 'San Bernardino', 'San Diego', 'San Fernando Valley', 'San Francisco', 'San Jose', 'San Luis Obispo', 'San Marcos', 'Sandy', 'Sandy Springs', 'Santa Ana', 'Santa Barbara', 'Santa Clara', 'Santa Clarita', 'Santa Fe', 'Santa Monica', 'Santa Rosa', 'Sarasota', 'Savannah', 'Schaumburg', 'Scottsdale', 'Seattle', 'Sheboygan', 'Shreveport', 'Sioux Falls', 'Skokie', 'Smyrna', 'South Bend', 'Southwest Philadelphia', 'Spokane', 'Spring Garden', 'Springfield', 'St. George', 'St. Louis', 'St. Louis Park', 'St. Paul', 'St. Petersburg', 'Stamford', 'Stenton', 'Stevens Point', 'Stockton', 'Sturgeon Bay', 'Summerville', 'Sun City Center', 'Tacoma', 'Tallahassee', 'Tampa', 'Tampa Palms', 'Taylorsville', 'Tempe', 'Temple Terrace', 'Terre Haute', 'Thornotosassa', 'Toledo', 'Topeka', 'Tucker', 'Tucson', 'Tulsa', 'University City', 'Upper Darby', 'Vancouver', 'Virginia Beach', 'Washington DC', 'Watertown', 'Waukegan', 'Waukesha', 'Wauwatosa', 'West Allice', 'West Bend', 'West Chester', 'West Jordan', 'West Los Angeles', 'West Palm Beach', 'West Valley City', 'Westminster', 'Wheaton', 'Wichita', 'Williamsburg', 'Williamsport', 'Willowbrook', 'Wilmette', 'Winnetka', 'Winston-Salem', 'Woodland Hills', 'Worcester', 'Other');
  
}

function ah_undo_hooks()
{
  
  remove_filter('excerpt_more', 'new_excerpt_more');
  
}

add_action('after_setup_theme', 'ah_undo_hooks');

function ah_excerpt($more)
{
  
  return ' . . .';
  
}

add_filter('excerpt_more', 'ah_excerpt');


// Enqueue Scripts and Styles

function ah_scripts_method() {
  
  wp_enqueue_style('font-awesome', get_stylesheet_directory_uri() . '/listing-slider/font-awesome-4.6.3/css/font-awesome.min.css', array(), '2018', 'all');
  
  wp_register_style('bootstrap-css', get_stylesheet_directory_uri() . '/listing-slider/css/bootstrap.min.css', array(), '3.3.6', 'all');
  wp_enqueue_style('bootstrap-css');
  
  wp_register_style('thumbnail-image', get_stylesheet_directory_uri() . '/listing-slider/css/thumbnail_image_carousel.css', array(), '2018', 'all');
  wp_enqueue_style('thumbnail-image');
  
  wp_register_style('gpproduct', get_stylesheet_directory_uri() . '/listing-slider/css/gp_product_carousel_advance.css', array(), '2018', 'all');
  wp_enqueue_style('gpproduct');
  
  wp_enqueue_style('style-css', get_stylesheet_directory_uri() . '/style.css', array(), '1.0', 'all');
  
  wp_enqueue_style('custom-css', get_stylesheet_directory_uri() . '/custom.css', array(), '1.0', 'all');
  
  /*
   * Enqueue Scripts
   *
   **/
  
  wp_register_script('bootstrap-js', get_stylesheet_directory_uri() . '/listing-slider/js/bootstrap.min.js', array(), '1.12.4', true);
  wp_enqueue_script('bootstrap-js');
  
  wp_register_script('touchSwipe', get_stylesheet_directory_uri() . '/listing-slider/js/jquery.touchSwipe.min.js', array(), '1.6.9', true);
  wp_enqueue_script('touchSwipe');
  
  wp_register_script('bootstrap-carousel', get_stylesheet_directory_uri() . '/listing-slider/js/responsive_bootstrap_carousel.js', array(), '1.6.9', true);
  wp_enqueue_script('bootstrap-carousel');
  
  wp_enqueue_script('googlemap', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAwE_R0j9LaPcsU1munBqEaK10PkSeLKU8&callback=initMap', true);
  
  wp_enqueue_script('global', get_stylesheet_directory_uri() . '/js/global.js', array(), '2016', true);
  
  wp_enqueue_script('mapping', get_stylesheet_directory_uri() . '/js/mapping.js', array(), '2016', true);
  
  wp_enqueue_script('marker-with-label', get_stylesheet_directory_uri() . '/js/MarkerWithLabel.js', array(), '2016', true);
  
  wp_enqueue_script('info-bubble', get_stylesheet_directory_uri() . '/js/infobubble.js', array(), '2016', true);
  
  wp_register_script('backstretch-js', get_stylesheet_directory_uri() . '/js/jquery.backstretch.min.js', array(), '2.1.17', true);
  wp_enqueue_script('backstretch-js');
}

add_action('wp_enqueue_scripts', 'ah_scripts_method');


function ahu_tag_line_content()
{
  
  echo '<span class="ahu_tag_line">The Almost Home Experience... Your Perfect Choice</span>';
  
}

function add_my_forms($forms)
{
  
  $forms['seven_secrets'] = "AH 7 Secrets Opt-In Form";
  
  // $forms['form_2_slug'] = "Form 2 Display Name";
  
  return $forms;
}

add_filter('cptch_add_form', 'add_my_forms');

function prefix_add_footer_styles()
{
  wp_enqueue_style('footer-css', get_stylesheet_directory_uri() . '/css/footer.css', array(), '', 'all');
}

add_action('get_footer', 'prefix_add_footer_styles');
