const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    year: Number,
    pages: Number,
    author: {
      type: String,
      required: true,
      trim: true,
    },
    publisher: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Book', bookSchema);
