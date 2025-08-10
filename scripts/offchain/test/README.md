# offchain-compute-example

Demo of an off-chain → on-chain verification pattern:
- Off-chain script computes a result and its keccak256 hash.
- Contract stores the expected hash.
- Later, the raw result is submitted; the contract verifies the hash matches.

This mirrors how you'd wire real ZK proofs (replace hash check with a ZK verifier).

## Quick start
1) `npm install`
2) `npm run compute`  # shows the result + hash
3) `npx hardhat test`
4) `npx hardhat run scripts/deploy.js --network hardhat`
