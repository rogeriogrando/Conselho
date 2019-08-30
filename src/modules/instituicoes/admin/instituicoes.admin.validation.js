'use strict';

const Schema = require('../instituicoes.schema');
const Joi = require('joi');

module.exports = {
  list: list,
  read: read,
  create: create,
  update: update,
  destroy: destroy
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
      papeis_id: schema
        .papeis_id,
      id: schema
        .id,
      nome: schema
        .nome,
      tipo: schema
        .tipo,
      cidade: schema
        .cidade,
      uf: schema
        .uf,
      cep: schema
        .cep,
      rua: schema
        .rua,
      numero: schema
        .numero
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
      papeis_id: schema
        .papeis_id,
      nome: schema
        .nome,
      tipo: schema
        .tipo,
      cidade: schema
        .cidade,
      uf: schema
        .uf,
      cep: schema
        .cep,
      rua: schema
        .rua,
      numero: schema
        .numero
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
