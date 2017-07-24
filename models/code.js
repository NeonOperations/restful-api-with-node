// Load the required packages
const mongoose = require('mongoose');

// Define the token schema
const CodeSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true
  },
  redirectUri: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  clientId: {
    type: String,
    required: false
  }
});

// Export the Mongoose model
module.exports = mongoose.model('Code', CodeSchema);