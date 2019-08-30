'use strict';

const Schema = require('../usuarios.schema');
const Joi = require('joi');

module.exports = {
  list: list,
  read: read,
  create: create,
  update: update,
  destroy: destroy,
  login: login,
  logout: logout
};

const schema = Schema.getSchema();

function list () {
  return {};
}

function read () {
  return {
    params: {
      id: schema
        .id
    }
  };
}

function create () {
  return {
    payload: Joi.object({
      instituicoes_id: schema
        .instituicoes_id,
      id: schema
        .id,
      email: schema
        .email,
      password: schema
        .password,
      nome: schema
        .nome,
      cargo: schema
        .cargo,
      habilitado: schema
        .habilitado,
      rg: schema
        .rg,
      cpf: schema
        .cpf,
      telefone: schema
        .telefone
    })
  };
}

function update () {
  return {
    params: {
      id: schema
        .id
        .positive()
    },
    payload: Joi.object({
      instituicoes_id: schema
        .instituicoes_id,
      email: schema
        .email,
      password: schema
        .password,
      nome: schema
        .nome,
      cargo: schema
        .cargo,
      habilitado: schema
        .habilitado,
      rg: schema
        .rg,
      cpf: schema
        .cpf,
      telefone: schema
        .telefone
    })
  };
}

function destroy () {
  return {
    params: {
      id: schema
        .id
        .positive()
    }
  };
}

function logout () {
  return {};
}

function login () {
  return {
    payload: Joi.object({
      email: schema
        .email
        .required(),
      password: schema
        .password
        .required()
    })
  };
}
