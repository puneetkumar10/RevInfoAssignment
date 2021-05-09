var blockchainService = require('../services/blockchainService');
var responseService = require('../services/responseService');

async function transfer(req, res) {
    try {
        var data = {
               senderPrivateKey: req.body.senderPrivateKey,
               receiverPublicKey: req.body.receiverPublicKey,
               amount : req.body.amount
           }
        let result = await blockchainService.transfer(data);
        responseService.response(req, null, result, res);
    }
    catch (error) {
        responseService.response(req, error, null, res);
    }
};

async function getBalance(req, res) {
    try {
        let result = await blockchainService.getBalance(req.params.walletAddress);
        responseService.response(req, null, result, res);
    }
    catch (error) {
        responseService.response(req, error, null, res);
    }
};

async function getContractInfo(req, res) {
    try {
        let result = await blockchainService.getContractInfo();
        responseService.response(req, null, result, res);
    }
    catch (error) {
        responseService.response(req, error, null, res);
    }
};

module.exports = {transfer , getBalance , getContractInfo}