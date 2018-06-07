const Book = require('mongoose').model('Book');

module.exports = {
  index(request, response) {
    console.log('getting books from server');
    Book.find({})
      .then(books => response.json(books))
      .catch(console.log);
  },
  create(request, response) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(error => {
        response
          .status(502)
          .json(
            Object.keys(error.errors).map(key => error.errors[key].message)
          );
      });
  },
  show(request, response) {
    Book.findById(request.params.book_id)
      .then(book => response.json(book))
      .catch(console.log);
  },
  update(request, response) {
    Book.findByIdAndUpdate(request.params.book_id, request.body, { new: true })
      .then(book => response.json(book))
      .catch(console.log);
  },
  destroy(request, response) {
    Book.findByIdAndRemove(request.params.book_id)
      .then(book => response.json(book))
      .catch(console.log);
  },
};
