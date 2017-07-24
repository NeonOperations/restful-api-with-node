// Load the required packages
const oauth2orize = require('oauth2orize');
const User = require('../models/user');
const Client = require('../models/client');
const Token = require('../models/token');
const Code = require('../models/code');

// Create an Oauth 2.0 server
const server = oauth2orize.createServer();

// Register serialization function
server.serializeClient((client, callback) => {
  return callback(null, client._id);
});

// Register de-serialization function
server.deserializeClient((id, callback) => {
  Client.findOne({ _id: id }, (err, client) => {
    if (err) {
      return callback(err);
    }
    return callback(null, client);
  });
});

// Register authorization code grant type
server.grant(oauth2orize.grant.code((client, redirectUri, user, ares, callback) => {
  // Create a new authorization code
  const code = new Code({
    value: uid(16),
    clientId: client._id,
    redirectUri: redirectUri,
    userId: user._id
  });

  // Save the auth code and check for errors
  code.save((err) => {
    if (err) {
      return callback(err);
    }

    callback(null, code.value);
  });
}));

// Exchange authorization codes for access tokens
server.exchange(oauth2orize.exchange.code((client, code, redirectUri, callback) => {
  Code.findOne({ value: code }, (err, authCode) => {
    if (err) {
      return callback;
    }
    if (authCode === undefined) {
      return callback(null, false);
    }
    if (client._id.toString() !== authCode.clientId) {
      return callback(null, false);
    }
    if (redirectUri !== authCode.redirectUri) {
      return callback(null, false);
    }

    // Delete auth code now that it has been used
    authCode.remove((err) => {
      if (err) {
        return callback(err);
      }

      // Create a new access token
      const token = new Token({
        value: uid(256),
        clientId: authCode.clientId,
        userId: authCode.userId
      });

      // Save the access token and check for errors
      token.save((err) => {
        if (err) {
          callback(err);
        }
        
        callback(null, token);
      });
    });
  });
}));

// User authorization endpoint
exports.authorization = [
  server.authorization((clientId, redirectUri, callback) => {
    Client.findOne({ id: clientId }, (err, client) => {
      if (err) {
        return callback(err);
      }
      return callback(null, client, redirectUri);
    });
  }),
  (req, res) => {
    console.log(req.oauth2.transactionID);
    res.render('dialog',
    { 
      transactionID: req.oauth2.transactionID,
      user: req.user,
      client: req.oauth2.client
    });
  }
]

// User decision endpoint
exports.decision = [
  server.decision()
]

// Application client token exchange endpoint. This endpoint is set up to
// handle the request made by the application client after it has been 
// granted an authorization code by the user.
exports.token = [
  server.token(),
  server.errorHandler()
]

// Utility functions to generate unique identifiers
function uid (len) {
  const buf = []
    , chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    , charlen = chars.length;

  for (let i = 0; i < len; ++i) {
    buf.push(chars[getRandomInt(0, charlen -1)]);
  }

  return buf.join('');
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}