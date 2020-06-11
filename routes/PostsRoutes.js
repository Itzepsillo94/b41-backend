const express = require('express');

const router = express.Router();

const {  } = require('../controllers');
const {  } = require('../validator');

// Create
router.post('/users/:id/posts',
PostsValidator.create,
PostsController.create);


module.exports = router;
