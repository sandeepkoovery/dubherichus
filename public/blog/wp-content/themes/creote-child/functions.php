<?php
/**
 * Theme functions and definitions.
 */
function creote_child_enqueue_styles() {

    if ( SCRIPT_DEBUG ) {
        wp_enqueue_style( 'creote-style' , get_template_directory_uri() . '/style.css' );
    } else {
wp_enqueue_style( 'creote-style' , get_template_directory_uri() . '/style.css' );
    }

    wp_enqueue_style( 'creote-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( 'creote-style' ),
        wp_get_theme()->get('Version')
    );
}

add_action(  'wp_enqueue_scripts', 'creote_child_enqueue_styles' );