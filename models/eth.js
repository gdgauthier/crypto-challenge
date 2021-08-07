const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const schema = new Schema({
  blockHash: {type: String, required: true},
  blockNumber: {type: Number, required: true},
  from: {type: String, required: true},  
  gas: {type: Number, requiered: true},
  gasPrice: {type: String, required: false},  
  hash: {type: String, required: true},
  input: {type: String, requiered: true},    
  nonce: {type: Number, requiered: true},
  to: {type: String, requiered: true},
  transactionIndex: {type: Number, requiered: true},
  value: {type: String, requiered: true},
  type: {type: Number, requiered: true},
  v: {type: String, requiered: true},
  r: {type: String, requiered: true},
  s: {type: String, requiered: true},
  log: {type: Object, requiered: true}
});

module.exports = mongoose.model('Transaction', schema);