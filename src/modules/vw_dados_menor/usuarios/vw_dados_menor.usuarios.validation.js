'use strict';

const Schema = require('../vw_dados_menor.schema');

module.exports = {
  list,
  read
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
