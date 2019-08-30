'use strict';

const Joi = require('joi');

module.exports = {
  getSchema: getSchema,
  getQuery: getQuery
};

const schema = {
  papeis_id: Joi
    .number()
    .integer()
    .min(0),
  id: Joi
    .number()
    .integer()
    .min(0),
  nome: Joi
    .string()
    .min(1)
    .max(255)
    .trim(),
  tipo: Joi
    .string()
    .min(1)
    .max(255)
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
