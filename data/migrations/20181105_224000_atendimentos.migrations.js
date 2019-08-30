const Atendimentos = require('../../src/models/atendimentos.model');

module.exports = { up, down };

async function up (db) {
  const DataType = db.Sequelize;

  const Atendimentos = db.sequelize.define('Atendimentos', {
    instituicao_orig_id: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'instituicoes',
        key: 'id'
      }
    },
    instituicao_dest_id: {
      type: DataType.INTEGER,
      allowNull: true,
      references: {
        model: 'instituicoes',
        key: 'id'
      }
    },
    usuarios_orig_id: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    usuarios_dest_id: {
      type: DataType.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    dataCadastro: {
      type: DataType.DATE,
      defaultValue: DataType.NOW,
      allowNull: true,
      field: 'datacadastro'
    },
    ra: {
      type: DataType.STRING(20),
      references: {
        model: 'menor',
        key: 'ra'
      },
      allowNull: false
    },
    nomePai: {
      type: DataType.STRING(255),
      allowNull: false,
      field: 'nomepai'
    },
    nomeMae: {
      type: DataType.STRING(255),
      allowNull: false,
      field: 'nomemae'
    },
    nomeResponsavel: {
      type: DataType.STRING(255),
      allowNull: false,
      field: 'nomeresponsavel'
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
      allowNull: false
    },
    telcel: {
      type: DataType.STRING(14),
      allowNull: false
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
    },
    escola: {
      type: DataType.STRING(255),
      allowNull: false
    },
    serie: {
      type: DataType.STRING(10),
      allowNull: false
    },
    periodo: {
      type: DataType.STRING(10),
      allowNull: false
    },
    direitoviolado: {
      type: DataType.STRING(255),
      allowNull: false
    },
    motivodenuncia: {
      type: DataType.TEXT,
      allowNull: false
    },
    status: {
      type: DataType.STRING(10),
      allowNull: false
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'update_at',
    tableName: 'atendimentos'
  });
  await Atendimentos.sync();
}
async function down (db) {
  await Atendimentos(db.sequelize, db.Sequelize).drop();
}
