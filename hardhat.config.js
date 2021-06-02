require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();


module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
    },
    ropsten: {
      url: process.env.INFURA_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API
  }
};

// npx hardhat verify --contract contracts/MachiCoin.sol:MachiCoin --network ropsten 0x71C789E0957571eFed01fEE6E3eA11051786b9E9 "1000"



