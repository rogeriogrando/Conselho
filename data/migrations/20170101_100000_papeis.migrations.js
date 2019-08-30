const Papeis = require('../../src/models/papeis.model');

module.exports = { up, down };

async function up (db) {
  const DataType = db.Sequelize;

  const Papeis = db.sequelize.define('Papeis', {
    nome: {
      type: DataType.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'update_at',
    tableName: 'papeis'
  });
  await Papeis.sync();
}
async function down (db) {
  await Papeis(db.sequelize, db.Sequelize).drop();
}
