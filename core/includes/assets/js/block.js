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
		title: 'DePay Payments',
		description: 'Embed the DePay Payments button.',
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
	    }
	  },
		icon,
		keywords: [ "payments", "cryptocurrency", "p2p", "web3", "depay" ],
		category: 'widgets',
		example: {},
		edit: function (props) {
			if(!DePay_payments_accepted_payments || DePay_payments_accepted_payments[0] == '' || !DePay_payments_receiving_wallet_address){
				return wp.element.createElement(
            'a',
            { href: "/wp-admin/admin.php?page=depay-payments", target: '_blank' },
            '!!! Please finish your payment configuration !!!'
        );
			}

			let accept = DePay_payments_accepted_payments.map((token)=>{
				return {
					blockchain: token.blockchain,
					token: token.address,
					receiver: DePay_payments_receiving_wallet_address
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
			
			let element = React.createElement('div', { style: { pointerEvents: 'none' } }, React.createElement(DePayButtons.DePayButton, {
	      label: DePay_payments_button_label,
	      widget: 'Payment',
	      css: DePay_payments_button_css,
	      configuration
	    }))
			return element
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
