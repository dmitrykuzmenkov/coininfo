/*
  info from:
    https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp
*/

var assign = require('object-assign')

var common = {
  name: 'LindaCoin',
  per1: 1e8,
  unit: 'LINDA'
}

var main = assign({}, {
  hashGenesisBlock: '000000fa793257f502f94a3531aebdaf91b070324a8f5041324b80f4b0f74c51',
  // nDefaultPort
  port: 33820,
  portRpc: 33821,
  protocol: {
    // pchMessageStart
    magic: 0x9cd31701 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'seed1.linda-wallet.com',
    'seed2.linda-wallet.com',
    'seed3.linda-wallet.com',
    'seed4.linda-wallet.com',
    'seed5.linda-wallet.com',
    'seed6.linda-wallet.com',
    'seed7.linda-wallet.com',
    'seed8.linda-wallet.com',
    'seed9.linda-wallet.com',
    'seed10.linda-wallet.com',
    'seed11.linda-wallet.com'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    // http://doc.satoshilabs.com/slips/slip-0044.html
    bip44: 0,
    private: 0x99,
    public: 0x30,
    scripthash: 0x85
  }
}, common)

module.exports = {
  main: main
}
