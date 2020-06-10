const express = require('express');

const router = express.Router();

const { AuthValidator } = require('../validator');
const { AuthController } = require('../controllers');

router.post('/register',
  AuthValidator.register,
  AuthController.register);

router.post('/login',
  AuthValidator.login,
  AuthController.login);

module.exports = router;
