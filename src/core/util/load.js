'use strict';

const dotenv = require('dotenv');

module.exports = {
  getServer: getServer,
  getDatabase: getDatabase,
  getRedis: getRedis
};

dotenv.load({silent: true});

function getServer () {
  const config = {
    host: process.env['SERVER_HOST'],
    port: process.env['SERVER_PORT'] || '8080'
  };

  return config;
}

function getDatabase () {
  const env = process.env['NODE_ENV'] || 'development';

  const config = {
    port: process.env['POSTGRES_PORT_5432_TCP_PORT'] || process.env['DB_PORT'] || '5434',
    host: process.env['POSTGRES_PORT_5432_TCP_ADDR'] || process.env['DB_HOST'] || '127.0.0.1',
    username: process.env['DB_USER'] || 'template',
    password: process.env['DB_PASS'] || 'template',
    database: process.env['DB_NAME'] || 'template',
    dialect: 'postgres'
  };

  if (env === 'test') {
    config.database += '_test';
  }

  return config;
}

function getRedis () {
  const config = {
    host: process.env['REDIS_PORT_6379_TCP_ADDR'] || '127.0.0.1',
    port: process.env['REDIS_PORT_6379_TCP_PORT'] || '6379'
  };

  return config;
}
