'use strict';

const Controller = require('./instituicoes.usuarios.controller');
const Validator = require('./instituicoes.usuarios.validation');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/instituicoes/usuarios',
      config: {
        description: 'GET usuarios',
        notes: 'Returns a usuarios',
        tags: ['api', 'usuarios'],
        auth: {
          scope: ['usuarios']
        },
        handler: Controller.list,
        validate: Validator.list()
      }
    },

    {
      method: 'GET',
      path: '/instituicoes/usuarios/{id}',
      config: {
        description: 'GET usuarios',
        notes: 'Returns a usuarios for id passed in the params',
        tags: ['api', 'usuarios'],
        auth: {
          scope: ['usuarios']
        },
        handler: Controller.read,
        validate: Validator.read()
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'instituicoes-usuarios-route',
  version: '1.0.0'
};
