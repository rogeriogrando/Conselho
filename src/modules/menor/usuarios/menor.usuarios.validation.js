'use strict';

const Schema = require('../menor.schema');
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
      ra: schema
        .ra
    }
  };
}

function update () {
  return {
    params: {
      ra: schema
        .ra
    },
    payload: Joi.object({
      instituicao_id: schema
        .instituicao_id,
      ra: schema
        .ra,
      sus: schema
        .sus,
      nome: schema
        .nome,
      nascimento: schema
        .nascimento,
      telres: schema
        .telres,
      telcel: schema
        .telcel,
      cidade: schema
        .cidade,
      uf: schema
        .uf,
      cep: schema
        .cep,
      bairro: schema
        .bairro,
      rua: schema
        .rua,
      numero: schema
        .numero
    })
  };
}

function create () {
  return {
    payload: Joi.object({
      instituicao_id: schema
        .instituicao_id,
      ra: schema
        .ra,
      sus: schema
        .sus,
      nome: schema
        .nome,
      nascimento: schema
        .nascimento,
      telres: schema
        .telres,
      telcel: schema
        .telcel,
      cidade: schema
        .cidade,
      uf: schema
        .uf,
      cep: schema
        .cep,
      bairro: schema
        .bairro,
      rua: schema
        .rua,
      numero: schema
        .numero
    })
  };
}
