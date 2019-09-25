var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: Array,
    required: true
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
    required: true
  }
});

// Create model using defined schema
var Book = mongoose.model("Book", BookSchema);

module.exports = Book;
