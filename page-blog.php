<?php
/**
 * Template Name: Blog
 *
 * The blog page template displays the "blog-style" template on a sub-page. 
 *
 */

 $layout = $ct_options['ct_layout'];

 get_header();
 
/**
 * The Variables
 *
 * Setup default variables, overriding them if the "Theme Options" have been saved.
 */
	
	
?>
   
     <header id="page-header" class="sixteen columns alpha omega">
                <div id="page-header-inner">
                    <div class="ten columns alpha omega">
                        <h3 class=""><?php the_title(); ?></h3>
                       
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
               

                 <?php
                        if ( get_query_var( 'paged') ) { $paged = get_query_var( 'paged' ); } elseif ( get_query_var( 'page') ) { $paged = get_query_var( 'page' ); } else { $paged = 1; }
                        
                        $query_args = array(
                                            'post_type' => 'post', 
                                            'paged' => $paged,

                                        );
                        
                        
                        
                       
                        query_posts( $query_args );
                        
                        if ( have_posts() ) {
                            $count = 0;
                            while ( have_posts() ) { the_post(); $count++; ?>

                                <article <?php post_class('marB18 pad20'); ?>>
                    
                    
                        <?php if ( has_post_thumbnail()) : ?>
                           <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" >
                           <?php the_post_thumbnail('thumbnail', array('class' => 'alignleft')); ?>
                           </a>
                         <?php endif; ?>
                         
                        <h3 class="entry-title marB3"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                        <?php include(TEMPLATEPATH . '/includes/post-meta.php'); ?>
                        <p class="marT12 excerpt"><?php the_excerpt(); ?></p>
                        <a class="read-more right" href="<?php the_permalink(); ?>"><?php if($ct_read_more) { echo $ct_read_more; } else {  echo "Read more &rarr;"; } ?></a>
                    
                </article>

                          <?php   } // End WHILE Loop
                        
                        } else {
                    ?>
                        
                    <?php } // End IF Statement ?> 

                    <?php
                        $big = 999999999; // need an unlikely integer

                        // echo paginate_links( array(
                        //     'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                        //     'format' => '?paged=%#%',
                        //     'current' => max( 1, get_query_var('paged') ),
                        //     'total' => $the_post->max_num_pages
                        // ) );
                        echo paginate_links();
                        ?>

            <?php wp_reset_query(); ?>               

            </section>
            <?php if($layout == "right-sidebar" || $layout == "three-column") { ?>
                <div id="right-sidebar" class="<?php if($layout == "three-column") { echo 'four columns omega'; } else { echo 'five columns omega'; } ?>">
                    <?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Right Sidebar Pages') ) :else: endif; ?>
                        <div class="clear"></div>
                </div>
            <?php } ?>
<?php get_footer(); ?>
    
        
    