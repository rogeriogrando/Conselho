/* global describe, it, expect, server, before */

const factory = require('../../../../test-utils/factory.girl');

const ENDPOINT = '/menor/usuarios';

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
        url: `${ENDPOINT}/654321`,
        headers: {'Authorization': `Bearer ${token}`}
      };
      server.inject(options, (response) => {
        console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', response.result.dataValues.nome);
        expect(response.result.dataValues.nome).to.equals('Abraão Vieira');
        done();
      });
    });
  });
});

function getDefault () {
  let payload = {
    instituicao_id: 2,
    nome: 'Sulisclei',
    sus: '321321321321321',
    nascimento: '2012-01-01 00:00:00.0',
    telres: '88888888',
    telcel: '88888888',
    cidade: 'Cerquilho',
    uf: 'SP',
    cep: '18520000',
    bairro: 'Centro',
    rua: 'Rua centro',
    numero: '123'
  };
  return payload;
}
