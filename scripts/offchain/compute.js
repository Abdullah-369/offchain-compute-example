// Simulates heavy off-chain work, then prepares a hash for on-chain verification.
const { keccak256, toUtf8Bytes } = require("ethers");

async function main() {
  const data = "42"; // pretend this is your heavy result
  const bytes = toUtf8Bytes(data);
  const hash = keccak256(bytes);

  console.log("Result:", data);
  console.log("Hash to set on-chain:", hash);
  console.log("\nFlow:");
  console.log("1) Call setExpectedHash(hash) on the contract with this hash.");
  console.log("2) Later, call submit(bytes(result)) with the same result to verify.");
}
main();
