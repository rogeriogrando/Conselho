'use strict';

module.exports = {
  list,
  read
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
