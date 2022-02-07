const chaiHttp = require('chai-http');
const chai = require('chai');
let app = require('../src/api/app');
const { expect } = chai;

describe('testing api end to end', () => {
  before(() => {
    chai.use(chaiHttp);
  });

  describe('if a valid arguments were given', () => {
    let connection;
    beforeEach(() => {
      connection = chai.request(app)
        .get('/paginacao')
        .query({ paginaAtual: 1, quantidadePaginas: 5 });
    });
  
    it('should return an object with "id" and "pagination"', () => {
      connection
        .end((_err, res) => {
          expect(res.body).to.have.property('id');
          expect(res.body).to.have.property('paginacao');
        });
    });
  
    it('should return an status 200"', () => {
      connection
        .end((_err, res) => {
          expect(res).to.have.status(200);
        });
    });

    it('verify if "id" is a number and "pagination" is an array', () => {
      connection
        .end((_err, res) => {
          expect(res.body.id).to.be.a('number');
          expect(res.body.paginacao).to.be.an('array');
        });
    });

  });
});