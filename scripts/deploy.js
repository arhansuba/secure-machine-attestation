const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

// Update with your Ethereum RPC endpoint
const web3 = new Web3('http://localhost:8545');

async function deployContract() {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log('Deploying contract from account:', accounts[0]);

        // Read contract ABI and bytecode
        const contractData = fs.readFileSync(path.resolve(__dirname, '../contracts/ProofOfMachinehood.sol'), 'utf8');
        const compiledContract = new web3.eth.Contract(JSON.parse(contractData).abi);

        // Deploy the contract
        const deployedContract = await compiledContract.deploy({
            data: JSON.parse(contractData).bytecode,
        }).send({
            from: accounts[0],
            gas: 5000000,  // Adjust gas limit as needed
        });

        console.log('Contract deployed at address:', deployedContract.options.address);
        // Optionally, save the deployed contract address somewhere
        // fs.writeFileSync(path.resolve(__dirname, '../contractAddress.json'), JSON.stringify(deployedContract.options.address));

    } catch (error) {
        console.error('Error deploying contract:', error);
    }
}

deployContract();
