/* global describe, it, expect, server, before */

const factory = require('../../../../test-utils/factory.girl');

const ENDPOINT = '/usuarios/usuarios';

describe(`Routes usuarios ${ENDPOINT}`, () => {
  let token = null;
  before((done) => {
    factory.getToken(server, 'rgrando.unique@gmail.com', 'rgrando')
    .then((context) => {
      token = context.token;
      done();
    });
  });
  describe(`POST ${ENDPOINT}/login`, () => {
    it('returns 200 HTTP status code', (done) => {
      const options = {
        method: 'POST',
        url: `${ENDPOINT}/login`,
        payload: {
          email: 'rgrando.unique@gmail.com',
          password: 'rgrando'
        }
      };
      server.inject(options, (response) => {
        expect(response.result).to.exist();
        expect(response.result.token).to.exist();
        expect(response.statusCode).to.equals(200);
        done();
      });
    });

    it('returns 401 HTTP status code', (done) => {
      const options = {
        method: 'POST',
        url: `${ENDPOINT}/login`,
        payload: {
          email: 'login_test@gmail.com',
          password: 'test_009'
        }
      };
      server.inject(options, (response) => {
        expect(response.result.statusCode).to.equals(401);
        expect(response.result.error).to.equals('Unauthorized');
        done();
      });
    });
  });
  describe(`GET ${ENDPOINT}`, () => {
    it('returns 200 HTTP status code', (done) => {
      const options = {
        method: 'GET',
        url: `${ENDPOINT}`,
        headers: {'Authorization': `Bearer ${token}`}
      };
      server.inject(options, (response) => {
        expect(response.result.count).to.exist();
        expect(response.result.count).to.equals(4);
        expect(response.result.rows).to.exist();
        done();
      });
    });
  });

  describe(`POST ${ENDPOINT}`, () => {
    it('returns 200 HTTP status code', (done) => {
      const options = {
        method: 'POST',
        url: `${ENDPOINT}`,
        headers: {'Authorization': `Bearer ${token}`},
        payload: getDefault1()
      };
      server.inject(options, (response) => {
        expect(response.statusCode).to.equals(200);
        expect(response.result).to.exist();
        expect(response.result.email).to.equals('conselho1@gmail.com');
        done();
      });
    });
  });
  describe(`POST ${ENDPOINT}/login`, () => {
    it('returns 200 HTTP status code', (done) => {
      const options = {
        method: 'POST',
        url: `${ENDPOINT}/login`,
        payload: {
          email: 'conselho1@gmail.com',
          password: 'conselho1'
        }
      };
      server.inject(options, (response) => {
        expect(response.result).to.exist();
        expect(response.result.token).to.exist();
        expect(response.statusCode).to.equals(200);
        token = expect(response.result.token);
        done();
      });
    });
    it('returns 200 HTTP status code', (done) => {
      const options = {
        method: 'POST',
        url: `${ENDPOINT}`,
        headers: {'Authorization': `Bearer ${token}`},
        payload: getDefault2()
      };
      server.inject(options, (response) => {
        expect(response.statusCode).to.equals(401);
        done();
      });
    });
  });
});

function getDefault1 () {
  let payload = {
    email: 'conselho1@gmail.com',
    password: 'conselho1',
    nome: 'conselho1',
    cargo: 'Gerente',
    rg: '241404162',
    habilitado: true,
    cpf: '22660729867',
    telefone: '19991591837',
    instituicoes_id: 2
  };
  return payload;
}

function getDefault2 () {
  let payload = {
    email: 'conselho2@gmail.com',
    password: 'conselho2',
    nome: 'conselho2',
    cargo: 'Gerente',
    rg: '22222222',
    habilitado: true,
    cpf: '2222222222',
    telefone: '19991591837',
    instituicoes_id: 2
  };
  return payload;
}
