<?php
/**
 * Archive Template
 *
 * @package WP Pro Real Estate 4
 * @subpackage Template
 */
 
$layout = $ct_options['ct_layout'];

get_header(); ?>
            <header id="archive-header" class="sixteen columns alpha omega ">
                <div id="archive-header-inner">
                    <div class="six columns alpha omega">
                        <?php if (is_category()) { ?>
                        <h3 class="marB0"><?php echo single_cat_title(); ?></h3>
                        <p class="marT6 marB0"><?php echo category_description(); ?></p>
                        <?php } elseif (is_day()) { ?>
                        <h3><?php _e( 'Archive', 'contempo' ); ?> | <?php the_time($GLOBALS['ctdate']); ?></h1>
                        <?php } elseif (is_month()) { ?>
                        <h3><?php _e( 'Archive', 'contempo' ); ?> | <?php the_time( 'F, Y' ); ?></h1>
                        <?php } elseif (is_year()) { ?>
                        <h3><?php _e( 'Archive', 'contempo' ); ?> | <?php the_time( 'Y' ); ?></h1>
                        <?php } elseif (is_author()) { ?>
                        <h3><?php _e( 'Archive by Author', 'contempo' ); ?></h1>
                        <?php } elseif (is_tag()) { ?>
                        <h3><?php _e( 'Tag Archives:', 'contempo' ); ?> <?php echo single_tag_title( '', true); ?></h1>
                        <?php } elseif (is_404()) { ?>
                        <h3><?php _e( 'Whoops&hellip;', 'contempo' ); ?></h1>
                        <?php } ?>
                        </div>
                       
                            <div class="clear"></div>
                </div>
            </header>
            
            <?php if($layout == "left-sidebar" || $layout == "three-column") { ?>
            <div id="left-sidebar" class="<?php if($layout == "three-column") { echo 'four'; } else { echo 'five'; } ?> columns alpha">
				<?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Left Sidebar Blog') ) :else: endif; ?>
                    <div class="clear"></div>
            </div>
            <?php } ?>
            
            <section id="content" class="<?php if($layout == "left-sidebar") { echo 'eleven omega'; } elseif($layout == "right-sidebar") { echo 'eleven'; } elseif($layout == "three-column") { echo 'eight'; } elseif($layout == "full-width") { echo 'sixteen alpha omega'; } ?> columns">
				<?php get_template_part( 'loop', 'archive'); ?>
            </section>
            
            <?php if($layout == "right-sidebar" || $layout == "three-column") { ?>
				<div id="right-sidebar" class="<?php if($layout == "three-column") { echo 'four'; } else { echo 'five'; } ?> columns alpha omega">
					<?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Right Sidebar Blog') ) :else: endif; ?>
                        <div class="clear"></div>
                </div>
			<?php } ?>
<?php get_footer(); ?>