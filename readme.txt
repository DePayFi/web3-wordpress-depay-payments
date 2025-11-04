=== Web3 Crypto Payments by DePay for Wordpress ===
Contributors: depayfi
Tags: web3, crypto, payments, DePay, USDC
Requires at least: 5.0
Tested up to: 6.8
Stable tag: 3.1.4
Requires PHP: 5.6
License: GPLv2
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Accept Web3 Crypto Payments & Donations. Supports various tokens, blockchains and wallets. MetaMask, Phantom, USDC, USDT, ETH, SOL, BSC, POL, xDAI…

== Description ==
**Accept Web3 Crypto Payments & Donations. Supports various tokens, blockchains and wallets. MetaMask, Phantom, USDC, USDT, ETH, SOL, BSC, POL, xDAI…**

A Block-enabled WordPress plugin for Web3, onchain, crypto payments supporting various blockchains and tokens (auto-conversion).

= Features =
> 📌 Check out the [live demo](https://web3wordpress.xyz "Wordpress Plugin for Crypto P2P payments (live demo) by DePay").

* **Wallet-to-wallet**: Payments are sent directly to your wallet without the need for an intermediary..
* **Automatic token-conversion**: Payments are automatically converted into the token you’ve selected for receiving.
* **Open-source**: You can find our [Web3 Payments Plugin on GitHub](https://github.com/DePayFi/web3-wordpress-depay).
* **Block-enabled**: Supports WordPress Gutenberg blocks with customizable payment settings for each block.
* **Customize style**: Customize the look of your payment button with your own CSS in the WordPress plugin dashboard.

= Supported wallets =

DePay supports [most crypto wallets](https://depay.com/wallets).

= Supported blockchains =

* Ethereum
* BNB Smart Chain
* Polygon
* Solana
* Gnosis
* Avalanche
* Arbitrum
* Optimism
* Base
* World Chain

== Frequently Asked Questions ==

== What are "Web3 Payments"? ==

Building on the idea that "Web3" is the next generation of a blockchain-based and therefore decentralized Internet, "Web3 payments" are a new type of direct wallet-to-wallet payments that you can receive directly into your own crypto wallet.
Besides being decentralized and peer-to-peer, they are also characterized by being "permissionless" and not requiring you to trust ("trustless") in centralized entities such as intermediaries.
Furthermore, Web3 payments are censorship-resistant. Read more: [What are Web3 Payments?](https://depay.com/web3-payments).

== How does "on-the-fly" conversion work? ==

* You configure which tokens you want to receive (e.g. USDT, BUSD) per blockchain
* Website visitors can make payments with any token they currently have in their wallets (e.g. ETH or any other token)
* DePay's smart contracts auto-converts the payment into the tokens you have configured to be received.
* The payments always arrive directly in your own wallet.

== Pricing ==

Start for free. Pay-as-you-go 1.5% per transaction.

== Screenshots ==

1. Example of a Payment & Donation Button embedded as Gutenberg Blocks.
2. Configuring accepted payment methods with support for multiple tokens across various blockchains.
3. Customize the style of the payment button.
4. Customize the style of the payment widget.

== Changelog ==

= 2025-11-4 - v3.1.4 =
* fixes Solana issues

= 2025-7-2 - v3.1.3 =
* test up to Wordpress 6.8

= 2025-7-2 - v3.1.2 =
* fix: ensures to load all payment options in some cases

= 2025-6-6 - v3.1.1 =
* fixes phantom wallet mobile deep link

= 2025-6-4 - v3.1.0 =
* Upgraded to DePay V3, including the latest payment workflows and API enhancements.
* Faster initialization: reduced time-to-first-interaction when starting a payment.
* Improving overall page speed: Deferred JavaScript assets to load only on the checkout page.

= 2024-12-1 - v3.0.4 =
* fix admin preview of the widget

= 2024-12-1 - v3.0.3 =
* fix block configuration amountType

= 2024-12-1 - v3.0.2 =
* fixes JSON parse error in some currency situations

= 2024-12-1 - v3.0.1 =
* change wordpress.org screenshots

= 2024-12-1 - v3.0.0 =
* merges donation + payment plugin into one: DePay for Wordpress

= 2.5.1 =
* fixes solflare handover and some solana rpcs

= 2.5.0 =
* adds World Chain supprt + various bug fixes

= 2.4.8 =
* fix loading payment options (rpc settings & rotation)

= 2.4.7 =
* fix prevents deadlock: widget loading payment options forever

= 2.4.6 =
* fix wordpress.org description

= 2.4.5 =
* fix amountType block override

= 2.4.4 =
* fix plugin description

= 2.4.0 =
* introduces individual payment settings per block
* fixes some wallet connectivity issues

= 2.3.11 =
* fixes edge-case routing issues with low-liquidity tokens on Uniswap v3

= 2.3.10 =
* fixes Solana RPC failover issue

= 2.3.9 =
* linking the widget is not supported anymore, please place the button component

= 2.3.8 =
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
