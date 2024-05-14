=== Web3 Payments by DePay - Accept P2P Crypto Payments ===
Contributors: depayfi
Tags: payments, cryptocurrency, p2p, web3, depay
Requires at least: 5.0
Tested up to: 6.5
Stable tag: 2.3.4
Requires PHP: 5.6
License: GPLv2
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Web3 payments directly into your own wallet. A Block-enabled WordPress plugin for P2P crypto payments with on-the-fly conversion.

== Description ==
**Web3 payments directly into your own wallet.**

A Block-enabled WordPress plugin for P2P cryptocurrency payments on multiple blockchains.

= Features =
> 📌 Check out the [live demo](https://web3wordpress.xyz "Wordpress Plugin for Crypto P2P payments (live demo) by DePay").

* **Wallet-to-wallet**: Middleman-free P2P payments.
* **Multichain**: Your supporters can send crypto payments on various blockchains.
* **On-the-fly conversion**: 100% decentralized token conversion via decentralized liquidity pools such as Uniswap or PancakeSwap. 
* **Configure incoming tokens**: Receive the tokens you want while letting your supporters pay with tokens they hold. 
* **Open-source**: You can find our [Web3 Payments Plugin on GitHub](https://github.com/DePayFi/web3-wordpress-depay-payments).
* **Buttons & Links**: The widget can be triggered in various ways.
* **Block-enabled**: You can add DePay Payments as a WordPress Block.
* **Custom CSS**: Customize the look of your payment button with your own CSS in the WordPress plugin dashboard.

= Supported wallets =

DePay supports [most crypto wallets](https://depay.com/wallets).

= Supported blockchains =

* Ethereum
* BNB Smart Chain
* Polygon
* Solana
* Fantom
* Gnosis
* Avalanche
* Arbitrum
* Optimism
* Base

= About DePay = 
> [DePay](https://depay.com) pioneers Web3 Payments with the power of DeFi. 
> Driving mass adoption of blockchain-based payments, DePay merges the core ideas of decentralization and interoperability with state-of-the-art Web3 technologies.
> The first truly decentralized multichain payment protocol built on DeFi. ETHOnline finalist, made in Switzerland (Crypto Valley).

🤝 Do you want to integrate the DePay payment protocol into your own WordPress plugin or project? [We are happy to give you support](https://depay.com/documentation#support).

== Frequently Asked Questions ==

= What does "P2P" mean? =
Another term we like to use is "wallet-to-wallet".
When someone sends you a crypto payment through your WordPress-based website via DePay, it goes directly from your supporter's wallet to your own wallet (this is referred to by the term "peer-to-peer" or "P2P"). There are no intermediaries in between, but smart contracts. These ensure that the payer can pay with any token on supported blockchains, whereupon the tokens are converted into the ones you want to receive.

= What are "Web3 payments"? =
Building on the idea that "Web3" is the next generation of a blockchain-based and therefore decentralized Internet, "Web3 payments" are a new type of P2P payments. Besides being decentralized and peer-to-peer, they are also characterized by being "permissionless" and not requiring you to trust ("trustless") in centralized entities such as intermediaries. Furthermore, Web3 payments are censorship-resistant. "Open source" code can often be an indicator of Web3 technologies. Read more: [What are Web3 Payments?](https://depay.com/web3-payments).

= How does "on-the-fly" conversion work? =
* You configure which tokens you want to receive (e.g. USDT, BUSD) per blockchain
* Your supporters can send you payments with any token they currently have in their wallets (e.g. ETH or any other token)
* Once a transaction is sent, DePay's smart contracts convert the sender token (via decentralized liquidity pools such as Uniswap) into the tokens you have configured to be received. The payments arrive directly in your own wallet after the real-time conversion.

= Pricing =

1.5% transaction fee.

== Screenshots ==

1. Performing a Web3 Payment with DePay.
2. Inline links can also trigger payments.
3. Block-enabled WordPress Plugin for crypto payments.
4. Insert inline payment links.
5. Simple Setup: Connect wallet & configure tokens.
6. Customize the CSS & label of your Web3 payment button.
7. Customize the theme appearance with a live preview.

== Changelog ==

= 2.3.4 =
* fixes saving settings in admin

= 2.3.1 =
* fixes mobile wallet connectivity issues (WalletConnect)

= 2.3.0 =
* adds Magic Eden wallet support + Brave solana support

= 2.2.1 =
* upgrade dependencies
* fix polygon RPC

= 2.2.0 =
* upgrade widgets
* load javascript defer (to improve page speed)

= 2.1.4 =
* fixes wrap/unwrap payments
* fixes provided gas

= 2.1.3 =
* fixes Trust wallet mobile connection

= 2.1.2 =
* fix: replaces broken polygon rpc

= 2.1.1 =
* upgrades widgets and fixes wrongfully "failed" payments

= 2.1.0 =
* upgrades widgets and fixes various connect wallet issues

= 2.0.3 =
* fixes amount selection and metamask mobile connection

= 2.0.2 =
* fixes wordpress.org release

= 2.0.1 =
* fixes Safe wallet connections

= 2.0.0 =
* DePay v2: 6 new blockchains + lots of other improvements

= 1.3.3 =
* fixes WalletConnect v2 issue

= 1.3.2 =
* fixes wallet connections to wallets requiring WalletConnect v2

= 1.3.0 =
* add SolanaPay support (for fix payment amounts)

= 1.2.5 =
* fix metamask mobile wallet connections

= 1.2.4 =
* fix polygon logo
* fix some solana routing

= 1.2.3 =
* tested up to WP 6.2

= 1.2.2 =
* fix admin settings page by prefilling values for some fields

= 1.2.1 =
* fix admin settings page if startValue is undefined

= 1.2.0 =
* adds Solana support and one address per coin and ui to change button and widget style

= 1.1.4 =
* fixes some token amount display issues

= 1.1.3 =
* fix: minor widget fixes and improvements

= 1.1.2 =
* fix: show switch network dialog also on approval

= 1.1.1 =
* remove donation video from wordpress.org page

= 1.1.0 =
* deploy to wordpress.org

= 1.0.5 =
* fixes FIAT & USD conversion (UI/Widget)

= 1.0.4 =
* escape remaining echo()

= 1.0.3 =
* remove internal css storage

= 1.0.2 =
* escape echo

= 1.0.1 =
* fixes problem with Coinbase wallet

= 1.0.0 =
* first release
