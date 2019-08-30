'use strict';

const Controller = require('./usuarios.usuarios.controller');
const Validator = require('./usuarios.usuarios.validation');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/usuarios/usuarios',
      config: {
        description: 'GET usuarios',
        notes: 'Returns a usuarios',
        tags: ['api', 'usuarios'],
        auth: {
          scope: ['admin']
        },
        handler: Controller.list,
        validate: Validator.list()
      }
    },

    {
      method: 'GET',
      path: '/usuarios/usuarios/{id}',
      config: {
        description: 'GET usuarios',
        notes: 'Returns a usuarios for id passed in the params',
        tags: ['api', 'usuarios'],
        handler: Controller.read,
        validate: Validator.read()
      }
    },
    {
      method: 'POST',
      path: '/usuarios/usuarios',
      config: {
        description: 'POST admin',
        notes: 'Save a admin',
        tags: ['api', 'admin'],
        auth: {
          scope: ['admin']
        },
        handler: Controller.create,
        validate: Validator.create()
      }
    },

    {
      method: 'PUT',
      path: '/usuarios/usuarios/{id}',
      config: {
        description: 'PUT usuarios',
        notes: 'Update the usuarios',
        tags: ['api', 'admin'],
        auth: {
          scope: ['admin']
        },
        handler: Controller.update,
        validate: Validator.update()
      }
    },
    {
      method: 'DELETE',
      path: '/usuarios/usuarios/{id}',
      config: {
        description: 'DELETE usuarios',
        notes: 'Delete the usuarios for id passed in the params',
        tags: ['api', 'admin'],
        auth: {
          scope: ['admin']
        },
        handler: Controller.destroy,
        validate: Validator.destroy()
      }
    },
    {
      method: 'POST',
      path: '/usuarios/usuarios/login',
      config: {
        description: 'POST usuarios',
        notes: 'User login to the token generation',
        tags: ['api', 'public'],
        auth: false,
        handler: Controller.login,
        validate: Validator.login()
      }
    },
    {
      method: 'POST',
      path: '/usuarios/usuarios/logout',
      config: {
        description: 'POST usuarios logout',
        notes: 'Logout a usuarios',
        tags: ['api', 'usuarios'],
        auth: {
          scope: ['usuarios']
        },
        handler: Controller.logout,
        validate: Validator.logout()
      }
    }
  ]);
  next();
};

exports.register.attributes = {
  name: 'usuarios-usuarios-route',
  version: '1.0.0'
};
