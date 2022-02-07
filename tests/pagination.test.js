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

    
  describe('if "quantidadePaginas" is until 5, pagination property should be an array without ellipsis', () => {
    it('sending "paginaAtual" 1 and "quantidadePaginas" 5, should return [\'**1**\', \'2\', \'3\', \'4\', \'5\']', () => {
      chai.request(app)
        .get('/paginacao')
        .query({ paginaAtual: 1, quantidadePaginas: 5 })
        .end((_err, res) => {
          expect(res.body.paginacao).to.have.length(5);
          expect(res.body.paginacao).to.eql(['**1**', '2', '3', '4', '5']);
        });
    });

    it('sending "paginaAtual" 3 and "quantidadePaginas" 5, should return [\'1\', \'2\', \'**3**\', \'4\', \'5\']', () => {
      chai.request(app)
        .get('/paginacao')
        .query({ paginaAtual: 3, quantidadePaginas: 5 })
        .end((_err, res) => {
          expect(res.body.paginacao).to.have.length(5);
          expect(res.body.paginacao).to.eql(['1', '2', '**3**', '4', '5']);
        });
    });

    it('sending "paginaAtual" 5 and "quantidadePaginas" 5, should return [\'1\', \'2\', \'3\', \'4\', \'**5**\']', () => {
      chai.request(app)
        .get('/paginacao')
        .query({ paginaAtual: 5, quantidadePaginas: 5 })
        .end((_err, res) => {
          expect(res.body.paginacao).to.have.length(5);
          expect(res.body.paginacao).to.eql(['1', '2', '3', '4', '**5**']);
        });
    });

    it('sending "paginaAtual" 1 and "quantidadePaginas" 1, should return [\'**1**\']', () => {
      chai.request(app)
        .get('/paginacao')
        .query({ paginaAtual: 1, quantidadePaginas: 1 })
        .end((_err, res) => {
          expect(res.body.paginacao).to.have.length(1);
          expect(res.body.paginacao).to.eql(['**1**']);
        });
    });
    
    it('sending "paginaAtual" 2 and "quantidadePaginas" 4, should return [\'1\', \'2\', \'3\', \'**4**\']', () => {
      chai.request(app)
        .get('/paginacao')
        .query({ paginaAtual: 2, quantidadePaginas: 4 })
        .end((_err, res) => {
          expect(res.body.paginacao).to.have.length(4);
          expect(res.body.paginacao).to.eql(['1', '**2**', '3', '4']);
        });
    });
  });

  describe('if "quantidadePaginas" is bigger than 5, pagination property should be an array with ellipsis', () => {
    it('sending "paginaAtual" 1 and "quantidadePaginas" 20, should return [\'**1**\', \'2\', \'3\', \'4\', \'5\', \'...\']', () => {
      chai.request(app)
        .get('/paginacao')
        .query({ paginaAtual: 1, quantidadePaginas: 20 })
        .end((_err, res) => {
          expect(res.body.paginacao).to.have.length(6);
          expect(res.body.paginacao).to.eql(['**1**', '2', '3', '4', '5', '...']);
        });
    });

    it('sending "paginaAtual" 3 and "quantidadePaginas" 20, should return [\'1\', \'2\', \'**3**\', \'4\', \'5\', \'...\']', () => {
      chai.request(app)
        .get('/paginacao')
        .query({ paginaAtual: 3, quantidadePaginas: 20 })
        .end((_err, res) => {
          expect(res.body.paginacao).to.have.length(6);
          expect(res.body.paginacao).to.eql(['1', '2', '**3**', '4', '5', '...']);
        });
    });

    it('sending "paginaAtual" 13 and "quantidadePaginas" 20, should return [\'...\', \'11\', \'12\', \'**13**\', \'14\', \'15\', \'...\']', () => {
      chai.request(app)
        .get('/paginacao')
        .query({ paginaAtual: 13, quantidadePaginas: 20 })
        .end((_err, res) => {
          expect(res.body.paginacao).to.have.length(7);
          expect(res.body.paginacao).to.eql(['...', '11', '12', '**13**', '14', '15', '...']);
        });
    });

    it('sending "paginaAtual" 10 and "quantidadePaginas" 20, should return [\'...\', \'8\', \'9\', \'**10**\', \'11\', \'12\', \'...\']', () => {
      chai.request(app)
        .get('/paginacao')
        .query({ paginaAtual: 10, quantidadePaginas: 20 })
        .end((_err, res) => {
          expect(res.body.paginacao).to.have.length(7);
          expect(res.body.paginacao).to.eql(['...', '8', '9', '**10**', '11', '12', '...']);
        });
    });

    it('sending "paginaAtual" 18 and "quantidadePaginas" 20, should return [\'...\', \'16\', \'17\', \'**18**\', \'19\', \'20\']', () => {
      chai.request(app)
        .get('/paginacao')
        .query({ paginaAtual: 18, quantidadePaginas: 20 })
        .end((_err, res) => {
          expect(res.body.paginacao).to.have.length(6);
          expect(res.body.paginacao).to.eql(['...', '16', '17', '**18**', '19', '20']);
        });
    });

    it('sending "paginaAtual" 18 and "quantidadePaginas" 20, should return [\'...\', \'16\', \'17\', \'18\', \'19\', \'**20**\']', () => {
      chai.request(app)
        .get('/paginacao')
        .query({ paginaAtual: 20, quantidadePaginas: 20 })
        .end((_err, res) => {
          expect(res.body.paginacao).to.have.length(6);
          expect(res.body.paginacao).to.eql(['...', '16', '17', '18', '19', '**20**']);
        });
    });
  });
});
