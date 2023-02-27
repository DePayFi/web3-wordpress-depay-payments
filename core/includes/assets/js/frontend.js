document.addEventListener('click', e => {
  const { target } = e;
  if (target.matches('[href="#depay-payment-widget"]')) {
    e.preventDefault();
    e.stopImmediatePropagation();

    let accept = DePay_payments_accepted_payments.map((token)=>{
      return {
        blockchain: token.blockchain,
        token: token.address,
        receiver: DePay_payments_receiving_wallet_address
      }
    })

    let amount = {}

    if(!DePay_payments_widget_amount_type || DePay_payments_widget_amount_type == 'free') {
      if(!!DePay_payments_widget_amount_free_start) { amount.start = parseFloat(DePay_payments_widget_amount_free_start) }
      if(!!DePay_payments_widget_amount_free_min) { amount.min = parseFloat(DePay_payments_widget_amount_free_min) }
      if(!!DePay_payments_widget_amount_free_step) { amount.step = parseFloat(DePay_payments_widget_amount_free_step) }
    } else {
      if(!!DePay_payments_widget_amount_currency) { amount.currency = DePay_payments_widget_amount_currency }
      if(!!DePay_payments_widget_fix_amount) { amount.fix = parseFloat(DePay_payments_widget_fix_amount) }
    }

    let currency

    if(!!DePay_payments_widget_display_currency) {
      currency = DePay_payments_widget_display_currency
    }

    let configuration = {
      accept,
      currency,
      amount,
      style: {
        colors: {
          primary: DePay_payments_widget_color_primary,
          text: DePay_payments_widget_color_text,
          buttonText: DePay_payments_widget_color_buttons,
          icons: DePay_payments_widget_color_icons
        },
        css: DePay_payments_widget_css
      },
    }

    console.log('configuration', configuration)
    DePayWidgets.Payment(configuration);

    return false;
  }
});
