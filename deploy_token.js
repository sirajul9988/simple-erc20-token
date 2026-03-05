const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Token = await hre.ethers.getContractFactory("SimpleToken");
  
  // Initial supply of 1,000,000 tokens with 18 decimals
  const initialSupply = hre.ethers.parseEther("1000000");
  
  const token = await Token.deploy("MyToken", "MTK", initialSupply);

  await token.waitForDeployment();

  console.log("Token deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
