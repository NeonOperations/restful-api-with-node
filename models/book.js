const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number,
  userId: String
});

module.exports = mongoose.model('Book', BookSchema);