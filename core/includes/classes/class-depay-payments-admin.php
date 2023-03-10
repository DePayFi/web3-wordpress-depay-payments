<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Class DePay_Payments_Admin
 *
 * Admin related functions
 *
 * @package   DEPAYPAYMENTS
 * @subpackage  Classes/DePay_Payments_Admin
 * @author    DePay
 * @since   1.0.0
 */
class DePay_Payments_Admin{

  public static function add_admin_menu() {
    add_menu_page(
      'Payments',
      'Payments',
      'manage_options',
      'depay-payments',
      array( 'DePay_Payments_Admin', 'admin_page_contents' ),
      'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjAgMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xNy40LDEzLjJoLTEuMWMtMC41LDAuNi0xLDEuMS0xLjYsMS41SDE3djEuN0gzdi0xLjdoMi4zYy0wLjYtMC40LTEuMS0wLjktMS42LTEuNUgyLjYKCWMtMC42LDAtMS4xLDAuNS0xLjEsMS4xdjIuNWMwLDAuNiwwLjUsMS4xLDEuMSwxLjFoMTQuOGMwLjYsMCwxLjEtMC41LDEuMS0xLjF2LTIuNUMxOC41LDEzLjcsMTgsMTMuMiwxNy40LDEzLjJ6Ii8+CjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTAsMS45Yy0zLjcsMC02LjcsMy02LjcsNi43czMsNi43LDYuNyw2LjdzNi43LTMsNi43LTYuN1MxMy43LDEuOSwxMCwxLjl6Ii8+Cjwvc3ZnPgo=',
      26
    );
  }

  public static function admin_page_contents() {
    ?>
    <div class="wrap">
      <h1 class="wp-heading-inline">DePay Payments</h1>
      <p>
        To view received payments, please open the <a href="https://app.depay.com/payments" target="_blank">DePay App</a>.
      </p>
      <form action='options.php' method='post'>

          <?php
            settings_fields( 'DePay_payments' );
            do_settings_sections( 'DePay_payments' );
          ?>

          <?php
            if(
              empty(get_option('DePay_payments_receiving_wallet_address')) &&
              empty(get_option('DePay_payments_accepted_payments'))
            ) {
          ?>
            <input type='hidden' name='DePay_payments_button_css' value="&#10;button {&#10;  border-radius: 2px;&#10;  background: #32373c;&#10;}&#10;&#10;button:hover {&#10;  opacity: 0.9;&#10;}&#10;"/>
            <input type='hidden' name='DePay_payments_button_label' value="Pay"/>
            <input type="hidden" name='DePay_payments_widget_color_primary'  value="#32373c"/>
            <input type="hidden" name='DePay_payments_widget_color_buttons' value="#ffffff"/>
            <input type="hidden" name='DePay_payments_widget_color_icons' value="#000000"/>
            <input type="hidden" name='DePay_payments_widget_color_text' value="#212529>"/>
          <?php
            }
          ?>

          <?php
            submit_button();
          ?>

      </form>
    </div>
    <?php
    
    if(
      !empty(get_option('DePay_payments_receiving_wallet_address')) &&
      !empty(get_option('DePay_payments_accepted_payments'))
    ) {
    ?>
      <script>
        window.getAccept = ()=>{
          let accept = []
          document.querySelectorAll('.DePay_payments_accepted_payment').forEach((element)=>{
            accept.push({
              blockchain: element.querySelector('[name*="blockchain"]').value,
              token: element.querySelector('[name*="address"]').value,
              receiver: document.getElementById('DePay_payments_receiving_wallet_address').value
            })
          })
          return accept
        }
      </script>
    <?php
    }
  }

  public static function add_admin_settings() {

    add_settings_section(
      'DePay_payments_section',
      null,
      null,
      'DePay_payments'
    );

    // Wallet Address
  
    add_settings_field(
      'DePay_payments_receiving_wallet_address',
      'Receiving Wallet Address',
      array('DePay_Payments_Admin', 'render_wallet'),
      'DePay_payments',
      'DePay_payments_section',
      array( 'label_for' => 'DePay_payments_receiving_wallet_address' )
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_receiving_wallet_address',
      array(
        'type' => 'string'
      )
    );

    // Accepted Payments
  
    add_settings_field(
      'DePay_payments_accepted_payments',
      'Accepted Payments',
      array('DePay_Payments_Admin', 'render_payments'),
      'DePay_payments',
      'DePay_payments_section',
      array( 'label_for' => 'DePay_payments_add_token' )
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_accepted_payments',
      array('type' => 'array')
    );

    // Button

    add_settings_field(
      'DePay_payments_button',
      'Button',
      array('DePay_Payments_Admin', 'render_button'),
      'DePay_payments',
      'DePay_payments_section',
      array('class' => (empty(get_option('DePay_payments_receiving_wallet_address')) && empty(get_option('DePay_payments_accepted_payments'))) ? 'hiddenRow' : '')
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_button_css',
      array(
        'type' => 'string'
      )
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_button_label',
      array(
        'type' => 'string'
      )
    );

    // Widget

    add_settings_field(
      'DePay_payments_widget',
      'Widget',
      array('DePay_Payments_Admin', 'render_widget'),
      'DePay_payments',
      'DePay_payments_section',
      array('class' => (empty(get_option('DePay_payments_receiving_wallet_address')) && empty(get_option('DePay_payments_accepted_payments'))) ? 'hiddenRow' : '')
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_widget_color_primary',
      array(
        'type' => 'string'
      )
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_widget_color_buttons',
      array(
        'type' => 'string'
      )
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_widget_color_icons',
      array(
        'type' => 'string'
      )
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_widget_color_text',
      array(
        'type' => 'string'
      )
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_widget_css',
      array(
        'type' => 'string'
      )
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_widget_amount_type',
      array(
        'type' => 'string'
      )
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_widget_display_currency',
      array(
        'type' => 'string'
      )
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_widget_amount_currency',
      array(
        'type' => 'string'
      )
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_widget_amount_free_start',
      array(
        'type' => 'number'
      )
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_widget_amount_free_min',
      array(
        'type' => 'number'
      )
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_widget_amount_free_step',
      array(
        'type' => 'number'
      )
    );

    register_setting(
      'DePay_payments',
      'DePay_payments_widget_fix_amount',
      array(
        'type' => 'number'
      )
    );
  }

  public static function add_scripts_and_styles() {
    wp_enqueue_style( 'DEPAYPAYMENTS-styles-admin', DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/css/admin.css', array(), DEPAYPAYMENTS_VERSION, 'all' );
    wp_enqueue_script( 'DEPAYPAYMENTS-scripts-debounce', DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/debounce.js', array(), DEPAYPAYMENTS_VERSION, false );
    wp_enqueue_script( 'DEPAYPAYMENTS-scripts-widgets', DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/widgets.bundle.js', array(), DEPAYPAYMENTS_VERSION, false );
    wp_enqueue_script( 'DEPAYPAYMENTS-scripts-react-shadow-dom', DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/react-shadow-dom.js', ['wp-element'], DEPAYPAYMENTS_VERSION, false );
    wp_enqueue_script( 'DEPAYPAYMENTS-scripts-blockchains', DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/blockchains.js', ['wp-element'], DEPAYPAYMENTS_VERSION, false );
    wp_enqueue_script( 'DEPAYPAYMENTS-scripts-buttons', DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/buttons.js', ['wp-element'], DEPAYPAYMENTS_VERSION, false );
    wp_enqueue_script( 'DEPAYPAYMENTS-scripts-admin', DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/js/admin.js', array(), DEPAYPAYMENTS_VERSION, false );
  }

  public static function render_wallet() {
    $value = get_option( 'DePay_payments_receiving_wallet_address' );
    ?>
      <input type='text' class='regular-text ltr' id='DePay_payments_receiving_wallet_address' name='DePay_payments_receiving_wallet_address' value='<?php echo esc_html($value); ?>'/>
      <div style="padding-top: 0.5rem;">
        <button type="button" class="button button-secondary" aria-label="Click to connect your wallet" onclick="DePayWidgets.Connect().then(({ account })=>{ document.getElementById('DePay_payments_receiving_wallet_address').value = account })">
          Connect Wallet
        </button>
      </div>
      <p class="description">This address is used to receive payments.<br/><strong>Please double check that it is set to your wallet address.</strong></p>
    <?php
  }

  public static function render_payments() {
    $accepted = get_option('DePay_payments_accepted_payments');
    $accepted = empty($accepted)? [] : $accepted;
    ?><div id="DePay_payments_accepted_payments"><?php

    foreach ($accepted as $index => $token) {
      $token = (object) $token
      ?>
        <div class="DePay_payments_accepted_payment DePay_payments_accepted_payment_<?php echo esc_html($token->blockchain) ?>_<?php echo esc_html($token->address) ?>">
          <table class="wp-list-table widefat fixed striped table-view-list page" style ="margin-bottom: 0.4rem;">
            <tr style="display: none;"><td><td></tr>
            <tr>
              <td style="padding: 1rem 1rem 0.4rem 1rem;">
                <img src="<?php echo esc_html($token->logo) ?>" style="width: 3rem; height: 3rem;"/>
                <div style="padding-left: 1rem;">
                  <div><strong><?php echo esc_html($token->symbol) ?></strong> (<?php echo esc_html($token->name) ?>)</div>
                  <div>on <?php echo esc_html(strtoupper($token->blockchain)) ?></div>
                  <div class="row-actions visible">
                    <span class="delete">
                      <a href="#" onclick="depayPaymenetRemoveAcceptedPayment('DePay_payments_accepted_payment_<?php echo esc_html($token->blockchain) ?>_<?php echo esc_html($token->address) ?>')">Remove</a>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </table>
          <input type='hidden' name='DePay_payments_accepted_payments[<?php echo esc_html($index); ?>][address]' value='<?php echo esc_html($token->address); ?>'/>
          <input type='hidden' name='DePay_payments_accepted_payments[<?php echo esc_html($index); ?>][blockchain]' value='<?php echo esc_html($token->blockchain); ?>'/>
          <input type='hidden' name='DePay_payments_accepted_payments[<?php echo esc_html($index); ?>][decimals]' value='<?php echo esc_html($token->decimals); ?>'/>
          <input type='hidden' name='DePay_payments_accepted_payments[<?php echo esc_html($index); ?>][logo]' value='<?php echo esc_html($token->logo); ?>'/>
          <input type='hidden' name='DePay_payments_accepted_payments[<?php echo esc_html($index); ?>][name]' value='<?php echo esc_html($token->name); ?>'/>
          <input type='hidden' name='DePay_payments_accepted_payments[<?php echo esc_html($index); ?>][symbol]' value='<?php echo esc_html($token->symbol); ?>'/>
        </div>
      <?php
    }

    ?></div><!-- DePay_payments_accepted_payments --><?php

    ?>
      <div style="padding-top: 0.5rem;">
        <button type="button" id="DePay_payments_add_token" class="button button-secondary" aria-label="Click to add token" onclick="DePayWidgets.Select({ what: 'token' }).then(depayPaymentsAddAcceptedPayment)">
          Add Token
        </button>
      </div>
      <p class="description">Each incoming payment will be converted on-the-fly into your selected tokens on the selected blockchain.</p>
      <p class="description">Payment senders will be able to use any routable token as means of payment.</p>
      <p class="description">Tokens will be converted on-the-fly using decentralized finance to ensure you will always get the tokens you've configured.</p>
      <p class="description"><strong>Payments are peer-to-peer and will always be sent directly to your wallet.</strong></p>
    <?php
  }

  public static function render_button() {
    $buttonCSS = get_option( 'DePay_payments_button_css' );
    $buttonLabel = get_option( 'DePay_payments_button_label' );
    ?>
      <div style="margin-top: 0.8rem">
        <label>
          <div><p class="description" ><strong>Label</strong></p></div>
          <input type='text' id='DePay_payments_button_label' name='DePay_payments_button_label' value='<?php echo esc_html($buttonLabel); ?>'/>
        </label>
      </div>

      <div style="padding-top: 0.8rem;">
        <p class="description"><strong>Usage</strong></p>
      </div>
      <div style="margin-bottom: 0.8rem;">
        <p class="description" style="margin-bottom: 0.8rem">Search for the <strong>"DePay Payments"</strong> block in the editor and drop the button into layouts, pages and posts.</p>
      </div>
      <img style="max-width: 100%" src="<?php echo DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/img/button.gif' ?>"/>
    <?php
  }

  public static function render_widget() {
    $widgetColorPrimary = get_option( 'DePay_payments_widget_color_primary' );
    $widgetColorButtons = get_option( 'DePay_payments_widget_color_buttons' );
    $widgetColorIcons = get_option( 'DePay_payments_widget_color_icons' );
    $widgetColorText = get_option( 'DePay_payments_widget_color_text' );
    $widgetCSS = get_option( 'DePay_payments_widget_css' );
    $widgetAmountType = get_option( 'DePay_payments_widget_amount_type' );
    $widgetDisplayCurrency = get_option( 'DePay_payments_widget_display_currency' );
    $widgetAmountFreeStart = get_option( 'DePay_payments_widget_amount_free_start' );
    $widgetAmountFreeMin = get_option( 'DePay_payments_widget_amount_free_min' );
    $widgetAmountFreeStep = get_option( 'DePay_payments_widget_amount_free_step' );
    $widgetAmountCurrency = get_option( 'DePay_payments_widget_amount_currency' );
    $widgetFixAmount = get_option( 'DePay_payments_widget_fix_amount' );
    $currencies = ["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWL"];
    ?>
      <div style="margin-bottom: 1.6rem">
        <p class="description" style="margin-bottom: 0.8rem"><strong>Amount</strong></p>
        <select name="DePay_payments_widget_amount_type" onchange="window.depayPaymentConsiderFixAmount()">
          <option value='free' <?php echo($widgetAmountType == 'fix' ? '' : 'selected="selected"') ?>>User can select the amount</option>
          <option value='fix' <?php echo($widgetAmountType == 'fix' ? 'selected="selected"' : '') ?>>I want to set a fix amount</option>
        </select>
        <div style="margin-top: 0.8rem">
          <label style="display: flex; align-items: center;">
            <select name="DePay_payments_widget_display_currency" style="margin-right: 0.8rem;">
              <option value="">User's local currency</option>
              <?php 
                foreach ($currencies as &$currency) {
                  ?>
                    <option value="<?php echo(esc_html( $currency ))?>" <?php echo($widgetDisplayCurrency == $currency ? 'selected="selected"' : '') ?>><?php echo(esc_html($currency))?></option>
                  <?php
                }
              ?>
            </select>
            Display Currency
          </label>
        </div>
        <div id="DePay_payments_widget_free_amount" class="<?php echo($widgetAmountType == 'fix' ? 'hidden' : '') ?>" style="padding-top: 0.8rem">
          <div style="margin-bottom: 0.8rem">
            <label style="display: flex; align-items: center;">
              <input type="number" step=".01" name="DePay_payments_widget_amount_free_start" value="<?php echo(esc_html( $widgetAmountFreeStart )) ?>" placeholder="Start value" style="margin-right: 0.8rem;"/>
              Start Value
            </label>
          </div>
          <div style="margin-bottom: 0.8rem">
            <label style="display: flex; align-items: center;">
              <input type="number" step=".01" name="DePay_payments_widget_amount_free_min" value="<?php echo(esc_html( $widgetAmountFreeMin )) ?>" placeholder="Min value" style="margin-right: 0.8rem;"/>
              Min Value
            </label>
          </div>
          <div>
            <label style="display: flex; align-items: center;">
              <input type="number" step=".01" name="DePay_payments_widget_amount_free_step" value="<?php echo(esc_html( $widgetAmountFreeStep )) ?>" placeholder="Step value" style="margin-right: 0.8rem;"/>
              Step Value
            </label>
          </div>
        </div>
        <div id="DePay_payments_widget_fix_amount" class="<?php echo($widgetAmountType == 'fix' ? '' : 'hidden') ?>" style="padding-top: 0.8rem">
          <div style="margin-bottom: 0.8rem">
            <label style="display: flex; align-items: center;">
              <select name="DePay_payments_widget_amount_currency" style="margin-right: 0.8rem;">
                <?php 
                  foreach ($currencies as &$currency) {
                    ?>
                      <option value="<?php echo(esc_html( $currency ))?>" <?php echo($widgetAmountCurrency == $currency ? 'selected="selected"' : '') ?>><?php echo(esc_html($currency))?></option>
                    <?php
                  }
                ?>
              </select>
              Amount Currency
            </label>
          </div>
          <div style="margin-bottom: 0.8rem">
            <label style="display: flex; align-items: center;">
              <input type="number" step=".01" name="DePay_payments_widget_fix_amount" value="<?php echo(esc_html( $widgetFixAmount )) ?>" placeholder="Fix amount" style="margin-right: 0.8rem;"/>
              Fix Amount
            </label>
          </div>
        </div>
      </div>
      <div style="margin-bottom: 1.6rem">
        <p class="description" style="margin-bottom: 0.8rem"><strong>Style</strong></p>
        <div style="margin-bottom: 0.8rem"><label style="display: flex; align-items: center;"><input name='DePay_payments_widget_color_primary' id="depayPaymentWidgetStyleColorPrimary" style="margin-right: 0.6rem" type="color" value="<?php echo esc_html($widgetColorPrimary) ?>"/>Primary</label></div>
        <div style="margin-bottom: 0.8rem"><label style="display: flex; align-items: center;"><input name='DePay_payments_widget_color_buttons' id="depayPaymentWidgetStyleColorButtonText" style="margin-right: 0.6rem" type="color" value="<?php echo esc_html($widgetColorButtons) ?>"/>Button Text</label></div>
        <div style="margin-bottom: 0.8rem"><label style="display: flex; align-items: center;"><input name='DePay_payments_widget_color_icons' id="depayPaymentWidgetStyleColorIcons" style="margin-right: 0.6rem" type="color" value="<?php echo esc_html($widgetColorIcons) ?>"/>Icon Color</label></div>
        <div style="margin-bottom: 0.8rem"><label style="display: flex; align-items: center;"><input name='DePay_payments_widget_color_text' id="depayPaymentWidgetStyleColorText" style="margin-right: 0.6rem" type="color" value="<?php echo esc_html($widgetColorText) ?>"/>Text</label></div>
      </div>
      
      <div style="padding-top: 0.8rem;">
        <p class="description"><strong>Usage</strong></p>
      </div>
      <div style="margin-bottom: 0.8rem;">
        <p class="description" style="margin-bottom: 0.8rem">Link any text to <strong>#depay-payment-widget</strong> and it will open your payment widget upon click.</p>
      </div>
      <img style="max-width: 100%" src="<?php echo DEPAYPAYMENTS_PLUGIN_URL . 'core/includes/assets/img/widget.gif' ?>"/>
    <?php
  }

}
