<?php
require 'wp-load.php';
$post = get_page_by_path('benefit-from-the-top-ten-digital-marketing-trends', OBJECT, 'post');
if ($post) {
    update_post_meta($post->ID, 'frature_img_enable', '1');
    echo "Updated frature_img_enable to 1.\n";
} else {
    echo "Post not found.\n";
}
