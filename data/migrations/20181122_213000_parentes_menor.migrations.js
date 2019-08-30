const ParentesMenor = require('../../src/models/parentes_menor.model');

module.exports = { up, down };

async function up (db) {
  const DataType = db.Sequelize;

  const ParentesMenor = db.sequelize.define('ParentesMenor', {
    parente_id: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'parentes',
        key: 'id'
      }
    },
    menor_ra: {
      type: DataType.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'menor',
        key: 'ra'
      }
    },
    responsavel: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'update_at',
    tableName: 'parentes_menor'
  });
  await ParentesMenor.sync();
}
async function down (db) {
  await db.sequelize.query('DROP VIEW IF EXISTS vw_dados_menor;');
  await ParentesMenor(db.sequelize, db.Sequelize).drop();
}
