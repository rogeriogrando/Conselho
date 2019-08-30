/* global describe, it, expect, server, before */

const factory = require('../../../../test-utils/factory.girl');

const ENDPOINT = '/parentes/usuarios';

describe(`Routes usuarios ${ENDPOINT}`, () => {
  let token = null;
  before((done) => {
    factory.getToken(server, 'chritian@gmail.com', 'chritian')
    .then((context) => {
      token = context.token;
      done();
    });
  });
  describe(`POST ${ENDPOINT}`, () => {
    it('returns 200 HTTP status code', (done) => {
      const options = {
        method: 'POST',
        url: `${ENDPOINT}`,
        headers: {'Authorization': `Bearer ${token}`},
        payload: getDefault()
      };
      server.inject(options, (response) => {
        expect(response.result).to.exist();
        expect(response.statusCode).to.equals(200);
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
        done();
      });
    });
  });
});

function getDefault () {
  let payload = {
    nome: 'Matilde da Silva',
    rg: '121254152',
    cpf: '55446871868',
    sexo: 'Feminino',
    parentesco: 'Mãe'
  };
  return payload;
}
