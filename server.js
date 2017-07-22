// Get the packages we need
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookController = require('./controllers/book');
const userController = require('./controllers/user');
const passport = require('passport');
const authController = require('./controllers/auth');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/restful-api-with_node');

// Create our Express application
const app = express();

// Use body-parser package
app.use(bodyParser.urlencoded({ extended: true }));

// Use the passport package
app.use(passport.initialize());

// Use environment defined port or 3000
const port = process.env.PORT || 3000;

// Create our Express router
const router = express.Router();

// Create endpoints for /books
router.route('/books')
  .post(authController.isAuthenticated, bookController.postBooks)
  .get(authController.isAuthenticated, bookController.getBooks);

router.route('/books/:book_id')
  .get(authController.isAuthenticated, bookController.getBook)
  .put(authController.isAuthenticated, bookController.putBook)
  .delete(authController.isAuthenticated, bookController.deleteBook);

router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);