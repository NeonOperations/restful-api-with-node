const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number
});

module.exports = mongoose.model('Book', BookSchema);