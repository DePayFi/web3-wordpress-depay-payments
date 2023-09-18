!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="/Users/sebastian/Work/DePay/web3-wordpress-depay-payments/src/admin.js";!function(t,l){const a=window.React.useEffect,i=window.React.useState,s=["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWL"],r=function(l){const[r,n]=i(!1),[m,_]=i(!1),[o,c]=i(),[u,N]=i(),[f,d]=i(),[h,y]=i(),[b,p]=i(),[g,E]=i(),[v,D]=i(),[w,P]=i(),[C,B]=i(),[x,R]=i(),[S,k]=i(),[F,T]=i(),[A,L]=i(),[M,I]=i([]),[K,U]=i(),[W,G]=i(),[H,O]=i(),[V,Z]=i(),[Y,q]=i(),[X,$]=i(),[j,z]=i(),[J,Q]=i(),[ee,te]=i(),le=(e,t,l)=>{let a=[...M];if(e&&0!==e.length)try{e="solana"===l?new SolanaWeb3js.PublicKey(e).toString():ethers.ethers.utils.getAddress(e),a[t].error=void 0}catch(e){a[t].error="This address is invalid!"}else a[t].error="Please enter a receiver address!";a[t].receiver=e,I(a)};return a((()=>{T(`button {\n  border-radius: ${f||2}px;\n  color: ${b||"#FFFFFF"};\n  background: ${h||"#32373c"};\n}`)}),[f,b,h]),a((()=>{L(`.ButtonPrimary { color: ${w||"#FFFFFF"}; border-radius: ${v}px;}`)}),[g,w,v,C,x]),a((()=>{wp.api.loadPromise.then((()=>{(new wp.api.models.Settings).fetch().then((e=>{e.DePay_payments_accepted_payments&&(e.DePay_payments_accepted_payments.forEach((t=>{void 0===t.receiver&&e.DePay_payments_receiving_wallet_address&&(t.receiver=e.DePay_payments_receiving_wallet_address)})),I(e.DePay_payments_accepted_payments)),k(e.DePay_payments_button_label||"Support Us"),T(e.DePay_payments_button_css||"button {\n  border-radius: 2px;\n  color: #FFFFFF;\n  background: #32373c;\n}"),L(e.DePay_payments_widget_css||".ButtonPrimary {border-radius: 2px;}"),y(e.DePay_payments_button_background_color||"#32373c"),p(e.DePay_payments_button_text_color||"#FFFFFF"),d(e.DePay_payments_button_border_radius||"2"),E(e.DePay_payments_widget_color_primary||"#32373c"),D(e.DePay_payments_widget_button_border_radius||"2"),P(e.DePay_payments_widget_color_button_text||"#FFFFFF"),U(e.DePay_payments_widget_amount_type||"free"),G(e.DePay_payments_widget_display_currency),O(e.DePay_payments_widget_amount_free_start||1),Z(e.DePay_payments_widget_amount_free_min||1),q(e.DePay_payments_widget_amount_free_step||1),$(e.DePay_payments_widget_amount_currency||"USD"),z(e.DePay_payments_widget_fix_amount||1),B(),R(),_(!0)}))})).catch((()=>{}))}),[]),a((()=>{N(!(M&&M.length&&M.every((e=>e.receiver&&e.receiver.length>0&&void 0===e.error))))}),[M]),a((()=>{n(!1)}),[f,h,b,g,v,w,C,x,S,F,A,M,K,W,H,V,Y,X,j]),a((()=>{"fix"===K?(LocalCurrency.Currency.rate({from:X,to:"USD"}).then((e=>{Q((j/e).toFixed(2))})),LocalCurrency.Currency.rate({from:X,to:"local"===W?void 0:W}).then((e=>{te(new LocalCurrency.Currency({amount:j/e,code:"local"===W?void 0:W}).toString())}))):(te(new LocalCurrency.Currency({amount:H||1,code:"local"===W?void 0:W}).toString()),"local"===W||void 0===W?LocalCurrency.Currency.rate({from:new LocalCurrency.Currency({amount:0}).code,to:"USD"}).then((e=>{Q(((H||1)/e).toFixed(2))})):LocalCurrency.Currency.rate({from:W,to:"USD"}).then((e=>{Q(((H||1)/e).toFixed(2))})))}),[W,H,K,j,X]),m?t.createElement("div",{className:"wrap",__self:this,__source:{fileName:e,lineNumber:202}},t.createElement("h1",{className:"wp-heading-inline",__self:this,__source:{fileName:e,lineNumber:204}},"DePay Payments"),t.createElement("p",{__self:this,__source:{fileName:e,lineNumber:206}},"To view received payments, please open the ",t.createElement("a",{href:"https://app.depay.com/payments",target:"_blank",__self:this,__source:{fileName:e,lineNumber:206}},"DePay App"),"."),t.createElement("table",{className:"form-table",role:"presentation",__self:this,__source:{fileName:e,lineNumber:208}},t.createElement("tbody",{__self:this,__source:{fileName:e,lineNumber:209}},t.createElement("tr",{__self:this,__source:{fileName:e,lineNumber:210}},t.createElement("th",{scope:"row",__self:this,__source:{fileName:e,lineNumber:211}},"Accepted Payments"),t.createElement("td",{__self:this,__source:{fileName:e,lineNumber:214}},t.createElement("div",{style:{paddingBottom:"1rem"},__self:this,__source:{fileName:e,lineNumber:215}},"Select the tokens that you want to receive as payment:"),M&&M.map(((l,a)=>t.createElement("table",{key:`${a}-${l.blockchain}-${l.symbol}`,className:"wp-list-table widefat fixed striped table-view-list page",style:{maxWidth:"600px",marginBottom:"0.4rem"},__self:this,__source:{fileName:e,lineNumber:221}},t.createElement("tr",{__self:this,__source:{fileName:e,lineNumber:222}},t.createElement("td",{style:{padding:"1rem 1rem 0.4rem 1rem",display:"flex"},__self:this,__source:{fileName:e,lineNumber:223}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:224}},t.createElement("div",{style:{position:"relative",display:"block"},__self:this,__source:{fileName:e,lineNumber:225}},t.createElement("img",{src:l.logo,style:{background:"white",borderRadius:"99px",height:"3rem",width:"3rem"},__self:this,__source:{fileName:e,lineNumber:226}}),t.createElement("img",{src:Web3Blockchains[l.blockchain].logo,style:{position:"absolute",bottom:"2px",right:"0px",width:"20px",height:"20px",border:"1px solid white",borderRadius:"4px",backgroundColor:Web3Blockchains[l.blockchain].logoBackgroundColor},__self:this,__source:{fileName:e,lineNumber:227}}))),t.createElement("div",{style:{paddingLeft:"1rem",paddingBottom:"0.3rem",flex:1},__self:this,__source:{fileName:e,lineNumber:230}},t.createElement("div",{style:{display:"flex",justifyontent:"space-between",fontSize:"1rem"},__self:this,__source:{fileName:e,lineNumber:231}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:232}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:233}},l.symbol)," (",l.name,") on ",Web3Blockchains[l.blockchain].label),t.createElement("div",{className:"row-actions visible",style:{marginLeft:"auto"},__self:this,__source:{fileName:e,lineNumber:235}},t.createElement("span",{className:"delete",__self:this,__source:{fileName:e,lineNumber:236}},t.createElement("a",{href:"#",onClick:()=>(e=>{let t=M.slice();t.splice(e,1),I(t)})(a),__self:this,__source:{fileName:e,lineNumber:237}},"Remove")))),t.createElement("div",{style:{paddingTop:".5rem"},__self:this,__source:{fileName:e,lineNumber:241}},t.createElement("label",{style:{marginBottom:0},__self:this,__source:{fileName:e,lineNumber:242}},t.createElement("span",{className:"",style:{opacity:.7,paddingBottom:"1px",display:"block"},__self:this,__source:{fileName:e,lineNumber:243}},"Receiver"),t.createElement("div",{className:"components-base-control",__self:this,__source:{fileName:e,lineNumber:244}},t.createElement("input",{required:"required",style:{width:"100%"},id:"depay-woocommerce-payment-receiver-address",type:"text",value:l.receiver,onChange:e=>le(e.target.value,a,l.blockchain),__self:this,__source:{fileName:e,lineNumber:245}})),l.error&&t.createElement("div",{className:"notice inline notice-warning notice-alt",style:{marginBottom:0},__self:this,__source:{fileName:e,lineNumber:255}},l.error))),t.createElement("div",{className:"row-actions visible",__self:this,__source:{fileName:e,lineNumber:261}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:262}},t.createElement("button",{style:{marginTop:"0.5rem"},type:"button",className:"button button-secondary",onClick:()=>(async(e,t)=>{let{account:l,accounts:a,wallet:i}=await window.DePayWidgets.Connect();le(l,e,t)})(a,l.blockchain),__self:this,__source:{fileName:e,lineNumber:263}},"Connect Wallet"))))))))),t.createElement("div",{style:{paddingTop:"0.2rem"},__self:this,__source:{fileName:e,lineNumber:273}},t.createElement("button",{onClick:async()=>{let e=await DePayWidgets.Select({what:"token"});M instanceof Array&&M.find((t=>t.blockchain==e.blockchain&&t.address==e.address))||(e.error="Please enter a receiver address!",I(M instanceof Array?M.concat([e]):[e]))},style:{fontSize:"1.1rem",padding:"0 1rem",marginTop:"0.5rem"},type:"button",className:"button button-secondary",__self:this,__source:{fileName:e,lineNumber:274}},"Add Token")),t.createElement("div",{style:{paddingTop:"1.6rem",paddingBottom:"1.5rem"},__self:this,__source:{fileName:e,lineNumber:276}},t.createElement("p",{className:"description",__self:this,__source:{fileName:e,lineNumber:277}},"Each incoming payment will be converted on-the-fly into your selected tokens on the selected blockchains."),t.createElement("p",{className:"description",__self:this,__source:{fileName:e,lineNumber:280}},"Customers will be able to use any convertible token as means of payment."),t.createElement("p",{className:"description",__self:this,__source:{fileName:e,lineNumber:283}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:284}},"Payments are sent directly into your wallet."))))),t.createElement("tr",{__self:this,__source:{fileName:e,lineNumber:289}},t.createElement("th",{scope:"row",__self:this,__source:{fileName:e,lineNumber:290}},"Button"),t.createElement("td",{__self:this,__source:{fileName:e,lineNumber:293}},t.createElement("div",{style:{display:"inline-block"},__self:this,__source:{fileName:e,lineNumber:294}},t.createElement(DePayButtons.DePayButton,{css:F,label:S,widget:"Payment",configuration:{accept:M},__self:this,__source:{fileName:e,lineNumber:295}})),t.createElement("div",{style:{paddingTop:"1.4rem"},__self:this,__source:{fileName:e,lineNumber:302}},t.createElement("label",{style:{marginBottom:0},__self:this,__source:{fileName:e,lineNumber:303}},t.createElement("span",{className:"",style:{opacity:.7,paddingBottom:"0.8rem",display:"block"},__self:this,__source:{fileName:e,lineNumber:304}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:304}},"Label")),t.createElement("div",{className:"components-base-control",__self:this,__source:{fileName:e,lineNumber:305}},t.createElement("input",{required:"required",type:"text",value:S,onChange:e=>k(e.target.value),__self:this,__source:{fileName:e,lineNumber:306}})))),t.createElement("div",{style:{paddingTop:"1.4rem"},__self:this,__source:{fileName:e,lineNumber:315}},t.createElement("p",{className:"description",style:{paddingBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:316}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:316}},"Style")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:317}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:317}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"color",value:h,onChange:e=>{y(e.target.value)},__self:this,__source:{fileName:e,lineNumber:317}}),"Background")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:318}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:318}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"color",value:b,onChange:e=>{p(e.target.value)},__self:this,__source:{fileName:e,lineNumber:318}}),"Text")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:319}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:319}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"range",value:f,min:"0",max:"36",onChange:e=>{d(e.target.value)},__self:this,__source:{fileName:e,lineNumber:319}}),"Border"))),t.createElement("div",{style:{paddingTop:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:321}},t.createElement("p",{className:"description",__self:this,__source:{fileName:e,lineNumber:322}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:322}},"Usage"))),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:324}},t.createElement("p",{className:"description",style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:325}},"Search for the ",t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:325}},'"DePay Payments"')," block in the editor and drop the button into layouts, pages and posts.")),t.createElement("img",{style:{maxWidth:"600px",marginBottom:"2rem"},src:"/wp-content/plugins/depay-payments/core/includes/assets/img/button.gif",__self:this,__source:{fileName:e,lineNumber:327}}))),t.createElement("tr",{__self:this,__source:{fileName:e,lineNumber:330}},t.createElement("th",{scope:"row",__self:this,__source:{fileName:e,lineNumber:331}},"Widget"),t.createElement("td",{__self:this,__source:{fileName:e,lineNumber:334}},t.createElement("div",{className:"widget-example",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("div",{className:"ReactDialog ReactDialogOpen",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("div",{className:"ReactDialogRow",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("div",{className:"ReactDialogCell",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("div",{className:"ReactDialogStack active forward",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("div",{className:"ReactDialogStackRow",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("div",{className:"ReactDialogStackCell",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("div",{className:"ReactDialogAnimation",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("div",{className:"Dialog",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("div",{className:"DialogHeader",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("div",{className:"DialogHeaderTitle",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("div",{className:"PaddingTopS PaddingLeftM PaddingRightM",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("div",{className:"FontSizeL TextLeft",__self:this,__source:{fileName:e,lineNumber:335}},"Payment"))),t.createElement("div",{className:"DialogHeaderActionRight PaddingTopS PaddingLeftS PaddingRightS",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("button",{className:"ButtonCircular",title:"Close dialog",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("svg",{className:"CloseIcon Icon",height:"24","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("line",{x1:"18",x2:"6",y1:"6",y2:"18",__self:this,__source:{fileName:e,lineNumber:335}}),t.createElement("line",{x1:"6",x2:"18",y1:"6",y2:"18",__self:this,__source:{fileName:e,lineNumber:335}}))))),t.createElement("div",{className:"DialogBody",__self:this,__source:{fileName:e,lineNumber:335}},t.createElement("div",{className:"PaddingLeftM PaddingRightM PaddingBottomXS",__self:this,__source:{fileName:e,lineNumber:335}},"free"===K&&t.createElement("div",{className:"Card",title:"Change amount",__self:this,__source:{fileName:e,lineNumber:338}},t.createElement("div",{className:"CardBody",__self:this,__source:{fileName:e,lineNumber:338}},t.createElement("div",{className:"CardBodyWrapper",__self:this,__source:{fileName:e,lineNumber:338}},t.createElement("div",{className:"CardTitle",__self:this,__source:{fileName:e,lineNumber:338}},"Amount"),t.createElement("div",{className:"CardText",__self:this,__source:{fileName:e,lineNumber:338}},t.createElement("div",{className:"TokenAmountRow",__self:this,__source:{fileName:e,lineNumber:338}},t.createElement("span",{className:"TokenAmountCell",__self:this,__source:{fileName:e,lineNumber:338}},ee))))),t.createElement("div",{className:"CardAction",__self:this,__source:{fileName:e,lineNumber:338}},t.createElement("svg",{className:"ChevronRight Icon",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",__self:this,__source:{fileName:e,lineNumber:338}},t.createElement("path",{d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z","fill-rule":"evenodd","stroke-width":"1",__self:this,__source:{fileName:e,lineNumber:338}})))),t.createElement("div",{className:"Card",title:"Change payment",__self:this,__source:{fileName:e,lineNumber:340}},t.createElement("div",{className:"CardImage",__self:this,__source:{fileName:e,lineNumber:340}},t.createElement("img",{className:"js-widget-payment-example-image",src:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",__self:this,__source:{fileName:e,lineNumber:340}})),t.createElement("div",{className:"CardBody",__self:this,__source:{fileName:e,lineNumber:340}},t.createElement("div",{className:"CardBodyWrapper",__self:this,__source:{fileName:e,lineNumber:340}},t.createElement("h2",{className:"CardText",__self:this,__source:{fileName:e,lineNumber:340}},t.createElement("div",{className:"TokenAmountRow",__self:this,__source:{fileName:e,lineNumber:342}},t.createElement("span",{className:"TokenSymbolCell js-widget-example-symbol",__self:this,__source:{fileName:e,lineNumber:342}},"USDT"),t.createElement("span",{className:"TokenAmountCell js-widget-example-amount",__self:this,__source:{fileName:e,lineNumber:342}},J)),"fix"===K&&t.createElement("div",{class:"TokenAmountRow small grey",__self:this,__source:{fileName:e,lineNumber:345}},t.createElement("span",{class:"TokenSymbolCell",__self:this,__source:{fileName:e,lineNumber:345}},ee))))),t.createElement("div",{className:"CardAction",__self:this,__source:{fileName:e,lineNumber:347}},t.createElement("svg",{className:"ChevronRight Icon",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",__self:this,__source:{fileName:e,lineNumber:347}},t.createElement("path",{d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z","fill-rule":"evenodd","stroke-width":"1",__self:this,__source:{fileName:e,lineNumber:347}})))))),t.createElement("div",{className:"DialogFooter",__self:this,__source:{fileName:e,lineNumber:347}},t.createElement("div",{className:"PaddingTopXS PaddingRightM PaddingLeftM PaddingBottomM",__self:this,__source:{fileName:e,lineNumber:347}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:347}},t.createElement("button",{className:"ButtonPrimary",style:{color:w,backgroundColor:g,borderRadius:`${v}px`},__self:this,__source:{fileName:e,lineNumber:347}},"Pay"))))))))))))),t.createElement("div",{style:{paddingTop:"1.4rem"},__self:this,__source:{fileName:e,lineNumber:348}},t.createElement("p",{className:"description",style:{paddingBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:349}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:349}},"Amount")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:350}},t.createElement("select",{value:K,onChange:e=>U(e.target.value),__self:this,__source:{fileName:e,lineNumber:351}},t.createElement("option",{value:"free",__self:this,__source:{fileName:e,lineNumber:352}},"User's can select the amount"),t.createElement("option",{value:"fix",__self:this,__source:{fileName:e,lineNumber:353}},"I want to set a fix amount"))),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:356}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:357}},t.createElement("select",{style:{marginRight:"0.8rem"},value:W,onChange:e=>G(e.target.value),__self:this,__source:{fileName:e,lineNumber:358}},t.createElement("option",{value:"local",__self:this,__source:{fileName:e,lineNumber:359}},"User's local currency"),s.map((l=>t.createElement("option",{value:l,__self:this,__source:{fileName:e,lineNumber:361}},l)))),"Displayed Currency")),"free"===K&&t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:369}},t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:370}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:371}},t.createElement("input",{required:"required",placeholder:"Start Value",style:{marginRight:"0.8rem"},type:"number",value:H,onChange:e=>O(e.target.value),__self:this,__source:{fileName:e,lineNumber:372}}),"Start Value")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:376}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:377}},t.createElement("input",{required:"required",placeholder:"Min Value",style:{marginRight:"0.8rem"},type:"number",value:V,onChange:e=>Z(e.target.value),__self:this,__source:{fileName:e,lineNumber:378}}),"Min Value")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:382}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:383}},t.createElement("input",{required:"required",placeholder:"Step Value",style:{marginRight:"0.8rem"},type:"number",value:Y,onChange:e=>q(e.target.value),__self:this,__source:{fileName:e,lineNumber:384}}),"Step Value"))),"fix"===K&&t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:391}},t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:392}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:393}},t.createElement("select",{style:{marginRight:"0.8rem"},value:X,onChange:e=>$(e.target.value),__self:this,__source:{fileName:e,lineNumber:394}},s.map((l=>t.createElement("option",{value:l,__self:this,__source:{fileName:e,lineNumber:396}},l)))),"Amount Currency")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:403}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:404}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"number",value:j,onChange:e=>{z(parseFloat(e.target.value))},__self:this,__source:{fileName:e,lineNumber:405}}),"Fix Amount")))),t.createElement("div",{style:{paddingTop:"1.4rem"},__self:this,__source:{fileName:e,lineNumber:413}},t.createElement("p",{className:"description",style:{paddingBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:414}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:414}},"Style")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:415}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:415}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"color",value:g,onChange:e=>{E(e.target.value)},__self:this,__source:{fileName:e,lineNumber:415}}),"Primary")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:416}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:416}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"color",value:w,onChange:e=>{P(e.target.value)},__self:this,__source:{fileName:e,lineNumber:416}}),"Button Text")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:417}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:417}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"range",value:v,min:"0",max:"36",onChange:e=>{D(e.target.value)},__self:this,__source:{fileName:e,lineNumber:417}}),"Button Border"))),t.createElement("div",{style:{paddingTop:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:419}},t.createElement("p",{className:"description",__self:this,__source:{fileName:e,lineNumber:420}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:420}},"Usage"))),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:422}},t.createElement("p",{className:"description",style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:423}},"Link any text to ",t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:423}},"#depay-payment-widget")," and it will open your payment widget upon click.")),t.createElement("img",{style:{maxWidth:"600px"},src:"/wp-content/plugins/depay-payments/core/includes/assets/img/widget.gif",__self:this,__source:{fileName:e,lineNumber:425}}))),t.createElement("tr",{__self:this,__source:{fileName:e,lineNumber:428}},t.createElement("th",{__self:this,__source:{fileName:e,lineNumber:429}}," "),t.createElement("td",{__self:this,__source:{fileName:e,lineNumber:430}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:431}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:432}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:433}},r&&t.createElement("button",{style:{fontSize:"1.1rem",padding:"0 1rem",marginTop:"0.5rem"},type:"button",className:"button button-secondary",onClick:()=>{},__self:this,__source:{fileName:e,lineNumber:435}},"✓ Settings Saved"),u&&t.createElement("div",{className:"notice inline notice-warning notice-alt",style:{marginBottom:0,maxWidth:"300px"},__self:this,__source:{fileName:e,lineNumber:443}},"Please fix all errors before saving!"),!r&&t.createElement("button",{style:{fontSize:"1.1rem",padding:"0 1rem",marginTop:"0.5rem"},type:"button",className:"button button-primary",onClick:()=>(c(!0),void new window.wp.api.models.Settings({DePay_payments_accepted_payments:M,DePay_payments_button_css:F,DePay_payments_button_background_color:h,DePay_payments_button_text_color:b,DePay_payments_button_border_radius:f,DePay_payments_button_label:S,DePay_payments_widget_color_primary:g,DePay_payments_widget_button_border_radius:v,DePay_payments_widget_color_button_text:w,DePay_payments_widget_color_icons:void 0,DePay_payments_widget_color_text:void 0,DePay_payments_widget_css:A,DePay_payments_widget_amount_type:K,DePay_payments_widget_display_currency:W,DePay_payments_widget_amount_free_start:H,DePay_payments_widget_amount_free_min:V,DePay_payments_widget_amount_free_step:Y,DePay_payments_widget_amount_currency:X,DePay_payments_widget_fix_amount:j}).save().then((e=>{c(!1),n(!0)}))),disabled:o||u,__self:this,__source:{fileName:e,lineNumber:448}},"Save Settings"))))))))):null};document.addEventListener("DOMContentLoaded",(function(a){l.render(t.createElement(r,{__self:this,__source:{fileName:e,lineNumber:469}}),document.getElementById("depay-payments-admin"))}))}(window.React,window.ReactDOM)}));
