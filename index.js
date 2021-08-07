'use strict';

const Web3 = require('web3'),
      provider = 'https://matic-mainnet.chainstacklabs.com/',
      web3Provider = new Web3.providers.HttpProvider(provider),
      web3 = new Web3(web3Provider),
      trans = '0x2b1cb0ee5c14b33d1871a671c235dce2972861a1ad1410659251f0b9d7fac39f',
      Transaction = require('./models/eth'),
      mongoose = require('mongoose');
      mongoose.Promise = require('bluebird');

//fetches transactin data
web3.eth.getTransaction(trans).then((result) => {  
  let newTransaction = {
    blockHash: result.blockHash,
    blockNumber: result.blockNumber,
    from: result.from,
    gas: result.gas,
    gasPrice:result.gasPrice,
    hash:result.hash,
    input:result.input, 
    nonce: result.nonce,
    to: result.nonce,
    transactionIndex: result.transactionIndex,
    value: result.value,
    type: result.value,
    v: result.v,
    r: result.r,
    s: result.s
  };

  //saves transaction to db
  try {
    Transaction.create(newTransaction, (newTransaction) => {      
       console.log(newTransaction);        
    });    
  } catch (err) {
      console.log(err);
  };  

  //Consoles last transaction
  Transaction.find({}).sort({$natural: -1}).limit(1).exec((err, transaction) => {         
    if (err) {
      console.log(err);
    } else {
    console.log(transaction);
    }
  });
});