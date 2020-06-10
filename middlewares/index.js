const jwt = require('jsonwebtoken');

module.exports = {
  verifyToken: (req, res, next) => {
    console.log(req.headers);
    const { authorization } = req.headers;
    // los separa en un arreglo cuando encuentra un espacion
    // ["Bearer","token"]
    try {
      const token = authorization.split(' ');
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(`se observa el decoded ${decoded}`);
      req.decoded = decoded;
      next();
    } catch (error) {
      res.status(404).json({ message: 'Autho error', error });
    }
  },
};
