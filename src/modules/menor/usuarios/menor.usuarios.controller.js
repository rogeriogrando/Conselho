'use strict';

module.exports = {
  list,
  read,
  create,
  update
};

async function list (request, reply) {
  try {
    const { Menor, Parentes } = request.database;
    const options = {
      where: {ra: '654321'},
      attributes: ['ra', 'sus', 'nome', 'nascimento', 'telres', 'telcel', 'cidade', 'uf', 'cep', 'bairro', 'rua', 'numero'],
      include: [{
        model: Parentes,
        through: {
          attributes: ['responsavel', 'created_at']
        }
      }],
      offset: request.offset(),
      limit: request.limit(),
      order: [['nome', 'ASC']]
    };

    const values = await Menor.findOne(options);

    return reply(values);
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}

async function create (request, reply) {
  try {
    const database = request.database;
    const model = database.Menor;
    const value = await model.create(request.payload);
    return reply({ ra: value.ra });
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}

async function read (request, reply) {
  try {
    const { Menor, Parentes } = request.database;
    const ra = request.params.ra;
    const options = {
      where: {ra: ra},
      attributes: ['ra', 'sus', 'nome', 'nascimento', 'telres', 'telcel', 'cidade', 'uf', 'cep', 'bairro', 'rua', 'numero'],
      include: [{
        model: Parentes,
        through: {
          attributes: ['responsavel', 'created_at']
        }
      }]
    };
    const value = await Menor.findOne(options);
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
    const model = request.database.Menor;
    const ra = request.params.ra;
    const payload = request.payload;
    const value = await model.findOne({where: {ra: ra}});
    if (!value) {
      return reply.notFound();
    }
    const valueUpdate = await value.update(payload, {where: {ra: ra}});
    return reply({ra: valueUpdate.ra});
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}
