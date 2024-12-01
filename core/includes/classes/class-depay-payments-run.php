<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

class DePay_Payments_Run{

	function __construct(){
		$this->add_hooks();
	}

	private function add_hooks(){

		wp_register_style('depay-payments-frontend-style', DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/css/frontend.css', DEPAYPAYMENTS_VERSION);
    wp_enqueue_style('depay-payments-frontend-style');

    wp_register_script(
      'depay-payments-widgets',
      DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/widgets.bundle.js',
      array(),
      DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/widgets.bundle.js'
    );
    wp_enqueue_script( 'depay-payments-widgets' );

    wp_register_script(
      'depay-payments-react-shadow-dom',
      DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/react-shadow-dom.js',
      ['wp-element'],
      DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/react-shadow-dom.js'
    );
    wp_enqueue_script( 'depay-payments-react-shadow-dom' );

    wp_register_script(
      'depay-payments-blockchains',
      DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/blockchains.js',
      ['wp-element'],
      DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/blockchains.js'
    );
    wp_enqueue_script( 'depay-payments-blockchains' );

    wp_register_script(
      'depay-payments-buttons',
      DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/buttons.js',
      ['wp-element'],
      DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/buttons.js'
    );
    wp_enqueue_script( 'depay-payments-buttons' );

    wp_register_script(
      'depay-payments-init-buttons',
      DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/init-buttons.js',
      [],
      DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/init-buttons.js',
      true
    );
    wp_enqueue_script( 'depay-payments-init-buttons' );
	
		add_action( 'admin_enqueue_scripts', array( 'DePay_Payments_Admin', 'add_scripts_and_styles' ));
		add_action( 'admin_menu', array( 'DePay_Payments_Admin', 'add_admin_menu' ));
		add_action( 'init', array( 'DePay_Payments_Block', 'register' ));
		add_action( 'init', array( 'DePay_Payments_Link', 'register' ));
		add_action( 'rest_api_init', array( 'DePay_Payments_Admin', 'register_rest_settings' ));
		
	}
}
