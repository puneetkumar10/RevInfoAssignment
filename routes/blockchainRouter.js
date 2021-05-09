var express = require('express');
var router = express.Router();
var blockchainController = require('../controllers/blockchainController');

/**
 * @description api to transfer erc20 tokens from 1 account to another account
 * @params senderPrivateKey
 * @params receiverPublicKey
 * @params amount
 * @returns Transaction details object.
 */

router.post("/transfer", (req, res) => blockchainController.transfer(req, res));

/**
 * @description get balance of a user
 * @params wallet address
 * @returns Transaction details object.
 */
router.get("/balance/:walletAddress", (req, res) => blockchainController.getBalance(req, res));

/**
 * @description get information of contract
 * @returns Transaction details object.
 */
 router.get("/contractinfo", (req, res) => blockchainController.getContractInfo(req, res));

module.exports = router;
