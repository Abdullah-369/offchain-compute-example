const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ResultVerifier", function () {
  it("accepts correct off-chain result", async function () {
    const F = await ethers.getContractFactory("ResultVerifier");
    const c = await F.deploy();
    await c.deployed();

    const result = ethers.utils.toUtf8Bytes("42");
    const hash = ethers.utils.keccak256(result);

    await c.setExpectedHash(hash);
    expect(await c.submit(result)).to.equal(true);

    const wrong = ethers.utils.toUtf8Bytes("41");
    expect(await c.submit(wrong)).to.equal(false);
  });
});
