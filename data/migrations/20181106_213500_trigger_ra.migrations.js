module.exports = { up, down };

async function up (db) {
  await db.sequelize.query(`CREATE TRIGGER tr_gera_ra 
  BEFORE INSERT ON public.menor 
  FOR EACH ROW 
  EXECUTE PROCEDURE public.ft_gera_ra();`);
}

async function down (db) {
  await db.sequelize.query('DROP TRIGGER tr_gera_ra ON public.menor;');
}
