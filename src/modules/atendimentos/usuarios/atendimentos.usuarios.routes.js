'use strict';

const Controller = require('./atendimentos.usuarios.controller');
const Validator = require('./atendimentos.usuarios.validation');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/atendimentos/usuarios',
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
      path: '/atendimentos/usuarios/{ra}',
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
    },
    {
      method: 'PUT',
      path: '/atendimentos/usuarios/{id}',
      config: {
        description: 'PUT usuarios',
        notes: 'Update the usuarios',
        tags: ['api', 'usuarios'],
        auth: {
          scope: ['usuarios']
        },
        handler: Controller.update,
        validate: Validator.update()
      }
    },
    {
      method: 'POST',
      path: '/atendimentos/usuarios',
      config: {
        description: 'POST usuarios',
        notes: 'Save a usuarios',
        tags: ['api', 'usuarios'],
        auth: {
          scope: ['usuarios']
        },
        handler: Controller.create,
        validate: Validator.create()
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'atendimentos-usuarios-route',
  version: '1.0.0'
};
