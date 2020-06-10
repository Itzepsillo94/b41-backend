/* eslint-disable no-param-reassign */
const { UsersService } = require('../services');
const { comparePassword } = require('../utils');

module.exports = {
  register: (req, res) => {
    UsersService.create(req.body)
      .then((user) => {
        user.password = undefined;
        res.status(201).json(user);
      })
      .catch((err) => res.status(400).json(err));
  },
  login: (req, res) => {
    const { email, password } = req.body;
    // 1) Comprobar que el correo existe
    UsersService.findOneByEmail(email)
      .then((user) => {
        if (!user) res.status(404).json({ message: 'User not found' });
        return comparePassword(password, user.password);
      })
    // 2) Comprobar la contrasena
      .then((isValidPassword) => {
        if (!isValidPassword) res.status(400).json({ message: 'Credentials Error' });
        return res.status(200).json({ loggendIn: isValidPassword });
      })
      .catch((err) => res.status(400).json(err));
    // 3) Crear token con las credenciales del usuario
    // 4) Enviar token al cliente
  },
};
