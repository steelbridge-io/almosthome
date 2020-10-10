<?php 
/**
 * Standard Loop
 *
 * @package WP Pro Real Estate 4
 * @subpackage Template
 */
 
global $ct_options;
$ct_read_more = $ct_options['ct_read_more'];
 
if (have_posts()) {

while (have_posts() ) : the_post(); ?>
		
    <article <?php post_class('marB18 pad20'); ?>>
		
        <div class="<?php if($layout == "left-sidebar" || $layout == "right-sidebar") { echo 'twothirdcol'; } elseif($layout == "three-column") { echo 'fourcol'; } elseif($layout == "full-width") { echo 'twothirdcol'; } ?> right">

            <?php if ( has_post_thumbnail()) : ?>
               <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" >
               <?php the_post_thumbnail('thumbnail', array('class' => 'alignleft')); ?>
               </a>
             <?php endif; ?>
             
            <h3 class="entry-title marB3"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
            <?php include(TEMPLATEPATH . '/includes/post-meta.php'); ?>
            <p class="marT12 excerpt"><?php the_excerpt(); ?></p>
            <a class="read-more right" href="<?php the_permalink(); ?>"><?php if($ct_read_more) { echo $ct_read_more; } else {  echo "Read more &rarr;"; } ?></a>
        </div>
    </article>
    
<?php endwhile; ?>

	<?php if(!is_home()) {
		ct_content_nav();
	} ?>

<?php } else { ?>

    <p class="nomatches left clear"><?php _e( 'Apologies, but no results were found for the requested archive.<br />Perhaps searching will help find a related post.', 'contempo' ); ?></p>
    
<?php } wp_reset_query(); ?>