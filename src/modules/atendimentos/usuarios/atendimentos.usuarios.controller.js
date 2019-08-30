'use strict';

module.exports = {
  list,
  read,
  create,
  update
};

async function list (request, reply) {
  try {
    const model = request.database.Atendimentos;
    const options = {
      attributes: ['dataCadastro', 'ra', 'nomeMae', 'nomePai', 'nomeResponsavel', 'nome', 'nascimento', 'telres', 'telcel', 'cidade', 'uf', 'cep', 'bairro', 'rua', 'numero', 'escola', 'serie', 'periodo', 'direitoviolado', 'motivodenuncia', 'status'],
      where: {
        instituicao_orig_id: request.auth.credentials.instituicao
      },
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
    const { VWDadosMenor, Atendimentos, Menor } = request.database;
    const menorDadosPai = await VWDadosMenor.findOne({where: {ra: request.payload.ra, parentesco: 'Mãe'}});
    const menorDadosMae = await VWDadosMenor.findOne({where: {ra: request.payload.ra, parentesco: 'Pai'}});
    const menorDadosResponsavel = await VWDadosMenor.findOne({where: {ra: request.payload.ra, responsavel: true}});
    const menorDados = await Menor.findOne({where: {ra: request.payload.ra}});

    if (!menorDadosPai && !menorDadosMae && !menorDadosResponsavel) {
      return reply.notFound('Menor não encontrado.');
    }

    request.payload.instituicao_orig_id = request.auth.credentials.instituicao;
    request.payload.usuarios_orig_id = request.auth.credentials.id;
    request.payload.instituicao_dest_id = VWDadosMenor.instituicao_id;
    request.payload.nomePai = menorDadosPai.nome_parente;
    request.payload.nomeMae = menorDadosMae.nome_parente;
    request.payload.nomeResponsavel = menorDadosResponsavel.nome_parente;
    request.payload.nome = menorDados.nome;
    request.payload.nascimento = menorDados.nascimento;
    request.payload.telres = menorDados.telres;
    request.payload.telcel = menorDados.telcel;
    request.payload.cep = menorDados.cep;
    request.payload.uf = menorDados.uf;
    request.payload.cidade = menorDados.cidade;
    request.payload.bairro = menorDados.bairro;
    request.payload.rua = menorDados.rua;
    request.payload.numero = menorDados.numero;
    request.payload.status = 'Pendente';

    const value = await Atendimentos.create(request.payload);

    return reply({ ra: value.ra });
  } catch (err) {
    console.log(err);
    return reply.badImplementationCustom(err);
  }
}

async function read (request, reply) {
  try {
    const model = request.database.Atendimentos;
    const ra = request.params.ra;
    const options = {
      where: {ra: ra, instituicao_orig_id: request.auth.credentials.instituicao},
      attributes: ['dataCadastro', 'ra', 'nomeMae', 'nomePai', 'nomeResponsavel', 'nome', 'nascimento', 'telres', 'telcel', 'cidade', 'uf', 'cep', 'bairro', 'rua', 'numero', 'escola', 'serie', 'periodo', 'direitoviolado', 'motivodenuncia', 'status']
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
    const database = request.database;
    const model = database.Atendimentos;
    const id = request.params.id;
    const payload = request.payload;
    const credencial = request.auth.credentials.email;
    const value = await model.findOne({where: {id: id, instituicao_orig_id: request.auth.credentials.instituicao}});
    if (!value) {
      return reply.notFound();
    }
    request.payload.usuario = credencial;
    const valueUpdate = await value.update(payload, {where: {id: id, instituicao_orig_id: request.auth.credentials.instituicao}});
    return reply({id: valueUpdate.id});
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}
