<?php
/**
 * Single Template
 *
 * @package WP Pro Real Estate 4
 * @subpackage Template
 */
 
$layout = $ct_options['ct_layout'];

get_header(); ?>
           
            
			<?php if(get_post_meta($post->ID, "_ct_video", true)) {
			echo '<div class="video sixteen columns alpha omega marB30">';
			echo stripslashes(get_post_meta($post->ID, "_ct_video", true));
			echo '</div>';
            } ?>
            
			<?php if($layout == "left-sidebar" || $layout == "three-column") { ?>
				<div id="left-sidebar" class="<?php if($layout == "three-column") { echo 'four'; } else { echo 'five'; } ?> columns alpha">
					<?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Left Sidebar Blog') ) :else: endif; ?>
                        <div class="clear"></div>
                </div>
			<?php } ?>
            
            <section id="content" class="<?php if($layout == "left-sidebar") { echo 'eleven omega'; } elseif($layout == "right-sidebar") { echo 'eleven'; } elseif($layout == "three-column") { echo 'eight'; } elseif($layout == "full-width") { echo 'sixteen alpha omega'; } ?> columns">
                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                
                    <article id="post-<?php the_ID(); ?>" <?php post_class('pad20 marB20'); ?>>

                        <h3 class="entry-title marB0"><?php the_title(); ?></h3>
                        <?php include(TEMPLATEPATH . '/includes/post-meta.php'); ?>

						<?php //include(TEMPLATEPATH . '/includes/post-lead.php'); ?>
                        
                        <div class="post-content marT20">
							<?php the_content(); ?>
                        </div>
                        
                        <?php include(TEMPLATEPATH . '/includes/post-social.php'); ?>
                        
                        <?php wp_link_pages( array( 'before' => '<div class="page-link"><span>' . __( 'Pages:', 'contempo' ) . '</span>', 'after' => '</div>' ) ); ?>
                    
                        <?php if($ct_options['ct_author_info'] == "Yes") { ?>
                            <?php include(TEMPLATEPATH . '/includes/post-author-info.php'); ?>
                        <?php } ?>
                        
                        <nav class="marT30">
                            <div class="nav-previous left"><?php next_post_link('%link', '<em>&larr;</em> Previous', TRUE); ?></div>
                            <div class="nav-next right"><?php previous_post_link('%link', 'Next <em>&rarr;</em>', TRUE); ?></div>
                                <div class="clear"></div>
                        </nav>
                            <div class="clear"></div>

                    </article>
                    
                    <?php if($ct_options['ct_post_comments'] == "Yes" && comments_open()) { ?>
					<?php comments_template( '', true ); ?>
                    <?php } ?>
                
				<?php endwhile; ?>
                
					<?php //wp_link_pages(); ?>
				
				<?php endif; ?>
            </section>
            
            <?php if($layout == "right-sidebar" || $layout == "three-column") { ?>
				<div id="right-sidebar" class="<?php if($layout == "three-column") { echo 'four'; } else { echo 'five'; } ?> columns omega">
					<?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Right Sidebar Blog') ) :else: endif; ?>
                        <div class="clear"></div>
                </div>
			<?php } ?>
            
<?php get_footer(); ?>