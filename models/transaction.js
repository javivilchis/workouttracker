const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  title: String,
  body: String
});

const transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = transaction;
