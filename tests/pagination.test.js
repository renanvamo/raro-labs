const chaiHttp = require('chai-http');
const chai = require('chai');
let app = require('../src/api/app');
const { expect } = chai;

describe('testing api end to end', () => {
  before(() => {
    chai.use(chaiHttp);
  });

  it('if two valid arguments were given, should return an object with "id" and "pagination"', () => {
    chai.request(app)
      .get('/paginacao')
      .query({ paginaAtual: 1, quantidadePaginas: 5 })
      .then((res) => {
        expect(res).to.have.property('id');
        expect(res).to.have.property('paginacao');
      });
  });
});