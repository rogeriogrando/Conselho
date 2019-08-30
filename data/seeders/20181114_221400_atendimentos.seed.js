module.exports = { up, down };

async function up (db) {
  await db.Atendimentos.create({
    'instituicao_orig_id': 4,
    'instituicao_dest_id': 3,
    'usuarios_orig_id': 4,
    'ra': '777777',
    'sus': '789879879879879',
    'nomeMae': 'Matilde da Silva',
    'nomePai': 'Paulo da Silva',
    'nomeResponsavel': 'Matilde da Silva',
    'nome': 'Marta da Silva',
    'nascimento': '2008-09-14 00:00:00.0',
    'telres': '32228888',
    'telcel': '99927777',
    'cidade': 'Itapetininga',
    'uf': 'SP',
    'cep': '18205600',
    'bairro': 'Cidade do Lago',
    'rua': 'Av Ibirapuera',
    'numero': '1205',
    'escola': 'Escola Estadual Abílio Fontes',
    'serie': '8 série',
    'periodo': 'Noturno',
    'direitoviolado': 'Alimentação adequada',
    'motivodenuncia': 'Aluno passou mau durante a aula.',
    'status': 'Pendente'
  });
}

async function down (db) {
  await db.Menor.destroy({where: {}});
}
