<?php
require 'wp-load.php';
$post = get_page_by_path('benefit-from-the-top-ten-digital-marketing-trends', OBJECT, 'post');
if ($post) {
    echo "Has Thumbnail: " . (has_post_thumbnail($post->ID) ? "Yes" : "No") . "\n";
    echo "page_header_enable_disable meta: " . var_export(get_post_meta($post->ID, 'page_header_enable_disable', true), true) . "\n";
    echo "frature_img_enable meta: " . var_export(get_post_meta($post->ID, 'frature_img_enable', true), true) . "\n";
    echo "creote_has_page_header(): " . var_export(creote_has_page_header(), true) . "\n";
} else {
    echo "Post not found\n";
}
