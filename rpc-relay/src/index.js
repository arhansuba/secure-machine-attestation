const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Replace with your desired port

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Ethereum RPC endpoint URL
const ethereumRpcUrl = 'http://localhost:8545'; // Replace with your Ethereum RPC endpoint URL

// Endpoint to forward JSON-RPC requests to Ethereum RPC
app.post('/rpc', async (req, res) => {
    try {
        const { data } = await axios.post(ethereumRpcUrl, req.body);
        res.json(data);
    } catch (error) {
        console.error('Error forwarding RPC request:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`RPC relay listening at http://localhost:${port}`);
});
