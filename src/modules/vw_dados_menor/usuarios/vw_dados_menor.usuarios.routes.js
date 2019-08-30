'use strict';

const Controller = require('./vw_dados_menor.usuarios.controller');
const Validator = require('./vw_dados_menor.usuarios.validation');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/vw_dados_menor/usuarios',
      config: {
        description: 'Find list menores',
        notes: 'Returns a menores list requested by usuarios user',
        tags: ['api', 'conselho', 'usuarios'],
        auth: {
          scope: ['conselho', 'usuarios']
        },
        handler: Controller.list,
        validate: Validator.list()
      }
    },
    {
      method: 'GET',
      path: '/vw_dados_menor/usuarios/{ra}',
      config: {
        description: 'Find a vw_dados_menor by RA',
        notes: 'Return a row by RA passed in the params',
        tags: ['api', 'conselho', 'usuarios'],
        auth: {
          scope: ['conselho', 'usuarios']
        },
        handler: Controller.read,
        validate: Validator.read()
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'vw_dados_menor-usuarios-route',
  version: '1.0.0'
};
