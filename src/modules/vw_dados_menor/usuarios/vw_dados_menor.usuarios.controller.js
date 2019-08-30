'use strict';

module.exports = {
  list,
  read
};

async function list (request, reply) {
  try {
    const { VWParentesMenor } = request.database;
    const options = {
      attributes:
      ['ra', 'sus', 'nome', 'nascimento', 'telres', 'telcel', 'cidade', 'uf', 'cep', 'bairro', 'rua', 'numero',
        'nome_instituicao', 'tipo', 'cidade_instituicao', 'uf_instituicao', 'cep_instituicao', 'rua_instituicao', 'numero_instituicao',
        'nome_parente', 'rg', 'cpf', 'sexo', 'parentesco',
        'responsavel', 'parente_id'
      ],
      offset: request.offset(),
      limit: request.limit(),
      order: [['nome', 'ASC']]
    };

    const values = await VWParentesMenor.findOne(options);

    return reply(values);
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}

async function read (request, reply) {
  try {
    const { VWParentesMenor } = request.database;
    const ra = request.params.ra;
    const options = {
      where: {ra: ra},
      attributes:
      ['ra', 'sus', 'nome', 'nascimento', 'telres', 'telcel', 'cidade', 'uf', 'cep', 'bairro', 'rua', 'numero',
        'nome_instituicao', 'tipo', 'cidade_instituicao', 'uf_instituicao', 'cep_instituicao', 'rua_instituicao', 'numero_instituicao',
        'nome_parente', 'rg', 'cpf', 'sexo', 'parentesco',
        'responsavel', 'parente_id'
      ]
    };
    const value = await VWParentesMenor.findOne(options);
    if (!value) {
      return reply.notFound();
    }
    return reply(value);
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}
