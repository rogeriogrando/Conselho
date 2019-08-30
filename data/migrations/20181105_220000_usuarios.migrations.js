const Usuarios = require('../../src/models/usuarios.model');

module.exports = { up, down };

async function up (db) {
  const DataType = db.Sequelize;

  const Usuarios = db.sequelize.define('Usuarios', {
    instituicoes_id: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'instituicoes',
        key: 'id'
      }
    },
    email: {
      type: DataType.STRING(255),
      allowNull: false
    },
    password: {
      type: DataType.STRING(255),
      allowNull: false
    },
    nome: {
      type: DataType.STRING(255),
      allowNull: false
    },
    cargo: {
      type: DataType.STRING(255),
      allowNull: false
    },
    habilitado: {
      type: DataType.BOOLEAN,
      allowNull: false
    },
    rg: {
      type: DataType.STRING(14),
      allowNull: false
    },
    cpf: {
      type: DataType.STRING(14),
      allowNull: false
    },
    telefone: {
      type: DataType.STRING(14),
      allowNull: false
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'update_at',
    tableName: 'usuarios'
  });

  await Usuarios.sync();
}

async function down (db) {
  await Usuarios(db.sequelize, db.Sequelize).drop();
}
