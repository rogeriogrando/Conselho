'use strict';

module.exports = {
  list,
  read,
  create,
  update,
  destroy
};

async function list (request, reply) {
  try {
    const model = request.database.Instituicoes;
    const options = {
      attributes: ['nome', 'tipo', 'cidade', 'uf', 'cep', 'rua', 'numero'],
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
    const model = database.Instituicoes;
    const value = await model.create(request.payload);
    return reply({ id: value.id });
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}

async function read (request, reply) {
  try {
    const model = request.database.Instituicoes;
    const id = request.params.id;
    const options = {
      where: {idinstituicao: id},
      attributes: ['nome', 'tipo', 'cidade', 'uf', 'cep', 'rua', 'numero']
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
    const model = request.database.Instituicoes;
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
    const model = request.database.Instituicoes;
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
