// Example adapter for TEE integration

// Import specific adapters
const intelSgxAdapter = require('./intel-sgx');
// Add more adapters as needed for other TEE technologies

// Define the list of supported TEE technologies
const supportedTechnologies = ['intel-sgx'];
// Add more technologies as adapters are implemented

// Function to get adapter based on technology name
function getAdapter(technology) {
    switch (technology) {
        case 'intel-sgx':
            return intelSgxAdapter;
        // Add cases for other technologies here
        default:
            throw new Error(`Unsupported TEE technology: ${technology}`);
    }
}

module.exports = {
    supportedTechnologies,
    getAdapter,
};
