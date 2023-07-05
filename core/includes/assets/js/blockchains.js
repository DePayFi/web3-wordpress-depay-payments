(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Web3Blockchains = factory());
}(this, (function () { 'use strict';

  const logo$8 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOTIgMTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIgMTkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIGZpbGw9IiNGMEI5MEIiIGQ9Ik01NCw0MS4xbDQyLTI0LjJsNDIsMjQuMmwtMTUuNCw4LjlMOTYsMzQuOUw2OS40LDUwTDU0LDQxLjF6IE0xMzgsNzEuN2wtMTUuNC04LjlMOTYsNzhMNjkuNCw2Mi43bC0xNS40LDl2MTgKCUw4MC42LDEwNXYzMC41bDE1LjQsOWwxNS40LTlWMTA1TDEzOCw4OS43VjcxLjd6IE0xMzgsMTIwLjN2LTE4bC0xNS40LDguOXYxOEMxMjIuNiwxMjkuMSwxMzgsMTIwLjMsMTM4LDEyMC4zeiBNMTQ4LjksMTI2LjQKCWwtMjYuNiwxNS4zdjE4bDQyLTI0LjJWODdsLTE1LjQsOUMxNDguOSw5NiwxNDguOSwxMjYuNCwxNDguOSwxMjYuNHogTTEzMy41LDU2LjRsMTUuNCw5djE4bDE1LjQtOXYtMThsLTE1LjQtOUwxMzMuNSw1Ni40CglMMTMzLjUsNTYuNHogTTgwLjYsMTQ4LjN2MThsMTUuNCw5bDE1LjQtOXYtMThMOTYsMTU3LjFMODAuNiwxNDguM3ogTTU0LDEyMC4zbDE1LjQsOXYtMTguMUw1NCwxMDIuM0w1NCwxMjAuM0w1NCwxMjAuM3oKCSBNODAuNiw1Ni40bDE1LjQsOWwxNS40LTlMOTYsNDcuNUM5Niw0Ny40LDgwLjYsNTYuNCw4MC42LDU2LjRMODAuNiw1Ni40eiBNNDMuMSw2NS40bDE1LjQtOWwtMTUuNC05bC0xNS40LDl2MThsMTUuNCw5TDQzLjEsNjUuNAoJTDQzLjEsNjUuNHogTTQzLjEsOTUuOUwyNy43LDg3djQ4LjVsNDIsMjQuMnYtMThsLTI2LjYtMTUuM1Y5NS45TDQzLjEsOTUuOXoiLz4KPC9zdmc+Cg==';
  const wrappedLogo$4 = "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png";

  var bsc = {
    name: 'bsc',
    id: '0x38',
    networkId: '56',
    namespace: 'eip155',
    platform: 'evm',
    label: 'BNB Smart Chain',
    fullName: 'BNB Smart Chain Mainnet',
    logo: logo$8,
    currency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: logo$8
    },
    wrapped: {
      address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logo: wrappedLogo$4
    },
    stables: { // max. 3 per fiat currency
      usd: ['0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', '0x55d398326f99059fF775485246999027B3197955', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56']
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
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "BNB", "name": "Binance Coin", "decimals": 18, "logo": logo$8, "type": "NATIVE"},
      {"address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "symbol": "WBNB", "name": "Wrapped BNB", "decimals": 18, "logo": wrappedLogo$4, "type": "20"},
      {"address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "symbol": "BUSD", "name": "BUSD Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png", "type": "20"},
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

  const logo$7 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiCgkgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjgzLjUgMjgzLjUiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjgzLjUgMjgzLjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjMzQzNDM0IiBkPSJNMTQxLjcsMjUuOWwtMS41LDUuMnYxNTMuM2wxLjUsMS41bDcxLjItNDIuMUwxNDEuNywyNS45eiIvPgoJCTxwYXRoIGZpbGw9IiM4QzhDOEMiIGQ9Ik0xNDEuNywyNS45TDcwLjYsMTQzLjhsNzEuMSw0Mi4xdi03NC40VjI1Ljl6Ii8+CgkJPHBhdGggZmlsbD0iIzNDM0MzQiIgZD0iTTE0MS43LDE5OS40bC0wLjgsMS4xdjU0LjZsMC44LDIuNWw3MS4yLTEwMC4zTDE0MS43LDE5OS40eiIvPgoJCTxwYXRoIGZpbGw9IiM4QzhDOEMiIGQ9Ik0xNDEuNywyNTcuNnYtNTguMmwtNzEuMS00Mi4xTDE0MS43LDI1Ny42eiIvPgoJCTxwYXRoIGZpbGw9IiMxNDE0MTQiIGQ9Ik0xNDEuNywxODUuOWw3MS4yLTQyLjFsLTcxLjItMzIuM1YxODUuOXoiLz4KCQk8cGF0aCBmaWxsPSIjMzkzOTM5IiBkPSJNNzAuNiwxNDMuOGw3MS4xLDQyLjF2LTc0LjRMNzAuNiwxNDMuOHoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K';
  const wrappedLogo$3 = "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png";

  var ethereum = {
    name: 'ethereum',
    id: '0x1',
    networkId: '1',
    namespace: 'eip155',
    platform: 'evm',
    label: 'Ethereum',
    fullName: 'Ethereum Mainnet',
    logo: logo$7,
    currency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: logo$7
    },
    wrapped: {
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      logo: wrappedLogo$3
    },
    stables: { // max. 3 per fiat currency
      usd: ['0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', '0xdAC17F958D2ee523a2206206994597C13D831ec7', '0x6B175474E89094C44Da98b954EedeAC495271d0F']
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
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": logo$7, "type": "NATIVE"},
      {"address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": wrappedLogo$3, "type": "20"},
      {"address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
      {"address": "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c", "symbol": "EUROC", "name": "EURO Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c/logo.png", "type": "20"},
      {"address": "0xdAC17F958D2ee523a2206206994597C13D831ec7", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
      {"address": "0x6B175474E89094C44Da98b954EedeAC495271d0F", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
      {"address": "0x853d955aCEf822Db058eb8505911ED77F175b99e", "symbol": "FRAX", "name": "Frax", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x853d955aCEf822Db058eb8505911ED77F175b99e/logo.png", "type": "20"},
      {"address": "0x8E870D67F660D95d5be530380D0eC0bd388289E1", "symbol": "USDP", "name": "Pax Dollar", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x8E870D67F660D95d5be530380D0eC0bd388289E1/logo.png", "type": "20"},
      {"address": "0x956F47F50A910163D8BF957Cf5846D573E7f87CA", "symbol": "FEI", "name": "Fei USD", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x956F47F50A910163D8BF957Cf5846D573E7f87CA/logo.png", "type": "20"},
      {"address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png", "type": "20"},
      {"address": "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb", "symbol": "DEPAY", "name": "DePay", "decimals": 18, "logo": "https://depay.com/favicon.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$6 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTkyIDE5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTkyIDE5MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iY2lyY2xlIj4KCTxnIGlkPSJGYW50b20tY2lyY2xlIj4KCQk8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsUnVsZT0iZXZlbm9kZCIgY2xpcFJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMxOTY5RkYiIGNsYXNzPSJzdDAiIGN4PSI5NiIgY3k9Ijk2IiByPSI4MC40Ii8+CgkJPHBhdGggaWQ9IlNoYXBlIiBmaWxsPSIjRkZGRkZGIiBkPSJNOTEuMSw0MS4yYzIuNy0xLjQsNi44LTEuNCw5LjUsMGwyNy42LDE0LjZjMS42LDAuOSwyLjUsMi4xLDIuNywzLjVoMHY3My4zCgkJCWMwLDEuNC0wLjksMi45LTIuNywzLjhsLTI3LjYsMTQuNmMtMi43LDEuNC02LjgsMS40LTkuNSwwbC0yNy42LTE0LjZjLTEuOC0wLjktMi42LTIuNC0yLjctMy44YzAtMC4xLDAtMC4zLDAtMC40bDAtNzIuNAoJCQljMC0wLjEsMC0wLjIsMC0wLjNsMC0wLjJoMGMwLjEtMS4zLDEtMi42LDIuNi0zLjVMOTEuMSw0MS4yeiBNMTI2LjYsOTkuOWwtMjYsMTMuN2MtMi43LDEuNC02LjgsMS40LTkuNSwwTDY1LjIsMTAwdjMyLjMKCQkJbDI1LjksMTMuNmMxLjUsMC44LDMuMSwxLjYsNC43LDEuN2wwLjEsMGMxLjUsMCwzLTAuOCw0LjYtMS41bDI2LjItMTMuOVY5OS45eiBNNTYuNSwxMzAuOWMwLDIuOCwwLjMsNC43LDEsNgoJCQljMC41LDEuMSwxLjMsMS45LDIuOCwyLjlsMC4xLDAuMWMwLjMsMC4yLDAuNywwLjQsMS4xLDAuN2wwLjUsMC4zbDEuNiwwLjlsLTIuMiwzLjdsLTEuNy0xLjFsLTAuMy0wLjJjLTAuNS0wLjMtMC45LTAuNi0xLjMtMC44CgkJCWMtNC4yLTIuOC01LjctNS45LTUuNy0xMi4zbDAtMC4ySDU2LjV6IE05My44LDgwLjVjLTAuMiwwLjEtMC40LDAuMS0wLjYsMC4yTDY1LjYsOTUuM2MwLDAtMC4xLDAtMC4xLDBsMCwwbDAsMGwwLjEsMGwyNy42LDE0LjYKCQkJYzAuMiwwLjEsMC40LDAuMiwwLjYsMC4yVjgwLjV6IE05OC4yLDgwLjV2MjkuOGMwLjItMC4xLDAuNC0wLjEsMC42LTAuMmwyNy42LTE0LjZjMCwwLDAuMSwwLDAuMSwwbDAsMGwwLDBsLTAuMSwwTDk4LjgsODAuNwoJCQlDOTguNiw4MC42LDk4LjQsODAuNSw5OC4yLDgwLjV6IE0xMjYuNiw2NC40bC0yNC44LDEzbDI0LjgsMTNWNjQuNHogTTY1LjIsNjQuNHYyNi4xbDI0LjgtMTNMNjUuMiw2NC40eiBNOTguNyw0NS4xCgkJCWMtMS40LTAuOC00LTAuOC01LjUsMEw2NS42LDU5LjdjMCwwLTAuMSwwLTAuMSwwbDAsMGwwLDBsMC4xLDBsMjcuNiwxNC42YzEuNCwwLjgsNCwwLjgsNS41LDBsMjcuNi0xNC42YzAsMCwwLjEsMCwwLjEsMGwwLDBsMCwwCgkJCWwtMC4xLDBMOTguNyw0NS4xeiBNMTMwLjcsNDYuNWwxLjcsMS4xbDAuMywwLjJjMC41LDAuMywwLjksMC42LDEuMywwLjhjNC4yLDIuOCw1LjcsNS45LDUuNywxMi4zbDAsMC4yaC00LjNjMC0yLjgtMC4zLTQuNy0xLTYKCQkJYy0wLjUtMS4xLTEuMy0xLjktMi44LTIuOWwtMC4xLTAuMWMtMC4zLTAuMi0wLjctMC40LTEuMS0wLjdsLTAuNS0wLjNsLTEuNi0wLjlMMTMwLjcsNDYuNXoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K';

  var fantom = {
    name: 'fantom',
    id: '0xFA',
    networkId: '250',
    namespace: 'eip155',
    label: 'Fantom',
    fullName: 'Fantom Opera',
    logo: logo$6,
    currency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: logo$6
    },
    wrapped: {
      address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logo: logo$6
    },
    stables: { // max. 3 per fiat currency
      usd: ['0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', '0x049d68029688eAbF473097a2fC38ef61633A3C7A', '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E']
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
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "FTM", "name": "Fantom", "decimals": 18, "logo": logo$6, "type": "NATIVE"},
      {"address": "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83", "symbol": "WFTM", "name": "Wrapped Fantom", "decimals": 18, "logo": logo$6, "type": "20"},
      {"address": "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://assets.spooky.fi/tokens/USDC.png", "type": "20"},
      {"address": "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://assets.spooky.fi/tokens/DAI.png", "type": "20"},
      {"address": "0x049d68029688eAbF473097a2fC38ef61633A3C7A", "symbol": "fUSDT", "name": "Frapped USDT", "decimals": 6, "logo": "https://assets.spooky.fi/tokens/fUSDT.png", "type": "20"},
      {"address": "0x74b23882a30290451A17c44f4F05243b6b58C76d", "symbol": "ETH", "name": "Ethereum", "decimals": 18, "logo": "https://assets.spooky.fi/tokens/wETH.png", "type": "20"},
      {"address": "0x321162Cd933E2Be498Cd2267a90534A804051b11", "symbol": "BTC", "name": "Bitcoin", "decimals": 8, "logo": "https://assets.spooky.fi/tokens/wBTC.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$5 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4MjQ3RTU7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNiwyMWMtMC43LDAuNC0xLjEsMS4xLTEuMSwydjguOGMwLDAuOSwwLjQsMS42LDEuMSwybDcuNSw0LjRjMC43LDAuNCwxLjUsMC40LDIuMiwwbDcuNS00LjQKCWMwLjctMC40LDEuMS0xLjEsMS4xLTJ2LTMuMWwtMy41LTJ2Mi45YzAsMC45LTAuNCwxLjYtMS4xLDJsLTQsMi4zYy0wLjcsMC40LTEuNSwwLjQtMi4yLDBsLTMuOS0yLjNjLTAuNy0wLjQtMS4xLTEuMS0xLjEtMlYyNQoJYzAtMC45LDAuNC0xLjYsMS4xLTJsNC0yLjNjMC42LTAuNCwxLjUtMC40LDIuMiwwbDUuMSwyLjlsMy41LDIuMWw1LjEsMi45YzAuNywwLjQsMS41LDAuNCwyLjIsMGw3LjYtNC40YzAuNy0wLjQsMS4xLTEuMSwxLjEtMgoJdi04LjdjMC0wLjctMC40LTEuNC0xLjEtMS44bC03LjYtNC40Yy0wLjctMC40LTEuNS0wLjQtMi4yLDBMMjIsMTEuN2MtMC43LDAuNC0xLjEsMS4xLTEuMSwydjMuMmwzLjUsMi4xdi0zLjFjMC0wLjksMC40LTEuNiwxLjEtMgoJbDQtMi40YzAuNy0wLjQsMS41LTAuNCwyLjIsMGw0LDIuM2MwLjYsMC40LDEuMSwxLjEsMS4xLDJ2NC42YzAsMC45LTAuNSwxLjYtMS4xLDJsLTQsMi40Yy0wLjYsMC40LTEuNSwwLjQtMi4yLDBsLTUuMS0zLjFsLTMuNS0yCglsLTUuMy0zLjFjLTAuNi0wLjQtMS41LTAuNC0yLjIsMEMxMy40LDE2LjYsNi4xLDIxLDYsMjF6Ii8+Cjwvc3ZnPgo=';
  const wrappedLogo$2 = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png";

  var polygon = {
    name: 'polygon',
    id: '0x89',
    networkId: '137',
    namespace: 'eip155',
    label: 'Polygon (POS)',
    fullName: 'Polygon (POS) Mainnet',
    logo: logo$5,
    currency: {
      name: 'Polygon',
      symbol: 'MATIC',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: logo$5
    },
    wrapped: {
      address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      logo: wrappedLogo$2
    },
    stables: { // max. 3 per fiat currency
      usd: ['0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063']
    },
    explorer: 'https://polygonscan.com',
    explorerUrlFor: ({ transaction, token, address })=>{
      if(transaction) { return `https://polygonscan.com/tx/${transaction.id || transaction}` }
      if(token) { return `https://polygonscan.com/token/${token}` }
      if(address) { return `https://polygonscan.com/address/${address}` }
    },
    endpoints: [ // make sure provider supports batch size of 99 batch requests!
      'https://polygon-rpc.com',
      'https://poly-rpc.gateway.pokt.network',
      'https://polygon.llamarpc.com'
    ],
    tokens: [ // only major tokens
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "MATIC", "name": "Polygon", "decimals": 18, "logo": logo$5, "type": "NATIVE"},
      {"address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", "symbol": "WMATIC", "name": "Wrapped Matic", "decimals": 18, "logo": wrappedLogo$2, "type": "20"},
      {"address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png", "type": "20"},
      {"address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
      {"address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
      {"address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1", "symbol": "miMATIC", "name": "miMATIC", "decimals": 18, "logo": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png", "type": "20"},
      {"address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
      {"address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png", "type": "20"},
      {"address": "0xf6261529C6C2fBEB313aB25cDEcD243613b40EB5", "symbol": "DEPAY", "name": "DePay", "decimals": 18, "logo": "https://depay.com/favicon.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$4 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNPTEFOQV9TVkdJRF8xIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM1LjU5NzQiIHkxPSI3NzIuOTI3NyIgeDI9IjE4LjE0MjIiIHkyPSI4MDYuMzYxNiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDAgLTc2NS43NjUpIj4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEZGQTMiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzFGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggZmlsbD0idXJsKCNTT0xBTkFfU1ZHSURfMSkiIGQ9Ik0xMiwyOS4xYzAuMi0wLjIsMC41LTAuMywwLjctMC4zSDM4YzAuNSwwLDAuNywwLjYsMC40LDAuOWwtNSw1Yy0wLjIsMC4yLTAuNSwwLjMtMC43LDAuM0g3LjQKCUM2LjksMzUsNi43LDM0LjQsNywzNEwxMiwyOS4xeiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzAwMDAwMTYwODY5NzIyMjI5NDY0Mzk5NzMwMDAwMDA5NDA3MDIxNTc4MjQ4MDg3NzExXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNy45NTk1IiB5MT0iNzY5LjEyNDQiIHgyPSIxMC41MDQzIiB5Mj0iODAyLjU1ODIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIC03NjUuNzY1KSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBGRkEzIi8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojREMxRkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMDAwMDAxNjA4Njk3MjIyMjk0NjQzOTk3MzAwMDAwMDk0MDcwMjE1NzgyNDgwODc3MTFfKTsiIGQ9Ik0xMiwxMC42YzAuMi0wLjIsMC41LTAuMywwLjctMC4zSDM4CgljMC41LDAsMC43LDAuNiwwLjQsMC45bC01LDVjLTAuMiwwLjItMC41LDAuMy0wLjcsMC4zSDcuNGMtMC41LDAtMC43LTAuNi0wLjQtMC45TDEyLDEwLjZ6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMDAwMDAxMzkyODMyMTczNzg2NTYwOTQ4NjAwMDAwMDM2OTQ4OTUzNzkwNzgxMTY3ODJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjMxLjc0MDYiIHkxPSI3NzEuMDk4NSIgeDI9IjE0LjI4NTUiIHkyPSI4MDQuNTMyMyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDAgLTc2NS43NjUpIj4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEZGQTMiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzFGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8wMDAwMDEzOTI4MzIxNzM3ODY1NjA5NDg2MDAwMDAwMzY5NDg5NTM3OTA3ODExNjc4Ml8pOyIgZD0iTTMzLjQsMTkuOGMtMC4yLTAuMi0wLjUtMC4zLTAuNy0wLjNINy40CgljLTAuNSwwLTAuNywwLjYtMC40LDAuOWw1LDVjMC4yLDAuMiwwLjUsMC4zLDAuNywwLjNIMzhjMC41LDAsMC43LTAuNiwwLjQtMC45TDMzLjQsMTkuOHoiLz4KPC9zdmc+Cg==';

  var solana = {
    name: 'solana',
    networkId: 'mainnetBeta',
    namespace: 'solana',
    label: 'Solana',
    fullName: 'Solana Mainnet Beta',
    logo: logo$4,
    currency: {
      name: 'Solana',
      symbol: 'SOL',
      decimals: 9,
      address: '11111111111111111111111111111111',
      logo: logo$4
    },
    wrapped: {
      address: 'So11111111111111111111111111111111111111112',
      logo: logo$4
    },
    stables: { // max. 3 per fiat currency
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
      'https://solana-mainnet.rpc.extrnode.com'
    ],
    rpc: 'https://api.mainnet-beta.solana.com',
    tokens: [ // only major tokens
      {"address": "11111111111111111111111111111111", "symbol": "SOL", "name": "Solana", "decimals": 9, "logo": logo$4, "type": "NATIVE"},
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

  const logo$3 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO30KCS5zdDF7ZmlsbDojMjEzMTQ3O30KCS5zdDJ7ZmlsbDojMTJBQUZGO30KCS5zdDN7ZmlsbDojOURDQ0VEO30KCS5zdDR7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgoJPGcgaWQ9Il8yNDA1NTg4NDc3MjMyIj4KCQk8cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIj48L3JlY3Q+CgkJPGc+CgkJCTxnPgoJCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTIyNiw3NjB2OTgwYzAsNjMsMzMsMTIwLDg4LDE1Mmw4NDksNDkwYzU0LDMxLDEyMSwzMSwxNzUsMGw4NDktNDkwYzU0LTMxLDg4LTg5LDg4LTE1MlY3NjAgICAgICBjMC02My0zMy0xMjAtODgtMTUybC04NDktNDkwYy01NC0zMS0xMjEtMzEtMTc1LDBMMzE0LDYwOGMtNTQsMzEtODcsODktODcsMTUySDIyNnoiPjwvcGF0aD4KCQkJCTxnPgoJCQkJCTxnPgoJCQkJCQk8Zz4KCQkJCQkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNDM1LDE0NDBsLTEyMSwzMzJjLTMsOS0zLDE5LDAsMjlsMjA4LDU3MWwyNDEtMTM5bC0yODktNzkzQzE0NjcsMTQyMiwxNDQyLDE0MjIsMTQzNSwxNDQweiI+PC9wYXRoPgoJCQkJCQk8L2c+CgkJCQkJCTxnPgoJCQkJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE2NzgsODgyYy03LTE4LTMyLTE4LTM5LDBsLTEyMSwzMzJjLTMsOS0zLDE5LDAsMjlsMzQxLDkzNWwyNDEtMTM5TDE2NzgsODgzVjg4MnoiPjwvcGF0aD4KCQkJCQkJPC9nPgoJCQkJCTwvZz4KCQkJCTwvZz4KCQkJCTxnPgoJCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xMjUwLDE1NWM2LDAsMTIsMiwxNyw1bDkxOCw1MzBjMTEsNiwxNywxOCwxNywzMHYxMDYwYzAsMTItNywyNC0xNywzMGwtOTE4LDUzMGMtNSwzLTExLDUtMTcsNSAgICAgICBzLTEyLTItMTctNWwtOTE4LTUzMGMtMTEtNi0xNy0xOC0xNy0zMFY3MTljMC0xMiw3LTI0LDE3LTMwbDkxOC01MzBjNS0zLDExLTUsMTctNWwwLDBWMTU1eiBNMTI1MCwwYy0zMywwLTY1LDgtOTUsMjVMMjM3LDU1NSAgICAgICBjLTU5LDM0LTk1LDk2LTk1LDE2NHYxMDYwYzAsNjgsMzYsMTMwLDk1LDE2NGw5MTgsNTMwYzI5LDE3LDYyLDI1LDk1LDI1czY1LTgsOTUtMjVsOTE4LTUzMGM1OS0zNCw5NS05Niw5NS0xNjRWNzE5ICAgICAgIGMwLTY4LTM2LTEzMC05NS0xNjRMMTM0NCwyNWMtMjktMTctNjItMjUtOTUtMjVsMCwwSDEyNTB6Ij48L3BhdGg+CgkJCQk8L2c+CgkJCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjY0MiwyMTc5IDcyNywxOTQ3IDg5NywyMDg4IDczOCwyMjM0ICAgICAiPjwvcG9seWdvbj4KCQkJCTxnPgoJCQkJCTxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMTcyLDY0NEg5MzljLTE3LDAtMzMsMTEtMzksMjdMNDAxLDIwMzlsMjQxLDEzOWw1NTAtMTUwN2M1LTE0LTUtMjgtMTktMjhMMTE3Miw2NDR6Ij48L3BhdGg+CgkJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0iTTE1ODAsNjQ0aC0yMzNjLTE3LDAtMzMsMTEtMzksMjdMNzM4LDIyMzNsMjQxLDEzOWw2MjAtMTcwMWM1LTE0LTUtMjgtMTktMjhWNjQ0eiI+PC9wYXRoPgoJCQkJPC9nPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=';

  var arbitrum = {
    name: 'arbitrum',
    id: '0xa4b1',
    networkId: '42161',
    namespace: 'eip155',
    platform: 'evm',
    label: 'Arbitrum',
    fullName: 'Arbitrum One',
    logo: logo$3,
    currency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: ethereum.logo
    },
    wrapped: {
      address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      logo: ethereum.wrapped.logo
    },
    stables: { // max. 3 per fiat currency
      usd: ['0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1']
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
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.logo, "type": "NATIVE"},
      {"address": "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
      {"address": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/logo.png", "type": "20"},
      {"address": "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8/logo.png", "type": "20"},
      {"address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1/logo.png", "type": "20"},
      {"address": "0x912CE59144191C1204E64559FE8253a0e49E6548", "symbol": "ARB", "name": "Arbitrum", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$2 = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMyIgaGVpZ2h0PSIxNTA0IiB2aWV3Qm94PSIwIDAgMTUwMyAxNTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIyODciIHk9IjI1OCIgd2lkdGg9IjkyOCIgaGVpZ2h0PSI4NDQiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUwMi41IDc1MkMxNTAyLjUgMTE2Ni43NyAxMTY2LjI3IDE1MDMgNzUxLjUgMTUwM0MzMzYuNzM0IDE1MDMgMC41IDExNjYuNzcgMC41IDc1MkMwLjUgMzM3LjIzNCAzMzYuNzM0IDEgNzUxLjUgMUMxMTY2LjI3IDEgMTUwMi41IDMzNy4yMzQgMTUwMi41IDc1MlpNNTM4LjY4OCAxMDUwLjg2SDM5Mi45NEMzNjIuMzE0IDEwNTAuODYgMzQ3LjE4NiAxMDUwLjg2IDMzNy45NjIgMTA0NC45NkMzMjcuOTk5IDEwMzguNSAzMjEuOTExIDEwMjcuOCAzMjEuMTczIDEwMTUuOTlDMzIwLjYxOSAxMDA1LjExIDMyOC4xODQgOTkxLjgyMiAzNDMuMzEyIDk2NS4yNTVMNzAzLjE4MiAzMzAuOTM1QzcxOC40OTUgMzAzLjk5OSA3MjYuMjQzIDI5MC41MzEgNzM2LjAyMSAyODUuNTVDNzQ2LjUzNyAyODAuMiA3NTkuMDgzIDI4MC4yIDc2OS41OTkgMjg1LjU1Qzc3OS4zNzcgMjkwLjUzMSA3ODcuMTI2IDMwMy45OTkgODAyLjQzOCAzMzAuOTM1TDg3Ni40MiA0NjAuMDc5TDg3Ni43OTcgNDYwLjczOEM4OTMuMzM2IDQ4OS42MzUgOTAxLjcyMyA1MDQuMjg5IDkwNS4zODUgNTE5LjY2OUM5MDkuNDQzIDUzNi40NTggOTA5LjQ0MyA1NTQuMTY5IDkwNS4zODUgNTcwLjk1OEM5MDEuNjk1IDU4Ni40NTUgODkzLjM5MyA2MDEuMjE1IDg3Ni42MDQgNjMwLjU0OUw2ODcuNTczIDk2NC43MDJMNjg3LjA4NCA5NjUuNTU4QzY3MC40MzYgOTk0LjY5MyA2NjEuOTk5IDEwMDkuNDYgNjUwLjMwNiAxMDIwLjZDNjM3LjU3NiAxMDMyLjc4IDYyMi4yNjMgMTA0MS42MyA2MDUuNDc0IDEwNDYuNjJDNTkwLjE2MSAxMDUwLjg2IDU3My4wMDQgMTA1MC44NiA1MzguNjg4IDEwNTAuODZaTTkwNi43NSAxMDUwLjg2SDExMTUuNTlDMTE0Ni40IDEwNTAuODYgMTE2MS45IDEwNTAuODYgMTE3MS4xMyAxMDQ0Ljc4QzExODEuMDkgMTAzOC4zMiAxMTg3LjM2IDEwMjcuNDMgMTE4Ny45MiAxMDE1LjYzQzExODguNDUgMTAwNS4xIDExODEuMDUgOTkyLjMzIDExNjYuNTUgOTY3LjMwN0MxMTY2LjA1IDk2Ni40NTUgMTE2NS41NSA5NjUuNTg4IDExNjUuMDQgOTY0LjcwNkwxMDYwLjQzIDc4NS43NUwxMDU5LjI0IDc4My43MzVDMTA0NC41NCA3NTguODc3IDEwMzcuMTIgNzQ2LjMyNCAxMDI3LjU5IDc0MS40NzJDMTAxNy4wOCA3MzYuMTIxIDEwMDQuNzEgNzM2LjEyMSA5OTQuMTk5IDc0MS40NzJDOTg0LjYwNSA3NDYuNDUzIDk3Ni44NTcgNzU5LjU1MiA5NjEuNTQ0IDc4NS45MzRMODU3LjMwNiA5NjQuODkxTDg1Ni45NDkgOTY1LjUwN0M4NDEuNjkgOTkxLjg0NyA4MzQuMDY0IDEwMDUuMDEgODM0LjYxNCAxMDE1LjgxQzgzNS4zNTIgMTAyNy42MiA4NDEuNDQgMTAzOC41IDg1MS40MDIgMTA0NC45NkM4NjAuNDQzIDEwNTAuODYgODc1Ljk0IDEwNTAuODYgOTA2Ljc1IDEwNTAuODZaIiBmaWxsPSIjRTg0MTQyIi8+Cjwvc3ZnPgo=';
  const wrappedLogo$1 = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/logo.png";

  var avalanche = {
    name: 'avalanche',
    id: '0xa86a',
    networkId: '43114',
    namespace: 'eip155',
    platform: 'evm',
    label: 'Avalanche',
    fullName: 'Avalanche C-Chain',
    logo: logo$2,
    currency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: logo$2
    },
    wrapped: {
      address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      logo: wrappedLogo$1
    },
    stables: { // max. 3 per fiat currency
      usd: ['0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7', '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70']
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
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "AVAX", "name": "Avalanche", "decimals": 18, "logo": logo$2, "type": "NATIVE"},
      {"address": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", "symbol": "WAVAX", "name": "Wrapped AVAX", "decimals": 18, "logo": wrappedLogo$1, "type": "20"},
      {"address": "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7/logo.png", "type": "20"},
      {"address": "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E/logo.png", "type": "20"},
      {"address": "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70/logo.png", "type": "20"},
      {"address": "0xC891EB4cbdEFf6e073e859e987815Ed1505c2ACD", "symbol": "EUROC", "name": "EURO Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/assets/0xC891EB4cbdEFf6e073e859e987815Ed1505c2ACD/logo.png", "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo$1 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojM0U2OTU3O30KPC9zdHlsZT4KPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgoJPGcgaWQ9Il8yMjM0NDYzMDM5NzQ0Ij4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzM1LDE0MjNjNzIsMCwxNDItMjQsMTk5LTY4TDQ3OCw4OTljLTExMCwxNDItODQsMzQ2LDU4LDQ1NmM1Nyw0MywxMjcsNjcsMTk5LDY3bDAsMFYxNDIzeiI+PC9wYXRoPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMDkwLDEwOThjMC03Mi0yNC0xNDItNjgtMTk5bC00NTYsNDU2YzE0MiwxMTAsMzQ2LDg0LDQ1Ni01OEMyMDY2LDEyNDAsMjA5MCwxMTcwLDIwOTAsMTA5OHoiPjwvcGF0aD4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjMyMCw2MDJsLTIwMiwyMDJjMTYyLDE5NSwxMzcsNDg0LTU4LDY0N2MtMTcxLDE0My00MTgsMTQzLTU4OSwwbC0yMjEsMjIxbC0yMjEtMjIxICAgIGMtMTk1LDE2Mi00ODQsMTM3LTY0Ny01OGMtMTQzLTE3MS0xNDMtNDE4LDAtNTg5TDI3OSw3MDFsLTk4LTk5QzYyLDc5NywwLDEwMjEsMCwxMjUwYzAsNjkwLDU2MCwxMjUwLDEyNTAsMTI1MCAgICBzMTI1MC01NjAsMTI1MC0xMjUwQzI1MDEsMTAyMiwyNDM3LDc5NywyMzIwLDYwMnoiPjwvcGF0aD4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjE1NCwzODdDMTY3OC0xMTIsODg3LTEzMSwzODgsMzQ1Yy0xNSwxNC0yOSwyOC00Miw0MmMtMzEsMzMtNjAsNjctODgsMTAybDk5Miw5OTJsOTkyLTk5MiAgICBDMjIxNSw0NTMsMjE4NSw0MTksMjE1NCwzODd6IE0xMjUwLDE2M2MyOTIsMCw1NjQsMTEzLDc2OSwzMThsLTc2OSw3NjlMNDgxLDQ4MUM2ODUsMjc1LDk1OCwxNjMsMTI1MCwxNjN6Ij48L3BhdGg+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==';
  const wrappedLogo = 'https://cdn.sushi.com/image/upload/f_auto,c_limit,w_32,q_auto/native-currency/xdai.svg';

  var gnosis = {
    name: 'gnosis',
    id: '0x64',
    networkId: '100',
    namespace: 'eip155',
    label: 'Gnosis',
    fullName: 'Gnosis Chain',
    logo: logo$1,
    currency: {
      name: 'xDAI',
      symbol: 'xDAI',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: 'https://cdn.sushi.com/image/upload/f_auto,c_limit,w_32,q_auto/native-currency/xdai.svg'
    },
    wrapped: {
      address: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
      logo: wrappedLogo
    },
    stables: { // max. 3 per fiat currency
      usd: ['0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', '0x4ECaBa5870353805a9F068101A40E0f32ed605C6', '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83']
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
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "xDAI", "name": "xDAI", "decimals": 18, "logo": 'https://cdn.sushi.com/image/upload/f_auto,c_limit,w_32,q_auto/native-currency/xdai.svg', "type": "NATIVE"},
      {"address": "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d", "symbol": "WXDAI", "name": "Wrapped XDAI", "decimals": 18, "logo": wrappedLogo, "type": "20"},
      {"address": "0x4ECaBa5870353805a9F068101A40E0f32ed605C6", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png', "type": "20"},
      {"address": "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png', "type": "20"},
      {"address": "0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb", "symbol": "GNO", "name": "Gnosis", "decimals": 18, "logo": 'https://cdn.sushi.com/image/upload/f_auto,c_limit,w_16,q_auto/tokens/100/0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb.jpg', "type": "20"},
      {"address": "0xD057604A14982FE8D88c5fC25Aac3267eA142a08", "symbol": "HOPR", "name": "HOPR", "decimals": 18, "logo": 'https://hoprnet.org/assets/icons/hopr_icon.svg', "type": "20"},
    ],
    zero: '0x0000000000000000000000000000000000000000',
    maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  const logo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUgNTBDMzguODA3MSA1MCA1MCAzOC44MDcxIDUwIDI1QzUwIDExLjE5MjkgMzguODA3MSAwIDI1IDBDMTEuMTkyOSAwIDAgMTEuMTkyOSAwIDI1QzAgMzguODA3MSAxMS4xOTI5IDUwIDI1IDUwWk0xNS41OTEgMzEuODY3QzE2LjI3NSAzMi4wODIzIDE3LjAxNiAzMi4xOSAxNy44MTQgMzIuMTlDMTkuNjUwNyAzMi4xOSAyMS4xMTM3IDMxLjc2NTcgMjIuMjAzIDMwLjkxN0MyMy4yOTIzIDMwLjA1NTcgMjQuMDUyMyAyOC43NTczIDI0LjQ4MyAyNy4wMjJDMjQuNjA5NyAyNi40NzczIDI0LjczIDI1LjkzMjcgMjQuODQ0IDI1LjM4OEMyNC45NzA3IDI0Ljg0MzMgMjUuMDc4MyAyNC4yOTIzIDI1LjE2NyAyMy43MzVDMjUuMzE5IDIyLjg3MzcgMjUuMjkzNyAyMi4xMiAyNS4wOTEgMjEuNDc0QzI0LjkwMSAyMC44MjggMjQuNTY1MyAyMC4yODMzIDI0LjA4NCAxOS44NEMyMy42MTUzIDE5LjM5NjcgMjMuMDM5IDE5LjA2NzMgMjIuMzU1IDE4Ljg1MkMyMS42ODM3IDE4LjYyNCAyMC45NDkgMTguNTEgMjAuMTUxIDE4LjUxQzE4LjMwMTcgMTguNTEgMTYuODMyMyAxOC45NTMzIDE1Ljc0MyAxOS44NEMxNC42NTM3IDIwLjcyNjcgMTMuOSAyMi4wMjUgMTMuNDgyIDIzLjczNUMxMy4zNTUzIDI0LjI5MjMgMTMuMjI4NyAyNC44NDMzIDEzLjEwMiAyNS4zODhDMTIuOTg4IDI1LjkzMjcgMTIuODgwMyAyNi40NzczIDEyLjc3OSAyNy4wMjJDMTIuNjM5NyAyNy44ODMzIDEyLjY2NSAyOC42MzcgMTIuODU1IDI5LjI4M0MxMy4wNTc3IDI5LjkyOSAxMy4zOTMzIDMwLjQ2NzMgMTMuODYyIDMwLjg5OEMxNC4zMzA3IDMxLjMyODcgMTQuOTA3IDMxLjY1MTcgMTUuNTkxIDMxLjg2N1pNMTkuODY2IDI4Ljg0NkMxOS4zNDY3IDI5LjI1MTMgMTguNzQ1IDI5LjQ1NCAxOC4wNjEgMjkuNDU0QzE3LjM2NDMgMjkuNDU0IDE2Ljg2NCAyOS4yNTEzIDE2LjU2IDI4Ljg0NkMxNi4yNTYgMjguNDQwNyAxNi4xOCAyNy43OTQ3IDE2LjMzMiAyNi45MDhDMTYuNDMzMyAyNi4zNTA3IDE2LjUzNDcgMjUuODI1IDE2LjYzNiAyNS4zMzFDMTYuNzUgMjQuODM3IDE2Ljg3NjcgMjQuMzI0IDE3LjAxNiAyMy43OTJDMTcuMjMxMyAyMi45MDUzIDE3LjU5MjMgMjIuMjU5MyAxOC4wOTkgMjEuODU0QzE4LjYxODMgMjEuNDQ4NyAxOS4yMiAyMS4yNDYgMTkuOTA0IDIxLjI0NkMyMC41ODggMjEuMjQ2IDIxLjA4ODMgMjEuNDQ4NyAyMS40MDUgMjEuODU0QzIxLjcyMTcgMjIuMjU5MyAyMS43OTc3IDIyLjkwNTMgMjEuNjMzIDIzLjc5MkMyMS41NDQzIDI0LjMyNCAyMS40NDMgMjQuODM3IDIxLjMyOSAyNS4zMzFDMjEuMjI3NyAyNS44MjUgMjEuMTA3MyAyNi4zNTA3IDIwLjk2OCAyNi45MDhDMjAuNzUyNyAyNy43OTQ3IDIwLjM4NTMgMjguNDQwNyAxOS44NjYgMjguODQ2Wk0yNS42NDA0IDMxLjg2N0MyNS43MTY0IDMxLjk1NTcgMjUuODE3NyAzMiAyNS45NDQ0IDMySDI4LjUyODRDMjguNjY3NyAzMiAyOC43ODggMzEuOTU1NyAyOC44ODk0IDMxLjg2N0MyOS4wMDM0IDMxLjc3ODMgMjkuMDczIDMxLjY2NDMgMjkuMDk4NCAzMS41MjVMMjkuOTcyNCAyNy4zNjRIMzIuNTM3NEMzNC4xNzE0IDI3LjM2NCAzNS40Njk3IDI3LjAxNTcgMzYuNDMyNCAyNi4zMTlDMzcuNDA3NyAyNS42MjIzIDM4LjA1MzcgMjQuNTQ1NyAzOC4zNzA0IDIzLjA4OUMzOC41MjI0IDIyLjM1NDMgMzguNTE2IDIxLjcxNDcgMzguMzUxNCAyMS4xN0MzOC4xODY3IDIwLjYxMjcgMzcuODk1NCAyMC4xNTAzIDM3LjQ3NzQgMTkuNzgzQzM3LjA1OTQgMTkuNDE1NyAzNi41MzM3IDE5LjE0MzMgMzUuOTAwNCAxOC45NjZDMzUuMjc5NyAxOC43ODg3IDM0LjU4MyAxOC43IDMzLjgxMDQgMTguN0gyOC43NTY0QzI4LjYyOTcgMTguNyAyOC41MDk0IDE4Ljc0NDMgMjguMzk1NCAxOC44MzNDMjguMjgxNCAxOC45MjE3IDI4LjIxMTcgMTkuMDM1NyAyOC4xODY0IDE5LjE3NUwyNS41NjQ0IDMxLjUyNUMyNS41MzkgMzEuNjY0MyAyNS41NjQ0IDMxLjc3ODMgMjUuNjQwNCAzMS44NjdaTTMyLjY1MTQgMjQuNzQySDMwLjQ2NjRMMzEuMjA3NCAyMS4zNDFIMzMuNDg3NEMzMy45NDM0IDIxLjM0MSAzNC4yNzkgMjEuNDE3IDM0LjQ5NDQgMjEuNTY5QzM0LjcyMjQgMjEuNzIxIDM0Ljg1NTQgMjEuOTIzNyAzNC44OTM0IDIyLjE3N0MzNC45MzE0IDIyLjQzMDMgMzQuOTE4NyAyMi43MjE3IDM0Ljg1NTQgMjMuMDUxQzM0LjcyODcgMjMuNjIxIDM0LjQ1NjQgMjQuMDQ1MyAzNC4wMzg0IDI0LjMyNEMzMy42MzMgMjQuNjAyNyAzMy4xNzA3IDI0Ljc0MiAzMi42NTE0IDI0Ljc0MloiIGZpbGw9IiNGRjA0MjAiLz4KPC9zdmc+Cg==';

  var optimism = {
    name: 'optimism',
    id: '0xa',
    networkId: '10',
    namespace: 'eip155',
    label: 'Optimism',
    fullName: 'Optimism',
    logo,
    currency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      logo: ethereum.logo
    },
    wrapped: {
      address: '0x4200000000000000000000000000000000000006',
      logo: ethereum.wrapped.logo
    },
    stables: { // max. 3 per fiat currency
      usd: ['0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1']
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
      {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": ethereum.logo, "type": "NATIVE"},
      {"address": "0x4200000000000000000000000000000000000006", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": ethereum.wrapped.logo, "type": "20"},
      {"address": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58", "symbol": "USDT", "name": "Tether", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x94b008aA00579c1307B0EF2c499aD98a8ce58e58/logo.png', "type": "20"},
      {"address": "0x7F5c764cBc14f9669B88837ca1490cCa17c31607", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x7F5c764cBc14f9669B88837ca1490cCa17c31607/logo.png', "type": "20"},
      {"address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png', "type": "20"},
      {"address": "0x4200000000000000000000000000000000000042", "symbol": "OP", "name": "Optimism", "decimals": 18, "logo": 'https://user-images.githubusercontent.com/1300064/219575413-d7990d69-1d21-44ef-a2b1-e9c682c79802.svg', "type": "20"},
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
    
    all,
    findById,
    findByNetworkId,
    findByName,
  };

  return index;

})));
