<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;
if ( ! class_exists( 'DePay_Payments' ) ) :

	/**
	 * Main DePay_Payments Class.
	 *
	 * @package		DEPAYPAYMENTS
	 * @subpackage	Classes/DePay_Payments
	 * @since		1.0.0
	 * @author		DePay
	 */
	final class DePay_Payments {

		/**
		 * The real instance
		 *
		 * @access	private
		 * @since	1.0.0
		 * @var		object|DePay_Payments
		 */
		private static $instance;

		/**
		 * DEPAYPAYMENTS helpers object.
		 *
		 * @access	public
		 * @since	1.0.0
		 * @var		object|DePay_Payments_Helpers
		 */
		public $helpers;

		/**
		 * DEPAYPAYMENTS settings object.
		 *
		 * @access	public
		 * @since	1.0.0
		 * @var		object|DePay_Payments_Settings
		 */
		public $settings;

		/**
		 * Throw error on object clone.
		 *
		 * Cloning instances of the class is forbidden.
		 *
		 * @access	public
		 * @since	1.0.0
		 * @return	void
		 */
		public function __clone() {
			_doing_it_wrong( __FUNCTION__, __( 'You are not allowed to clone this class.', 'depay-payments' ), DEPAYPAYMENTS_VERSION );
		}

		/**
		 * Disable unserializing of the class.
		 *
		 * @access	public
		 * @since	1.0.0
		 * @return	void
		 */
		public function __wakeup() {
			_doing_it_wrong( __FUNCTION__, __( 'You are not allowed to unserialize this class.', 'depay-payments' ), DEPAYPAYMENTS_VERSION );
		}

		/**
		 * Main DePay_Payments Instance.
		 *
		 * Insures that only one instance of DePay_Payments exists in memory at any one
		 * time. Also prevents needing to define globals all over the place.
		 *
		 * @access		public
		 * @since		1.0.0
		 * @static
		 * @return		object|DePay_Payments	The one true DePay_Payments
		 */
		public static function instance() {
			if ( ! isset( self::$instance ) && ! ( self::$instance instanceof DePay_Payments ) ) {
				self::$instance					= new DePay_Payments;
				self::$instance->base_hooks();
				self::$instance->includes();
				self::$instance->helpers		= new DePay_Payments_Helpers();
				self::$instance->settings		= new DePay_Payments_Settings();

				//Fire the plugin logic
				new DePay_Payments_Run();

				/**
				 * Fire a custom action to allow dependencies
				 * after the successful plugin setup
				 */
				do_action( 'DEPAYPAYMENTS/plugin_loaded' );
			}

			return self::$instance;
		}

		/**
		 * Include required files.
		 *
		 * @access  private
		 * @since   1.0.0
		 * @return  void
		 */
		private function includes() {
			require_once DEPAYPAYMENTS_PLUGIN_DIR . 'core/includes/classes/class-depay-payments-helpers.php';
			require_once DEPAYPAYMENTS_PLUGIN_DIR . 'core/includes/classes/class-depay-payments-settings.php';
			require_once DEPAYPAYMENTS_PLUGIN_DIR . 'core/includes/classes/class-depay-payments-admin.php';
			require_once DEPAYPAYMENTS_PLUGIN_DIR . 'core/includes/classes/class-depay-payments-block.php';
			require_once DEPAYPAYMENTS_PLUGIN_DIR . 'core/includes/classes/class-depay-payments-link.php';
			require_once DEPAYPAYMENTS_PLUGIN_DIR . 'core/includes/classes/class-depay-payments-run.php';
		}

		/**
		 * Add base hooks for the core functionality
		 *
		 * @access  private
		 * @since   1.0.0
		 * @return  void
		 */
		private function base_hooks() {
			add_action( 'plugins_loaded', array( self::$instance, 'load_textdomain' ) );
		}

		/**
		 * Loads the plugin language files.
		 *
		 * @access  public
		 * @since   1.0.0
		 * @return  void
		 */
		public function load_textdomain() {
			load_plugin_textdomain( 'depay-payments', FALSE, dirname( plugin_basename( DEPAYPAYMENTS_PLUGIN_FILE ) ) . '/languages/' );
		}

	}

endif; // End if class_exists check.
