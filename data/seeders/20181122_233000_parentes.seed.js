module.exports = { up, down };

async function up (db) {
  await db.Parentes.create({
    'nome': 'Juscleide Vieira',
    'rg': '11111111',
    'cpf': '11111111111',
    'sexo': 'Feminino',
    'parentesco': 'Mãe'
  });
  await db.Parentes.create({
    'nome': 'Mosucote Vieira Filho',
    'rg': '11111111',
    'cpf': '11111111111',
    'sexo': 'Masculino',
    'parentesco': 'Pai'
  });
  await db.Parentes.create({
    'nome': 'Matilde da Silva',
    'rg': '22222222',
    'cpf': '22222222222',
    'sexo': 'Feminino',
    'parentesco': 'Mãe'
  });
  await db.Parentes.create({
    'nome': 'Paulo da Silva',
    'rg': '33333333',
    'cpf': '3333333333',
    'sexo': 'Masculino',
    'parentesco': 'Pai'
  });
  await db.Parentes.create({
    'nome': 'Verine Vieira',
    'rg': '11111111',
    'cpf': '11111111111',
    'sexo': 'Masculino',
    'parentesco': 'Avô'
  });
}

async function down (db) {
  await db.Parentes.destroy({where: {}});
}
