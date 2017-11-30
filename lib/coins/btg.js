/*
  info from:
    https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp
*/

var assign = require('object-assign')

var common = {
  name: 'Bitcoin Gold',
  per1: 1e8,
  unit: 'BTG'
}

var main = assign({}, {
  hashGenesisBlock: '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
  // nDefaultPort
  port: 8333,
  portRpc: 8332,
  protocol: {
    // pchMessageStart
    magic: 0xe1476d44 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'eu-dnsseed.bitcoingold-official.org',
    'dnsseed.bitcoingold.org',
    'dnsseed.btcgpu.org'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    // http://doc.satoshilabs.com/slips/slip-0044.html
    bip44: 0,
    private: 0x80,
    public: 0x26,
    scripthash: 0x17
  }
}, common)

module.exports = {
  main: main
}
