'use strict';

const Joi = require('joi');

module.exports = {
  getSchema: getSchema,
  getQuery: getQuery
};

const schema = {
  instituicoes_id: Joi
    .number()
    .integer()
    .min(0),
  id: Joi
    .number()
    .integer()
    .min(0),
  email: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  password: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  nome: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  cargo: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  habilitado: Joi
    .boolean(),
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
  telefone: Joi
    .string()
    .min(1)
    .max(14)
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
