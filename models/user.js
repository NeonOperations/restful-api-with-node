// Load the required packages
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

// Define the user schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Execute before each user.save() call
UserSchema.pre('save', function(callback) {
  const user = this;

  // Exit if password has not changed
  if (!user.isModified('password')) {
    return callback();
  }

  // Password has changed so we need to hash it
  bcrypt.genSalt(5, (err, salt) => {
    if (err) {
      return callback(err);
    }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return callback(err);
      }
      user.password = hash;
      callback();
    });
  });
});

UserSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

// Export the mongoose model
module.exports = mongoose.model('User', UserSchema);