'use strict';

const Schema = require('../instituicoes.schema');

module.exports = {
  list: list,
  read: read
};

const schema = Schema.getSchema();

function list () {
  return {};
}

function read () {
  return {
    params: {
      id: schema
        .id
    }
  };
}
