/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  comparePassword: (loggedPassword, registerdPassword) => bcrypt
    .compare(loggedPassword, registerdPassword),

  createToken: (user) => {
    const payload = {
      id: user._id,
      email: user.email,
      first_name: user.first_name,
    };
    try {
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      return token;
    } catch (error) {
      return undefined;
    }
  },
};
