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

/**
 * Auto-initialize missing Default Theme Options 
 * This ensures cross-environment compatibility (like Live Server) where Theme Options may not have been saved yet.
 */
add_action('init', function () {
    $mod = get_option('creote_theme_mod');

    // If essential themes options are already seeded, comfortably exit
    if (is_array($mod) && !empty($mod['page_header_enable']) && !empty($mod['default_page_header_image']['url'])) {
        return;
    }

    $json_path = get_template_directory() . '/includes/demo-content/demo-content/demo-content-version-1/redux_options_3.json';
    if (file_exists($json_path)) {
        $json = file_get_contents($json_path);
        if ($json) {
            $defaults = json_decode($json, true);
            $new_options = array_merge($defaults, is_array($mod) ? $mod : []);
            update_option('creote_theme_mod', $new_options);
        }
    }
});