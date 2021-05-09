var config = require('../config/config').config();
const Web3 = require('web3');
const web3 = new Web3(config.web3Provider);
const erc20abi = require('../contract/abi');
const erc20Instance = new web3.eth.Contract(erc20abi.abi, config.contractAddress);
let blockchainhelper = require('./blockchainHelper');


function transfer (data) {
    return new Promise(async (resolve , reject) => {
        try {
            const transferTxn = erc20Instance.methods.transfer(data.receiverPublicKey, await web3.utils.toWei(data.amount, 'ether'));
            const txDetails = await blockchainhelper.send(data.senderPrivateKey , transferTxn);
            resolve(txDetails) ;
        } catch (error) {
            reject(error);
        }
    })
}

function getBalance(walletAddress) {
    return new Promise(async (resolve , reject) => {
        try {
            let result = await erc20Instance.methods.balanceOf(walletAddress).call()
            resolve(await web3.utils.fromWei(result, 'ether'));
        } catch (error) {
            reject(error);
        }
    }) 
} 

// not funtional as of now 
function getContractInfo() {
    return new Promise(async (resolve , reject) => {
        try {
            let result = {};
            result.name = await erc20Instance.methods.name().call();
            result.symbol = await erc20Instance.methods.symbol().call();
            result.totalSupply = await web3.utils.fromWei(await erc20Instance.methods.totalSupply().call(), 'ether');
            result.decimals = await erc20Instance.methods.decimals().call();
            result.owner = await erc20Instance.methods.owner().call();
            result.abi = erc20abi.abi;
            resolve(result);
        } catch (error) {
            reject(error);
        }
    }) 
} 

module.exports = {transfer , getBalance , getContractInfo} 

