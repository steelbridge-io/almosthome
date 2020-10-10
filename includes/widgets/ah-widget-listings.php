<?php
/**
 * Listings
 *
 * @package WP Pro Real Estate 4
 * @subpackage Widget
 */
 
 

function ah_city( $post_id, $echo = true ) {
	$terms_as_text = strip_tags( get_the_term_list( $post_id, 'city', '', ', ', '' ) );
	if ( $echo )
		echo $terms_as_text;
	else
		return $terms_as_text;
}

function ah_state( $post_id, $echo = true ) {
	$terms_as_text = strip_tags( get_the_term_list( $post_id, 'state', '', ', ', '' ) );
	if ( $echo )
		echo $terms_as_text;
	else
		return $terms_as_text;
}

function ah_zipcode( $post_id ) {
	$terms_as_text = strip_tags( get_the_term_list( $post_id, 'zipcode', '', ', ', '' ) );
	echo $terms_as_text;
}

function ah_beds( $post_id ) {
	$terms_as_text = strip_tags( get_the_term_list( $post_id, 'beds', '', ', ', '' ) );
	if($terms_as_text != '') {
		echo $terms_as_text; _e(' Bed', 'contempo');
	}
}

function ah_baths( $post_id ) {
	$terms_as_text = strip_tags( get_the_term_list( $post_id, 'baths', '', ', ', '' ) );
	if($terms_as_text != '') {
		echo '| '; echo $terms_as_text; _e(' Bath', 'contempo');
	}
}

function ah_listing_price( $post_id ) {
	$price_meta = get_post_meta($post_id, '_ct_price', true);
	$price_meta= preg_replace('/[\$,]/', '', $price_meta);
	echo  number_format($price_meta, 0, '.', ',');
}

class ah_Listings extends WP_Widget {

   function ah_Listings() {
	   $widget_ops = array('description' => 'Display your latest listings.' );
	   parent::WP_Widget(false, __('AH Listings', 'contempo'),$widget_ops);      
   }

   function widget($args, $instance) {  
	extract( $args );
	$title = $instance['title'];
	$number = $instance['number'];
	$taxonomy = $instance['taxonomy'];
	$tag = $instance['tag'];
	$viewalltext = $instance['viewalltext'];
	$viewalllink = $instance['viewalllink'];
	?>
		<?php echo $before_widget; ?>
		<?php if ($title) { echo $before_title . $title . $after_title; }
		echo '<ul>';
		global $post;
		if ( is_singular( 'post' ) ){
			$tax_query = array(
				'relation' => 'AND',
				array(
					'taxonomy' => 'city',
					'field' => 'slug',
					'terms' => array( ah_city( $post->ID, false ) )
				),
				array(
					'taxonomy' => 'state',
					'field' => 'slug',
					'terms' => array( ah_state( $post->ID, false ) )
				)
			);
		}
		$args = array(
            'post_type' => 'listings', 
            'order' => 'DSC',
			$taxonomy => $tag,
            'posts_per_page' => $number
		);
		if ( !empty( $tax_query ) ) {
			unset( $args[$taxonomy] );
			$args['tax_query'] = $tax_query;
		}
		$listings = get_posts( $args );
		if ( empty( $listings ) ) {
			$args[$taxonomy] = $tag;
			$listings = get_posts( $args );
		}
            
        foreach ( $listings as $post ) : setup_postdata( $post ); ?>
        	<?php  $city = get_post_meta( get_the_ID(), '_ah_listing_city', true ); ?>
            <li>
                <?php ct_first_image_tn_left(); ?>
                <div class="listing-info marL10 left">
                    <h5 class="marB0"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h5>
                    <p class="location marB8"><?php echo $city; ?>, <?php ah_state( $post->ID ); ?> <?php ah_zipcode( $post->ID ); ?></p>
                    <?php if( (get_post_meta($post->ID, "_ct_price", true)) != "" ) { ?><p class="price marB0"><strong><?php currency(); ?><?php ah_listing_price( $post->ID ); ?></strong><?php if(has_status('for-rent', $post) || has_status('rental', $post)) { echo " /month"; } ?></p><?php } ?>
                    <p class="propinfo marB0"><?php if(has_type('land', $post) || has_type('lot', $post)) { ?><?php echo get_post_meta($post->ID, "lotsize_value", true); ?> <?php acres(); ?><?php } elseif(has_type('commercial', $post)) { ?><?php // Display Nothing ?><?php } else { ?><?php ah_beds( $post->ID ); ?> <?php ah_baths( $post->ID ); ?><?php  if((get_post_meta($post->ID, "_ct_sqft", true))) { ?> | <?php echo get_post_meta($post->ID, "_ct_sqft", true); ?> <?php sqftsqm(); ?><?php } ?><?php } ?></p>
                </div>
                    <div class="clear"></div>
            </li>

        <?php endforeach; ?>
		
		<?php echo '</ul>'; ?>
        
           <?php if($viewalltext) { ?>
               <p id="viewall"><a class="read-more right" href="<?php echo $viewalllink; ?>"><?php echo $viewalltext; ?> <em>&rarr;</em></a></p>
           <?php } ?>
		
		<?php echo $after_widget; ?>   
    <?php
   }

   function update($new_instance, $old_instance) {                
	   return $new_instance;
   }

   function form($instance) {

		$title = esc_attr($instance['title']);
		$number = esc_attr($instance['number']);
		$taxonomy = esc_attr($instance['taxonomy']);
		$tag = esc_attr($instance['tag']);
		$viewalltext = esc_attr($instance['viewalltext']);
		$viewalllink = esc_attr($instance['viewalllink']);
		?>
		<p>
		   <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:','contempo'); ?></label>
		   <input type="text" name="<?php echo $this->get_field_name('title'); ?>"  value="<?php echo $title; ?>" class="widefat" id="<?php echo $this->get_field_id('title'); ?>" />
		</p>
		<p>
            <label for="<?php echo $this->get_field_id('number'); ?>"><?php _e('Number:','contempo'); ?></label>
            <select name="<?php echo $this->get_field_name('number'); ?>" class="widefat" id="<?php echo $this->get_field_id('number'); ?>">
                <?php for ( $i = 1; $i <= 10; $i += 1) { ?>
                <option value="<?php echo $i; ?>" <?php if($number == $i){ echo "selected='selected'";} ?>><?php echo $i; ?></option>
                <?php } ?>
            </select>
        </p>
        <p>
            <label for="<?php echo $this->get_field_id('taxonomy'); ?>"><?php _e('Taxonomy:','contempo'); ?></label>
            <select name="<?php echo $this->get_field_name('taxonomy'); ?>" class="widefat" id="<?php echo $this->get_field_id('taxonomy'); ?>">
                <?php
				foreach (get_object_taxonomies( 'listings', 'objects' ) as $tax => $value) { ?>
                <option value="<?php echo $tax; ?>" <?php if($taxonomy == $tax){ echo "selected='selected'";} ?>><?php echo $tax; ?></option>
                <?php } ?>
            </select>
        </p>
        <p>
		   <label for="<?php echo $this->get_field_id('tag'); ?>"><?php _e('Tag:','contempo'); ?></label>
		   <input type="text" name="<?php echo $this->get_field_name('tag'); ?>"  value="<?php echo $tag; ?>" class="widefat" id="<?php echo $this->get_field_id('tag'); ?>" />
		</p>
        <p>
		   <label for="<?php echo $this->get_field_id('viewalltext'); ?>"><?php _e('View All Link Text','contempo'); ?></label>
		   <input type="text" name="<?php echo $this->get_field_name('viewalltext'); ?>"  value="<?php echo $viewalltext; ?>" class="widefat" id="<?php echo $this->get_field_id('viewalltext'); ?>" />
		</p>
        <p>
		   <label for="<?php echo $this->get_field_id('viewalllink'); ?>"><?php _e('View All Link URL','contempo'); ?></label>
		   <input type="text" name="<?php echo $this->get_field_name('viewalllink'); ?>"  value="<?php echo $viewalllink; ?>" class="widefat" id="<?php echo $this->get_field_id('viewalllink'); ?>" />
		</p>
		<?php
	}
} 

register_widget('ah_Listings');
?>