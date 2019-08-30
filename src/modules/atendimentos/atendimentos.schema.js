'use strict';

const Joi = require('joi');

module.exports = {
  getSchema: getSchema,
  getQuery: getQuery
};

const schema = {
  id: Joi
    .number()
    .integer()
    .min(0),
  instituicao_orig_id: Joi
    .number()
    .integer()
    .min(0),
  instituicao_dest_id: Joi
    .number()
    .integer()
    .min(0),
  usuarios_orig_id: Joi
    .number()
    .integer()
    .min(0),
  usuarios_dest_id: Joi
    .number()
    .integer()
    .min(0),
  dataCadastro: Joi
  .date(),
  ra: Joi
    .string()
    .min(1)
    .max(20)
    .trim(),
  nomePai: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  nomeMae: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  nomeResponsavel: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  nome: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  nascimento: Joi
    .date(),
  telres: Joi
    .string()
    .min(1)
    .max(14)
    .trim(),
  telcel: Joi
    .string()
    .min(1)
    .max(14)
    .trim(),
  cidade: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  uf: Joi
    .string()
    .min(2)
    .max(2)
    .trim(),
  cep: Joi
    .string()
    .min(1)
    .max(8)
    .trim(),
  bairro: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  rua: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  numero: Joi
    .string()
    .min(1)
    .max(10)
    .trim(),
  escola: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  serie: Joi
    .string()
    .min(1)
    .max(10)
    .trim(),
  periodo: Joi
    .string()
    .min(1)
    .max(10)
    .trim(),
  direitoviolado: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  motivodenuncia: Joi
    .string()
    .trim(),
  status: Joi
    .string()
    .trim(),
  fields: Joi.object({
    fields: Joi
    .string()
    .min(1)
    .max(250)
    .trim()
  }).options({ allowUnknown: true })
};

const query = {
  page: Joi
    .number()
    .integer()
    .optional(),
  limit: Joi
    .number()
    .integer()
    .min(0)
    .optional(),
  offset: Joi
    .number()
    .integer()
    .min(0)
    .optional(),
  search: Joi
    .string()
    .trim()
};

function getSchema () {
  return schema;
}

function getQuery () {
  return query;
}
