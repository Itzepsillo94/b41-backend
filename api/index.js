const express = require('express');
const { errors } = require('celebrate');

const api = express();

api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));

api.get('/', (req, res) => res.json({ message: 'Hello Dev.F' }));


api.use(require('../routes/UsersRoutes'));

api.use(errors());

module.exports = api;
