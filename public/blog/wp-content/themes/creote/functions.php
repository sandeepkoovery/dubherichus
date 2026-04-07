<?php
/*
 *=================================
 * Creote Functions and Definitions
 * @package Creote WordPress Theme
 *==================================
*/
// ============================== theme file get ============================
require_once get_template_directory() . '/includes/Mobile_Detect.php';
// Merlin

// Mobile Detect callback
function isMobile() {
    if ( ! class_exists( 'Mobile_Detect' ) ) {
        return false;
    }
    // Validate Mobile_Detect version
    if (!defined('MOBILE_DETECT_VERSION') || version_compare(MOBILE_DETECT_VERSION, '2.8.0', '<')) {
        return false;
    }
    $detect = new Mobile_Detect();
    return ($detect->isMobile() || $detect->isTablet());
}
if (!function_exists('is_plugin_active')) {
    include_once(ABSPATH . 'wp-admin/includes/plugin.php');
  }

require_once get_template_directory() . '/includes/theme-file.php'; 
if(class_exists('Creote_Addons')):
add_action( 'vc_before_init', 'creote_vc_remove_css' );
function creote_vc_remove_css() {
    vc_remove_param('vc_row', 'css');
}
endif;
// ============================== theme update ============================ 
use YahnisElsts\PluginUpdateChecker\v5\PucFactory; 
if(class_exists('Creote_update')): 
    $update_key = '33328caf00548c12cdce0c8f53fea73b'; // Put your generated key here 
    $myUpdateChecker = PucFactory::buildUpdateChecker(
        add_query_arg('license_key', $update_key, 'https://themepanthers.com/updatedplugin/creote/theme.json'),
        __FILE__,
        'creote-theme-update'
    );
endif; 
// ============================== theme update ============================
add_action('init', 'creote_disable_elementor_onboarding_redirect');
function creote_disable_elementor_onboarding_redirect() {
    delete_transient( 'elementor_activation_redirect' );
}
// ============================== Elementor Register Location ============================
function creote_register_elementor_locations( $elementor_theme_manager ) {
    if (!current_user_can('edit_theme_options')) {
        return;
    }
    
    // Validate manager
    if (!method_exists($elementor_theme_manager, 'register_all_core_location')) {
        return;
    }
    $elementor_theme_manager->register_all_core_location();
	$elementor_theme_manager->register_location(
		'footer',
		[
			'hook' => 'creote_elementor_footer',
			'remove_hooks' => [ 'creote_print_elementor_footer' ],
		]
	);
    $elementor_theme_manager->register_location(
		'header',
		[
			'hook' => 'creote_elementor_header',
			'remove_hooks' => [ 'creote_print_elementor_header' ],
		]
	);
	 
}
add_action( 'elementor/theme/register_locations', 'creote_register_elementor_locations' );

// Theme footer
function creote_print_elementor_footer() {
	get_template_part( 'templates-parts/footer' );  
}
add_action( 'creote_elementor_footer', 'creote_print_elementor_footer' );
// Theme header
function creote_print_elementor_header() {
    ?>
	    <?php get_template_part( 'templates-parts/header' ); ?>
    <?php
}
add_action( 'creote_elementor_header', 'creote_print_elementor_header' );
// ============================== Elementor Register Location ============================
 
 
/**
 * Add admin notice for plugin updates.
 */
add_action('admin_notices', 'custom_plugin_update_notice');
function custom_plugin_update_notice() {
    // Only run for admin users with manage_options capability
    if (!current_user_can('manage_options')) {
        return;
    }

    // Only run on plugins page to reduce overhead
    $screen = get_current_screen();
    if ($screen->base !== 'plugins') {
        return;
    }

    // URL to the hosted version.json file
    $json_url = 'https://themepanthers.com/updatedplugin/plugins.json';

    // Check transient for cached data
    $transient_key = 'custom_plugin_update_data';
    $data = get_transient($transient_key);

    if (false === $data) {
        // Set strict arguments for the request
        $args = array(
            'timeout'     => 5,
            'redirection' => 5,
            'sslverify'   => true,
            'headers'     => array(
                'Accept' => 'application/json'
            )
        );

        // Fetch the JSON file
        $response = wp_remote_get(esc_url_raw($json_url), $args);

        // Check for errors
        if (is_wp_error($response)) {
            error_log('Plugin update check failed: ' . $response->get_error_message());
            return;
        }

        // Verify response code
        $response_code = wp_remote_retrieve_response_code($response);
        if ($response_code !== 200) {
            error_log('Plugin update check failed with response code: ' . $response_code);
            return;
        }

        // Parse the JSON response
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);

        // Cache the data for 12 hours
        set_transient($transient_key, $data, 12 * HOUR_IN_SECONDS);
    }

    // Validate JSON structure
    if (!is_array($data) || !isset($data['plugins']) || !is_array($data['plugins'])) {
        error_log('Invalid plugin update JSON structure');
        return;
    }

    // Trusted domains for source URLs
    $trusted_domains = ['themepanthers.com', 'themeforest.net'];

    foreach ($data['plugins'] as $plugin) {
        // Validate required plugin data
        if (!isset($plugin['slug'], $plugin['name'], $plugin['latest_version'], $plugin['source']) ||
            !is_string($plugin['slug']) ||
            !is_string($plugin['name']) ||
            !is_string($plugin['latest_version']) ||
            !is_string($plugin['source'])) {
            error_log('Invalid plugin data for slug: ' . (isset($plugin['slug']) ? $plugin['slug'] : 'unknown'));
            continue;
        }

        // Validate source URL domain
        $source_host = parse_url($plugin['source'], PHP_URL_HOST);
        if (!in_array($source_host, $trusted_domains)) {
            error_log('Untrusted source URL for plugin: ' . $plugin['slug']);
            continue;
        }

        // Sanitize plugin data
        $slug = sanitize_file_name($plugin['slug']);
        $plugin_path = wp_normalize_path(WP_PLUGIN_DIR . '/' . $slug . '/' . $slug . '.php');

        // Verify the path is within the plugins directory
        if (strpos($plugin_path, wp_normalize_path(WP_PLUGIN_DIR)) !== 0 || !file_exists($plugin_path)) {
            error_log('Invalid plugin path for slug: ' . $slug);
            continue;
        }

        // Get installed plugin data
        $plugin_data = get_plugin_data($plugin_path);
        $installed_version = isset($plugin_data['Version']) ? $plugin_data['Version'] : '';

        if (!empty($installed_version) && version_compare($installed_version, $plugin['latest_version'], '<')) {
            // Use wp_kses to allow only specific HTML tags
            $message = sprintf(
                __('A new version of %s is available. Installed version: %s, Latest version: %s. You can download the update from %s.', 'risehand'),
                '<strong>' . esc_html($plugin['name']) . '</strong>',
                esc_html($installed_version),
                esc_html($plugin['latest_version']),
                '<a href="' . esc_url($plugin['source']) . '" target="_blank" rel="noopener noreferrer">' . esc_html__('here', 'risehand') . '</a>'
            );

            printf(
                '<div class="notice notice-warning is-dismissible"><p>%s</p></div>',
                wp_kses(
                    $message,
                    array(
                        'strong' => array(),
                        'a' => array(
                            'href' => array(),
                            'target' => array(),
                            'rel' => array()
                        )
                    )
                )
            );
        }
    }
}

/**
 * Add admin notice for Ecom Theme promotion.
 */
add_action('admin_notices', 'ecom_theme_launch_notice');
function ecom_theme_launch_notice() {
    // Only run for admin users with manage_options capability
    if (!current_user_can('manage_options')) {
        return;
    }

    // Only show on dashboard or plugins page
    $screen = get_current_screen();
    if ($screen->base !== 'dashboard' && $screen->base !== 'plugins') {
        return;
    }

    // Check if notice was permanently dismissed
    if (get_option('ecom_theme_notice_dismissed') === 'permanent') {
        return;
    }

    // Generate nonce for AJAX
    $nonce = wp_create_nonce('ecom_dismiss_nonce');
    ?>
    <style>
        .ecom-admin-notice {
            border: 4px solid var(--color-set-one-2, #FD9636);
            background: var(--background-bg-1, #F0F3F8);
            padding: 15px 20px;
            margin: 20px 0;
            border-radius: 8px;
            font-family: var(--font-family-main, "DM Sans", sans-serif);
            color: var(--content-color-one, #425A8B);
            display: flex;
            align-items: center;
            gap: 15px;
            justify-content: space-between;
            position: relative;
        }
        .ecom-admin-notice img {
            width: 40%;
            height: auto;
            border-radius: 4px;
        }
        .ecom-admin-notice > div {
            width: 50%;
        }
        .ecom-admin-notice h2 {
            margin: 0 0 5px;
            font-size: 18px;
            color: var(--heading-color-one, #425A8B);
        }
        .ecom-admin-notice p {
            margin: 0;
            color: var(--content-color-two, #8C9EC5);
            font-size: 14px;
        }
        .ecom-notice-dismiss {
            position: absolute;
            top: 10px;
            right: 15px;
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
            color: var(--content-color-two, #8C9EC5);
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .ecom-notice-dismiss:hover {
            color: var(--heading-color-one, #425A8B);
        }
    </style>
    <div class="notice notice-info ecom-admin-notice" id="ecom-admin-notice">
        <button class="ecom-notice-dismiss" onclick="dismissEcomNotice()" title="<?php echo esc_attr__('Dismiss permanently', 'risehand'); ?>">×</button>
        <img src="<?php echo esc_url('https://elango.steelthemes.com/ecom/ecom-promo.jpg'); ?>" alt="<?php echo esc_attr__('Ecom Theme', 'risehand'); ?>" />
        <div>
            <h2><strong><?php echo esc_html__('Ecom Multipurpose WooCommerce Theme', 'risehand'); ?></strong></h2>
            <p><?php
                printf(
                    esc_html__('Check the demos: %s | %s', 'risehand'),
                    '<a href="' . esc_url('https://elango.steelthemes.com/ecom/el1/') . '" target="_blank">' . esc_html__('Elementor Page Builder Version', 'risehand') . '</a>',
                    '<a href="' . esc_url('https://elango.steelthemes.com/ecom/wp1') . '" target="_blank">' . esc_html__('Wpbakery Page Builder Version', 'risehand') . '</a>'
                );
                ?><br>
                <?php
                printf(
                    esc_html__('🎉 Launched at just %s first release offer. The price will increase to $59 soon.', 'risehand'),
                    '<strong style="color: var(--color-set-one-2, #FD9636);">$13</strong>'
                );
                ?>
            </p>
            <br>
            <a href="<?php echo esc_url('https://themeforest.net/item/ecom-multipurpose-woocommerce-wp-theme/58774920'); ?>" class="button" target="_blank"><?php echo esc_html__('Purchase and Save 46$ Now', 'risehand'); ?></a>
        </div>
    </div>
    <script>
        function dismissEcomNotice() {
            // Hide the notice immediately
            document.getElementById('ecom-admin-notice').style.display = 'none';

            // Send AJAX request to save dismiss time
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '<?php echo esc_url(admin_url('admin-ajax.php')); ?>', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onerror = function() {
                alert('<?php echo esc_js(__('Failed to dismiss the notice. Please try again.', 'risehand')); ?>');
                document.getElementById('ecom-admin-notice').style.display = 'block';
            };
            xhr.send('action=dismiss_ecom_notice&nonce=<?php echo esc_js($nonce); ?>');
        }
    </script>
    <?php
}

/**
 * Handle AJAX request to dismiss the Ecom theme notice.
 */
add_action('wp_ajax_dismiss_ecom_notice', 'handle_dismiss_ecom_notice');
function handle_dismiss_ecom_notice() {
    // Verify nonce for security
    if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'ecom_dismiss_nonce')) {
        wp_send_json_error('Security check failed', 403);
    }

    // Save permanent dismissal
    update_option('ecom_theme_notice_dismissed', 'permanent');

    wp_send_json_success();
}

/**
 * Reset the Ecom notice dismissal (for testing purposes).
 */
function reset_ecom_notice() {
    delete_option('ecom_theme_notice_dismissed');
}
 
 