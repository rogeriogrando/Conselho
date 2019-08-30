'use strict';

const Controller = require('./atendimentos.conselho.controller');
const Validator = require('./atendimentos.conselho.validation');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/atendimentos/conselho',
      config: {
        description: 'GET conselho',
        notes: 'Returns a conselho',
        tags: ['api', 'conselho'],
        auth: {
          scope: ['conselho']
        },
        handler: Controller.list,
        validate: Validator.list()
      }
    },
    {
      method: 'GET',
      path: '/atendimentos/conselho/{ra}',
      config: {
        description: 'GET conselho',
        notes: 'Returns a conselho for id passed in the params',
        tags: ['api', 'conselho'],
        auth: {
          scope: ['conselho']
        },
        handler: Controller.read,
        validate: Validator.read()
      }
    },
    {
      method: 'PUT',
      path: '/atendimentos/conselho/{id}',
      config: {
        description: 'PUT conselho',
        notes: 'Update the conselho',
        tags: ['api', 'conselho'],
        auth: {
          scope: ['conselho']
        },
        handler: Controller.update,
        validate: Validator.update()
      }
    },
    {
      method: 'POST',
      path: '/atendimentos/conselho',
      config: {
        description: 'POST conselho',
        notes: 'Save a conselho',
        tags: ['api', 'conselho'],
        auth: {
          scope: ['conselho']
        },
        handler: Controller.create,
        validate: Validator.create()
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'atendimentos-conselho-route',
  version: '1.0.0'
};
