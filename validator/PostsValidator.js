const {
  celebrate,
  Joi,
  Segments,
} = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      images: Joi.array().items(Joi.string()),
      content: Joi.string().required(),
      date: Joi.string().email().required(),
      tags: Joi.array().items(Joi.string()),
    }),
  }),
};
