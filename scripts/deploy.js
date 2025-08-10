const { ethers } = require("hardhat");

async function main() {
  const F = await ethers.getContractFactory("ResultVerifier");
  const c = await F.deploy();
  await c.deployed();
  console.log("ResultVerifier deployed to:", c.address);
}
main().catch(e => { console.error(e); process.exit(1); });
