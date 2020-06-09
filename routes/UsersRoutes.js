const express = require('express');

const router = express.Router();

const { UsersController } = require('../controllers');
const { UsersValidator } = require('../validator');

// Create
router.post('/users',
  UsersValidator.create,
  UsersController.create);

// Read all
router.get('/users',
  UsersController.findAll);

module.exports = router;
