module.exports = { up, down };

async function up (db) {
  await db.Instituicoes.create({
    'papeis_id': 'admin',
    'nome': 'Prefeitura de Itapetininga',
    'tipo': 'Prefeitura',
    'cep': '1520000',
    'cidade': 'Itapetininga',
    'uf': 'SP',
    'rua': 'Rua Teste',
    'numero': '1'
  });
  await db.Instituicoes.create({
    'papeis_id': 'usuarios',
    'nome': 'FATEC Itapetininga',
    'tipo': 'Faculdade',
    'cep': '1520000',
    'cidade': 'Itapetininga',
    'uf': 'SP',
    'rua': 'Rua Teste',
    'numero': '100'
  });
  await db.Instituicoes.create({
    'papeis_id': 'conselho',
    'nome': 'Conselho Tutelar',
    'tipo': 'Conselho',
    'cep': '1520000',
    'cidade': 'Itapetininga',
    'uf': 'SP',
    'rua': 'Rua Teste2',
    'numero': '200'
  });
  await db.Instituicoes.create({
    'papeis_id': 'usuarios',
    'nome': 'Escola Estadual Abílio Fontes',
    'tipo': 'Escola',
    'cep': '18200590',
    'cidade': 'Itapetininga',
    'uf': 'SP',
    'rua': 'R. João Batista Macedo Mendes',
    'numero': 's/n'
  });
}

async function down (db) {
  await db.Instituicoes.destroy({where: {}});
}
