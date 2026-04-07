<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wishery_blog');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', '');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'U$)k%$pgo3I(t8/Fs0i5YpOx#/z+_YH^kzcgsRR_WxzHw)d/IZvXH|C}fX{cf7Jg');
define('SECURE_AUTH_KEY', '60Pg7C9X-I%sr339{|E?so-[>JK!eF,yz6neL5eipGq*z?GXIKV? bAP`.lJvV6l');
define('LOGGED_IN_KEY', ' 3M(QG .vCvk|QM9p(fs]wKXV(t2t+<Z#5AOG>&U_}n3hqkT8?);{8/i[2[)skNd');
define('NONCE_KEY', 'g5q<vkWQ:T,@|lS5/j3N|2[}FZl&8U<Pa#|kb`~Mj&&5#{bc/nP9_wq-Ae}b9Sx<');
define('AUTH_SALT', 'MRmpXwkA$Y|GwlNrW[+_|Kk<=;+5=[G6wq&`5~;y6XO!]J7-{M.jU*ueUu.Xte@-');
define('SECURE_AUTH_SALT', 'uFu/rUKw_Xal^zeVlzU.^ZRT$2 ^G+NN?J]K_3b/$lc],[APcrv<M2SJG}P|c}[#');
define('LOGGED_IN_SALT', '++`!QTYRx>Z^o+7aVCh*{,1jU-l7h!mLaK}/i2-WCP<5WM^,W@|ph#L*W89mZRdn');
define('NONCE_SALT', '^}w}UVLz)S*UXi!f%EUNb-6ri+No~<bGlA?p@cLi6W`=0LKNw`P]li^8,]6x7eE#');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
