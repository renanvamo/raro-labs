const createArrayOfPages = require('./createArrayOfPages');

module.exports = (quantidadePaginas, paginaAtual) => {
  const needsEllipAfter = true;
  const needsEllipBefore = true;

  if (quantidadePaginas <= 5) {
    const maxIndex = quantidadePaginas;
    const index = 1;
    const paginacao = createArrayOfPages({ index, maxIndex, paginaAtual });
    return paginacao;
  }

  if (paginaAtual > quantidadePaginas - 3) {
    const index = quantidadePaginas - 4;
    const maxIndex = quantidadePaginas;
    const paginacao = createArrayOfPages({ index, maxIndex, paginaAtual, needsEllipBefore });
    return paginacao;
  }

  if (paginaAtual <= 3) {
    const index = 1;
    const maxIndex = 5;
    const paginacao = createArrayOfPages({ index, maxIndex, paginaAtual, needsEllipAfter });
    return paginacao;
  }

  const index = paginaAtual - 2;
  const maxIndex = paginaAtual + 2;
  const paginacao = createArrayOfPages({ index, maxIndex, paginaAtual, needsEllipAfter, needsEllipBefore });
  return paginacao;
};