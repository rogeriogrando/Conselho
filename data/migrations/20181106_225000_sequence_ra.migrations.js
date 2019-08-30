module.exports = { up, down };

async function up (db) {
  await db.sequelize.query('CREATE SEQUENCE seq_ra START 1;');
}

async function down (db) {
  await db.sequelize.query('DROP SEQUENCE public.seq_ra;');
}
