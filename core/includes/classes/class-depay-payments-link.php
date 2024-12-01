<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

class DePay_Payments_Link {

  public static function register() {

    wp_register_script(
      'depay-payments-frontend-script',
      DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/frontend.js',
      [],
      DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/frontend.js',
      DEPAYPAYMENTS_VERSION,
      true
    );

    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_widget_color_primary', get_option( 'DePay_payments_widget_color_primary' ));
    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_widget_color_buttons', get_option( 'DePay_payments_widget_color_buttons' ));
    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_widget_color_icons', get_option( 'DePay_payments_widget_color_icons' ));
    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_widget_color_text', get_option( 'DePay_payments_widget_color_text' ));
    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_widget_css', preg_replace('~[\r\n]+~', '', get_option( 'DePay_payments_widget_css' )));
    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_button_css', preg_replace('~[\r\n]+~', '', get_option( 'DePay_payments_button_css' )));
    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_button_label', get_option( 'DePay_payments_button_label' ));
    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_receiving_wallet_address', get_option( 'DePay_payments_receiving_wallet_address' ));
    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_accepted_payments', get_option('DePay_payments_accepted_payments'));
    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_widget_amount_type', get_option('DePay_payments_widget_amount_type'));
    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_widget_display_currency', get_option('DePay_payments_widget_display_currency'));
    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_widget_amount_currency', get_option('DePay_payments_widget_amount_currency'));
    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_widget_amount_free_start', get_option('DePay_payments_widget_amount_free_start'));
    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_widget_amount_free_min', get_option('DePay_payments_widget_amount_free_min'));
    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_widget_amount_free_step', get_option('DePay_payments_widget_amount_free_step'));
    wp_localize_script('depay-payments-frontend-script', 'DePay_payments_widget_fix_amount', get_option('DePay_payments_widget_fix_amount'));

    wp_register_script(
      'depay-payments-widgets',
      DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/widgets.bundle.js',
      array(),
      DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/widgets.bundle.js'
    );
    wp_enqueue_script( 'depay-payments-widgets' );

    wp_enqueue_script('depay-payments-frontend-script');
  }
}
