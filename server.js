// Get the packages we need
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookController = require('./controllers/book');
const userController = require('./controllers/user');
const passport = require('passport');
const authController = require('./controllers/auth');
const clientController = require('./controllers/client');
const ejs = require('ejs');
const session = require('express-session');
const oauth2Controller = require('./controllers/oauth2');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/restful-api-with_node');

// Create our Express application
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use body-parser package
app.use(bodyParser.urlencoded({ extended: true }));

// Use Express session support since OAuth2orize requires it
app.use(session({
  secret: 'Super Secret Session Key',
  saveUninitialized: true,
  resave: true
}));

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

router.route('/clients')
  .post(authController.isAuthenticated, clientController.postClients)
  .get(authController.isAuthenticated, clientController.getClients);

// Create endpoint handlers for oauth2 authorize
router.route('/oauth2/authorize')
  .get(authController.isAuthenticated, oauth2Controller.authorization)
  .post(authController.isAuthenticated, oauth2Controller.decision);

// Create endpoint handlers for oauth2 token
router.route('oauth2/token')
  .post(authController.isClientAuthenticated, oauth2Controller.token);

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);