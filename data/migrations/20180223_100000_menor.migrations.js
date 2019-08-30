const Menor = require('../../src/models/menor.model');

module.exports = { up, down };

async function up (db) {
  const DataType = db.Sequelize;

  const Menor = db.sequelize.define('Menor', {
    ra: {
      primaryKey: true,
      type: DataType.STRING(20),
      allowNull: false
    },
    instituicao_id: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'instituicoes',
        key: 'id'
      }
    },
    sus: {
      type: DataType.STRING(15),
      allowNull: false
    },
    nome: {
      type: DataType.STRING(255),
      allowNull: false
    },
    nascimento: {
      type: DataType.DATE,
      allowNull: false
    },
    telres: {
      type: DataType.STRING(14),
      allowNull: true
    },
    telcel: {
      type: DataType.STRING(14),
      allowNull: true
    },
    cep: {
      type: DataType.STRING(8),
      allowNull: false
    },
    cidade: {
      type: DataType.STRING(255),
      allowNull: false
    },
    uf: {
      type: DataType.STRING(2),
      allowNull: false
    },
    bairro: {
      type: DataType.STRING(255),
      allowNull: false
    },
    rua: {
      type: DataType.STRING(255),
      allowNull: false
    },
    numero: {
      type: DataType.STRING(10),
      allowNull: false
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'update_at',
    tableName: 'menor'
  });
  await Menor.sync();
}
async function down (db) {
  await Menor(db.sequelize, db.Sequelize).drop();
}
