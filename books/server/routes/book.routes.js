const { bookController } = require('../controllers');
const router = require('express').Router();

// /books/:book_id
// /books
module.exports = router
  .get('/', bookController.index)
  .get('/:book_id', bookController.show)
  .post('/', bookController.create)
  .put('/:book_id', bookController.update)
  .delete('/:book_id', bookController.destroy);
