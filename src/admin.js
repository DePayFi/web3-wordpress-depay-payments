(function ( React, ReactDOM, Components ) {

  const useEffect = window.React.useEffect
  const useState = window.React.useState

  const CURRENCIES = ["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWL"]

  const DePayWordpressAdminPage = function(props) {

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
    const [ label, setLabel ] = useState()
    const [ buttonCss, setButtonCss ] = useState()
    const [ widgetCss, setWidgetCss ] = useState()
    const [ payments, setPayments ] = useState([])
    const [ justConnected, setJustConnected ] = useState([])
    const [ amount, setAmount ] = useState()
    const [ displayedCurrency, setDisplayedCurrency ] = useState()
    const [ startValue, setStartValue ] = useState()
    const [ minValue, setMinValue ] = useState()
    const [ stepValue, setStepValue ] = useState()
    const [ amountCurrency, setAmountCurrency ] = useState()
    const [ fixAmount, setFixAmount ] = useState()
    const [ usdValue, setUsdValue ] = useState()
    
    const [ displayedCurrencyExample, setDisplayedCurrencyExample ] = useState()

    const addressEllipsis = (address, display = 4) => {
      if(address === undefined) { return address }
      let _address = "";
      _address += address.slice(0, address.match('0x') ? display + 2 : display);
      _address += '...';
      _address += address.slice(address.length-display, address.length);
      return _address;
    }

    const saveSettings = ()=>{
      setIsSaving(true)
      const settings = new window.wp.api.models.Settings({
        DePay_payments_accepted_payments: payments,
        DePay_payments_button_css: buttonCss,
        DePay_payments_button_background_color: buttonBackground,
        DePay_payments_button_text_color: buttonText,
        DePay_payments_button_border_radius: buttonRadius,
        DePay_payments_widget_color_primary: widgetPrimary,
        DePay_payments_widget_button_border_radius: widgetButtonRadius,
        DePay_payments_widget_color_button_text: widgetButtonText,
        DePay_payments_widget_color_icons: undefined,
        DePay_payments_widget_color_text: undefined,
        DePay_payments_widget_css: widgetCss,
        DePay_payments_widget_payment_amount_type: amount,
        DePay_payments_widget_display_currency: displayedCurrency,
        DePay_payments_widget_amount_currency: amountCurrency,
      })

      settings.save().then((response) => {
        setIsSaving(false)
        setSaved(true)
      })
    }

    const setReceivingWalletAddress = (receiver, index, blockchain, connected)=>{
    
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

      if(connected) {
        let newJustConnected = justConnected.slice()
        newJustConnected[index] = true
        setJustConnected(newJustConnected)
      }

      newPayments[index].receiver = receiver
      setPayments(newPayments)
    }

    useEffect(()=>{
      if(justConnected.length) {
        let timeout = setTimeout(()=>{
          setJustConnected([])
        }, 2000)
        return ()=>{clearInterval(timeout)}
      }
    }, [justConnected])

    const connectWallet = async(index, blockchain)=> {
      let { account, accounts, wallet }  = await window.DePayWidgets.Connect()
      setReceivingWalletAddress(account, index, blockchain, true)
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

    useEffect(()=>{
      updateButtonStyle()
    },[buttonRadius, buttonText, buttonBackground])

    useEffect(()=>{
      wp.api.loadPromise.then(() => {
        const settings = new wp.api.models.Settings()
        settings.fetch({ cache: 'no-cache' }).then((response)=> {
          if(response.DePay_payments_accepted_payments) {
            setPayments(response.DePay_payments_accepted_payments)
          }
          setLabel(response.DePay_payments_button_payment_label || 'Pay')
          setButtonCss(response.DePay_payments_button_css || "button {\n  border-radius: 2px;\n  color: #FFFFFF;\n  background: #32373c;\n}")
          setButtonBackground(response.DePay_payments_button_background_color || "#32373c")
          setButtonText(response.DePay_payments_button_text_color || "#FFFFFF")
          setButtonRadius(response.DePay_payments_button_border_radius || "2")
          setAmount(response.DePay_payments_widget_amount_type || 'fix')
          setDisplayedCurrency(response.DePay_payments_widget_display_currency?.length > 2 ? response.DePay_payments_widget_display_currency : 'local')
          setStartValue(response.DePay_payments_widget_amount_free_start || 1)
          setMinValue(response.DePay_payments_widget_amount_free_min || 1)
          setStepValue(response.DePay_payments_widget_amount_free_step || 1)
          setAmountCurrency(response.DePay_payments_widget_amount_currency?.length > 0 ? response.DePay_payments_widget_amount_currency : 'USD')
          setFixAmount(response.DePay_payments_widget_fix_amount || 100)
          setSettingsAreLoaded(true)
        })
      }).catch(()=>{})
    }, [])

    useEffect(()=>{
      setIsDisabled( ! (payments && payments.length && payments.every((token)=>token.receiver && token.receiver.length > 0 && token.error === undefined)) )
    }, [ payments ])

    useEffect(()=>{
      setSaved(false)
    }, [ buttonRadius, buttonBackground, buttonText, label, buttonCss, payments, amount, displayedCurrency, startValue, minValue, stepValue, amountCurrency, fixAmount ])

    useEffect(()=>{

      LocalCurrency.Currency.rate({ from: amountCurrency || 'USD', to: 'USD' }).then((rate)=>{
        setUsdValue((fixAmount/rate).toFixed(2))
      })

      LocalCurrency.Currency.rate({ from: amountCurrency || 'USD', to: (displayedCurrency === 'local') ? undefined : displayedCurrency }).then((rate)=>{
        setDisplayedCurrencyExample(new LocalCurrency.Currency({ amount: fixAmount/rate, code: (displayedCurrency === 'local') ? undefined : displayedCurrency }).toString())
      })

    }, [displayedCurrency, startValue, amount, fixAmount, amountCurrency])

    if(!settingsAreLoaded) { return null }

    return (
      <div className="wrap">
        
        <h1 className="wp-heading-inline">DePay for Wordpress</h1>

        <p>To view received payments, please open the <a href="https://app.depay.com/payments" target="_blank">DePay App</a>.</p>

        <table className="form-table" role="presentation">
          <tbody>
            <tr>
              <th scope="row">
                Accepted
              </th>
              <td>
                <div style={{ paddingBottom: "1rem" }}>
                  Select the tokens that you want to receive:
                </div>
                {
                  payments && payments.map((payment, index)=>{
                    return(
                      <table key={ `${index}-${payment.blockchain}-${payment.symbol}-${justConnected[index]}` } className="wp-list-table widefat fixed striped table-view-list page" style={{ maxWidth: "600px", marginBottom: "0.4rem"}}>
                        <tr>
                          <td style={{ padding: "1rem 1rem 0.4rem 1rem", display: "flex" }}>
                            <div>
                              <div style={{ position: 'relative', display: 'block' }}>
                                <img src={ payment.logo } style={{ background: "white", borderRadius: "99px", height: "3rem", width: "3rem" }}/>
                                <img src={ Web3Blockchains[payment.blockchain].logo } style={{ position: 'absolute', bottom: '2px', right: '0px', width: "20px", height: "20px", border: "1px solid white", borderRadius: "4px", backgroundColor: Web3Blockchains[payment.blockchain].logoBackgroundColor }}/>
                              </div>
                            </div>
                            <div style={{ paddingLeft: "1rem", paddingBottom: "0.3rem", flex: 1 }}>
                              <div style={{ display: 'flex', justifyontent: 'space-between', fontSize: '1rem' }}>
                                <div>
                                  <strong>{ payment.symbol }</strong> ({ payment.name }) on { Web3Blockchains[payment.blockchain].label }
                                </div>
                                <div className="row-actions visible" style={{ marginLeft: "auto" }}>
                                  <span className="delete">
                                    <a href="#" onClick={ ()=>removeToken(index) }>Remove</a>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <a href={Web3Blockchains[payment.blockchain].explorerUrlFor({ token: payment.address })} target="_blank">{ addressEllipsis(payment.address) }</a>
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
                                  { !justConnected[index] &&
                                    <button style={{ marginTop: "0.5rem" }} type="button" className="button button-secondary" onClick={ ()=>connectWallet(index, payment.blockchain) }>Connect Wallet</button>
                                  }
                                  { justConnected[index] &&
                                    <button style={{ marginTop: "0.5rem" }} type="button" className="button button-primary">✔ wallet connected</button>
                                  }
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
                    Users will be able to use any convertible token as means of payment.
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
                
                <div>
                  <p className="description" style={{ paddingBottom: "0.8rem" }}><strong>Style</strong></p>
                  <div style={{ marginBottom: "0.8rem" }}><label style={{ display: "flex", alignItems: "center" }}><input style={{ marginRight: "0.6rem" }} type="color" value={buttonBackground} onChange={(event)=>{ setButtonBackground(event.target.value) }}/>Background</label></div>
                  <div style={{ marginBottom: "0.8rem" }}><label style={{ display: "flex", alignItems: "center" }}><input style={{ marginRight: "0.6rem" }} type="color" value={buttonText} onChange={(event)=>{ setButtonText(event.target.value) }}/>Text</label></div>
                  <div style={{ marginBottom: "0.8rem" }}><label style={{ display: "flex", alignItems: "center" }}><input style={{ marginRight: "0.6rem" }} type="range" value={buttonRadius} min="0" max="36" onChange={(event)=>{ setButtonRadius(event.target.value) }}/>Border</label></div>
                </div>

                <div>
                  <div style={{ paddingTop: '0.8rem' }}>
                    <span className="" style={{ opacity: 0.7, paddingBottom: '0.8rem', display: 'block' }}><strong>Preview</strong></span>
                    <div style={{ display: 'inline-block' }}>
                      <DePayButtons.DePayButton
                        css={ buttonCss }
                        label={ label }
                        widget={'Payment'}
                        configuration={ {"accept": payments } }
                      />
                    </div>
                  </div>
                  <div style={{ paddingTop: "1.4rem" }}>
                    <p className="description"><strong>Usage</strong></p>
                  </div>
                  <div style={{ marginBottom: "0.8rem" }}>
                    <p className="description" style={{ marginBottom: "0.8rem" }}>
                      Search for the <strong>"DePay"</strong> block in the editor and drop the button into layouts, pages and posts.
                      <br/>
                      You can individually customize each block for more precise configuration.
                    </p>
                  </div>
                  <img style={{ width: '100%', maxWidth: "600px", marginBottom: "2rem" }} src="/wp-content/plugins/depay-payments/core/includes/assets/img/button.gif"/>                
                </div>
                
              </td>
            </tr>
            <tr>
              <th scope="row">
                Widget
              </th>
              <td>

                <div style={{ paddingTop: '0.4rem' }}>
                  <p className="description" style={{ paddingBottom: "0.8rem" }}><strong>Amount Currency</strong></p>
                  <div style={{ marginBottom: "0.8rem" }}>
                    <label style={{ display: "flex", alignItems: "center" }}>
                      <select style={{ marginRight: "0.8rem" }} value={ amountCurrency } onChange={(event)=>setAmountCurrency(event.target.value)}>
                        { CURRENCIES.map((code)=>{
                            return(<option value={code}>{ code }</option>)
                          })
                        }
                      </select>
                      Currency used to set prices/amounts
                    </label>
                  </div>
                </div>

                <div style={{ paddingTop: '0.4rem' }}>
                  <p className="description" style={{ paddingBottom: "0.8rem" }}><strong>Display Currency</strong></p>
                  <div style={{ marginBottom: "0.8rem" }}>
                    <label style={{ display: "flex", alignItems: "center" }}>
                      <select style={{ marginRight: "0.8rem" }} value={ displayedCurrency } onChange={(event)=>setDisplayedCurrency(event.target.value)}>
                        <option value="local">User's local currency</option>
                        { CURRENCIES.map((code)=>{
                            return(<option value={code}>{ code }</option>)
                          })
                        }
                      </select>
                      Currency displayed to users after conversion
                    </label>
                  </div>
                </div>

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
                          { payments?.length > 0 && <span>Please fix all errors before saving!</span> }
                          { payments?.length == 0 && <span>Please add at least one token!</span> }
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
        <DePayWordpressAdminPage />,
        document.getElementById( 'depay-payments-admin' )
    )
  })

})(
  window.React,
  window.ReactDOM,
  window.wp.components,
);
