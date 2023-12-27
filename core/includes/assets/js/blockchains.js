(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Web3Blockchains = factory());
}(this, (function () { 'use strict';

  const logo$9 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yOTkuMyAyMzcuNSA1MDAgMTIybDIwMC43IDExNS41LTczLjUgNDIuNkw1MDAgMjA4LjJsLTEyNy4xIDcxLjktNzMuNi00Mi42em00MDEuNCAxNDYtNzMuNS00Mi42LTEyNy4xIDczTDM3MyAzNDAuNGwtNzMuNSA0My4xdjg1LjdsMTI3LjEgNzN2MTQ1LjRsNzMuNSA0My4xIDczLjUtNDMuMVY1NDIuMWwxMjcuMS03M3YtODUuNnptMCAyMzIuMXYtODUuN2wtNzMuNSA0Mi42djg1LjdjLS4xLS42IDczLjUtNDIuNiA3My41LTQyLjZ6bTUxLjkgMjkuMy0xMjcuMSA3M3Y4NS43TDgyNi4xIDY4OFY0NTYuNGwtNzMuNSA0My4xdjE0NS40em0tNzMuNS0zMzQuNCA3My41IDQzLjF2ODUuN2w3My41LTQzLjF2LTg1LjdsLTczLjUtNDMuMS03My41IDQzLjF6TTQyNi41IDc0OS40djg1LjdsNzMuNSA0My4xIDczLjUtNDMuMXYtODUuN2wtNzMuNSA0Mi03My41LTQyek0yOTkuMyA2MTUuNmw3My41IDQzLjF2LTg2LjJMMjk5LjMgNTMwdjg1LjZ6bTEyNy4yLTMwNS4xIDczLjUgNDMuMSA3My41LTQzLjEtNzMuNS00Mi42YzAtLjUtNzMuNSA0Mi42LTczLjUgNDIuNnptLTE3OS4xIDQzLjEgNzMuNS00My4xLTczLjUtNDMuMS03My41IDQzLjF2ODUuN2w3My41IDQzLjF2LTg1Ljd6bTAgMTQ1LjQtNzMuNS00Mi42VjY4OGwyMDAuNyAxMTUuNXYtODUuN2wtMTI3LjEtNzNjLS4xLjEtLjEtMTQ1LjgtLjEtMTQ1Ljh6IiBmaWxsPSIjZjBiOTBiIi8+PC9zdmc+';
  const currencyLogo$6 = "https://app.uniswap.org/static/media/bnb-logo.797868eb94521320b78e3967134febbe.svg";
  const wrappedLogo$5 = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png";

  var bsc = {
    name: 'bsc',
    id: '0x38',
    networkId: '56',
    namespace: 'eip155',
    platform: 'evm',
    label: 'BNB Smart Chain',
    fullName: 'BNB Smart Chain Mainnet',
    logo: logo$9,
    logoBackgroundColor: '#000000',
    logoWhiteBackground: logo$9,
    currency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: currencyLogo$6,
    },
    wrapped: {
      address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logo: wrappedLogo$5,
    },
    stables: { // max. 2 per fiat currency
      usd: ['0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', '0x55d398326f99059fF775485246999027B3197955']
    },
    explorer: 'https://bscscan.com',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://bscscan.com/tx/${transaction.id || transaction}` }
      if(token) { return `https://bscscan.com/token/${token}` }
      if(address) { return `https://bscscan.com/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://bsc-dataseed.binance.org',
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed3.defibit.io'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "BNB", "name": "Binance Coin", "decimals": 18, "logo": currencyLogo$6, "type": "NATIVE"},
      {"address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "symbol": "WBNB", "name": "Wrapped BNB", "decimals": 18, "logo": "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png", "type": "20"},
      {"address": "0x55d398326f99059fF775485246999027B3197955", "symbol": "USDT", "name": "Tether USD", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png", "type": "20"},
      {"address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", "symbol": "USDC", "name": "USD Coin", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d/logo.png", "type": "20"},
      {"address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", "symbol": "ETH", "name": "Ethereum Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png", "type": "20"},
      {"address": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "symbol": "Cake", "name": "PancakeSwap Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png", "type": "20"},
      {"address": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", "symbol": "BTCB", "name": "BTCB Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png", "type": "20"},
      {"address": "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb", "symbol": "DEPAY", "name": "DePay", "decimals": 18, "logo": "https://depay.com/favicon.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$8 = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDB7ZmlsbC1vcGFjaXR5Oi42MDJ9LnN0MCwuc3Qxe2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01MTEuNCA3My4zdjMxNS41TDc3OCA1MDggNTExLjQgNzMuM3oiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTExLjQgNzMuMyAyNDQuNyA1MDhsMjY2LjYtMTE5LjJWNzMuM3oiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTExLjQgNzEyLjN2MjE0LjVsMjY2LjgtMzY5LjEtMjY2LjggMTU0LjZ6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTUxMS40IDkyNi43VjcxMi4zTDI0NC43IDU1Ny42bDI2Ni43IDM2OS4xeiIvPjxwYXRoIGQ9Ik01MTEuNCA2NjIuNyA3NzggNTA4IDUxMS40IDM4OC44djI3My45eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Im0yNDQuNyA1MDggMjY2LjYgMTU0LjdWMzg4LjhMMjQ0LjcgNTA4eiIvPjwvc3ZnPgo=';
  const currencyLogo$5 = "data:image/png;base64,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";
  const wrappedLogo$4 = "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png";

  var ethereum = {
    name: 'ethereum',
    id: '0x1',
    networkId: '1',
    namespace: 'eip155',
    platform: 'evm',
    label: 'Ethereum',
    fullName: 'Ethereum Mainnet',
    logo: logo$8,
    logoBackgroundColor: '#5683ec',
    logoWhiteBackground: 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MXtmaWxsOiM4YzhjOGN9PC9zdHlsZT48cGF0aCBkPSJtNDk5LjggNzcuNS01LjUgMTl2NTU5LjFsNS41IDUuNSAyNTkuNy0xNTMuNUw0OTkuOCA3Ny41eiIgZmlsbD0iIzM0MzQzNCIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Im00OTkuOCA3Ny41LTI1OS4zIDQzMEw0OTkuOCA2NjFWNzcuNXoiLz48cGF0aCBkPSJtNDk5LjggNzEwLjMtMi45IDR2MTk5LjFsMi45IDkuMSAyNTkuNy0zNjUuOC0yNTkuNyAxNTMuNnoiIGZpbGw9IiMzYzNjM2IiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDk5LjggOTIyLjVWNzEwLjNMMjQwLjUgNTU2LjdsMjU5LjMgMzY1Ljh6Ii8+PHBhdGggZD0ibTQ5OS44IDY2MSAyNTkuNy0xNTMuNS0yNTkuNy0xMTcuOFY2NjF6IiBmaWxsPSIjMTQxNDE0Ii8+PHBhdGggZD0iTTI0MC41IDUwNy41IDQ5OS44IDY2MVYzODkuN0wyNDAuNSA1MDcuNXoiIGZpbGw9IiMzOTM5MzkiLz48L3N2Zz4K',
    currency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: currencyLogo$5,
    },
    wrapped: {
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      logo: wrappedLogo$4,
      logoBackgroundColor: '#FFFFFF',
    },
    stables: { // max. 2 per fiat currency
      usd: ['0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', '0xdAC17F958D2ee523a2206206994597C13D831ec7']
    },
    explorer: 'https://etherscan.io',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://etherscan.io/tx/${transaction.id || transaction}` }
      if(token) { return `https://etherscan.io/token/${token}` }
      if(address) { return `https://etherscan.io/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://rpc.ankr.com/eth',
      'https://eth.llamarpc.com',
      'https://ethereum.publicnode.com'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": currencyLogo$5, "type": "NATIVE"},
      {"address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": wrappedLogo$4, "type": "20"},
      {"address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
      {"address": "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c", "symbol": "EUROC", "name": "EURO Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c/logo.png", "type": "20"},
      {"address": "0xdAC17F958D2ee523a2206206994597C13D831ec7", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
      {"address": "0x6B175474E89094C44Da98b954EedeAC495271d0F", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
      {"address": "0x853d955aCEf822Db058eb8505911ED77F175b99e", "symbol": "FRAX", "name": "Frax", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x853d955aCEf822Db058eb8505911ED77F175b99e/logo.png", "type": "20"},
      {"address": "0x956F47F50A910163D8BF957Cf5846D573E7f87CA", "symbol": "FEI", "name": "Fei USD", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x956F47F50A910163D8BF957Cf5846D573E7f87CA/logo.png", "type": "20"},
      {"address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png", "type": "20"},
      {"address": "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb", "symbol": "DEPAY", "name": "DePay", "decimals": 18, "logo": "https://depay.com/favicon.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$7 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik00NjcgMTM1LjVjMTgtOS4zIDQ1LjEtOS4zIDYzIDBsMTgzLjQgOTdjMTAuNyA2LjEgMTYuNiAxNCAxOCAyMy4zdjQ4Ni42YzAgOS4zLTYuMSAxOS4yLTE4IDI1LjJsLTE4My4yIDk3Yy0xOCA5LjMtNDUuMSA5LjMtNjMgMGwtMTgzLjMtOTdjLTExLjktNi4xLTE3LjItMTUuOS0xOC0yNS4yVjI1NS43Yy43LTguNyA2LjctMTcuMiAxNy4yLTIzLjNMNDY3IDEzNS41em0yMzUuOCAzODkuNy0xNzIuNiA5MC45Yy0xOCA5LjMtNDUuMSA5LjMtNjMgMGwtMTcxLjktOTAuM3YyMTQuNGwxNzEuOSA5MC4zYzEwIDUuMyAyMC42IDEwLjcgMzEuMiAxMS4zaC43YzEwIDAgMjAtNS4zIDMwLjUtMTBsMTc0LTkyLjMtLjgtMjE0LjN6TTIzNy4zIDczMS4xYzAgMTguNiAyIDMxLjIgNi43IDM5LjggMy4zIDcuMyA4LjcgMTIuNiAxOC42IDE5LjJsLjcuN2MyIDEuNCA0LjcgMi42IDcuMyA0LjdsMy4zIDIgMTAuNyA2LjEtMTQuNiAyNC42LTExLjMtNy4zLTItMS40Yy0zLjMtMi02LjEtNC04LjctNS4zLTI3LjktMTguNi0zNy44LTM5LjItMzcuOC04MS42di0xLjRoMjcuMXpNNDg1IDM5Ni40Yy0xLjQuNy0yLjYuNy00IDEuNGwtMTgzLjIgOTYuOWgtLjcuN2wxODMuMyA5N2MxLjQuNyAyLjYgMS40IDQgMS40bC0uMS0xOTYuN3ptMjkuMyAwdjE5Ny44YzEuNC0uNyAyLjYtLjcgNC0xLjRsMTgzLjMtOTdoLjctLjdsLTE4My4zLTk4LjJjLTEuNC0uNS0yLjgtMS4yLTQtMS4yem0xODguNS0xMDctMTY0LjcgODYuMyAxNjQuNyA4Ni40VjI4OS40em0tNDA3LjcgMHYxNzMuM2wxNjQuNy04Ni4zLTE2NC43LTg3em0yMjIuNS0xMjhjLTkuMy01LjMtMjYuNS01LjMtMzYuNiAwbC0xODMuMiA5N2gtLjcuN2wxODMuMyA5N2M5LjMgNS4zIDI2LjUgNS4zIDM2LjYgMGwxODMuMy05N2guNy0uN2wtMTgzLjQtOTd6bTIxMi41IDkuMyAxMS4zIDcuMyAyIDEuNGMzLjMgMiA2LjEgNCA4LjcgNS4zIDI3LjkgMTguNiAzNy44IDM5LjIgMzcuOCA4MS42djEuNGgtMjguN2MwLTE4LjYtMi0zMS4yLTYuNy0zOS44LTMuMy03LjMtOC43LTEyLjYtMTguNi0xOS4ybC0uNy0uN2MtMi0xLjQtNC43LTIuNi03LjMtNC43bC0zLjMtMi0xMC43LTYuMSAxNi4yLTI0LjV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+';
  const currencyLogo$4 = "https://assets.spooky.fi/tokens/FTM.png";
  const wrappedLogo$3 = "https://assets.spooky.fi/tokens/wFTM.png";

  var fantom = {
    name: 'fantom',
    id: '0xfa',
    networkId: '250',
    namespace: 'eip155',
    label: 'Fantom',
    fullName: 'Fantom Opera',
    logo: logo$7,
    logoBackgroundColor: '#226efb',
    logoWhiteBackground: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxjaXJjbGUgY3g9IjUwMCIgY3k9IjUwMCIgcj0iNDI1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzE5NjlmZiIvPjxwYXRoIGQ9Ik00NzQuMSAyMTAuM2MxNC4zLTcuNCAzNS45LTcuNCA1MC4yIDBsMTQ1LjkgNzcuMmM4LjUgNC44IDEzLjIgMTEuMSAxNC4zIDE4LjV2Mzg3LjVjMCA3LjQtNC44IDE1LjMtMTQuMyAyMC4xbC0xNDUuOSA3Ny4yYy0xNC4zIDcuNC0zNS45IDcuNC01MC4yIDBsLTE0NS45LTc3LjJjLTkuNS00LjgtMTMuNy0xMi43LTE0LjMtMjAuMVYzMDZjLjUtNi45IDUuMy0xMy43IDEzLjctMTguNS4xIDAgMTQ2LjUtNzcuMiAxNDYuNS03Ny4yem0xODcuNyAzMTAuM0w1MjQuMyA1OTNjLTE0LjMgNy40LTM1LjkgNy40LTUwLjIgMGwtMTM2LjktNzEuOXYxNzAuN2wxMzYuOSA3MS45YzcuOSA0LjIgMTYuNCA4LjUgMjQuOCA5aC41YzcuOSAwIDE1LjktNC4yIDI0LjMtNy45bDEzOC41LTczLjVWNTIwLjZoLS40ek0yOTEuMiA2ODQuNWMwIDE0LjggMS42IDI0LjggNS4zIDMxLjcgMi42IDUuOCA2LjkgMTAgMTQuOCAxNS4zbC41LjVjMS42IDEuMSAzLjcgMi4xIDUuOCAzLjdsMi42IDEuNiA4LjUgNC44LTExLjYgMTkuNi05LTUuOC0xLjYtMS4xYy0yLjYtMS42LTQuOC0zLjItNi45LTQuMi0yMi4yLTE0LjgtMzAuMS0zMS4yLTMwLjEtNjV2LTEuMWgyMS43em0xOTcuMi0yNjYuNGMtMS4xLjUtMi4xLjUtMy4yIDEuMWwtMTQ1LjkgNzcuMmgtLjUuNWwxNDUuOSA3Ny4yYzEuMS41IDIuMSAxLjEgMy4yIDEuMVY0MTguMXptMjMuMiAwdjE1Ny41YzEuMS0uNSAyLjEtLjUgMy4yLTEuMWwxNDUuOS03Ny4yaC41LS41bC0xNDUuOS03OC4yYy0xLjEtLjUtMi4xLTEtMy4yLTF6TTY2MS44IDMzM2wtMTMxLjEgNjguNyAxMzEuMSA2OC43VjMzM3ptLTMyNC42IDB2MTM4bDEzMS4xLTY4LjdjMC0uMS0xMzEuMS02OS4zLTEzMS4xLTY5LjN6bTE3Ny4xLTEwMi4xYy03LjQtNC4yLTIxLjEtNC4yLTI5LjEgMGwtMTQ1LjkgNzcuMmgtLjUuNWwxNDUuOSA3Ny4yYzcuNCA0LjIgMjEuMSA0LjIgMjkuMSAwbDE0NS45LTc3LjJoLjUtLjVsLTE0NS45LTc3LjJ6bTE2OS4xIDcuNCA5IDUuOCAxLjYgMS4xYzIuNiAxLjYgNC44IDMuMiA2LjkgNC4yIDIyLjIgMTQuOCAzMC4xIDMxLjIgMzAuMSA2NXYxLjFoLTIyLjdjMC0xNC44LTEuNi0yNC44LTUuMy0zMS43LTIuNi01LjgtNi45LTEwLTE0LjgtMTUuM2wtLjUtLjVjLTEuNi0xLjEtMy43LTIuMS01LjgtMy43bC0yLjYtMS42LTguNS00LjggMTIuNi0xOS42eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==',
    currency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: currencyLogo$4,
    },
    wrapped: {
      address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logo: wrappedLogo$3,
    },
    stables: { // max. 2 per fiat currency
      usd: ['0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf', '0x1B6382DBDEa11d97f24495C9A90b7c88469134a4']
    },
    explorer: 'https://ftmscan.com',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://ftmscan.com/tx/${transaction.id || transaction}` }
      if(token) { return `https://ftmscan.com/token/${token}` }
      if(address) { return `https://ftmscan.com/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://rpc.ftm.tools',
      'https://fantom.publicnode.com',
      'https://rpc2.fantom.network'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "FTM", "name": "Fantom", "decimals": 18, "logo": currencyLogo$4, "type": "NATIVE"},
      {"address": "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83", "symbol": "WFTM", "name": "Wrapped Fantom", "decimals": 18, "logo": wrappedLogo$3, "type": "20"},
      {"address": "0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf", "symbol": "lzUSDC", "name": "LayerZero USDC", "decimals": 6, "logo": "https://assets.spooky.fi/tokens/USDC.png", "type": "20"},
      {"address": "0x1B6382DBDEa11d97f24495C9A90b7c88469134a4", "symbol": "axlUSDC", "name": "Axelar Wrapped USDC", "decimals": 6, "logo": "https://assets.spooky.fi/tokens/USDC.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$6 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0xMzEuNSA0NTkuM2MtMTQuNCA5LjYtMjQgMjQtMjQgNDMuMnYxOTQuNGMwIDE5LjIgOS42IDM2IDI0IDQzLjJsMTY1LjYgOTZjMTQuNCA5LjYgMzMuNiA5LjYgNDggMGwxNjUuNi05NmMxNC40LTkuNiAyNC0yNCAyNC00My4ydi02OS42bC03Ni44LTQzLjJ2NjQuOGMwIDE5LjItOS42IDM2LTI0IDQzLjJsLTg2LjQgNTIuOGMtMTQuNCA5LjYtMzMuNiA5LjYtNDggMGwtODYuNC01MC40Yy0xNC40LTkuNi0yNC0yNC0yNC00My4yVjU1MC41YzAtMTkuMiA5LjYtMzYgMjQtNDMuMmw4OC44LTUwLjRjMTQuNC05LjYgMzMuNi05LjYgNDggMGwxMTIuOCA2NC44IDc2LjggNDUuNiAxMTIuOCA2NC44YzE0LjQgOS42IDMzLjYgOS42IDQ4IDBsMTY4LTk2YzE0LjQtOS42IDI0LTI0IDI0LTQzLjJ2LTE5MmMwLTE0LjQtOS42LTMxLjItMjQtNDAuOGwtMTY4LTk2Yy0xNC40LTkuNi0zMy42LTkuNi00OCAwbC0xNjUuNiA5NmMtMTQuNCA5LjYtMjQgMjQtMjQgNDMuMnY2OS42bDc2LjggNDUuNnYtNjkuNmMwLTE5LjIgOS42LTM2IDI0LTQzLjJsODguOC01Mi44YzE0LjQtOS42IDMzLjYtOS42IDQ4IDBsODguOCA1MC40YzE0LjQgOS42IDI0IDI0IDI0IDQzLjJ2MTAwLjhjMCAxOS4yLTEyIDM2LTI0IDQzLjJsLTg4LjggNTIuOGMtMTQuNCA5LjYtMzMuNiA5LjYtNDggMGwtMTEyLjgtNjkuNi03OS4yLTQzLjItMTE3LjYtNjkuNmMtMTQuNC05LjYtMzMuNi05LjYtNDggMCAwIDIuNC0xNjAuOCA5OC40LTE2My4yIDk4LjR6IiBmaWxsPSIjZmZmIi8+PC9zdmc+';
  const currencyLogo$3 = "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/info/logo.png";
  const wrappedLogo$2 = "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png";

  var polygon = {
    name: 'polygon',
    id: '0x89',
    networkId: '137',
    namespace: 'eip155',
    label: 'Polygon (POS)',
    fullName: 'Polygon (POS) Mainnet',
    logo: logo$6,
    logoBackgroundColor: '#824ee2',
    logoWhiteBackground: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0xMDkuNyA0NTljLTE2LjQgOS40LTI1LjggMjUuOC0yNS44IDQ2Ljl2MjA2LjNjMCAyMS4xIDkuNCAzNy41IDI1LjggNDYuOWwxNzUuOCAxMDMuMWMxNi40IDkuNCAzNS4yIDkuNCA1MS42IDBsMTc1LjgtMTAzLjFjMTYuNC05LjQgMjUuOC0yNS44IDI1LjgtNDYuOXYtNzIuN2wtODItNDYuOXY2OGMwIDIxLjEtOS40IDM3LjUtMjUuOCA0Ni45TDMzNyA3NjEuNGMtMTYuNCA5LjQtMzUuMiA5LjQtNTEuNiAwTDE5NCA3MDcuNWMtMTYuNC05LjQtMjUuOC0yNS44LTI1LjgtNDYuOVY1NTIuOGMwLTIxLjEgOS40LTM3LjUgMjUuOC00Ni45bDkzLjgtNTMuOWMxNC4xLTkuNCAzNS4yLTkuNCA1MS42IDBsMTE5LjUgNjggODIgNDkuMiAxMTkuNSA2OGMxNi40IDkuNCAzNS4yIDkuNCA1MS42IDBMODkwLjIgNTM0YzE2LjQtOS40IDI1LjgtMjUuOCAyNS44LTQ2LjlWMjgzLjJjMC0xNi40LTkuNC0zMi44LTI1LjgtNDIuMkw3MTIuMSAxMzcuOWMtMTYuNC05LjQtMzUuMi05LjQtNTEuNiAwTDQ4NC43IDI0MWMtMTYuNCA5LjQtMjUuOCAyNS44LTI1LjggNDYuOXY3NWw4MiA0OS4ydi03Mi43YzAtMjEuMSA5LjQtMzcuNSAyNS44LTQ2LjlsOTMuOC01Ni4zYzE2LjQtOS40IDM1LjItOS40IDUxLjYgMGw5My44IDUzLjljMTQuMSA5LjQgMjUuOCAyNS44IDI1LjggNDYuOXYxMDhjMCAyMS4xLTExLjcgMzcuNS0yNS44IDQ2LjlsLTkzLjggNTYuM2MtMTQuMSA5LjQtMzUuMiA5LjQtNTEuNiAwTDU0MSA0NzUuNGwtODItNDYuOS0xMjQuMi03Mi43Yy0xNC4xLTkuNC0zNS4yLTkuNC01MS42IDAtLjEuMS0xNzEuMiAxMDMuMi0xNzMuNSAxMDMuMnoiIGZpbGw9IiM4MjQ3ZTUiLz48L3N2Zz4=',
    currency: {
      name: 'Polygon',
      symbol: 'MATIC',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: currencyLogo$3
    },
    wrapped: {
      address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      logo: wrappedLogo$2,
    },
    stables: { // max. 2 per fiat currency
      usd: ['0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', '0xc2132D05D31c914a87C6611C10748AEb04B58e8F']
    },
    explorer: 'https://polygonscan.com',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://polygonscan.com/tx/${transaction.id || transaction}` }
      if(token) { return `https://polygonscan.com/token/${token}` }
      if(address) { return `https://polygonscan.com/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://polygon-rpc.com',
      'https://polygon.meowrpc.com',
      'https://polygon.llamarpc.com'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "MATIC", "name": "Polygon", "decimals": 18, "logo": currencyLogo$3, "type": "NATIVE"},
      {"address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", "symbol": "WMATIC", "name": "Wrapped Matic", "decimals": 18, "logo": wrappedLogo$2, "type": "20"},
      {"address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
      {"address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
      {"address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
      {"address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png", "type": "20"},
      {"address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png", "type": "20"},
      {"address": "0xf6261529C6C2fBEB313aB25cDEcD243613b40EB5", "symbol": "DEPAY", "name": "DePay", "decimals": 18, "logo": "https://depay.com/favicon.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$5 = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDF7ZmlsbDp1cmwoI1NWR0lEXzAwMDAwMDE5Njc2ODQzODE5NzI3MzAwODIwMDAwMDA1OTQ3NjMyODMzODYxMjM4OTE3Xyl9LnN0MntmaWxsOnVybCgjU1ZHSURfMDAwMDAwNjQzMjA1MjE4MTcxODM4NzM1NjAwMDAwMDMxNzkyNDIxNTkzMzkwODM5NjdfKX08L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iODE1Ljg1NiIgeTE9IjcwLjgyNCIgeDI9IjM4OC4zMzYiIHkyPSItNzQ4LjA1MiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDE5MS40MzUpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGZmYTMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkYzFmZmYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0yMzcuOSA2NTcuOWM0LjktNC45IDEyLjItNy4zIDE3LjEtNy4zaDYxOS43YzEyLjIgMCAxNy4xIDE0LjcgOS44IDIyTDc2Mi4xIDc5NS4xYy00LjkgNC45LTEyLjIgNy4zLTE3LjEgNy4zSDEyNS4zYy0xMi4yIDAtMTcuMS0xNC43LTkuOC0yNC41bDEyMi40LTEyMHoiIGZpbGw9InVybCgjU1ZHSURfMV8pIi8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8wMDAwMDE1MDgxNTQ0MzI2NzI2OTc2MDQ0MDAwMDAxMzQ2MDgyNDM3MDQwMzE3MjU0M18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNjI4LjQ4MSIgeTE9IjE2NC4xMzQiIHgyPSIyMDAuOTYyIiB5Mj0iLTY1NC43NCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDE5MS40MzUpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGZmYTMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkYzFmZmYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0yMzcuOSAyMDQuOGM0LjktNC45IDEyLjItNy4zIDE3LjEtNy4zaDYxOS43YzEyLjIgMCAxNy4xIDE0LjcgOS44IDIyTDc2Mi4xIDM0MmMtNC45IDQuOS0xMi4yIDcuMy0xNy4xIDcuM0gxMjUuM2MtMTIuMiAwLTE3LjEtMTQuNy05LjgtMjJsMTIyLjQtMTIyLjV6IiBmaWxsPSJ1cmwoI1NWR0lEXzAwMDAwMTUwODE1NDQzMjY3MjY5NzYwNDQwMDAwMDEzNDYwODI0MzcwNDAzMTcyNTQzXykiLz48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzAwMDAwMDA3NDA5ODc3MzYzMTA0OTgxNjMwMDAwMDE1MTMzNzA1NTcwNjgwMDk3NzA5XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI3MjAuOTIzIiB5MT0iMTE1Ljg3IiB4Mj0iMjkzLjQwNiIgeTI9Ii03MDMuMDAzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTkxLjQzNSkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwZmZhMyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2RjMWZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTc2Mi4xIDQzMC4xYy00LjktNC45LTEyLjItNy4zLTE3LjEtNy4zSDEyNS4zYy0xMi4yIDAtMTcuMSAxNC43LTkuOCAyMkwyMzggNTY3LjNjNC45IDQuOSAxMi4yIDcuMyAxNy4xIDcuM2g2MTkuN2MxMi4yIDAgMTcuMS0xNC43IDkuOC0yMkw3NjIuMSA0MzAuMXoiIGZpbGw9InVybCgjU1ZHSURfMDAwMDAwMDc0MDk4NzczNjMxMDQ5ODE2MzAwMDAwMTUxMzM3MDU1NzA2ODAwOTc3MDlfKSIvPjwvc3ZnPgo=';
  const currencyLogo$2 = 'https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png';

  var solana = {
    name: 'solana',
    networkId: 'solana',
    namespace: 'solana',
    label: 'Solana',
    fullName: 'Solana Mainnet Beta',
    logo: logo$5,
    logoBackgroundColor: '#000000',
    logoWhiteBackground: logo$5,
    currency: {
      name: 'Solana',
      symbol: 'SOL',
      decimals: 9,
      address: '11111111111111111111111111111111',
      logo: currencyLogo$2,
    },
    wrapped: {
      address: 'So11111111111111111111111111111111111111112',
      logo: currencyLogo$2,
    },
    stables: { // max. 2 per fiat currency
      usd: ['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB']
    },
    explorer: 'https://solscan.io',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://solscan.io/tx/${transaction.id || transaction}` }
      if(token) { return `https://solscan.io/token/${token}` }
      if(address) { return `https://solscan.io/address/${address}` }
    },
    endpoints: [
      'https://solana-mainnet.phantom.app/YBPpkkN4g91xDiAnTE9r0RcMkjg0sKUIWvAfoFVJ',
      'https://mainnet-beta.solflare.network',
      'https://swr.xnftdata.com/rpc-proxy'
    ],
    sockets: [
      'wss://solana-mainnet.phantom.app/YBPpkkN4g91xDiAnTE9r0RcMkjg0sKUIWvAfoFVJ',
      'wss://mainnet-beta.solflare.network'
    ],
    tokens: [ // only major tokens
      {"address": "11111111111111111111111111111111", "symbol": "SOL", "name": "Solana", "decimals": 9, "logo": currencyLogo$2, "type": "NATIVE"},
      {"address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://img.raydium.io/icon/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v.png", "type": "SPL"},
      {"address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "symbol": "USDT", "name": "USDT", "decimals": 6, "logo": "https://img.raydium.io/icon/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.png", "type": "SPL"},
      {"address": "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj", "symbol": "stSOL", "name": "Lido Staked SOL", "decimals": 9, "logo": "https://img.raydium.io/icon/7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj.png", "type": "SPL"},
      {"address": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263", "symbol": "BONK", "name": "BONK", "decimals": 5, "logo": "https://img.raydium.io/icon/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263.png", "type": "SPL"},
      {"address": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU", "symbol": "SAMO", "name": "Samoyed Coin", "decimals": 9, "logo": "https://img.raydium.io/icon/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU.png", "type": "SPL"},
      {"address": "DePay1miDBPWXs6PVQrdC5Vch2jemgEPaiyXLNLLa2NF", "symbol": "DEPAY", "name": "DePay", "decimals": 9, "logo": "https://depay.com/favicon.png", "type": "SPL"},
    ],
    zero: '0',
    maxInt: '340282366920938463463374607431768211455',
  };

  const logo$4 = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDF7ZmlsbDojMjEzMTQ3fTwvc3R5bGU+PHBhdGggZD0iTTkyIDkyaDgxNnY4MTZIOTJWOTJ6IiBmaWxsPSJub25lIi8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTE2NS44IDM0MC4xVjY2MGMwIDIwLjYgMTAuOCAzOS4yIDI4LjcgNDkuNmwyNzcuMSAxNTkuOWMxNy42IDEwLjEgMzkuNSAxMC4xIDU3LjEgMGwyNzcuMS0xNTkuOWMxNy42LTEwLjEgMjguNy0yOSAyOC43LTQ5LjZWMzQwLjFjMC0yMC42LTEwLjgtMzkuMi0yOC43LTQ5LjZsLTI3Ny4xLTE2MGMtMTcuNi0xMC4xLTM5LjUtMTAuMS01Ny4xIDBsLTI3Ny4xIDE2MGMtMTcuNiAxMC4xLTI4LjQgMjktMjguNCA0OS42aC0uM3oiLz48cGF0aCBkPSJtNTYwLjQgNTYyLTM5LjUgMTA4LjRjLTEgMi45LTEgNi4yIDAgOS41bDY3LjkgMTg2LjQgNzguNi00NS40LTk0LjMtMjU4LjhjLTIuMy02LTEwLjQtNi0xMi43LS4xem03OS4zLTE4Mi4xYy0yLjMtNS45LTEwLjQtNS45LTEyLjcgMGwtMzkuNSAxMDguNGMtMSAyLjktMSA2LjIgMCA5LjVMNjk4LjggODAzbDc4LjYtNDUuNC0xMzcuNy0zNzcuNHYtLjN6IiBmaWxsPSIjMTJhYWZmIi8+PHBhdGggZD0iTTUwMCAxNDIuNmMyIDAgMy45LjYgNS41IDEuNmwyOTkuNiAxNzNjMy42IDIgNS41IDUuOSA1LjUgOS44djM0NmMwIDMuOS0yLjMgNy44LTUuNSA5LjhsLTI5OS42IDE3M2MtMS42IDEtMy42IDEuNi01LjUgMS42cy0zLjktLjYtNS41LTEuNmwtMjk5LjYtMTczYy0zLjYtMi01LjUtNS45LTUuNS05LjhWMzI2LjdjMC0zLjkgMi4zLTcuOCA1LjUtOS44bDI5OS42LTE3M2MxLjYtMSAzLjYtMS42IDUuNS0xLjZ2LjN6bTAtNTAuNmMtMTAuOCAwLTIxLjIgMi42LTMxIDguMmwtMjk5LjYgMTczYy0xOS4yIDExLjEtMzEgMzEuMy0zMSA1My41djM0NmMwIDIyLjIgMTEuOCA0Mi40IDMxIDUzLjVsMjk5LjYgMTczYzkuNSA1LjUgMjAuMiA4LjIgMzEgOC4yczIxLjItMi42IDMxLTguMmwyOTkuNi0xNzNjMTkuMi0xMS4xIDMxLTMxLjMgMzEtNTMuNXYtMzQ2YzAtMjIuMi0xMS44LTQyLjQtMzEtNTMuNWwtMjk5LjktMTczYy05LjUtNS41LTIwLjItOC4yLTMxLTguMmguM3oiIGZpbGw9IiM5ZGNjZWQiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJtMzAxLjUgODAzLjIgMjcuOC03NS43IDU1LjUgNDYtNTEuOSA0Ny43LTMxLjQtMTh6Ii8+PHBhdGggZD0iTTQ3NC41IDMwMi4yaC03Ni4xYy01LjUgMC0xMC44IDMuNi0xMi43IDguOEwyMjIuOSA3NTcuNWw3OC42IDQ1LjRMNDgxLjEgMzExYzEuNi00LjYtMS42LTkuMS02LjItOS4xbC0uNC4zem0xMzMuMiAwaC03Ni4xYy01LjUgMC0xMC44IDMuNi0xMi43IDguOGwtMTg2IDUwOS44IDc4LjYgNDUuNEw2MTMuOSAzMTFjMS42LTQuNi0xLjYtOS4xLTYuMi05LjF2LjN6IiBmaWxsPSIjZmZmIi8+PC9zdmc+Cg==';

  var arbitrum = {
    name: 'arbitrum',
    id: '0xa4b1',
    networkId: '42161',
    namespace: 'eip155',
    platform: 'evm',
    label: 'Arbitrum',
    fullName: 'Arbitrum One',
    logo: logo$4,
    logoBackgroundColor: '#2b354d',
    logoWhiteBackground: logo$4,
    currency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: ethereum.currency.logo,
    },
    wrapped: {
      address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      logo: ethereum.wrapped.logo,
    },
    stables: { // max. 2 per fiat currency
      usd: ['0xaf88d065e77c8cC2239327C5EDb3A432268e5831', '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9']
    },
    explorer: 'https://arbiscan.io',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://arbiscan.io/tx/${transaction.id || transaction}` }
      if(token) { return `https://arbiscan.io/token/${token}` }
      if(address) { return `https://arbiscan.io/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://arbitrum.blockpi.network/v1/rpc/public',
      'https://arbitrum-one.publicnode.com',
      'https://endpoints.omniatech.io/v1/arbitrum/one/public'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.currency.logo, "type": "NATIVE"},
      {"address": "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
      {"address": "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8/logo.png", "type": "20"},
      {"address": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/logo.png", "type": "20"},
      {"address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1/logo.png", "type": "20"},
      {"address": "0x912CE59144191C1204E64559FE8253a0e49E6548", "symbol": "ARB", "name": "Arbitrum", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$3 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0zNTkuMSA3NTEuMWgtOTUuM2MtMjAgMC0yOS45IDAtMzYtMy44LTYuNi00LjMtMTAuNC0xMS4zLTEwLjktMTguOS0uMy03LjEgNC42LTE1LjggMTQuNC0zM2wyMzUtNDE0LjNjMTAuMS0xNy42IDE1LjEtMjYuNCAyMS40LTI5LjYgNi45LTMuNSAxNS4xLTMuNSAyMS45IDAgNi40IDMuMyAxMS40IDEyIDIxLjQgMjkuNmw0OC40IDg0LjMuMi41YzEwLjggMTguOSAxNi4zIDI4LjUgMTguNiAzOC41IDIuNiAxMC45IDIuNiAyMi42IDAgMzMuNS0yLjQgMTAuMS03LjggMTkuOC0xOC44IDM4LjlMNDU2LjIgNjk0LjlsLS4zLjVjLTEwLjggMTktMTYuMyAyOC43LTI0LjEgMzYtOC4zIDgtMTguMyAxMy43LTI5LjMgMTYuOS05LjkgMi44LTIxLjEgMi44LTQzLjQgMi44em0yNDAuMyAwaDEzNi40YzIwLjIgMCAzMC4yIDAgMzYuMy00IDYuNi00LjMgMTAuNi0xMS4zIDEwLjktMTkuMS4zLTYuOS00LjUtMTUuMi0xMy45LTMxLjZsLTEtMS43TDY5OS44IDU3OGwtLjgtMS4yYy05LjYtMTYuMy0xNC40LTI0LjUtMjAuNy0yNy42LTYuOS0zLjYtMTUtMy42LTIxLjcgMC02LjIgMy4zLTExLjMgMTEuOC0yMS4zIDI5bC02OC4xIDExNi45LS4yLjNjLTEwLjEgMTcuMi0xNSAyNS44LTE0LjUgMzIuOC41IDcuNyA0LjUgMTQuOSAxMC45IDE5IDUuNyAzLjkgMTUuOCAzLjkgMzYgMy45eiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZmYiLz48L3N2Zz4=';
  const currencyLogo$1 = "https://traderjoexyz.com/static/media/avalanche.7c81486190237e87e238c029fd746008.svg";
  const wrappedLogo$1 = "https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/logo.png";

  var avalanche = {
    name: 'avalanche',
    id: '0xa86a',
    networkId: '43114',
    namespace: 'eip155',
    platform: 'evm',
    label: 'Avalanche',
    fullName: 'Avalanche C-Chain',
    logo: logo$3,
    logoBackgroundColor: '#E84142',
    logoWhiteBackground: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yMzUuNiAyNTkuNWg1MjguOXY0ODFIMjM1LjZ2LTQ4MXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNOTI4IDUwMGMwIDIzNi40LTE5MS42IDQyOC00MjggNDI4UzcyIDczNi40IDcyIDUwMCAyNjMuNiA3MiA1MDAgNzJzNDI4IDE5MS42IDQyOCA0Mjh6TTM3OC43IDY3MC4zaC04My4xYy0xNy41IDAtMjYuMSAwLTMxLjMtMy40LTUuNy0zLjctOS4xLTkuOC05LjYtMTYuNS0uMy02LjIgNC0xMy44IDEyLjYtMjguOUw0NzIuNSAyNjBjOC43LTE1LjQgMTMuMS0yMyAxOC43LTI1LjkgNi0zIDEzLjEtMyAxOS4xIDAgNS42IDIuOCAxMCAxMC41IDE4LjcgMjUuOWw0Mi4yIDczLjYuMi40YzkuNCAxNi41IDE0LjIgMjQuOCAxNi4zIDMzLjYgMi4zIDkuNiAyLjMgMTkuNiAwIDI5LjItMi4xIDguOC02LjggMTcuMi0xNi40IDM0TDQ2My42IDYyMS4ybC0uMy41Yy05LjUgMTYuNi0xNC4zIDI1LTIxIDMxLjQtNy4zIDYuOS0xNiAxMi0yNS41IDE0LjgtOC43IDIuNC0xOC41IDIuNC0zOC4xIDIuNHptMjA5LjggMGgxMTljMTcuNiAwIDI2LjQgMCAzMS43LTMuNSA1LjctMy43IDkuMi05LjkgOS42LTE2LjYuMy02LTMuOS0xMy4zLTEyLjItMjcuNWwtLjktMS41LTU5LjYtMTAyLS43LTEuMWMtOC40LTE0LjItMTIuNi0yMS4zLTE4LTI0LjEtNi0zLTEzLjEtMy0xOSAwLTUuNSAyLjgtOS45IDEwLjMtMTguNiAyNS4zbC01OS40IDEwMi0uMi40Yy04LjcgMTUtMTMgMjIuNS0xMi43IDI4LjcuNCA2LjcgMy45IDEyLjkgOS42IDE2LjYgNSAzLjMgMTMuOCAzLjMgMzEuNCAzLjN6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2U4NDE0MiIvPjwvc3ZnPg==',
    currency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: currencyLogo$1,
    },
    wrapped: {
      address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      logo: wrappedLogo$1,
    },
    stables: { // max. 2 per fiat currency
      usd: ['0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7', '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E']
    },
    explorer: 'https://snowtrace.io',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://snowtrace.io/tx/${transaction.id || transaction}` }
      if(token) { return `https://snowtrace.io/token/${token}` }
      if(address) { return `https://snowtrace.io/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://avalanche.public-rpc.com',
      'https://avalanche.blockpi.network/v1/rpc/public',
      'https://avax.meowrpc.com'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "AVAX", "name": "Avalanche", "decimals": 18, "logo": currencyLogo$1, "type": "NATIVE"},
      {"address": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", "symbol": "WAVAX", "name": "Wrapped AVAX", "decimals": 18, "logo": wrappedLogo$1, "type": "20"},
      {"address": "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7/logo.png", "type": "20"},
      {"address": "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E/logo.png", "type": "20"},
      {"address": "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70/logo.png", "type": "20"},
      {"address": "0xC891EB4cbdEFf6e073e859e987815Ed1505c2ACD", "symbol": "EUROC", "name": "EURO Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0xC891EB4cbdEFf6e073e859e987815Ed1505c2ACD/logo.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$2 = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMzMS45IDU1Ni41YzIzLjUgMCA0Ni40LTcuOCA2NS0yMi4yTDI0OCAzODUuNGMtMzUuOSA0Ni40LTI3LjQgMTEyLjkgMTguOSAxNDguOCAxOC42IDE0IDQxLjUgMjEuOSA2NSAyMS45di40em00NDIuMy0xMDYuMWMwLTIzLjUtNy44LTQ2LjQtMjIuMi02NUw2MDMuMiA1MzQuMmM0Ni40IDM1LjkgMTEyLjkgMjcuNCAxNDguOC0xOC45IDE0LjMtMTguNiAyMi4yLTQxLjQgMjIuMi02NC45eiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Im04NDkuMiAyODguNS02NS45IDY1LjljNTIuOSA2My42IDQ0LjcgMTU4LTE4LjkgMjExLjItNTUuNiA0Ni43LTEzNi42IDQ2LjctMTkyLjIgMEw1MDAgNjM3LjdsLTcyLjEtNzIuMWMtNjMuNiA1Mi45LTE1OCA0NC43LTIxMS4yLTE4LjktNDYuNy01NS42LTQ2LjctMTM2LjYgMC0xOTIuMmwtMzMuNi0zMy42LTMyLTMyLjNDMTEyLjMgMzUyLjIgOTIgNDI1LjMgOTIgNTAwYzAgMjI1LjIgMTgyLjggNDA4IDQwOCA0MDhzNDA4LTE4Mi44IDQwOC00MDhjLjMtNzQuNC0yMC42LTE0Ny44LTU4LjgtMjExLjV6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTc5NS4xIDIxOC4zYy0xNTUuNC0xNjIuOC00MTMuNi0xNjktNTc2LjQtMTMuNy00LjkgNC42LTkuNSA5LjEtMTMuNyAxMy43LTEwLjEgMTAuOC0xOS42IDIxLjktMjguNyAzMy4zTDUwMCA1NzUuNGwzMjMuOC0zMjMuOGMtOC44LTExLjctMTguNi0yMi44LTI4LjctMzMuM3pNNTAwIDE0NS4yYzk1LjMgMCAxODQuMSAzNi45IDI1MSAxMDMuOEw1MDAgNTAwIDI0OSAyNDljNjYuNi02Ny4yIDE1NS43LTEwMy44IDI1MS0xMDMuOHoiLz48L3N2Zz4K';
  const currencyLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAAC7CAMAAAAKTh9YAAAAYFBMVEVHcEz////////////////////////////////////j++ma6qVj5nsl5lAK4zpA6mXO79aD8Zyr87uCvq0J2TkItEkOhl4EeVsKzSwLrxMNtQpjsZG42dEeuxyF2oU6wzjPwJjeAAAACnRSTlMAEUB9r9j/YO+Kf6/iMwAABD1JREFUeAHU1EESQjEMAlBIAq33v7ArV7+OLss7AZOB4IDVI/kW0nQRf+Ca7QvNwg/s7VtpGJP8oPFNybdT4aidoPHEcYZn6ymnEEOjH8KPk0zeTI+DLacpfMhpxKTGnFtDB9o8/Jisw8uxh1/OtGIrYw9Ah9pEOVWhnaoxTvWCnErR2Z3rzX59JMYOAkEYXr1gRJfIzP1PalbOpZm2aEf+tcKnCCz7bS37si/7si/7si/7si/7srvRHAE5kJHdbV4wkn076Q9RMMLu04fYnceT/An9JnhMkr19Ezwvvvee73ieOL1dfdN15yQlwas2S7vbgTn4iLfaDO0emIPPeLtgZt+AOfhcQHJGdieYg88VLG9k98AUfG7gBRu7YAo+9wpeNLEnYAY+915wkIndQ4Xn9IajgoV9hwbP6b3iqGRhF5zH537VHi3swGl87tft3tB+Ap/7Z9lFhef0z3hndmjwnP4Z32qEAs/po4//Rwao8JzeC3hiMyeACs/ppnMCUlThOf3wxjurObAKz+kHNz5arT0CNHhO5zde7NZ8UYXn9N4K2Utnt8NzOsFL+Kuz2+EJneA5nduN8bmTWsXzKqNzuyX+FZ3rL43Sud0Un/txtV7KqNY+6Hq7Kb71Gxt0W7seX5od/Z6a+8BuGASCMMwraRK4103A9z9leq+Q3zCYC+h7oy7tbr6d4zGd2zme04Ed4AEd2AEe0Kmd4wGd2jke0Kmd4wGd2jke0Kmd4wGd2jke0Kmd4wGd2Tl+B+jQzvH7j/ThnNub4Xd7Rud2gLc9pyM7wO9sz+nEDvA7e8G/0vX2IeTan/DXPdWL+cwD/hl/c3r2lT2u7XbWk31aYt9vesp9yD5Xn1ZPx7svtNtMYwfX9/hqjwAvuq8awIufZwzgxc+RZgAvfn43gBe/N5lxPLAD+sTs2HgnS53jnS51jHfC1CneKVOHeCdNneGdNnWEd+LUCd6pUwd4p04d4J06dYB3tekAL64nSAAvr+PgeGYHdI6ndkDneGoHdI4HdkAvxw/V7IsiegU8sIdSejk+VbIvyumveBY8twdQh51A8PL691x8PBf3HRD8oO33QPhR2mfD8EnZ3wTxXthXRvFe18+H8anbPsqkOVfnnJ6DF/RmPdE5vs69aQiYnoH3rXuzXukcP6jmE3C8734uxAgfgSvM4+D4RcV37SmgZ+BT6/kz0yd6KT5+kcex9bel+fDPupXP+MOs8byl6esGYfRxbDPnanG0OVf+8ODeH9Ks5f+mE50vJlp37d23EQQhFATRr6Yg/4RPuSe9o6tmIni7gN2222677bbbbrvttttuu5sw/7EP1j7kfhO6m5Wbak90Jw7d54NeGsV9jb0y1B+f+P5qpHB08XvD8M4zrq9N7pqje/L8jj/twXa8XOl4uSoe4/363RnvlyOo/LE1R8JnZfywrB7pGLY0Xa/gV5AhY9e5oJHCAAAAAElFTkSuQmCC';
  const wrappedLogo = 'data:image/png;base64,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';

  var gnosis = {
    name: 'gnosis',
    id: '0x64',
    networkId: '100',
    namespace: 'eip155',
    label: 'Gnosis',
    fullName: 'Gnosis Chain',
    logo: logo$2,
    logoBackgroundColor: '#406958',
    logoWhiteBackground: 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDB7ZmlsbDojM2U2OTU3fTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMyNC4yIDU1OS4xYzI0LjYgMCA0OC41LTguMiA2Ny45LTIzLjJMMjM2LjUgMzgwLjJjLTM3LjUgNDguNS0yOC43IDExOC4xIDE5LjggMTU1LjYgMTkuNSAxNC43IDQzLjMgMjIuOSA2Ny45IDIyLjl2LjR6TTc4Ni43IDQ0OC4xYzAtMjQuNi04LjItNDguNS0yMy4yLTY3LjlMNjA3LjkgNTM1LjhjNDguNSAzNy41IDExOC4xIDI4LjcgMTU1LjYtMTkuOCAxNS0xOS40IDIzLjItNDMuMyAyMy4yLTY3Ljl6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0ibTg2NS4yIDI3OC44LTY4LjkgNjguOWM1NS4zIDY2LjYgNDYuOCAxNjUuMi0xOS44IDIyMC44LTU4LjQgNDguOC0xNDIuNyA0OC44LTIwMSAwTDUwMCA2NDRsLTc1LjQtNzUuNGMtNjYuNiA1NS4zLTE2NS4yIDQ2LjgtMjIwLjgtMTkuOC00OC44LTU4LjQtNDguOC0xNDIuNyAwLTIwMWwtMzUuMi0zNS4yLTMzLjQtMzMuOGMtNDAuNiA2Ni42LTYxLjggMTQzLTYxLjggMjIxLjIgMCAyMzUuNSAxOTEuMSA0MjYuNiA0MjYuNiA0MjYuNlM5MjYuNiA3MzUuNSA5MjYuNiA1MDBjLjQtNzcuOC0yMS41LTE1NC42LTYxLjQtMjIxLjJ6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTgwOC42IDIwNS41QzY0Ni4xIDM1LjEgMzc2LjEgMjguNyAyMDUuOCAxOTEuMWMtNS4xIDQuOC05LjkgOS42LTE0LjMgMTQuMy0xMC42IDExLjMtMjAuNSAyMi45LTMwIDM0LjhMNTAwIDU3OC44bDMzOC42LTMzOC42Yy05LjItMTIuMi0xOS41LTIzLjgtMzAtMzQuN3pNNTAwIDEyOWM5OS43IDAgMTkyLjUgMzguNiAyNjIuNSAxMDguNUw1MDAgNTAwIDIzNy41IDIzNy41QzMwNy4yIDE2Ny4yIDQwMC4zIDEyOSA1MDAgMTI5eiIvPjwvc3ZnPgo=',
    currency: {
      name: 'xDAI',
      symbol: 'xDAI',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: currencyLogo,
    },
    wrapped: {
      address: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
      logo: wrappedLogo,
    },
    stables: { // max. 2 per fiat currency
      usd: ['0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83']
    },
    explorer: 'https://gnosisscan.io',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://gnosisscan.io/tx/${transaction.id || transaction}` }
      if(token) { return `https://gnosisscan.io/token/${token}` }
      if(address) { return `https://gnosisscan.io/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://rpc.gnosis.gateway.fm',
      'https://rpc.gnosischain.com',
      'https://gnosis.blockpi.network/v1/rpc/public'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "xDAI", "name": "xDAI", "decimals": 18, "logo": currencyLogo, "type": "NATIVE"},
      {"address": "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d", "symbol": "WXDAI", "name": "Wrapped XDAI", "decimals": 18, "logo": wrappedLogo, "type": "20"},
      {"address": "0x4ECaBa5870353805a9F068101A40E0f32ed605C6", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png', "type": "20"},
      {"address": "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png', "type": "20"},
      {"address": "0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb", "symbol": "GNO", "name": "Gnosis", "decimals": 18, "logo": 'https://cdn.sushi.com/image/upload/f_auto,c_limit,w_16,q_auto/tokens/100/0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb.jpg', "type": "20"},
      {"address": "0xD057604A14982FE8D88c5fC25Aac3267eA142a08", "symbol": "HOPR", "name": "HOPR", "decimals": 18, "logo": 'https://hoprnet.org/assets/icons/hopr_icon.svg', "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$1 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik00ODcuMSAzOTUuN2MtNS4yLTE1LjgtMTMuMi0zMS43LTI2LjQtNDIuMi0xMy4yLTEwLjUtMjYuNC0yMS4yLTQ0LjktMjYuNC0xOC41LTUuMi0zNy04LTU4LjEtOC00Ny41IDAtODcuMSAxMC41LTExNi4xIDM0LjQtMjkgMjMuOC00Ny41IDU4LjEtNjAuNyAxMDIuOS0yLjYgMTUuOC04IDI5LTEwLjUgNDQuOS0yLjYgMTMuMi01LjIgMjktOCA0Mi4yLTIuNiAyMy44LTIuNiA0Mi4yIDIuNiA2MC43IDUuMiAxNS44IDEzLjIgMzEuNyAyNi40IDQyLjIgMTMuMiAxMC41IDI2LjQgMjEuMiA0NC45IDI2LjQgMTguNCA1LjIgMzcgOCA1OC4xIDggNDcuNSAwIDg3LjEtMTAuNSAxMTYuMS0zNC40czQ3LjUtNTguMSA2MC43LTEwMi45YzIuNi0xMy4yIDUuMi0yOSAxMC41LTQyLjIgMi42LTEzLjIgNS4yLTI5IDgtNDQuOSAyLjgtMjMuOCAyLjgtNDQuOC0yLjYtNjAuN3ptLTkyLjQgNjAuOGMtMi42IDEzLjItNS4yIDI2LjQtOCAzOS41LTIuNiAxMy4yLTUuMiAyNi40LTEwLjUgNDIuMi01LjIgMjMuOC0xNS44IDM5LjUtMjkgNTAuMi0xMy4yIDEwLjUtMjkgMTUuOC00Ny41IDE1LjgtMTguNCAwLTMxLjctNS4yLTM5LjUtMTUuOC04LTEwLjUtMTAuNS0yOS01LjItNTAuMiAyLjYtMTUuOCA1LjItMjkgOC00Mi4yIDIuNi0xMy4yIDUuMi0yNi40IDEwLjUtMzkuNSA1LjItMjMuOCAxNS44LTM5LjUgMjktNTAuMiAxMy4yLTEwLjUgMjktMTUuOCA0Ny41LTE1LjggMTguNCAwIDMxLjcgNS4yIDM5LjUgMTUuOCA3LjkgMTAuNiAxMC41IDI2LjMgNS4yIDUwLjJ6bTQ0MC45LTY4LjZjLTUuMi0xNS44LTEzLjItMjYuNC0yMy44LTM3cy0yMy44LTE1LjgtNDIuMi0yMS4yYy0xNS44LTUuMi0zNC40LTgtNTUuNC04SDU3OS43Yy0yLjYgMC01LjIgMC0xMC41IDIuNi0yLjYgMi42LTUuMiA1LjItNS4yIDhsLTY4LjYgMzI3LjRjMCAyLjYgMCA4IDIuNiA4IDIuNiAyLjYgNS4yIDIuNiA4IDIuNmg2OC42YzIuNiAwIDggMCAxMC41LTIuNnM1LjItNS4yIDUuMi04bDIzLjgtMTEwLjloNjguNmM0Mi4yIDAgNzYuNi04IDEwMi45LTI2LjQgMjYuNC0xOC40IDQyLjItNDcuNSA1MC4yLTg0LjYgNS4xLTE4LjQgNS4xLTM2LjctLjItNDkuOXpNNzQzLjEgNDM4Yy0yLjYgMTUuOC0xMC41IDI2LjQtMjEuMiAzNC40cy0yMy44IDEwLjUtMzcgMTAuNWgtNTguMWwxOC40LTg5LjdoNjAuN2MxMy4yIDAgMjEuMiAyLjYgMjYuNCA1LjIgNS4yIDUuMiAxMC41IDEwLjUgMTAuNSAxNS44IDMgNS4yIDMgMTMuMi4zIDIzLjh6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==';

  var optimism = {
    name: 'optimism',
    id: '0xa',
    networkId: '10',
    namespace: 'eip155',
    label: 'Optimism',
    fullName: 'Optimism',
    logo: logo$1,
    logoBackgroundColor: '#FF0420',
    logoWhiteBackground: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxjaXJjbGUgY3g9IjUwMCIgY3k9IjUwMCIgcj0iMzk2LjYiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNTAwIDg5Ni42YzIxOS4xIDAgMzk2LjYtMTc3LjYgMzk2LjYtMzk2LjZTNzE5LjEgMTAzLjQgNTAwIDEwMy40IDEwMy40IDI4MC45IDEwMy40IDUwMCAyODAuOSA4OTYuNiA1MDAgODk2LjZ6TTM1MC43IDYwOWMxMC45IDMuNCAyMi42IDUuMSAzNS4zIDUuMSAyOS4xIDAgNTIuNC02LjcgNjkuNi0yMC4yIDE3LjMtMTMuNyAyOS4zLTM0LjMgMzYuMi02MS44IDItOC42IDMuOS0xNy4zIDUuNy0yNS45IDItOC42IDMuNy0xNy40IDUuMS0yNi4yIDIuNC0xMy43IDItMjUuNi0xLjItMzUuOS0zLTEwLjItOC4zLTE4LjktMTYtMjUuOS03LjQtNy0xNi42LTEyLjMtMjcuNC0xNS43LTEwLjctMy42LTIyLjMtNS40LTM1LTUuNC0yOS4zIDAtNTIuNyA3LTY5LjkgMjEuMXMtMjkuMiAzNC43LTM1LjkgNjEuOGMtMiA4LjgtNCAxNy42LTYgMjYuMi0xLjggOC42LTMuNSAxNy4zLTUuMSAyNS45LTIuMiAxMy43LTEuOCAyNS42IDEuMiAzNS45IDMuMiAxMC4yIDguNSAxOC44IDE2IDI1LjYgNy40IDYuOCAxNi42IDExLjkgMjcuNCAxNS40em02Ny44LTQ4Yy04LjIgNi40LTE3LjggOS42LTI4LjYgOS42LTExLjEgMC0xOS0zLjItMjMuOC05LjYtNC44LTYuNC02LTE2LjctMy42LTMwLjcgMS42LTguOCAzLjItMTcuMiA0LjgtMjUgMS44LTcuOCAzLjgtMTYgNi0yNC40IDMuNC0xNC4xIDkuMS0yNC4zIDE3LjItMzAuNyA4LjItNi40IDE3LjgtOS42IDI4LjYtOS42czE4LjggMy4yIDIzLjggOS42IDYuMiAxNi43IDMuNiAzMC43Yy0xLjQgOC40LTMgMTYuNi00LjggMjQuNC0xLjYgNy44LTMuNSAxNi4yLTUuNyAyNS0zLjQgMTQtOS4yIDI0LjMtMTcuNSAzMC43em05MS43IDQ4YzEuMiAxLjQgMi44IDIuMSA0LjggMi4xaDQxYzIuMiAwIDQuMS0uNyA1LjctMi4xIDEuOC0xLjQgMi45LTMuMiAzLjMtNS40bDEzLjktNjZoNDAuN2MyNS45IDAgNDYuNS01LjUgNjEuOC0xNi42IDE1LjUtMTEuMSAyNS43LTI4LjEgMzAuNy01MS4yIDIuNC0xMS43IDIuMy0yMS44LS4zLTMwLjQtMi42LTguOC03LjItMTYuMi0xMy45LTIyLTYuNi01LjgtMTUtMTAuMS0yNS0xMy05LjgtMi44LTIwLjktNC4yLTMzLjItNC4yaC04MC4yYy0yIDAtMy45LjctNS43IDIuMS0xLjggMS40LTIuOSAzLjItMy4zIDUuNEw1MDkgNjAzLjVjLS40IDIuMiAwIDQgMS4yIDUuNXptMTExLjItMTEzLjFoLTM0LjdsMTEuOC01NGgzNi4yYzcuMiAwIDEyLjYgMS4yIDE2IDMuNiAzLjYgMi40IDUuNyA1LjYgNi4zIDkuNi42IDQgLjQgOC42LS42IDEzLjktMiA5LTYuMyAxNS44LTEzIDIwLjItNi40IDQuNS0xMy44IDYuNy0yMiA2Ljd6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmMDQyMCIvPjwvc3ZnPg==',
    currency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: ethereum.currency.logo,
    },
    wrapped: {
      address: '0x4200000000000000000000000000000000000006',
      logo: ethereum.wrapped.logo,
    },
    stables: { // max. 2 per fiat currency
      usd: ['0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', '0x7F5c764cBc14f9669B88837ca1490cCa17c31607']
    },
    explorer: 'https://optimistic.etherscan.io',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://optimistic.etherscan.io/tx/${transaction.id || transaction}` }
      if(token) { return `https://optimistic.etherscan.io/token/${token}` }
      if(address) { return `https://optimistic.etherscan.io/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://optimism.blockpi.network/v1/rpc/public',
      'https://optimism.meowrpc.com',
      'https://optimism.publicnode.com'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.currency.logo, "type": "NATIVE"},
      {"address": "0x4200000000000000000000000000000000000006", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
      {"address": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x94b008aA00579c1307B0EF2c499aD98a8ce58e58/logo.png', "type": "20"},
      {"address": "0x7F5c764cBc14f9669B88837ca1490cCa17c31607", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x7F5c764cBc14f9669B88837ca1490cCa17c31607/logo.png', "type": "20"},
      {"address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png', "type": "20"},
      {"address": "0x4200000000000000000000000000000000000042", "symbol": "OP", "name": "Optimism", "decimals": 18, "logo": 'https://user-images.githubusercontent.com/1300064/219575413-d7990d69-1d21-44ef-a2b1-e9c682c79802.svg', "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik00OTguNiA4NDJDNjg4IDg0MiA4NDIgNjg4LjkgODQyIDQ5OS41UzY4OCAxNTcgNDk4LjYgMTU3QzMxOSAxNTcgMTcxLjIgMjk1LjEgMTU3IDQ3MC4zaDQ1My4xdjU3LjVIMTU3QzE3MiA3MDMuOSAzMTkgODQyIDQ5OC42IDg0MnoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=';

  var base = {
    name: 'base',
    id: '0x2105',
    networkId: '8453',
    namespace: 'eip155',
    label: 'Base',
    fullName: 'Base',
    logo,
    logoBackgroundColor: '#0052FF',
    logoWhiteBackground: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik00OTguOSA4NDVDNjkwLjEgODQ1IDg0NSA2OTAuMyA4NDUgNDk5LjVTNjkwLjEgMTU0IDQ5OC45IDE1NEMzMTcuNiAxNTQgMTY4LjggMjkzLjMgMTU0IDQ3MC41aDQ1Ny40djU4LjFIMTU0QzE2OC44IDcwNS44IDMxNy42IDg0NSA0OTguOSA4NDV6IiBmaWxsPSIjMDA1MmZmIi8+PC9zdmc+',
    currency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: ethereum.currency.logo,
    },
    wrapped: {
      address: '0x4200000000000000000000000000000000000006',
      logo: ethereum.wrapped.logo,
    },
    stables: { // max. 2 per fiat currency
      usd: ['0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA']
    },
    explorer: 'https://basescan.org',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://basescan.org/tx/${transaction.id || transaction}` }
      if(token) { return `https://basescan.org/token/${token}` }
      if(address) { return `https://basescan.org/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://base.blockpi.network/v1/rpc/public',
      'https://base.meowrpc.com',
      'https://mainnet.base.org'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.currency.logo, "type": "NATIVE"},
      {"address": "0x4200000000000000000000000000000000000006", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
      {"address": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://ethereum-optimism.github.io/data/USDC/logo.png", "type": "20"},
      {"address": "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA", "symbol": "USDbC", "name": "USD Base Coin", "decimals": 6, "logo": "https://ethereum-optimism.github.io/data/USDC/logo.png", "type": "20"},
      {"address": "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const all = [
    ethereum,
    bsc,
    polygon,
    solana,
    fantom,
    arbitrum,
    avalanche,
    gnosis,
    optimism,
    base,
  ];

  const findById = function (id) {
    let fixedId = id;
    if (fixedId.match('0x0')) {
      // remove leading 0
      fixedId = fixedId.replace(/0x0+/, '0x');
    }
    let found = all.find((blockchain) => {
      return blockchain.id && blockchain.id.toLowerCase() == fixedId.toLowerCase()
    });
    return found
  };

  const findByNetworkId = function (networkId) {
    networkId = networkId.toString();
    let found = all.find((blockchain) => {
      return blockchain.networkId == networkId
    });
    return found
  };

  const findByName = function (name) {
    return all.find((blockchain) => {
      return blockchain.name == name
    })
  };

  var index = {
    ethereum,
    bsc,
    polygon,
    solana,
    fantom,
    arbitrum,
    avalanche,
    gnosis,
    optimism,
    base,
    
    all,
    findById,
    findByNetworkId,
    findByName,
  };

  return index;

})));
