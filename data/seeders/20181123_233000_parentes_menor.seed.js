module.exports = { up, down };

async function up (db) {
  await db.ParentesMenor.create({
    'parente_id': 1,
    'menor_ra': '654321',
    'responsavel': true
  });
  await db.ParentesMenor.create({
    'parente_id': 2,
    'menor_ra': '654321',
    'responsavel': false
  });
}

async function down (db) {
  await db.ParentesMenor.destroy({where: {}});
}
