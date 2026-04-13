<?php
require 'wp-load.php';
$json = file_get_contents(get_template_directory() . '/includes/demo-content/demo-content/demo-content-version-1/redux_options_3.json');
$defaults = json_decode($json, true);

$current = get_option('creote_theme_mod', []);

// Merge defaults with current options, preventing overriding user's explicitly set options
$new_options = array_merge($defaults, is_array($current) ? $current : []);

update_option('creote_theme_mod', $new_options);

echo "Redux theme options successfully initialized and saved to the database!\n";
