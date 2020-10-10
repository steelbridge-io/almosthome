<?php

/**

 * Template Name: Right Sidebar

 *

 * @package WP Pro Real Estate 4

 * @subpackage Template

 */

 

$layout = $ct_options['ct_layout'];



get_header(); ?>

            <header id="page-header" class="sixteen columns alpha omega">

                <div id="page-header-inner">

                    <div class="ten columns alpha omega">

                        <h3 class=""><?php the_title(); ?></h3>

                        

                    </div>

                 

                        <div class="clear"></div>

                </div>

            </header>

            

           

            

            <section id="content" class="eleven columns omega">

                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

                

                    <article id="post-<?php the_ID(); ?>" <?php post_class('pad20 marB20'); ?>>

                        

                        <div class="post-content">

							<?php the_content(); ?>

                        </div>



                    </article>

                

				<?php endwhile; ?>

                

					<?php //wp_link_pages(); ?>

				

				<?php endif; ?>

            </section>



             <div id="right-sidebar" class="five columns alpha">

                <div class="widget clearfix">



                    <?php 

                        if ( is_page(637) ) {

                            ah_testimonials('military');

                        } else {



                            ah_testimonials('all');

                        }

                    ?>

                </div>

                 

                <?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Left Sidebar Pages') ) :else: endif; ?>

                    <div class="clear"></div>

            </div>

<?php get_footer(); ?>