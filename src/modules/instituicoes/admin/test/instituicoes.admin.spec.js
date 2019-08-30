/* global describe, it, expect, server, before */

const factory = require('../../../../test-utils/factory.girl');

const ENDPOINT = '/instituicoes/admin';

describe(`Routes instituicoes ${ENDPOINT}`, () => {
  let token = null;
  before((done) => {
    factory.getToken(server, 'rgrando.unique@gmail.com', 'rgrando')
    .then((context) => {
      token = context.token;
      done();
    });
  });
  describe(`GET ${ENDPOINT}`, () => {
    it('returns 200 HTTP status code', (done) => {
      const options = {
        method: 'GET',
        url: ENDPOINT,
        headers: {'Authorization': `Bearer ${token}`}
      };
      server.inject(options, (response) => {
        expect(response.result.count).to.exist();
        expect(response.result.count).to.equals(5);
        expect(response.result.rows).to.exist();
        expect(response.result.rows[0].nome).to.equals('Conselho Tutelar de Itapetininga');
        done();
      });
    });
  });
});
