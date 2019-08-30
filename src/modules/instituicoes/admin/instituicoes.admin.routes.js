'use strict';

const Controller = require('./instituicoes.admin.controller');
const Validator = require('./instituicoes.admin.validation');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/instituicoes/admin',
      config: {
        description: 'GET admin',
        notes: 'Returns a admin',
        tags: ['api', 'admin'],
        auth: {
          scope: ['admin']
        },
        handler: Controller.list,
        validate: Validator.list()
      }
    },

    {
      method: 'GET',
      path: '/instituicoes/admin/{id}',
      config: {
        description: 'GET admin',
        notes: 'Returns a admin for id passed in the params',
        tags: ['api', 'admin'],
        handler: Controller.read,
        validate: Validator.read()
      }
    },
    {
      method: 'POST',
      path: '/instituicoes/admin',
      config: {
        description: 'POST admin',
        notes: 'Save a admin',
        tags: ['api', 'admin'],
        handler: Controller.create,
        validate: Validator.create()
      }
    },

    {
      method: 'PUT',
      path: '/instituicoes/admin/{id}',
      config: {
        description: 'PUT admin',
        notes: 'Update the admin',
        tags: ['api', 'admin'],
        handler: Controller.update,
        validate: Validator.update()
      }
    },
    {
      method: 'DELETE',
      path: '/instituicoes/admin/{id}',
      config: {
        description: 'DELETE admin',
        notes: 'Delete the admin for id passed in the params',
        tags: ['api', 'admin'],
        handler: Controller.destroy,
        validate: Validator.destroy()
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'instituicoes-admin-route',
  version: '1.0.0'
};
