<?php

/**

 * Index Template

 *

 * @package WP Pro Real Estate 3

 * @subpackage Template

 */

 

if (!empty($_GET['search-listings'])) {

	require('search-listings.php');

	return;

}



get_header(); ?>

	

        <!-- section class="sixteen columns alpha omega marT40" -->

          <!-- div id="carousel" class="flexslider sixteen columns alpha omega"-->

          <div id="carousel" class="flexslider" style="border:0px;">

          <h1>Corporate Housing from Almost Home</h1>

          <h3>Featured Listings</h3>

            <ul class="slides marT10">

            <?php 

            $args = array(

            'status' => 'featured',

            'post_type' => 'listings',

            'posts_per_page' => 8

            );

            query_posts($args);

             

            if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

                                    

           <?php $city = get_post_meta( $post->ID, '_ah_listing_city', true ); ?>

              <li>

                <div class="img-wrap">

                <?php ct_status(); ?>

                <?php ct_first_image_linked(); ?>

                </div>

                <div class="featured-listing-info marT6 marL10">

                <h5 class="marB0"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h5>

                <p class="location marB8"><?php echo $city; ?>, <?php state(); ?> <?php zipcode(); ?></p>

                <?php if( (get_post_meta($post->ID, "_ct_price", true)) != "" ) { ?><p class="price marB0"><strong><?php currency(); ?><?php listing_price(); ?></strong><?php if(has_status('for-rent') || has_status('rental')) { echo " /month"; } ?></p><?php } ?>

                <p class="propinfo marB0"><?php if(has_type('land') || has_type('lot')) { ?><?php echo get_post_meta($post->ID, "lotsize_value", true); ?> <?php acres(); ?><?php } elseif(has_type('commercial')) { ?><?php // Display Nothing ?><?php } else { ?><?php beds(); ?> <?php baths(); ?><?php  if((get_post_meta($post->ID, "_ct_sqft", true))) { ?> | <?php echo get_post_meta($post->ID, "_ct_sqft", true); ?> <?php sqftsqm(); ?><?php } ?><?php } ?></p>

                </div>	

              </li>

                                    

            <?php endwhile; endif; ?>

            <?php wp_reset_query(); ?>

            </ul>

          </div>

        <!-- /section -->

        <div id="featured-listings" class="sixteen columns alpha omega hero-unit" >

            <div class="eight columns">

                <?php echo do_shortcode('[nivoslider id="2369"]'); ?>



                <h3>Customizing Your Corporate Housing Accommodations to The Perfect Choice</h3>



                <p>We customize our apartments with a corporate housing package to fit your special requests. Would you like an office in your home instead of a second bedroom? Do you need a washer or dryer in the apartment or a fitness facility on the community premises? Explain your requests to our caring housing specialists and they will create a perfect customized package for your temporary housing or extended stay need.</p>



            </div>

            <div class="eight columns omega">

                <h2>What We Offer</h2>

                

                <h3>Short-Term Business Assignments</h3>

                <p>Need housing for a month or two while on a short-term business assignment? One of our corporate apartments may just be what you are looking for. Cost-effective and with a feel much like home, many business travelers have found our furnished apartments to more than meet their expectations.</p>

                

                <h3>Relocation in Your Desired Location of the City</h3>

                <p>Our philosophy of providing multiple corporate housing locations in each city creates convenience, affordability and choice for our clients. Our menu of great apartment or home locations means the relocation property that will best serve your needs is selected.</p>

                

                <h3>Emergency Housing in Times of Disaster</h3>

                <p>Almost Home is a perfect temporary housing solution when disaster strikes by fire or flood and you need a furnished apartment or home for an extended stay until your own home is back in order. Because the cost is less than a hotel, your insurance carrier will be pleased and you will live in comfortable housing that is almost like home!</p>

              	<p><b>Almost Home Corporate Housing - Corporate Office</b><br>

				20 South 1st Avenue, Sturgeon Bay, WI 54235<br>

				(920) 743-8765</p>

			</div>

        </div>





			<?php

            $layout = $ct_options['ct_homepage_layout']['enabled'];

            

            if ($layout) :

            

            foreach ($layout as $key=>$value) {

            

                switch($key) {

					

				// Slider

				case 'slider' : ?>

                

                <?php ct_slider(); ?>

                

                <?php

                break;

				

				// Call To Action

                case 'call_to_action' : ?>

                <div id="cta" class="sixteen columns marT40">

                	<div id="cta-inner">

						<?php echo stripslashes($ct_options['ct_cta_text']); ?>

                        	<div class="clear"></div>

                    </div>

                </div>

                <?php

                break;

				

				// Three Column Widget Area

				case 'three_col_widget_area' : ?>

                

                <section id="three-col-widget-area" class="sixteen columns alpha omega marT40">

                    <div class="five columns alpha marT30">

                        <?php echo stripslashes($ct_options['ct_why_us']); ?>

                    </div>

                    

                    <div class="widget-area ten columns offset-by-one omega marT30">

                        <?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Three Column Homepage') ) :else: endif; ?>

                    </div>

                </section>

                

                <?php

				break;

				

				// Four Column Widget Area

				case 'four_col_widget_area' : ?>

                

                <section id="four-col-widget-area" class="sixteen columns alpha omega marT40">

					<?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Four Column Homepage') ) :else: endif; ?>

                </section>

                

                <?php

				break;

				

				// Testimonials

				case 'testimonials' :

				

				include(get_template_directory() . '/includes/testimonials.php');

				

				break;

                }

            

            } endif; ?>



<?php get_footer(); ?>