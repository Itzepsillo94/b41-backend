const { UsersService, PostsService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      // Ticket
      const { id } = req.params;
      // 1. Encontrar el usuario por el id que me pasan por parms
      const user = await UsersService.findOneById(id);
      // 2. Crear el objeto  de POST
      const post = await PostsService.create(req.body);
      // 3. Agregar post al usario
      const userWithPost = await UsersService.addPost(user, post);
      // 4. Responderle al cliente con el usuario actualizado
      res.status(201).json(userWithPost);
    } catch (error) {
      res.status(400).json({ message: 'Error ' });
    }
  },
};
