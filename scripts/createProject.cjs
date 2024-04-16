const contractAddr="0x6f4C6e6e594853563281f7B53E09A5640Ff0B54e";
const hre=require("hardhat");
async function main(){
    const CrowdTank= await hre.ethers.getContractFactory("CrowdTank");
    const crowdTank=CrowdTank.attach(contractAddr);
    const name="name";
    const description="description";
    const fundingGoal=1000000;
    const durationSeconds=100;
    const id=101;
    const txn=await crowdTank.creatProject(name,description,fundingGoal,durationSeconds,id);
    console.log("Txn Status -> ",txn.hash);
    console.log("transaction->",txn);
}

main()
.then(()=>process.exit())
.catch(error=>{
    console.error(error);
    process.exit(1);
})