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
