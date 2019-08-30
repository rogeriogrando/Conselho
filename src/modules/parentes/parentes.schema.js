'use strict';

const Joi = require('joi');

module.exports = {
  getSchema: getSchema,
  getQuery: getQuery
};

const schema = {
  nome: Joi
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
