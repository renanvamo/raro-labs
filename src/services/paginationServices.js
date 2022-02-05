const paginationModels = require('../models/paginationModels')

const setPagination = (quantidadePaginas, paginaAtual) => {
  const id = paginationModels.setPagination();

  const result = { id, paginacao: [] }

  return result
}

module.exports = {
  setPagination
}