const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

// Initialize Web3 instance
const web3 = new Web3('http://localhost:8545'); // Replace with your Ethereum RPC endpoint

// Example contract data (ABI and bytecode)
const contractData = fs.readFileSync(path.resolve(__dirname, '../../contracts/MultiProverAVS.sol'), 'utf8');
const compiledContract = JSON.parse(contractData);

// Example contract deployment function
async function deployContract(fromAccount) {
    try {
        console.log('Deploying contract...');

        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(compiledContract.abi);

        const deployTx = contract.deploy({
            data: '0x' + compiledContract.bytecode,
        });

        const deployReceipt = await deployTx.send({
            from: fromAccount || accounts[0],
            gas: 5000000,
        });

        console.log('Contract deployed at:', deployReceipt.contractAddress);
        return deployReceipt.contractAddress;
    } catch (error) {
        console.error('Error deploying contract:', error);
        throw error;
    }
}

// Example function to interact with deployed contract
async function addProver(contractAddress, proverAccount) {
    try {
        const contract = new web3.eth.Contract(compiledContract.abi, contractAddress);

        const tx = await contract.methods.addProver(proverAccount).send({
            from: proverAccount,
            gas: 300000,
        });

        console.log('Prover added successfully.');
        return tx.transactionHash;
    } catch (error) {
        console.error('Error adding prover:', error);
        throw error;
    }
}

// Example function to get contract instance
function getContractInstance(contractAddress) {
    return new web3.eth.Contract(compiledContract.abi, contractAddress);
}

// Exporting functions for use in other modules
module.exports = {
    web3,
    deployContract,
    addProver,
    getContractInstance,
};
