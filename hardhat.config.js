require('dotenv').config()
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");

const { API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: '0.7.3',
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: 'PRH8RZKXSAE2YVWIS4NADEKF7UR8CTFZTK'
  }
}
