const { createPagination } = require('../utils');

const paginationModels = require('../models/paginationModels');

const setPagination = (quantidadePaginas, paginaAtual) => {
  const qtdPaginasNum = Number(quantidadePaginas);
  const paginaAtualNum = Number(paginaAtual);

  const id = paginationModels.setPagination();
  let paginacao;
  
  paginacao = createPagination(qtdPaginasNum, paginaAtualNum);
  
  const result = { id, paginacao };

  return result;
}

module.exports = {
  setPagination
};
