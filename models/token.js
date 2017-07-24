// Load the required packages
const mongoose = require('mongoose');

// Define the token schema
const TokenSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  clientId: {
    type: String,
    required: true
  }
});

// Export the Mongoos model
module.exports = mongoose.model('Token', TokenSchema);