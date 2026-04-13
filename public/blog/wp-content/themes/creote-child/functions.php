<?php
/**
 * Theme functions and definitions.
 */
function creote_child_enqueue_styles()
{

    if (SCRIPT_DEBUG) {
        wp_enqueue_style('creote-style', get_template_directory_uri() . '/style.css');
    } else {
        wp_enqueue_style('creote-style', get_template_directory_uri() . '/style.css');
    }

    wp_enqueue_style(
        'creote-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('creote-style'),
        filemtime(get_stylesheet_directory() . '/style.css')
    );
}


add_action('wp_enqueue_scripts', 'creote_child_enqueue_styles');

/**
 * Global URL rewrite Filter
 * Resolves localhost links in menus and content by replacing them with the dynamic site URL.
 */
add_action('template_redirect', function () {
    ob_start(function ($output) {
        // Calculate the main site home URL from the blog home URL
        $blog_home = home_url();
        $main_home = str_replace('/blog', '', $blog_home);

        // Replace hardcoded localhost paths with the dynamic main site URL
        return str_replace('http://localhost/dubhemerak/public', $main_home, $output);
    });
});