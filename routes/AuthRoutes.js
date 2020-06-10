const express = require('express');

const router = express.Router();

const { AuthValidator } = require('../validator');
const { AuthController } = require('../controllers');

router.post('/register',
  AuthValidator.register,
  AuthController.register);

module.exports = router;
