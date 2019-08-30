'use strict';

const Schema = require('../atendimentos.schema');
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
      id: schema
        .id
    },
    payload: Joi.object({
      instituicao_dest_id: schema
        .instituicao_dest_id,
      usuarios_dest_id: schema
        .usuarios_dest_id,
      ra: schema
        .ra,
      nomeMae: schema
        .nomeMae,
      nomePai: schema
        .nomePai,
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
        .numero,
      escola: schema
        .escola,
      serie: schema
        .serie,
      periodo: schema
        .periodo,
      direitoviolado: schema
        .direitoviolado,
      motivodenuncia: schema
        .motivodenuncia,
      status: schema
        .status
    })
  };
}

function create () {
  return {
    payload: Joi.object({
      instituicao_orig_id: schema
        .instituicao_orig_id,
      instituicao_dest_id: schema
        .instituicao_dest_id,
      usuarios_orig_id: schema
        .usuarios_orig_id,
      id: schema
        .id,
      ra: schema
        .ra,
      nomeMae: schema
        .nomeMae,
      nomePai: schema
        .nomePai,
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
        .numero,
      escola: schema
        .escola,
      serie: schema
        .serie,
      periodo: schema
        .periodo,
      direitoviolado: schema
        .direitoviolado,
      motivodenuncia: schema
        .motivodenuncia
    })
  };
}
