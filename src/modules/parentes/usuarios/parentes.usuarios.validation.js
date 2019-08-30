'use strict';

const Schema = require('../parentes.schema');
const Joi = require('joi');

module.exports = {
  list,
  read,
  update,
  create
};

const schema = Schema.getSchema();

function list () {
  return {};
}

function read () {
  return {
    params: {
      rg: schema
        .rg
    }
  };
}

function update () {
  return {
    params: {
      rg: schema
        .rg
    },
    payload: Joi.object({
      nome: schema
        .nome,
      rg: schema
        .rg,
      cpf: schema
        .cpf,
      sexo: schema
        .sexo,
      parentesco: schema
        .parentesco
    })
  };
}

function create () {
  return {
    payload: Joi.object({
      nome: schema
        .nome,
      rg: schema
        .rg,
      cpf: schema
        .cpf,
      sexo: schema
        .sexo,
      parentesco: schema
        .parentesco
    })
  };
}
