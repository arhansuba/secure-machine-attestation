# Secure Machine Attestation

Secure Machine Attestation is a project focused on establishing trust in machine attestations using Trusted Execution Environments (TEEs) and blockchain technology. This repository provides tools and implementations for deploying smart contracts, verifying machine attestations on-chain, and integrating with TEEs for enhanced security and privacy.

## Project Structure

secure-machine-attestation/
│
├── contracts/ # Smart contracts directory
│ └── ProofOfMachinehood.sol # Smart contract for Proof of Machinehood
│
├── scripts/ # Deployment and management scripts
│ ├── deploy.js # Script to deploy smart contracts using Web3.js
│ └── verify.js # Script to verify machine attestation on-chain
│
├── rpc-relay/ # Private RPC relay directory
│ ├── src/ # Source code for 1RPC relay
│ └── Dockerfile # Dockerfile for 1RPC enclave deployment
│
├── tee-integration/ # TEE Multi-Prover integration
│ ├── intel-sgx/ # Intel SGX integration module
│ └── adapters/ # Adapters for different TEE technologies
│
├── block-builder/ # TEE Builder for secure block building
│ ├── src/ # Source code for TEE-enabled block builder
│ └── Dockerfile # Dockerfile for TEE Builder enclave deployment
│
├── README.md # Project documentation
├── package.json # Node.js package file
└── .gitignore # Git ignore file

## Features

- **Proof of Machinehood**: Smart contract (`ProofOfMachinehood.sol`) for proving machine attestations on-chain.
- **Deployment Scripts**: `deploy.js` for deploying smart contracts using Web3.js.
- **Verification Scripts**: `verify.js` for verifying machine attestation on-chain.
- **Private RPC Relay**: `rpc-relay/` directory containing source code and Dockerfile for 1RPC enclave deployment.
- **TEE Integration**: Integration modules (`tee-integration/`) for TEE Multi-Prover, including Intel SGX and adapters for other TEE technologies.
- **Block Builder**: `block-builder/` directory with source code and Dockerfile for TEE-enabled block building.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arhansuba/secure-machine-attestation.git
   cd secure-machine-attestation
npm install
Setup Ethereum RPC Endpoint:

Update the Ethereum RPC endpoint in scripts/deploy.js and scripts/verify.js to match your environment.

Usage
Deploy Smart Contracts
Deploy the ProofOfMachinehood contract using Web3.js:
node scripts/deploy.js

Verify Machine Attestation
Run the verification script to verify machine attestation on-chain:
node scripts/verify.js

Configuration
Update Ethereum RPC endpoint in deploy.js and verify.js (scripts) if needed.
Configure Dockerfile (rpc-relay/Dockerfile and block-builder/Dockerfile) for enclave deployment.
Contributing
Contributions are welcome! Please fork the repository and submit pull requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.

