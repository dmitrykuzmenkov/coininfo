/*
  info from:
    https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp
*/

var assign = require('object-assign')

var common = {
  name: 'Bitcoin Cash',
  per1: 1e8,
  unit: 'BCH'
}

var main = assign({}, {
  hashGenesisBlock: '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
  // nDefaultPort
  port: 8333,
  portRpc: 8332,
  protocol: {
    // pchMessageStart
    magic: 0xe3e1f3e8 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'seed.bitcoin.sipa.be',
    'dnsseed.bluematt.me',
    'dnsseed.bitcoin.dashjr.org',
    'seed.bitcoinstats.com',
    'bitseed.xf2.org',
    'seed.bitcoin.jonasschnelli.ch'
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
    public: 0x00,
    scripthash: 0x05
  }
}, common)

module.exports = {
  main: main
}
