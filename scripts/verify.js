const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

// Update with your Ethereum RPC endpoint
const web3 = new Web3('http://localhost:8545');

async function verifyAttestation() {
    try {
        // Replace with the deployed contract address
        const contractAddress = '0x1234567890123456789012345678901234567890';
        const contractData = fs.readFileSync(path.resolve(__dirname, '../contracts/ProofOfMachinehood.sol'), 'utf8');
        const deployedContract = new web3.eth.Contract(JSON.parse(contractData).abi, contractAddress);

        // Example function to check machine attestation status
        const isMachineVerified = await deployedContract.methods.isMachineVerified().call();
        console.log('Machine attestation status:', isMachineVerified);

    } catch (error) {
        console.error('Error verifying attestation:', error);
    }
}

verifyAttestation();
