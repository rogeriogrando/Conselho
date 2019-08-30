'use strict';
const client = require('../../../core/client.redis');
const jwt = require('jsonwebtoken');

module.exports = {
  list,
  read,
  create,
  update,
  destroy,
  logout,
  login
};

async function list (request, reply) {
  try {
    const model = request.database.Usuarios;
    const options = {
      attributes: ['email', 'nome', 'cpf', 'telefone'],
      offset: request.offset(),
      limit: request.limit(),
      order: [['created_at', 'DESC']]
    };
    const values = await model.findAndCountAll(options);
    return reply(values);
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}

async function create (request, reply) {
  try {
    const database = request.database;
    const model = database.Usuarios;
    const value = await model.create(request.payload);
    return reply(value);
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}

async function read (request, reply) {
  try {
    const model = request.database.Usuarios;
    const id = request.params.id;
    const options = {
      where: {instituicoes_id: id},
      attributes: ['instituicoes_id', 'email', 'nome', 'cargo', 'habilitado', 'rg', 'cpf', 'telefone']
    };

    const value = await model.findOne(options);
    if (!value) {
      return reply.notFound();
    }
    return reply(value);
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}

async function update (request, reply) {
  try {
    const model = request.database.Usuarios;
    const id = request.params.id;
    const payload = request.payload;
    const value = await model.findOne({where: {id: id}});
    if (!value) {
      return reply.notFound();
    }
    const valueUpdate = await value.update(payload, {where: {id: id}});
    return reply({id: valueUpdate.id});
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}

async function destroy (request, reply) {
  try {
    const model = request.database.Usuarios;
    const id = request.params.id;
    const value = await model.findOne({where: {id: id}});
    if (!value) {
      return reply.notFound();
    }
    await value.destroy();

    return reply({
      id: value.id,
      delete: true
    });
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}

async function logout (request, reply) {
  try {
    const token = request.headers.authorization.replace('Bearer ', '');

    client.del(token, (err, result) => {
      if (err) {
        throw err;
      }
      return reply();
    });
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}

async function login (request, reply) {
  try {
    const model = request.database.Usuarios;
    const credentials = request.payload;
    const database = request.database;

    const options = {
      include: [{ model: database.Instituicoes, as: 'Instituicao' }],
      where: {email: credentials.email}
    };

    const usuario = await model.findOne(options);

    if (!usuario) {
      return reply.unauthorized('Email or Password invalid');
    }

    if (!usuario.validatePassword(credentials.password)) {
      return reply.unauthorized('Email or Password invalid');
    }

    const token = getToken(usuario);

    setRedis(token, usuario.id);
    return reply({ token });
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}

function setRedis (token, id) {
  client.set(token, id);
  client.expire(token, (60 * 60) * 24);
}

function getToken (usuario) {
  const secretKey = process.env.JWT || 'template';

  return jwt.sign({
    id: usuario.id,
    instituicao: usuario.instituicoes_id,
    scope: usuario.Instituicao.papeis_id
  }, secretKey, {expiresIn: '2h'});
}
