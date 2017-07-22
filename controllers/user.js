// Load the required packages
const User = require('../models/user');

// Create endpoint /api/users for POST
exports.postUsers = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  user.save((err) => {
    if (err) {
      res.send(err);
    }

    res.json({ message: 'New reader added to the club!' });
  });
};

exports.getUsers = (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
};