(function ( React, ReactDOM ) {

  const useEffect = window.React.useEffect
  const useState = window.React.useState

  const CURRENCIES = ["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWL"]

  const DePayPaymentsAdminPage = function(props) {

    const [ saved, setSaved ] = useState(false)
    const [ settingsAreLoaded, setSettingsAreLoaded ] = useState(false)
    const [ isSaving, setIsSaving ] = useState()
    const [ isDisabled, setIsDisabled ] = useState()
    const [ buttonRadius, setButtonRadius ] = useState()
    const [ buttonBackground, setButtonBackground ] = useState()
    const [ buttonText, setButtonText ] = useState()
    const [ widgetPrimary, setWidgetPrimary ] = useState()
    const [ widgetButtonRadius, setWidgetButtonRadius ] = useState()
    const [ widgetButtonText, setWidgetButtonText ] = useState()
    const [ widgetIconColor, setWidgetIconColor ] = useState()
    const [ widgetText, setWidgetText ] = useState()
    const [ label, setLabel ] = useState()
    const [ buttonCss, setButtonCss ] = useState()
    const [ widgetCss, setWidgetCss ] = useState()
    const [ payments, setPayments ] = useState([])
    const [ amount, setAmount ] = useState()
    const [ displayedCurrency, setDisplayedCurrency ] = useState()
    const [ startValue, setStartValue ] = useState()
    const [ minValue, setMinValue ] = useState()
    const [ stepValue, setStepValue ] = useState()
    const [ amountCurrency, setAmountCurrency ] = useState()
    const [ fixAmount, setFixAmount ] = useState()
    const [ usdValue, setUsdValue ] = useState()
    
    const [ displayedCurrencyExample, setDisplayedCurrencyExample ] = useState()

    const saveSettings = ()=>{
      setIsSaving(true)
      const settings = new window.wp.api.models.Settings({
        DePay_payments_accepted_payments: payments,
        DePay_payments_button_css: buttonCss,
        DePay_payments_button_background_color: buttonBackground,
        DePay_payments_button_text_color: buttonText,
        DePay_payments_button_border_radius: buttonRadius,
        DePay_payments_button_label: label,
        DePay_payments_widget_color_primary: widgetPrimary,
        DePay_payments_widget_button_border_radius: widgetButtonRadius,
        DePay_payments_widget_color_button_text: widgetButtonText,
        DePay_payments_widget_color_icons: undefined,
        DePay_payments_widget_color_text: undefined,
        DePay_payments_widget_css: widgetCss,
        DePay_payments_widget_amount_type: amount,
        DePay_payments_widget_display_currency: displayedCurrency,
        DePay_payments_widget_amount_free_start: startValue,
        DePay_payments_widget_amount_free_min: minValue,
        DePay_payments_widget_amount_free_step: stepValue,
        DePay_payments_widget_amount_currency: amountCurrency,
        DePay_payments_widget_fix_amount: fixAmount,
      })

      settings.save().then((response) => {
        setIsSaving(false)
        setSaved(true)
      })
    }

    const setReceivingWalletAddress = (receiver, index, blockchain)=>{
    
      let newPayments = [...payments]
      if(!receiver || receiver.length === 0) {
        newPayments[index].error = 'Please enter a receiver address!'
      } else {
        try {
          if(blockchain === 'solana') {
            receiver = new SolanaWeb3js.PublicKey(receiver).toString()
          } else {
            receiver = ethers.ethers.utils.getAddress(receiver)
          }
          newPayments[index].error = undefined
        } catch {
          newPayments[index].error = 'This address is invalid!'
        }
      }

      newPayments[index].receiver = receiver
      setPayments(newPayments)
    }

    const connectWallet = async(index, blockchain)=> {
      let { account, accounts, wallet }  = await window.DePayWidgets.Connect()
      setReceivingWalletAddress(account, index, blockchain)
    }

    const addToken = async ()=>{
      let token = await DePayWidgets.Select({ what: 'token' })
      if((payments instanceof Array) && payments.find((selectedToken)=>(selectedToken.blockchain == token.blockchain && selectedToken.address == token.address))) { return }
      token.error = 'Please enter a receiver address!'
      if(payments instanceof Array) {
        setPayments(payments.concat([token]))
      } else {
        setPayments([token])
      }
    }

    const removeToken = (index)=> {
      let newPayments = payments.slice()
      newPayments.splice(index, 1)
      setPayments(newPayments)
    }

    const updateButtonStyle = () =>{
      setButtonCss(`button {\n  border-radius: ${buttonRadius || 2}px;\n  color: ${buttonText || "#FFFFFF"};\n  background: ${buttonBackground || "#32373c"};\n}`)
    }

    const updateWidgetStyle = () =>{
      setWidgetCss(`.ButtonPrimary { color: ${widgetButtonText || "#FFFFFF"}; border-radius: ${widgetButtonRadius}px;}`)
    }

    useEffect(()=>{
      updateButtonStyle()
    },[buttonRadius, buttonText, buttonBackground])

    useEffect(()=>{
      updateWidgetStyle()
    },[widgetPrimary, widgetButtonText, widgetButtonRadius, widgetIconColor, widgetText])

    useEffect(()=>{
      wp.api.loadPromise.then(() => {
        const settings = new wp.api.models.Settings()
        settings.fetch().then((response)=> {
          if(response.DePay_payments_accepted_payments) {
            response.DePay_payments_accepted_payments.forEach((payment)=>{
              if(payment.receiver === undefined && response.DePay_payments_receiving_wallet_address) {
                payment.receiver = response.DePay_payments_receiving_wallet_address
              }
            })
            setPayments(response.DePay_payments_accepted_payments)
          }
          setLabel(response.DePay_payments_button_label || 'Support Us')
          setButtonCss(response.DePay_payments_button_css || "button {\n  border-radius: 2px;\n  color: #FFFFFF;\n  background: #32373c;\n}")
          setWidgetCss(response.DePay_payments_widget_css || ".ButtonPrimary {border-radius: 2px;}")
          setButtonBackground(response.DePay_payments_button_background_color || "#32373c")
          setButtonText(response.DePay_payments_button_text_color || "#FFFFFF")
          setButtonRadius(response.DePay_payments_button_border_radius || "2")
          setWidgetPrimary(response.DePay_payments_widget_color_primary || "#32373c")
          setWidgetButtonRadius(response.DePay_payments_widget_button_border_radius || "2")
          setWidgetButtonText(response.DePay_payments_widget_color_button_text || "#FFFFFF")
          setAmount(response.DePay_payments_widget_amount_type || 'free')
          setDisplayedCurrency(response.DePay_payments_widget_display_currency)
          setStartValue(response.DePay_payments_widget_amount_free_start || 1)
          setMinValue(response.DePay_payments_widget_amount_free_min || 1)
          setStepValue(response.DePay_payments_widget_amount_free_step || 1)
          setAmountCurrency(response.DePay_payments_widget_amount_currency || 'USD')
          setFixAmount(response.DePay_payments_widget_fix_amount || 1)
          setWidgetIconColor()
          setWidgetText()
          setSettingsAreLoaded(true)
        })
      }).catch(()=>{})
    }, [])

    useEffect(()=>{
      setIsDisabled( ! (payments && payments.length && payments.every((token)=>token.receiver && token.receiver.length > 0 && token.error === undefined)) )
    }, [ payments ])

    useEffect(()=>{
      setSaved(false)
    }, [ buttonRadius, buttonBackground, buttonText, widgetPrimary, widgetButtonRadius, widgetButtonText, widgetIconColor, widgetText, label, buttonCss, widgetCss, payments, amount, displayedCurrency, startValue, minValue, stepValue, amountCurrency, fixAmount ])

    useEffect(()=>{


      if(amount === 'fix') {

        LocalCurrency.Currency.rate({ from: amountCurrency, to: 'USD' }).then((rate)=>{
          setUsdValue((fixAmount/rate).toFixed(2))
        })

        LocalCurrency.Currency.rate({ from: amountCurrency, to: (displayedCurrency === 'local') ? undefined : displayedCurrency }).then((rate)=>{
          setDisplayedCurrencyExample(new LocalCurrency.Currency({ amount: fixAmount/rate, code: (displayedCurrency === 'local') ? undefined : displayedCurrency }).toString())
        })

      } else { // free

        setDisplayedCurrencyExample(new LocalCurrency.Currency({ amount: startValue || 1, code: (displayedCurrency === 'local') ? undefined : displayedCurrency }).toString())

        if(displayedCurrency === 'local' || displayedCurrency === undefined) {
          LocalCurrency.Currency.rate({ from: new LocalCurrency.Currency({ amount: 0 }).code, to: 'USD' }).then((rate)=>{
            setUsdValue(((startValue || 1)/rate).toFixed(2))
          })
        } else {
          LocalCurrency.Currency.rate({ from: displayedCurrency, to: 'USD' }).then((rate)=>{
            setUsdValue(((startValue || 1)/rate).toFixed(2))
          })
        }
      }
    }, [displayedCurrency, startValue, amount, fixAmount, amountCurrency])

    if(!settingsAreLoaded) { return null }

    return (
      <div className="wrap">
        
        <h1 className="wp-heading-inline">DePay Payments</h1>

        <p>To view received payments, please open the <a href="https://app.depay.com/payments" target="_blank">DePay App</a>.</p>

        <table className="form-table" role="presentation">
          <tbody>
            <tr>
              <th scope="row">
                Accepted Payments
              </th>
              <td>
                <div style={{ paddingBottom: "1rem" }}>
                  Select the tokens that you want to receive as payment:
                </div>
                {
                  payments && payments.map((payment, index)=>{
                    return(
                      <table key={ `${index}-${payment.blockchain}-${payment.symbol}` } className="wp-list-table widefat fixed striped table-view-list page" style={{ maxWidth: "600px", marginBottom: "0.4rem"}}>
                        <tr>
                          <td style={{ padding: "1rem 1rem 0.4rem 1rem", display: "flex" }}>
                            <img src={ payment.logo } style={{ background: "white", borderRadius: "99px", height: "3rem", width: "3rem" }}/>
                            <div style={{ paddingLeft: "1rem", paddingBottom: "0.3rem", flex: 1 }}>
                              <div style={{ display: 'flex', justifyontent: 'space-between' }}>
                                <div>
                                  <strong>{ payment.symbol }</strong> ({ payment.name }) on { Web3Blockchains[payment.blockchain].label }
                                  <img src={ Web3Blockchains[payment.blockchain].logo } style={{ position: 'relative', top: '3px', left: '5px', width: "18px", height: "18px", borderRadius: "99px", background: "white" }}/>
                                </div>
                                <div className="row-actions visible" style={{ marginLeft: "auto" }}>
                                  <span className="delete">
                                    <a href="#" onClick={ ()=>removeToken(index) }>Remove</a>
                                  </span>
                                </div>
                              </div>
                              <div style={{ paddingTop: ".5rem" }}>
                                <label style={{ marginBottom: 0 }}>
                                  <span className="" style={{ opacity: 0.7, paddingBottom: '1px', display: 'block' }}>Receiver</span>
                                  <div className="components-base-control">
                                    <input
                                      required="required"
                                      style={{ width: "100%" }}
                                      id="depay-woocommerce-payment-receiver-address" 
                                      type="text" 
                                      value={ payment.receiver }
                                      onChange={ (event)=>setReceivingWalletAddress(event.target.value, index, payment.blockchain) }
                                    />
                                  </div>
                                  { payment.error &&
                                    <div className="notice inline notice-warning notice-alt" style={{ marginBottom: 0 }}>
                                      {payment.error}
                                    </div>
                                  }
                                </label>
                              </div>
                              <div className="row-actions visible">
                                <div>
                                  <button style={{ marginTop: "0.5rem" }} type="button" className="button button-secondary" onClick={ ()=>connectWallet(index, payment.blockchain) }>Connect Wallet</button>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    )
                  })
                }
                <div style={{ paddingTop: "0.2rem" }}>
                  <button onClick={ addToken } style={{ fontSize: "1.1rem", padding: "0 1rem", marginTop: "0.5rem" }} type="button" className="button button-secondary">Add Token</button>
                </div>
                <div style={{ paddingTop: "1.6rem", paddingBottom: "1.5rem" }}>
                  <p className="description">
                    Each incoming payment will be converted on-the-fly into your selected tokens on the selected blockchains.
                  </p>
                  <p className="description">
                    Customers will be able to use any convertible token as means of payment.
                  </p>
                  <p className="description">
                    <strong>Payments are sent directly into your wallet.</strong>
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                Button
              </th>
              <td>
                <div style={{ display: 'inline-block' }}>
                  <DePayButtons.DePayButton
                    css={ buttonCss }
                    label={ label }
                    widget={'Payment'}
                    configuration={ {"accept": payments } }
                  />
                </div>
                <div style={{ paddingTop: '1.4rem' }}>
                  <label style={{ marginBottom: 0 }}>
                    <span className="" style={{ opacity: 0.7, paddingBottom: '0.8rem', display: 'block' }}><strong>Label</strong></span>
                    <div className="components-base-control">
                      <input
                        required="required"
                        type="text" 
                        value={ label }
                        onChange={ (event)=>setLabel(event.target.value) }
                      />
                    </div>
                  </label>
                </div>
                <div style={{ paddingTop: '1.4rem' }}>
                  <p className="description" style={{ paddingBottom: "0.8rem" }}><strong>Style</strong></p>
                  <div style={{ marginBottom: "0.8rem" }}><label style={{ display: "flex", alignItems: "center" }}><input style={{ marginRight: "0.6rem" }} type="color" value={buttonBackground} onChange={(event)=>{ setButtonBackground(event.target.value) }}/>Background</label></div>
                  <div style={{ marginBottom: "0.8rem" }}><label style={{ display: "flex", alignItems: "center" }}><input style={{ marginRight: "0.6rem" }} type="color" value={buttonText} onChange={(event)=>{ setButtonText(event.target.value) }}/>Text</label></div>
                  <div style={{ marginBottom: "0.8rem" }}><label style={{ display: "flex", alignItems: "center" }}><input style={{ marginRight: "0.6rem" }} type="range" value={buttonRadius} min="0" max="36" onChange={(event)=>{ setButtonRadius(event.target.value) }}/>Border</label></div>
                </div>
                <div style={{ paddingTop: "0.8rem" }}>
                  <p className="description"><strong>Usage</strong></p>
                </div>
                <div style={{ marginBottom: "0.8rem" }}>
                  <p className="description" style={{ marginBottom: "0.8rem" }}>Search for the <strong>"DePay Payments"</strong> block in the editor and drop the button into layouts, pages and posts.</p>
                </div>
                <img style={{ maxWidth: "600px", marginBottom: "2rem" }} src="/wp-content/plugins/depay-payments/core/includes/assets/img/button.gif"/>                
              </td>
            </tr>
            <tr>
              <th scope="row">
                Widget
              </th>
              <td>
                <div className="widget-example"><div className="ReactDialog ReactDialogOpen"><div className="ReactDialogRow"><div className="ReactDialogCell"><div className="ReactDialogStack active forward"><div className="ReactDialogStackRow"><div className="ReactDialogStackCell"><div className="ReactDialogAnimation"><div className="Dialog"><div className="DialogHeader"><div className="DialogHeaderTitle"><div className="PaddingTopS PaddingLeftM PaddingRightM"><div className="FontSizeL TextLeft">Payment</div></div></div><div className="DialogHeaderActionRight PaddingTopS PaddingLeftS PaddingRightS"><button className="ButtonCircular" title="Close dialog"><svg className="CloseIcon Icon" height="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg></button></div></div><div className="DialogBody"><div className="PaddingLeftM PaddingRightM PaddingBottomXS">
                  {
                    amount === 'free' &&
                    <div className="Card" title="Change amount"><div className="CardBody"><div className="CardBodyWrapper"><div className="CardTitle">Amount</div><div className="CardText"><div className="TokenAmountRow"><span className="TokenAmountCell">{ displayedCurrencyExample }</span></div></div></div></div><div className="CardAction"><svg className="ChevronRight Icon" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill-rule="evenodd" stroke-width="1"></path></svg></div></div>
                  }
                  <div className="Card" title="Change payment"><div className="CardImage"><img className="js-widget-payment-example-image" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"/></div><div className="CardBody"><div className="CardBodyWrapper"><h2 className="CardText">

                  <div className="TokenAmountRow"><span className="TokenSymbolCell js-widget-example-symbol">USDT</span><span className="TokenAmountCell js-widget-example-amount">{usdValue}</span></div>
                  {
                    amount === 'fix' &&
                    <div class="TokenAmountRow small grey"><span class="TokenSymbolCell">{ displayedCurrencyExample }</span></div>
                  }
                  </h2></div></div><div className="CardAction"><svg className="ChevronRight Icon" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill-rule="evenodd" stroke-width="1"></path></svg></div></div></div></div><div className="DialogFooter"><div className="PaddingTopXS PaddingRightM PaddingLeftM PaddingBottomM"><div><button className="ButtonPrimary" style={{ color: widgetButtonText, backgroundColor: widgetPrimary, borderRadius: `${widgetButtonRadius}px` }}>Pay</button></div></div></div></div></div></div></div></div></div></div></div></div>
                <div style={{ paddingTop: '1.4rem' }}>
                  <p className="description" style={{ paddingBottom: "0.8rem" }}><strong>Amount</strong></p>
                  <div style={{ marginBottom: "0.8rem" }}>
                    <select value={ amount } onChange={(event)=>setAmount(event.target.value)}>
                      <option value="free">User's can select the amount</option>
                      <option value="fix">I want to set a fix amount</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: "0.8rem" }}>
                    <label style={{ display: "flex", alignItems: "center" }}>
                      <select style={{ marginRight: "0.8rem" }} value={ displayedCurrency } onChange={(event)=>setDisplayedCurrency(event.target.value)}>
                        <option value="local">User's local currency</option>
                        { CURRENCIES.map((code)=>{
                            return(<option value={code}>{ code }</option>)
                          })
                        }
                      </select>
                      Displayed Currency
                    </label>
                  </div>
                  { amount === 'free' &&
                    <div>
                      <div style={{ marginBottom: "0.8rem" }}>
                        <label style={{ display: "flex", alignItems: "center" }}>
                          <input required="required" placeholder="Start Value" style={{ marginRight: "0.8rem" }} type="number" value={ startValue } onChange={(event)=>setStartValue(event.target.value)}/>
                          Start Value
                        </label>
                      </div>
                      <div style={{ marginBottom: "0.8rem" }}>
                        <label style={{ display: "flex", alignItems: "center" }}>
                          <input required="required" placeholder="Min Value" style={{ marginRight: "0.8rem" }} type="number" value={ minValue } onChange={(event)=>setMinValue(event.target.value)}/>
                          Min Value
                        </label>
                      </div>
                      <div style={{ marginBottom: "0.8rem" }}>
                        <label style={{ display: "flex", alignItems: "center" }}>
                          <input required="required" placeholder="Step Value" style={{ marginRight: "0.8rem" }} type="number" value={ stepValue } onChange={(event)=>setStepValue(event.target.value)}/>
                          Step Value
                        </label>
                      </div>
                    </div>
                  }
                  { amount === 'fix' &&
                    <div>
                      <div style={{ marginBottom: "0.8rem" }}>
                        <label style={{ display: "flex", alignItems: "center" }}>
                          <select style={{ marginRight: "0.8rem" }} value={ amountCurrency } onChange={(event)=>setAmountCurrency(event.target.value)}>
                            { CURRENCIES.map((code)=>{
                                return(<option value={code}>{ code }</option>)
                              })
                            }
                          </select>
                          Amount Currency
                        </label>
                      </div>
                      <div style={{ marginBottom: "0.8rem" }}>
                        <label style={{ display: "flex", alignItems: "center" }}>
                          <input style={{ marginRight: "0.6rem" }} type="number" value={fixAmount} onChange={(event)=>{ setFixAmount(parseFloat(event.target.value)) }}/>
                          Fix Amount
                        </label>
                      </div>
                    </div>
                  }
                  
                </div>
                <div style={{ paddingTop: '1.4rem' }}>
                  <p className="description" style={{ paddingBottom: "0.8rem" }}><strong>Style</strong></p>
                  <div style={{ marginBottom: "0.8rem" }}><label style={{ display: "flex", alignItems: "center" }}><input style={{ marginRight: "0.6rem" }} type="color" value={widgetPrimary} onChange={(event)=>{ setWidgetPrimary(event.target.value) }}/>Primary</label></div>
                  <div style={{ marginBottom: "0.8rem" }}><label style={{ display: "flex", alignItems: "center" }}><input style={{ marginRight: "0.6rem" }} type="color" value={widgetButtonText} onChange={(event)=>{ setWidgetButtonText(event.target.value) }}/>Button Text</label></div>
                  <div style={{ marginBottom: "0.8rem" }}><label style={{ display: "flex", alignItems: "center" }}><input style={{ marginRight: "0.6rem" }} type="range" value={widgetButtonRadius} min="0" max="36" onChange={(event)=>{ setWidgetButtonRadius(event.target.value) }}/>Button Border</label></div>
                </div>
                <div style={{ paddingTop: "0.8rem" }}>
                  <p className="description"><strong>Usage</strong></p>
                </div>
                <div style={{ marginBottom: "0.8rem" }}>
                  <p className="description" style={{ marginBottom: "0.8rem" }}>Link any text to <strong>#depay-payment-widget</strong> and it will open your payment widget upon click.</p>
                </div>
                <img style={{ maxWidth: "600px" }} src="/wp-content/plugins/depay-payments/core/includes/assets/img/widget.gif"/>                
              </td>
            </tr>
            <tr>
              <th>&nbsp;</th>
              <td>
                <div>
                  <div>
                    <div>
                      { saved &&
                        <button
                          style={{ fontSize: "1.1rem", padding: "0 1rem", marginTop: "0.5rem" }}
                          type="button"
                          className="button button-secondary"
                          onClick={ () => {} }
                        >✓ Settings Saved</button>
                      }
                      { isDisabled &&
                        <div className="notice inline notice-warning notice-alt" style={{ marginBottom: 0, maxWidth: '300px' }}>
                          Please fix all errors before saving!
                        </div>
                      }
                      { !saved &&
                        <button
                          style={{ fontSize: "1.1rem", padding: "0 1rem", marginTop: "0.5rem" }}
                          type="button"
                          className="button button-primary"
                          onClick={ () => saveSettings() }
                          disabled={ isSaving || isDisabled }
                        >Save Settings</button>
                      }
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  document.addEventListener( "DOMContentLoaded", function(event) {
    ReactDOM.render(
        <DePayPaymentsAdminPage />,
        document.getElementById( 'depay-payments-admin' )
    )
  })

})(
  window.React,
  window.ReactDOM,
);
