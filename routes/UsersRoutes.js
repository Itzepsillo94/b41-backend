const express = require('express');

const router = express.Router();

const { UsersController } = require('../controllers');
const { UsersValidator } = require('../validator');

router.post('/api/v1/users',
  UsersValidator.create,
  UsersController.create);

module.exports = router;
