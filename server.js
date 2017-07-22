// Get the packages we need
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
Book = require('./models/book');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/restful-api-with_node');

// Create our Express application
const app = express();

// Use body-parser package
app.use(bodyParser.urlencoded({ extended: true }));

// Use environment defined port or 3000
const port = process.env.PORT || 3000;

// Create our Express router
const router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({ message: 'You are running dangerously low on beer!' });
});

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Insert beer on port ' + port);




const booksRoute = router.route('/books');

// Create endpoint /api/books for POSTS
booksRoute.post(function(req, res) {
  // Create a new instance of the Books model
  var book = new Book();

  // Set the book properties that came from the POST data
  book.name = req.body.name;
  book.type = req.body.type;
  book.quantity = req.body.quantity;

  // Save the book and check for errors
  book.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Book added to the shelf!', data: book });
  });
});

booksRoute.get((req, res) => {
  Book.find((err, books) => {
    if (err) {
      res.send(err);
    }
    res.json(books);
  });
});

// Creating a new route /books/:book_id
const bookRoute = router.route('/books/:book_id');

// Creating GET end point for the /books/:book_id route
bookRoute.get((req, res) => {
  Book.findById(req.params.book_id, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
});

// Creating PUT endpoint /books/:book_id
bookRoute.put((req, res) => {
  Book.findById(req.params.book_id, (err, book) => {
    if (err) {
      res.send(err);
    }
    // Update the quantity...
    book.quantity = req.body.quantity;
    // And save.
    book.save((err) => {
      if (err) {
        res.send(err);
      }
      res.json(book);
    });
  });
});

// Creating DEL endpoint /book/:book_id
bookRoute.delete((req, res) => {
  Book.findByIdAndRemove(req.params.book_id, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Book removed from shelf' });
  });
});

