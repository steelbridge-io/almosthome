 <?php



 error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);



/*



Template Name: City Page



*/

    $layout = $ct_options['ct_layout'];



    $city = get_post_meta( $post->ID, '_ah_city', true );



    $city_links = get_post_meta( $post->ID, '_ah_city_links', true );



    $city_news = get_post_meta( $post->ID, '_ah_latest_news', true );



    $city_content = get_post_meta( $post->ID, '_ah_city_content', true );

    // get city's state to filter out same city/different state listings

    $cty_state = get_post_meta( $post->ID, '_ah_state', true );


    get_header(); 

?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>



         <div id="right-sidebar" class="seven columns omega marT20">



         <h1 class="marB0">View Properties Below</h1>



                <p>Please fill out "Request a Quote" for additional availability.</p>



                



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



                    $count = 0;







                    $list_query = new WP_Query( $args );







                    if ( $list_query->have_posts() ) : while ( $list_query->have_posts() ) : $list_query->the_post();







                ?>



                <article class="city-listing-single">







                    <?php



                        $count++; 



                        $id = $list_query->post->ID;



                        $city = get_post_meta( $id, '_ah_listing_city', true );



                        $state = strip_tags( get_the_term_list( $id, 'state', '', ', ', '' ) );



                        $zip = strip_tags( get_the_term_list( $id, 'zipcode', '', ', ', '' ) );



                        echo '<a href="';



                        echo the_permalink();



                        echo '">';



                        ah_first_image_thumb( $id ); 



                        echo '</a>';







                    ?>



                   



                    <h3><?php echo $count . '. '; ?><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3> 



                    <p><?php echo $city . ', ' . $state . ' ' . $zip; ?></p>           



                    <p><?php the_excerpt(); ?></p>



                    <p><a href="<?php the_permalink(); ?>">Read More</a></p>



                    <div class="clear"></div>



                </article>



                



                <?php endwhile; ?>



                <?php endif; ?>







                 <?php 



                    // get not featured properties second



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



                    







                    $list_query = new WP_Query( $args );







                    if ( $list_query->have_posts() ) : while ( $list_query->have_posts() ) : $list_query->the_post();







                ?>



                <article class="city-listing-single">







                    <?php



                        $count++; 



                        $id = $list_query->post->ID;



                        $city = get_post_meta( $id, '_ah_listing_city', true );



                        $state = strip_tags( get_the_term_list( $id, 'state', '', ', ', '' ) );



                        $zip = strip_tags( get_the_term_list( $id, 'zipcode', '', ', ', '' ) );



                        echo '<a href="';



                        echo the_permalink();



                        echo '">';



                        ah_first_image_thumb( $id ); 



                        echo '</a>';







                    ?>



                   



                    <h3><?php echo $count . '. '; ?><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3> 



                    <p><?php echo $city . ', ' . $state . ' ' . $zip; ?></p>           



                    <p><?php the_excerpt(); ?></p>



                    <p><a href="<?php the_permalink(); ?>">Read More</a></p>



                    <div class="clear"></div>



                </article>



                



                <?php endwhile; ?>



                <?php endif; ?>







            <div class="clear"></div>







            <div class="widget testimonial-widget">



                



                <?php ah_testimonials(); ?>



                



            </div>







            <div class="widget">



                <img src="<?php bloginfo('stylesheet_directory' ); ?>/images/chpa-logo.png" alt="CHPA">

                



                <p>Almost Home is a proud member of The Corporate Housing Providers Association (CHPA), the association worldwide for the industry of corporate housing. We've been a member since 2003. </p>



            </div>







            <?php if ( $city_links ) { ?>



                 <div class="widget">



                <h4>Corporate Housing in Nearby Cities</h4>



                <ul>



                    <?php echo $city_links; ?>



                </ul>



            </div>



            <?php } ?>



           







             <div class="widget">



                <h4>7 Secrets to Finding the Best Corporate Housing</h4>



                <p>Receive helpful advice on how to find the best corporate housing that meets your needs.</p>



                <!-- form name="seven_secrets" id="seven_secrets" onSubmit="return validateFormJS();" --> 

                <form name="seven_secrets" id="seven_secrets" action="https://almosthome.infusionsoft.com/AddForms/processFormSecure.jsp" method="post">



                   <input value="eedba9b65e06620389783e889da9d2a8" id="infusion_xid" name="infusion_xid" type="hidden">



                   <input value="CustomFormWeb" id="infusion_type" name="infusion_type" type="hidden">



                   <input value="AH 7 Secrets Opt-In Form for Homepage" id="infusion_name" name="infusion_name" type="hidden">

                   



                    <input size="15" name="Contact0FirstName"  id="Contact0FirstName" value="First Name" type="text">                



                   <input size="15" name="Contact0Email" value="Email" type="text">

                   <div style="position: relative; left: 60px;" align="center">

                   <?php echo apply_filters( 'cptch_display', '' ); 

                   ?>

                   </div>

                   <input value="Submit" class="button np inf-button" id="Submit" name="Submit" type="submit"></td>



                   </form>



                   <small>Your information will be not be sold or distributed.</small>



            </div>



            



        </div>



        



    <section id="content" class="<?php if($layout == "left-sidebar") { echo 'eleven omega'; } elseif($layout == "right-sidebar") { echo 'nine'; } elseif($layout == "three-column") { echo 'eight'; } elseif($layout == "full-width") { echo 'sixteen alpha omega'; } ?> columns"> 



               



        <!-- <header id="page-header" class="nine columns alpha omega marT30 marB20">



              



        </header> -->



        <article id="post-<?php the_ID(); ?>" <?php post_class('pad20 marB20'); ?>>



            <h1 class="marB0"><?php the_title(); ?></h1>



           



            <div class="post-content marT20">



            



                <?php ahu_tag_line_content() ?>



				<?php the_content(); ?>



            </div>



        



    



<?php endwhile; ?>



<?php endif; ?>







            <div id="map-wrap" class="columns alpha omega marB20">



                



                <?php ah_city_map($city, $cty_state); ?>







                    <div id="location">



                        <div id="map" class="toggle columns"></div>



                        <a href="#" class="show-hide">Hide Map</a>



                    </div>



            </div>







            <?php if ( $city_content ) {



                echo $city_content;



            } ?>



        



                <p class="quote-request">



                    <a href="<?php echo home_url(); ?>/request-a-quote/" class="ah-button">Request a Quote</a>



                </p>







                <?php 







                    if ( $city_news ) { 



                        echo '<div class="pad20">';



                        ah_latest_news( $city_news );



                        echo '</div>';



                    } 







                    $boiler = get_post_meta( $post->ID, '_ah_city_boiler', true );







                    if ( $boiler ) {



                        echo '<article class="pad20">';



                         echo $boiler;



                        echo '</article>';



                    }



                   







                ?>







                 



                </article>



               







            </section> <?php // end left column ?>







                



        



  



<?php get_footer(); ?>