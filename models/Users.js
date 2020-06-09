const mongoose = require('mongoose');

// Se agregara trim para validar que no exista espacios en blanco
const UsersSchema = mongoose.Schema({
  first_name: {
    type: String,
    require: true,
    trim: true,
  },
  last_name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;
