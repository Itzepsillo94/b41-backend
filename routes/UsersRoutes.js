const express = require('express');

const router = express.Router();

const { UsersController } = require('../controllers');
const { UsersValidator } = require('../validator');
const { verifyToken } = require('../middlewares');

// Create
router.post('/users',
  UsersValidator.create,
  UsersController.create);

// Read all
router.get('/users',
  verifyToken,
  UsersController.findAll);

module.exports = router;
