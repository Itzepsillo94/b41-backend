/* eslint-disable no-console */
const mongoose = require('mongoose');

// Asi accedemos a variables de entorno
//  process.env.MONGO_URI
const { MONGO_URI } = require('../config');

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database Connected'))
  .catch(() => console.log('Error connecting to database..'));
