const hre = require("hardhat");

async function main() {
  const NFTPurchaseManager = await hre.ethers.deployContract(
    "NFTPurchaseManager"
  );

  await NFTPurchaseManager.waitForDeployment();

  console.log(`Contract was deployed to : ${NFTPurchaseManager.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
