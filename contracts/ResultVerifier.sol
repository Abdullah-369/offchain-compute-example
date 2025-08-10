// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title Off-chain compute pattern (hash check)
/// @notice Off-chain code computes result + hash; contract verifies hash matches.
contract ResultVerifier {
    bytes32 public expectedHash; // set from off-chain

    function setExpectedHash(bytes32 _hash) external {
        expectedHash = _hash;
    }

    function submit(bytes calldata result) external view returns (bool) {
        return keccak256(result) == expectedHash;
    }
}
