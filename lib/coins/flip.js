/*
  info from:
    https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp
*/

var assign = require('object-assign')

var common = {
  name: 'BitFlip',
  per1: 1e8,
  unit: 'FLIP'
}

var main = assign({}, {
  hashGenesisBlock: '00000000c508da1be4de191313572d3133cc9883564e0b5d22f0fa81aeb809f1',
  // nDefaultPort
  port: 21743,
  portRpc: 21744,
  protocol: {
    // pchMessageStart
    magic: 0x44cd6a44 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'lon.bitflip.li',
    'lux.bitflip.li',
    'sin.bitflip.asia',
    'mow.bitflip.cc',
    'led.bitflip.cc',
    'ams.bitflip.info',
    'nyc.bitflip.world',
    'dfw.bitflip.world'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    // http://doc.satoshilabs.com/slips/slip-0044.html
    bip44: 0,
    private: 0xa3,
    public: 0x23,
    scripthash: 0x05
  }
}, common)

module.exports = {
  main: main
}
