// auth.js
// Authentication Controller to handle various Passport strategies 

// Load the required packages
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const User = require('../models/user');
const Client = require('../models/client');
// Import Bearer (Token) Strategy
const BearerStrategy = require('passport-http-bearer').Strategy;
const Token = require('../models/token');

passport.use(new BasicStrategy(
  (username, password, callback) => {
    User.findOne({ username: username}, (err, user) => {
      if (err) {
        return callback(err);
      }
      // No user found with that username
      if (!user) {
        return callback(null, false); 
      }

      // Make sure that the password is correct
      user.verifyPassword(password, (err, isMatch) => {
        if (err) {
          return callback(err);
        }

        // Password did not match
        if (!isMatch) {
          return callback(null, false);
        }

        // Success
        return callback(null, user);
      });
    });
  }
));

passport.use('client-basic', new BasicStrategy(
  (username, password, callback) => {
    Client.findOne({ id: username }, (err, client) => {
      if (err) {
        return callback(err);
      }

      // No client is found with the id or bad password
      if (!client || client.secret != password) {
        return callback(null, false);
      }
      // Success!
      return callback(null, client);
    });
  }
));

passport.use(new BearerStrategy(
  (accessToken, callback) => {
    Token.findOne({ value: accessToken }, (err, token) => {
      if (err) {
        return callback(err);
      }
      // No token found!
      if (!token) {
        return callback(null, false);
      }

      User.findOne({ _id: token.userId }, (err, user) => {
        if (err) {
          return callback(err);
        }
        // No user found
        if (!user) {
          return callback(null, false);
        }

        // Simple example with no scope
        callback(null, user, { scope: '*' });
      });
    });
  }
));

exports.isAuthenticated = passport.authenticate(['basic', 'bearer'], { session: false });
exports.isClientAuthenticated = passport.authenticate('client-basic', { session: false });
exports.isBearerAuthenticated = passport.authenticate('bearer', { session: false });