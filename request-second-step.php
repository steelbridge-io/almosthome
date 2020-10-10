<?php

/*

Template Name: Request Second Step

*/

//error_reporting(E_ALL ^ (E_NOTICE | E_WARNING));

$layout = $ct_options['ct_layout'];



get_header("simple"); ?>

            <!--<header id="page-header" class="sixteen columns alpha omega">

                <div id="page-header-inner">

                    <div class="ten columns alpha omega">

                        <h3 class=""><?php /*the_title();*/ ?></h3>

                       

                    </div>

                  

                        <div class="clear"></div>

                </div>

            </header> -->

			<?php if($layout == "left-sidebar" || $layout == "three-column") { ?>

				<div id="left-sidebar" class="<?php if($layout == "three-column") { echo 'four columns alpha'; } else { echo 'five columns alpha'; } ?>">

					<?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Left Sidebar Pages') ) :else: endif; ?>

                        <div class="clear"></div>

                </div>

			<?php } ?>

            <section id="content" class="<?php if($layout == "left-sidebar") { echo 'eleven omega'; } elseif($layout == "right-sidebar") { echo 'eleven'; } elseif($layout == "three-column") { echo 'eight'; } elseif($layout == "full-width") { echo 'sixteen alpha omega'; } ?> columns">

                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

                

                    <article id="post-<?php the_ID(); ?>" <?php post_class('pad20 marB20'); ?>>

                        

                        <div class="post-content marT20">

		                    <p>Thank you, <?php if(isset($_GET['full_name'])) echo $_GET['full_name']; else echo "Client"; ?>, for your request. In order to best match your needs with a housing solution, we encourage you to fill out a few additional details related to your needs.</p>

                            <?php the_content(); ?>

                        </div>



                    </article>

                

				<?php endwhile; ?>

                

					<?php //wp_link_pages(); ?>

				

				<?php endif; ?>

            </section>

            <?php if($layout == "right-sidebar" || $layout == "three-column") { ?>

				<div id="right-sidebar" class="<?php if($layout == "three-column") { echo 'four columns omega'; } else { echo 'five columns omega'; } ?>">

                <?php if ( is_page(647) ) { ?>

                    <div class="widget testimonial-widget">

                

                        <?php ah_testimonials(); ?>

                

                    </div>

               <?php } ?>

					<?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Right Sidebar Pages') ) :else: endif; ?>

                        <div class="clear"></div>

                </div>

			<?php } ?>

<?php get_footer(); ?>