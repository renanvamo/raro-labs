const paginationServices = require('../services/paginationServices.js');

const setPagination = (req, res) => {
  const { quantidadePaginas, paginaAtual } = req.query;

  const result = paginationServices.setPagination(quantidadePaginas, paginaAtual);

  res.status(200).json(result);
};

module.exports = {
  setPagination
};