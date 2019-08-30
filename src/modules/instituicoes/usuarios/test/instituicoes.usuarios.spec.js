/* global describe, it, expect, server, before */

const factory = require('../../../../test-utils/factory.girl');

const ENDPOINT = '/instituicoes/usuarios';

describe(`Routes instituicoes ${ENDPOINT}`, () => {
  let token = null;
  before((done) => {
    factory.getToken(server, 'isolina@gmail.com', 'isolina')
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
        done();
      });
    });
  });
});
