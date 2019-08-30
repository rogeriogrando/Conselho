'use strict';

const Controller = require('./menor.usuarios.controller');
const Validator = require('./menor.usuarios.validation');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/menor/usuarios',
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
      path: '/menor/usuarios/{ra}',
      config: {
        description: 'Find a menor by RA',
        notes: 'Return a row by RA passed in the params',
        tags: ['api', 'conselho', 'usuarios'],
        auth: {
          scope: ['conselho', 'usuarios']
        },
        handler: Controller.read,
        validate: Validator.read()
      }
    },
    {
      method: 'PUT',
      path: '/menor/usuarios/{ra}',
      config: {
        description: 'Edit a menor by RA',
        notes: 'Update the row by RA passed in the params',
        tags: ['api', 'conselho', 'usuarios'],
        auth: {
          scope: ['conselho', 'usuarios']
        },
        handler: Controller.update,
        validate: Validator.update()
      }
    },
    {
      method: 'POST',
      path: '/menor/usuarios',
      config: {
        description: 'Create a new menor',
        notes: 'Save a new row on table menor',
        tags: ['api', 'conselho', 'usuarios'],
        auth: {
          scope: ['conselho', 'usuarios']
        },
        handler: Controller.create,
        validate: Validator.create()
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'menor-usuarios-route',
  version: '1.0.0'
};
