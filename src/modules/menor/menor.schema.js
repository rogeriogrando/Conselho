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
