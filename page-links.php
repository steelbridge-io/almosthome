<?php
/*
Template Name: List post links
*/
$postID = $wpdb->get_col("
	SELECT ID FROM $wpdb->posts
	WHERE (post_type = 'post')
	AND (post_status = 'publish')
	AND (post_password = '')
");

foreach($postID as $post_link) {
	?>
	<?php echo get_permalink($post_link); ?><br />
	<?php
}


$pageID = $wpdb->get_col("
	SELECT ID FROM $wpdb->posts
	WHERE (post_type = 'page')
	AND (post_status = 'publish')
	AND (post_password = '')
");

foreach($pageID as $post_link) {
	?>
	<?php echo get_permalink($post_link); ?><br />
	<?php
}


$listID = $wpdb->get_col("
	SELECT ID FROM $wpdb->posts
	WHERE (post_type = 'listings')
	AND (post_status = 'publish')
	AND (post_password = '')
");

foreach($listID as $post_link) {
	?>
	<?php echo get_permalink($post_link); ?><br />
	<?php
}
?>