const express = require('express');

const router = express.Router();

const { PostsController } = require('../controllers');
const { PostsValidator } = require('../validator');

// Create
router.post('/users/:id/posts',
  PostsValidator.create,
  PostsController.create);


module.exports = router;
