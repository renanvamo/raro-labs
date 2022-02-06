const chaiHttp = require('chai-http');
const chai = require('chai');
let app = require('../src/api/app');
const { expect } = chai;

describe('testing api end to end', () => {
  before(() => {
    chai.use(chaiHttp);
  });

  describe('if a valid arguments were given', () => {
    it('should return an object with "id" and "pagination"', () => {
      chai.request(app)
        .get('/paginacao')
        .query({ paginaAtual: 1, quantidadePaginas: 5 })
        .then((res) => {
          expect(res).to.have.property('id');
          expect(res).to.have.property('paginacao');
        });
    });
    it('should return an status 200"', () => {
      chai.request(app)
        .get('/paginacao')
        .query({ paginaAtual: 1, quantidadePaginas: 5 })
        .then((res) => {
          expect(res).to.have.status(200);
        });
    });
  });
});