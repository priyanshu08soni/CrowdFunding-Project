const {ethers}= require('ethers');
//hre=hardhat random environment;
const { expect } = require("chai");
describe("CrowdTank",async function(){
    let crowdTank; 
    let CrowdTank=await ethers.getContractFactory('CrowdTank');
    console.log(CrowdTank);
    crowdTank=await CrowdTank.deploy();
    console.log("CrowdTank is deployed to:"+crowdTank.target);
})
