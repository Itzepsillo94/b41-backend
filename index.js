/* eslint-disable no-console */
require('dotenv').config();
require('./mongoClient');
const api = require('./api');

// Si no existe la variable de entorno PORT utiliza el puerto 3000
const PORT = process.env.PORT || 3000;

api.listen(PORT, () => console.log(`Server listening on ${PORT}`));
