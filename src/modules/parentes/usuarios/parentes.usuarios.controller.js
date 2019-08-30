'use strict';

module.exports = {
  list,
  read,
  create,
  update
};

async function list (request, reply) {
  try {
    const model = request.database.Parentes;
    const options = {
      attributes: ['nome', 'rg', 'cpf', 'sexo', 'parentesco'],
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
    const model = database.Parentes;
    const value = await model.create(request.payload);
    return reply({ rg: value.rg });
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}

async function read (request, reply) {
  try {
    const model = request.database.Parentes;
    const rg = request.params.rg;
    const options = {
      where: {rg: rg},
      attributes: ['nome', 'rg', 'cpf', 'sexo', 'parentesco']
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
    const model = request.database.Parentes;
    const rg = request.params.rg;
    const payload = request.payload;
    const value = await model.findOne({where: {rg: rg}});
    if (!value) {
      return reply.notFound();
    }
    const valueUpdate = await value.update(payload, {where: {rg: rg}});
    return reply({rg: valueUpdate.rg});
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}
