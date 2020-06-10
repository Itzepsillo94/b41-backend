const bcrypt = require('bcrypt');

module.exports = {
  comparePassword: (loggedPassword, registerdPassword) => bcrypt
    .compare(loggedPassword, registerdPassword),
};
