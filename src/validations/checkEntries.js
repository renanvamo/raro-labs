const { type } = require('express/lib/response');
const Joi = require('joi');

module.exports = (req, res, next) => {
  const { quantidadePaginas, paginaAtual } = req.query;

  const schema = Joi.object({
    paginaAtual: Joi.number().required().min(1),
    quantidadePaginas: Joi.number().required().min(1),
  });
  
  const { error } = schema.validate(req.query);
  const outOfRange = Number(paginaAtual) > Number(quantidadePaginas);
  
  if (error || outOfRange) {
    return res.status(401).json({ message: 'Invalid data' });
  };
  
  next();
};