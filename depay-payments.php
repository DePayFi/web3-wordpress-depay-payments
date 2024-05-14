<?php
/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin
 * and defines a function that starts the plugin.
 * 
 * @link          https://depay.com
 * @since         1.0.0
 * @package       DEPAYPAYMENTS
 * 
 * @wordpress-plugin
 * Plugin Name:   DePay Payments
 * Plugin URI:    https://depay.com/plugins/wordpress
 * Description:   Web3 payments directly into your own wallet. Block-enabled Wordpress plugin for P2P cryptocurrency payments on multiple blockchains, with on-the-fly token conversion.
 * Version:       2.3.6
 * License:       GPL-2.0+
 * License URI:   http://www.gnu.org/licenses/gpl-2.0.txt
 * Author:        DePay
 * Author URI:    https://depay.com
 * Text Domain:   depay-payments
 * Domain Path:   /languages
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;
// Plugin name
define( 'DEPAYPAYMENTS_NAME',      'DePay Payments' );

// Plugin version
define( 'DEPAYPAYMENTS_VERSION',   '2.3.6' );

// Plugin Root File
define( 'DEPAYPAYMENTS_PLUGIN_FILE', __FILE__ );

// Plugin base
define( 'DEPAYPAYMENTS_PLUGIN_BASE', plugin_basename( DEPAYPAYMENTS_PLUGIN_FILE ) );

// Plugin Folder Path
define( 'DEPAYPAYMENTS_PLUGIN_DIR',  plugin_dir_path( DEPAYPAYMENTS_PLUGIN_FILE ) );

// Plugin Folder URL
define( 'DEPAYPAYMENTS_PLUGIN_URL',  plugin_dir_url( DEPAYPAYMENTS_PLUGIN_FILE ) );

/**
 * Load the main class for the core functionality
 */
require_once DEPAYPAYMENTS_PLUGIN_DIR . 'core/class-depay-payments.php';

/**
 * The main function to load the only instance
 * of our master class.
 *
 * @author  DePay
 * @since   1.0.0
 * @return  object|DePay_Payments
 */
function DEPAYPAYMENTS() {
  return DePay_Payments::instance();
}

DEPAYPAYMENTS();
