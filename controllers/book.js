// Load the required packages
const Book = require('../models/book');

exports.postBooks = (req, res) => {
  // Create a new instance of the Book model
  var book = new Book();

  // Set the book properties that came from the POST data
  book.name = req.body.name;
  book.type = req.body.type;
  book.quantity = req.body.quantity;
  book.userId = req.user._id;

  // Save the book and check for errors
  book.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Book added to the shelf!', data: book });
  });
};

exports.getBooks = (req, res) => {
  // User the Book model to find all books.
  Book.find({ userId: req.user._id }, (err, books) => {
    if (err) {
      res.send(err);
    }
    res.json(books);
  });
};

exports.getBook = (req, res) => {
  // Use the Book model to find a specific book.
  Book.findById( { userId: req.user._id, _id: req.params.book_id }, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
};

exports.putBook = (req, res) => {
  // Use the Book model to find a specific book.
  Book.findById({ userId: req.user._id, _id: req.params.book_id }, (err, book) => {
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
};

exports.deleteBook = (req, res) => {
  Book.findByIdAndRemove({ userId: req.user._id, _id: req.params.book_id }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Book removed from shelf' });
  });
};