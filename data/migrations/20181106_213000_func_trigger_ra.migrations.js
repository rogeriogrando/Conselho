module.exports = { up, down };

async function up (db) {
  await db.sequelize.query(`CREATE OR REPLACE FUNCTION public.ft_gera_ra()
  RETURNS trigger AS
$BODY$
DECLARE
  sequencia_ra varchar(20);
  sequencia integer;
BEGIN
  IF NEW.ra IS NULL THEN
    SELECT nextval('seq_ra') INTO sequencia;
    SELECT 'X'||lpad(sequencia::varchar,19,'0') INTO sequencia_ra;
    NEW.ra = sequencia_ra;
  END IF;
  RETURN NEW;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE; `);
}

async function down (db) {
  await db.sequelize.query('DROP FUNCTION public.ft_gera_ra();');
}
