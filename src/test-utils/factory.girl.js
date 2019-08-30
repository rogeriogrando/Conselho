'use strict';

const Promise = require('bluebird');

module.exports = {
  getToken
};

function getToken (server, email, password) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      url: '/usuarios/usuarios/login',
      payload: {
        email: email,
        password: password
      }
    };
    server.inject(options, (response) => {
      const context = {
        token: response.result.token
      };
      resolve(context);
    });
  });
}
