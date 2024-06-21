const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

const web3 = new Web3('http://localhost:8545'); // Update with your Ethereum RPC endpoint
const accounts = [
    '0x1234567890123456789012345678901234567890', // Replace with actual account addresses
    '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd'
];

async function deployContract() {
    try {
        console.log('Deploying contract...');

        // Load contract ABI and bytecode from file
        const contractData = fs.readFileSync(path.resolve(__dirname, '../../contracts/MultiProverAVS.sol'), 'utf8');
        const compiledContract = new web3.eth.Contract(JSON.parse(contractData).abi);

        // Deploy the contract
        const deployedContract = await compiledContract.deploy({
            data: JSON.parse(contractData).bytecode,
        }).send({
            from: accounts[0], // Deploy from the first account (you can choose any account here)
            gas: 5000000,
        });

        console.log('Contract deployed at address:', deployedContract.options.address);
        return deployedContract.options.address;

    } catch (error) {
        console.error('Error deploying contract:', error);
        throw error;
    }
}

deployContract();
