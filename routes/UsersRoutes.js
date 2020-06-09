const express = require('express');

const router = express.Router();

const { UsersController } = require('../controllers');
const { UsersValidator } = require('../validator');

// Create
router.post('/api/v1/users',
  UsersValidator.create,
  UsersController.create);

// Read all
router.get('/api/v1/users',
  UsersController.findAll);

module.exports = router;
