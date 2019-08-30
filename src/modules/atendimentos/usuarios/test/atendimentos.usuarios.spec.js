/* global describe, it, expect, server, before */

const factory = require('../../../../test-utils/factory.girl');

const ENDPOINT = '/atendimentos/usuarios';

describe(`Routes usuarios ${ENDPOINT}`, () => {
  let token = null;
  before((done) => {
    factory.getToken(server, 'odair@gmail.com', 'odair')
    .then((context) => {
      token = context.token;
      done();
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
        expect(response.result.count).to.equals(1);
        done();
      });
    });
  });
  describe(`POST ${ENDPOINT}`, () => {
    it('Cadastro atendimentos POST returns 200 HTTP status code', (done) => {
      const options = {
        method: 'POST',
        url: `${ENDPOINT}`,
        headers: {'Authorization': `Bearer ${token}`},
        payload: getDefault()
      };
      server.inject(options, (response) => {
        expect(response.statusCode).to.equals(200);
        done();
      });
    });
  });
  describe(`PUT ${ENDPOINT}`, () => {
    it('PUT returns 200 HTTP status code', (done) => {
      let payload = {
        bairro: 'Bairro mudado 2',
        rua: 'Rua mudada tambem 2'
      };
      const options = {
        method: 'PUT',
        url: `${ENDPOINT}/2`,
        headers: {'Authorization': `Bearer ${token}`},
        payload: payload
      };
      server.inject(options, (response) => {
        console.log(response.result);
        expect(response.statusCode).to.equals(404);
        done();
      });
    });
  });
});

function getDefault () {
  let payload = {
    instituicao_dest_id: 4,
    ra: '654321',
    escola: 'Escola Estadual Abílio Fontes',
    serie: '4',
    periodo: 'Noite',
    direitoviolado: 'Direito aos estudos',
    motivodenuncia: 'Maus tratos'
  };
  return payload;
}
