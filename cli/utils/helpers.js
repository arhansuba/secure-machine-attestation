/**
 * Utility functions for general project tasks.
 */

/**
 * Function to format Ethereum address for display.
 * @param {string} address Ethereum address to format
 * @returns {string} Formatted Ethereum address
 */
function formatAddress(address) {
    if (!address) return '';
    return address.substring(0, 6) + '...' + address.substring(address.length - 4);
}

/**
 * Function to delay execution for a specified time.
 * @param {number} ms Time to delay in milliseconds
 * @returns {Promise<void>}
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Function to log information with timestamp.
 * @param {string} message Message to log
 */
function logInfo(message) {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] INFO: ${message}`);
}

/**
 * Function to log error with timestamp.
 * @param {string} message Error message to log
 */
function logError(message) {
    const timestamp = new Date().toLocaleString();
    console.error(`[${timestamp}] ERROR: ${message}`);
}

// Exporting functions for use in other modules
module.exports = {
    formatAddress,
    delay,
    logInfo,
    logError,
};
