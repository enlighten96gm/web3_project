require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/KkMQ7GTv2gTp0R6lqKNbjufXSRvZQutq',
      accounts: ['d20bf002e7faa92fbb304ba5f0c5af467f1eac956df7440e51229cee4795225c']
    }
  }
}