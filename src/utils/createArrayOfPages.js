const boldChar = require('./boldChar');

module.exports = ({ index, maxIndex, paginaAtual, needsEllipBefore, needsEllipAfter }) => {
  const paginacao = [];
  const ellipsis = '...';
  for (index; index <= maxIndex; index += 1) {
    if (index === paginaAtual) paginacao.push(boldChar(paginaAtual));
    else paginacao.push(index.toString());
  }
  if (needsEllipBefore) paginacao.unshift(ellipsis);
  if (needsEllipAfter) paginacao.push(ellipsis);
  return paginacao;
};
