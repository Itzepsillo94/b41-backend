/* eslint-disable no-param-reassign */
const { UsersService } = require('../services');
const { comparePassword, createToken } = require('../utils');

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
    let globalUser;
    // 1) Comprobar que el correo existe
    UsersService.findOneByEmail(email)
      .then((user) => {
        globalUser = user;
        if (!user) res.status(404).json({ message: 'User not found' });
        return comparePassword(password, user.password);
      })
    // 2) Comprobar la contrasena
      .then((isValidPassword) => {
        if (!isValidPassword) res.status(400).json({ message: 'Credentials Error' });
        const token = createToken(globalUser);
        if (!token) res.status(400).json({ message: 'Error creating token' });
        res.status(200).json({ message: 'Successful Login', token });
      })
    // 3) Crear token con las credenciales del usuario
    // 4) Enviar token al cliente
      .catch((err) => res.status(400).json(err));
  },
};
