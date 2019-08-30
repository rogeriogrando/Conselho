'use strict';

const Controller = require('./parentes.usuarios.controller');
const Validator = require('./parentes.usuarios.validation');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/parentes/usuarios',
      config: {
        description: 'Find list parenteses',
        notes: 'Returns a parenteses list requested by usuarios user',
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
      path: '/parentes/usuarios/{rg}',
      config: {
        description: 'Find a parentes by rg',
        notes: 'Return a row by rg passed in the pargms',
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
      path: '/parentes/usuarios/{rg}',
      config: {
        description: 'Edit a parentes by rg',
        notes: 'Update the row by rg passed in the pargms',
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
      path: '/parentes/usuarios',
      config: {
        description: 'Create a new parentes',
        notes: 'Save a new row on table parentes',
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
  name: 'parentes-usuarios-route',
  version: '1.0.0'
};
