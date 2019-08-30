module.exports = { up, down };

async function up (db) {
  await db.Papeis.create({
    'nome': 'admin'
  });
  await db.Papeis.create({
    'nome': 'usuarios'
  });
  await db.Papeis.create({
    'nome': 'conselho'
  });
}

async function down (db) {
  await db.Papeis.destroy({where: {}});
}
