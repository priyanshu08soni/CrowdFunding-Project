require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    sepolia:{
      url:process.env.SEPOLIA_RPC,
      accounts:process.env.PRIVATE_KEY !== undefined ?[process.env.PRIVATE_KEY]:[],
      
    }
  },
  etherscan:{
    apiKey:process.env.ETHERSCAN_API_KEY
  }
};
