# project setup :-

1. clone the project 
2. npm install (from root directory)
3. npm start

* nodeApp accessible on port 3000 

API : 

1. transfer - http://localhost:3000/blockchain/transfer  (POST)
body parameters : 
senderPrivateKey : 0xd75b502f2c6a2d6adf2793aa4aa1b634ae0d70ccacd84614abf4160cb5b60cc1
receiverPublicKey : 0x5c75B822af9011D14e830f28f96624eEe87b9974
amount : 200

2. balance - http://localhost:3000/blockchain/balance/0x55cE188c4554756Cc315e0c8C46a1c5D500c2fdF   (GET)

3. getcontractinfo - http://localhost:3000/blockchain/contractinfo      (GET)

    