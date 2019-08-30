module.exports = { up, down };

async function up (db) {
  await db.sequelize.query(`CREATE VIEW vw_dados_menor AS
  SELECT ra, sus, m.nome as nome_menor, m.nascimento, m.telres, 
          m.telcel, m.cep, m.cidade, m.uf, m.bairro, m.rua, m.numero,
          instituicao_id, i.nome as nome_instituicao, i.tipo, i.cep as cep_instituicao, i.cidade as cidade_instituicao, 
          i.uf as uf_instituicao, i.rua as rua_instituicao, i.numero as numero_instituicao,
          parente_id, p.nome as nome_parente, rg, cpf, sexo, parentesco, responsavel, m.created_at as "createdAt", m.update_at as "updatedAt"
  FROM menor m
  JOIN parentes_menor pm ON pm.menor_ra = m.ra
  JOIN parentes p ON p.id = pm.parente_id
  JOIN instituicoes i ON m.instituicao_id = i.id;`);
}

async function down (db) {
  await db.sequelize.query('DROP VIEW IF EXISTS vw_dados_menor;');
}
