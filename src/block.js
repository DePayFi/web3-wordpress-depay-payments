( function (blocks, editor, components, i18n, element, data ) {

  const icon = props => React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    style: {
      enableBackground: "new 0 0 20 20"
    },
    xmlSpace: "preserve"
  }, props), React.createElement("path", {
    fill: "#1E1E1E",
    d: "M17.4 13.2h-1.1c-.5.6-1 1.1-1.6 1.5H17v1.7H3v-1.7h2.3c-.6-.4-1.1-.9-1.6-1.5H2.6c-.6 0-1.1.5-1.1 1.1v2.5c0 .6.5 1.1 1.1 1.1h14.8c.6 0 1.1-.5 1.1-1.1v-2.5c0-.6-.5-1.1-1.1-1.1z"
  }), React.createElement("path", {
    fill: "#1E1E1E",
    d: "M10 1.9a6.7 6.7 0 1 0 0 13.4 6.7 6.7 0 0 0 0-13.4z"
  }));

  const el = wp.element.createElement
  const registerBlockType = wp.blocks.registerBlockType
  const { Fragment } = wp.element
  const { serverSideRender: ServerSideRender } = wp
  let isInitialized = false

  registerBlockType( 'depay-payments/block', {
    title: 'DePay',
    description: "Embed DePay's button.",
    supports: {
      align: ["left", "right", "center"],
      spacing: {
        margin: true,
        padding: true
      }
    },
    attributes: {
      align: {
        type: "string",
        default: "center"
      },
      buttonLabel: {
        type: 'string',
        default: 'Pay',
      },
      widgetTitle: {
        type: 'string',
        default: 'Payment',
      },
      paymentAmountType: {
        type: 'string',
        default: 'fixed',
      },
      paymentAmount: {
        type: 'string',
        default: '100',
      },
      paymentAmountStart: {
        type: 'string',
        default: '1',
      },
      paymentAmountMin: {
        type: 'string',
        default: '1',
      },
      paymentAmountStep: {
        type: 'string',
        default: '1',
      },
    },
    icon,
    keywords: [ "web3", "crypto", "payments", "DePay", "USDC" ],
    category: 'widgets',
    example: {},
    edit: function (props) {

      if(!DePay_payments_accepted_payments || DePay_payments_accepted_payments[0] == ''){
        return(
          <a href="/wp-admin/admin.php?page=depay-payments" target='_blank'>
            Please finish your DePay configuration!
          </a>
        )
      }

      let accept = DePay_payments_accepted_payments.map((configuration)=>{
        return {
          blockchain: configuration.blockchain,
          token: configuration.address,
          receiver: configuration.receiver
        }
      })

      let configuration = {
        accept,
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

      return(
        <wp.element.Fragment>

          <div className="wp-block-depay-payments-block-settings-amount">
            { [ props.attributes.paymentAmountType == 'fixed' ? new LocalCurrency.Currency({ amount: props.attributes.paymentAmount, code: window?.DePay_payments_widget_amount_currency }).toString() : 'Selectable amount'].filter(Boolean).join(' ') }
          </div>

          <div className="wp-block-depay-payments-block-settings-label">
            { props.attributes.widgetTitle }
          </div>

          <div style={{ pointerEvents: 'none' }}>
            <DePayButtons.DePayButton
              widget='Payment'
              label={ props.attributes.buttonLabel }
              configuration={ configuration }
              css={ DePay_payments_button_css }
            />
          </div>

          <wp.blockEditor.InspectorControls>
            <wp.components.PanelBody title="Payment">
              
              <wp.components.TextControl
                label="Button Label"
                value={ props.attributes.buttonLabel }
                onChange={(value)=>{ props.setAttributes({ buttonLabel: value }) }}
              />

              <wp.components.TextControl
                label="Widget Title"
                value={ props.attributes.widgetTitle }
                onChange={(value)=>{ props.setAttributes({ widgetTitle: value }) }}
              />

              <wp.components.SelectControl
                label="Amount Type"
                value={ props.attributes.paymentAmountType }
                options={[
                  { label: "Fixed amount", value: "fixed" },
                  { label: "Users can select the amount", value: "free" }
                ]}
                onChange={(value)=>{ props.setAttributes({ paymentAmountType: value }) }}
              />

              {
                props.attributes.paymentAmountType === 'fixed' &&
                <wp.components.TextControl
                  label={`Amount (${window?.DePay_payments_widget_amount_currency})`}
                  value={ props.attributes.paymentAmount }
                  onChange={(value)=>{ props.setAttributes({ paymentAmount: value }) }}
                />
              }

              {
                props.attributes.paymentAmountType === 'free' &&
                <div>
                  <wp.components.TextControl
                    label={`Amount Start (${window?.DePay_payments_widget_amount_currency})`}
                    value={ props.attributes.paymentAmountStart }
                    onChange={(value)=>{ props.setAttributes({ paymentAmountStart: value }) }}
                  />
                  <wp.components.TextControl
                    label={`Amount Min (${window?.DePay_payments_widget_amount_currency})`}
                    value={ props.attributes.paymentAmountMin }
                    onChange={(value)=>{ props.setAttributes({ paymentAmountMin: value }) }}
                  />
                  <wp.components.TextControl
                    label={`Amount Step (${window?.DePay_payments_widget_amount_currency})`}
                    value={ props.attributes.paymentAmountStep }
                    onChange={(value)=>{ props.setAttributes({ paymentAmountStep: value }) }}
                  />
                </div>
              }

            </wp.components.PanelBody>
          </wp.blockEditor.InspectorControls>
        </wp.element.Fragment>
      )
    },
    save: function (props) {
      return null
    }
  })

})(
  window.wp.blocks,
  window.wp.editor,
  window.wp.components,
  window.wp.i18n,
  window.wp.element,
  window.wp.data
)
