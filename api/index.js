const express = require('express');


const api = express();

api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));

api.get('/', (req, res) => res.json({ message: 'Hello Dev.F' }));

// Se define que todas los endpoint inicien con api
// api.use('/api');

api.use(require('../routes/UsersRoutes'));

module.exports = api;
