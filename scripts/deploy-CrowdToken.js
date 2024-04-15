const hre=require("hardhat");
async function main(){
    const CrowdTank= await hre.ethers.getContractFactory("CrowdTank");
    const crowdtank=await CrowdTank.deploy();
    // await crowdtank.getDeployedCode();
    console.log("CrowdTank is deployed to ContractAddress:"+crowdtank.target);

}
main()
.then(()=> process.exit(0));
