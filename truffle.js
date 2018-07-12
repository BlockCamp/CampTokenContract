/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
const HDWalletProvider = require("truffle-hdwallet-provider")
const fs = require('fs')

// First read in the secrets.json to get our mnemonic
let secrets
let mnemonic
let apiKey
if (fs.existsSync('secrets.json')) {
  secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'))
  mnemonic = secrets.mnemonic
  apiKey = secrets.apiKey
} else {
  console.log('No secrets.json found. If you are trying to publish EPM ' +
              'this will fail. Otherwise, you can ignore this message!')
  mnemonic = ''
  apiKey = ''
}

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/${apiKey}`),
      gas: 4500000,
      gasPrice: 20 * (10 ** 9), //Gwei
      network_id: 3
    },

    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/${apiKey}`),
      gas: 4500000,
      gasPrice: 11 * (10 ** 9), //Gwei
      network_id: 1
    }
  }
};
