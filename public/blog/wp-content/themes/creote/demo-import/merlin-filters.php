<?php
/**
 * Available filters for extending Merlin WP.
 *
 * @package   Merlin WP
 * @version   @@pkg.version
 * @link      https://merlinwp.com/
 * @author    Rich Tabor, from ThemeBeans.com & the team at ProteusThemes.com
 * @copyright Copyright (c) 2018, Merlin WP of Inventionn LLC
 * @license   Licensed GPLv3 for Open Source Use
 */

/**
 * Filter the home page title from your demo content.
 * If your demo's home page title is "Home", you don't need this.
 *
 * @param string $output Home page title.
 */
function prefix_merlin_content_home_page_title( $output ) {
	return 'My front page';
}
add_filter( 'merlin_content_home_page_title', 'prefix_merlin_content_home_page_title' );

/**
 * Filter the blog page title from your demo content.
 * If your demo's blog page title is "Blog", you don't need this.
 *
 * @param string $output Index blogroll page title.
 */
function prefix_merlin_content_blog_page_title( $output ) {
	return 'Journal';
}
add_filter( 'merlin_content_blog_page_title', 'prefix_merlin_content_blog_page_title' );

/**
 * Add your widget area to unset the default widgets from.
 * If your theme's first widget area is "sidebar-1", you don't need this.
 *
 * @see https://stackoverflow.com/questions/11757461/how-to-populate-widgets-on-sidebar-on-theme-activation
 *
 * @param  array $widget_areas Arguments for the sidebars_widgets widget areas.
 * @return array of arguments to update the sidebars_widgets option.
 */
function prefix_merlin_unset_default_widgets_args( $widget_areas ) {

	$widget_areas = array(
		'sidebar-blog' => array(),
	);

	return $widget_areas;
}
add_filter( 'merlin_unset_default_widgets_args', 'prefix_merlin_unset_default_widgets_args' );

/**
 * Custom content for the generated child theme's functions.php file.
 *
 * @param string $output Generated content.
 * @param string $slug Parent theme slug.
 */
function prefix_generate_child_functions_php( $output, $slug ) {

	$slug_no_hyphens = strtolower( preg_replace( '#[^a-zA-Z]#', '', $slug ) );

	$output = "
		<?php
		/**
		 * Theme functions and definitions.
		 */
		function {$slug_no_hyphens}_child_enqueue_styles() {

		    if ( SCRIPT_DEBUG ) {
		        wp_enqueue_style( '{$slug}-style' , get_template_directory_uri() . '/style.css' );
		    } else {
				wp_enqueue_style( '{$slug}-style' , get_template_directory_uri() . '/style.css' );
		    }

		    wp_enqueue_style( '{$slug}-child-style',
		        get_stylesheet_directory_uri() . '/style.css',
		        array( '{$slug}-style' ),
		        wp_get_theme()->get('Version')
		    );
		}

		add_action(  'wp_enqueue_scripts', '{$slug_no_hyphens}_child_enqueue_styles' );\n
	";

	// Let's remove the tabs so that it displays nicely.
	$output = trim( preg_replace( '/\t+/', '', $output ) );

	// Filterable return.
	return $output;
}
add_filter( 'merlin_generate_child_functions_php', 'prefix_generate_child_functions_php', 10, 2 );

/**
 * Define the demo import files (remote files).
 *
 * To define imports, you just have to add the following code structure,
 * with your own values to your theme (using the 'merlin_import_files' filter).
 */
function prefix_merlin_import_files() {
	$theme_directory_url = get_template_directory_uri();
	$image_path1 = $theme_directory_url . '/includes/demo-content/demo-content/demo-content-version-2/screenshot.jpg'; 
	$image_path2 = $theme_directory_url . '/includes/demo-content/demo-content/demo-wpbakery/screenshot-wp.jpg';    
	return array(  
		array(
			'import_file_name'           => 'Creote Elementor  Demo Content (Home 1 to 12 pages)',
			'local_import_file'            => trailingslashit(get_template_directory()) . '/includes/demo-content/demo-content/demo-content-version-1/creoteelementor3.xml',  
			'local_import_widget_file'     => trailingslashit(get_template_directory()) . '/includes/demo-content/demo-content/demo-content-version-1/c-widgets.wie',
			'local_import_redux'               => array(
			  array(
			  'file_path'   => trailingslashit(get_template_directory()) . '/includes/demo-content/demo-content/demo-content-version-1/redux_options_3.json',
			  'option_name' => 'creote_theme_mod',
			  ),
			),
			'import_rev_slider_file_url' => array(
                array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/home-eleven.zip',
                    'name'     => 'Home Slider 1',
                ),
                array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/Home-Four.zip',
					'name'     => 'Home Slider 2',
                ),
                array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/home-one.zip',
					'name'     => 'Home Slider 3',
                ),
                array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/Home-Three.zip',
					'name'     => 'Home Slider 4',
                ),
                array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/home-twelve.zip',
					'name'     => 'Home Slider 5',
                ), 
				array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/slider-1.zip',
                	 'name'     => 'Home Slider 6',
                ), 
				array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/slider-2.zip',
					'name'     => 'Home Slider 7',
                ), 
            ),
			'import_preview_image_url'   => esc_url($image_path1), 
			'import_notice'              => __( 'Creote Elementor  Demo Content (Home 11 To  12 )', 'creote' ),
			'preview_url'                => 'https://themepanthers.com/wp/creote/demo-content/v-new/',
		  ),
		  array(
			'import_file_name'           => 'Creote Elementor  Demo Content (Home 13 To  16 )',
			'local_import_file'            => trailingslashit(get_template_directory()) . '/includes/demo-content/demo-content/demo-content-version-2/creote-sml-version-2.xml',
			'local_import_widget_file'     => trailingslashit(get_template_directory()) . '/includes/demo-content/demo-content/demo-content-version-2/widget-version-2.wie',
			'local_import_redux'               => array(
			  array(
			  'file_path'   => trailingslashit(get_template_directory())  . '/includes/demo-content/demo-content/demo-content-version-2/redux_options__version-2.json',
			  'option_name' => 'creote_theme_mod',
			  ),
			),
			'import_rev_slider_file_url' => array(
                array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/home-eleven.zip',
                    'name'     => 'Home Slider 1',
                ),
                array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/Home-Four.zip',
					'name'     => 'Home Slider 2',
                ),
                array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/home-one.zip',
					'name'     => 'Home Slider 3',
                ),
                array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/Home-Three.zip',
					'name'     => 'Home Slider 4',
                ),
                array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/home-twelve.zip',
					'name'     => 'Home Slider 5',
                ), 
				array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/slider-1.zip',
                	 'name'     => 'Home Slider 6',
                ), 
				array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/slider-2.zip',
					'name'     => 'Home Slider 7',
                ), 
            ),
			'import_preview_image_url'   => esc_url($image_path1), 
			'import_notice'              => __( 'Creote Elementor  Demo Content (Home 13 To  16 )', 'creote' ),
			'preview_url'                => 'https://themepanthers.com/wp/creote/demo-content/v2-new',
		  ),
		  array(
			'import_file_name'           => 'Creote Wpbakery Demo Content',
			'local_import_file'            => trailingslashit(get_template_directory()) . '/includes/demo-content/demo-content/demo-wpbakery/content-wpbakery.xml',
			'local_import_widget_file'     => trailingslashit(get_template_directory()) . '/includes/demo-content/demo-content/demo-wpbakery/widget.wie',
			'local_import_redux'               => array(
			  array(
			  'file_path'   => trailingslashit(get_template_directory())  . '/includes/demo-content/demo-content/demo-wpbakery/wp_redux.json',
			  'option_name' => 'creote_theme_mod',
			  ),
			),
			'import_preview_image_url'   => esc_url($image_path2), 
			'import_rev_slider_file_url' => array(
                array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/home-eleven.zip',
                    'name'     => 'Home Slider 1',
                ),
                array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/Home-Four.zip',
					'name'     => 'Home Slider 2',
                ),
                array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/home-one.zip',
					'name'     => 'Home Slider 3',
                ),
                array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/Home-Three.zip',
					'name'     => 'Home Slider 4',
                ),
                array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/home-twelve.zip',
					'name'     => 'Home Slider 5',
                ), 
				array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/slider-1.zip',
                	 'name'     => 'Home Slider 6',
                ), 
				array(
                    'file_url' => 'https://themepanthers.com/wp/creote/demo-content/slider-2.zip',
					'name'     => 'Home Slider 7',
                ), 
            ), 
			'import_notice'              => __( 'Creote Wpbakery Demo Content One Main Demo Home 1 to 4', 'creote' ),
			'preview_url'                => 'https://themepanthers.com/wp/creote/demo-content/version-1/',
		  )
	 
	);
}
add_filter( 'merlin_import_files', 'prefix_merlin_import_files' );

 
/**
 * Execute custom code after the whole import has finished.
 */
function prefix_merlin_after_import_setup() {  
  	$selected_import = intval( $_POST['selected_index'] );  
	// Assign menus to their locations.
	$top_menu = get_term_by('name', 'Primary Menu', 'nav_menu');
	set_theme_mod('nav_menu_locations', array(
		'primary' => $top_menu->term_id,
	)); 
	// Set Front page
	if($selected_import == 0){
		$page = get_page_by_title('Home Default'); 
	} 
	elseif($selected_import == 1){
		$page = get_page_by_title('Home'); 
	}
	elseif($selected_import == 2){
		$page = get_page_by_title('Home Default '); 
	}
	else{
		$page = get_page_by_title('Home Default '); 
	}
	update_option('page_on_front', $page->ID);
	update_option('show_on_front', 'page'); 
	$blogpage = get_page_by_title('Blog'); 
	update_option('page_for_posts', $blogpage->ID);
		 // Set permalink structure to "Post Name"
		 update_option('permalink_structure', '/%postname%/');
}
  
add_action( 'merlin_after_all_import', 'prefix_merlin_after_import_setup' );
add_filter( 'woocommerce_prevent_automatic_wizard_redirect', '__return_true' );
add_action('init', 'do_output_buffer'); function do_output_buffer() { ob_start(); }

if( ! function_exists('merlin_filesystem') ) {
	/**
	 * [fixkar_filesystem description]
	 * @return [type] [description]
	 */
	function merlin_filesystem() {
		if( ! function_exists('require_filesystem_credentials')) {
			require_once ABSPATH . 'wp-admin/includes/file.php';
		}

		// you can safely run request_filesystem_credentials() without any issues and don't need to worry about passing in a URL /
		$creds = request_filesystem_credentials(esc_url(home_url('/')), '', false, false, array());

		// initialize the API /
		if ( ! WP_Filesystem($creds) ) {
			// any problems and we exit /
			return false;
		}	

		global $wp_filesystem;
		// do our file manipulations below /

		return $wp_filesystem;
	}
} 