var config = require('../config/config').config();
const Web3 = require('web3');
const web3 = new Web3(config.web3Provider);

async function send(privateKey, transaction) {
    return new Promise(async (resolve, reject) => {
        try {
            const account = web3.eth.accounts.privateKeyToAccount(privateKey);
            const options = {
                to: transaction._parent._address,
                data: transaction.encodeABI(),
                gas: await transaction.estimateGas({ from: account.address }),
                gasPrice: await getGasPrice(),
                nonce: web3.utils.toHex(await web3.eth.getTransactionCount(account.address, 'pending'))
            };
            const signed = await web3.eth.accounts.signTransaction(options, account.privateKey);
            const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);
            return resolve(receipt);
        } catch (error) {
            return reject("blockchain transaction failed");
        }
    })
}

function getGasPrice() {
    try {
        return web3.eth.getGasPrice();
    } catch (error) {
        return config.gasPriceInGwei;
    }
    
}

module.exports = { send , getGasPrice }