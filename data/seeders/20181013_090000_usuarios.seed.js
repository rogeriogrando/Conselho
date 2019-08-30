module.exports = { up, down };

async function up (db) {
  await db.Usuarios.create({
    'instituicoes_id': 1,
    'email': 'rgrando.unique@gmail.com',
    'password': 'rgrando',
    'nome': 'Rogério Grando',
    'cargo': 'TI Prefeitura',
    'habilitado': true,
    'rg': '241404162',
    'cpf': '22660729867',
    'telefone': '1991591837'
  });
  await db.Usuarios.create({
    'instituicoes_id': 2,
    'email': 'isolina@gmail.com',
    'password': 'isolina',
    'nome': 'isolina',
    'cargo': 'Diretora',
    'habilitado': true,
    'rg': '333333333',
    'cpf': '33333333333',
    'telefone': '3333333333'
  });
  await db.Usuarios.create({
    'instituicoes_id': 3,
    'email': 'chritian@gmail.com',
    'password': 'chritian',
    'nome': 'Chritian',
    'cargo': 'Gerente',
    'habilitado': true,
    'rg': '444444444',
    'cpf': '44444444444',
    'telefone': '999999999'
  });
  await db.Usuarios.create({
    'instituicoes_id': 4,
    'email': 'odair@gmail.com',
    'password': 'odair',
    'nome': 'Odair',
    'cargo': 'Professor',
    'habilitado': true,
    'rg': '555555555',
    'cpf': '66666666666',
    'telefone': '912547852'
  });
}

async function down (db) {
  await db.Usuarios.destroy({where: {}});
}
