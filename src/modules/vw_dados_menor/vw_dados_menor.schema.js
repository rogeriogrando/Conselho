'use strict';

const Joi = require('joi');

module.exports = {
  getSchema: getSchema,
  getQuery: getQuery
};

const schema = {
  instituicao_id: Joi
    .number()
    .integer()
    .min(0),
  ra: Joi
    .string()
    .min(1)
    .max(20)
    .trim(),
  sus: Joi
    .string()
    .min(1)
    .max(15)
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
  responsavel: Joi
    .boolean,
  parente_id: Joi
    .number()
    .integer()
    .min(0),
  nome_instituicao: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  tipo: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  cidade_instituicao: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  uf_instituicao: Joi
    .string()
    .min(2)
    .max(2)
    .trim(),
  cep_instituicao: Joi
    .string()
    .min(1)
    .max(8)
    .trim(),
  rua_instituicao: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  numero_instituicao: Joi
    .string()
    .min(1)
    .max(10)
    .trim(),
  nome_parente: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  rg: Joi
    .string()
    .min(1)
    .max(14)
    .trim(),
  cpf: Joi
    .string()
    .min(1)
    .max(14)
    .trim(),
  sexo: Joi
    .string()
    .min(1)
    .max(10)
    .trim(),
  parentesco: Joi
    .string()
    .min(1)
    .max(10)
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
