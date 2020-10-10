<?php
/**
 * Page
 *
 * @package WP Pro Real Estate 4
 * @subpackage Template
 */
 
$layout = $ct_options['ct_layout'];

get_header(); ?>
            <header id="page-header" class="sixteen columns alpha omega marT30 marB20">
                <div id="page-header-inner">
                    <div class="ten columns alpha omega">
                        <h3 class="marB0">Page Not Found</h3>
                       
                    </div>
                  
                        <div class="clear"></div>
                </div>
            </header>
			<?php if($layout == "left-sidebar" || $layout == "three-column") { ?>
				<div id="left-sidebar" class="<?php if($layout == "three-column") { echo 'four columns alpha'; } else { echo 'five columns alpha'; } ?>">
					<?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Left Sidebar Pages') ) :else: endif; ?>
                        <div class="clear"></div>
                </div>
			<?php } ?>
            <section id="content" class="<?php if($layout == "left-sidebar") { echo 'eleven omega'; } elseif($layout == "right-sidebar") { echo 'eleven'; } elseif($layout == "three-column") { echo 'eight'; } elseif($layout == "full-width") { echo 'sixteen alpha omega'; } ?> columns">
               Please use the menu above to find what you are looking for.
            </section>
            <?php if($layout == "right-sidebar" || $layout == "three-column") { ?>
				<div id="right-sidebar" class="<?php if($layout == "three-column") { echo 'four columns omega'; } else { echo 'five columns omega'; } ?>">
					<?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Right Sidebar Pages') ) :else: endif; ?>
                        <div class="clear"></div>
                </div>
			<?php } ?>
<?php get_footer(); ?>