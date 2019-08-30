module.exports = { up, down };

async function up (db) {
  await db.Menor.create({
    'instituicao_id': 2,
    'ra': '123456',
    'sus': '251515151515151',
    'nome': 'João',
    'nascimento': '2012-01-01 00:00:00.0',
    'telres': '32221111',
    'telcel': '99921111',
    'cidade': 'Itapetininga',
    'uf': 'SP',
    'cep': '18205600',
    'bairro': 'bairro teste',
    'rua': 'Rua teste',
    'numero': '104'
  });
  await db.Menor.create({
    'instituicao_id': 4,
    'ra': '654321',
    'sus': '789879879879879',
    'nome': 'Abraão Vieira',
    'nascimento': '2002-01-01 00:00:00.0',
    'telres': '32223333',
    'telcel': '99925555',
    'cidade': 'Itapetininga',
    'uf': 'SP',
    'cep': '18205600',
    'bairro': 'Centro',
    'rua': 'Av Brasil',
    'numero': '99'
  });
  await db.Menor.create({
    'instituicao_id': 4,
    'ra': '777777',
    'sus': '789879879879879',
    'nome': 'Marta da Silva',
    'nascimento': '2008-09-14 00:00:00.0',
    'telres': '32228888',
    'telcel': '99927777',
    'cidade': 'Itapetininga',
    'uf': 'SP',
    'cep': '18205600',
    'bairro': 'Cidade do Lago',
    'rua': 'Av Ibirapuera',
    'numero': '1205'
  });
}

async function down (db) {
  await db.Menor.destroy({where: {}});
}
