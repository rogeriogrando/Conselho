module.exports = (sequelize, DataType) => {
  const Atendimentos = sequelize.define('Atendimentos', {
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
      allowNull: false,
      field: 'ra'
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
      allowNull: false,
      field: 'nome'
    },
    nascimento: {
      type: DataType.DATE,
      allowNull: false,
      field: 'nascimento'
    },
    telres: {
      type: DataType.STRING(14),
      allowNull: false,
      field: 'telres'
    },
    telcel: {
      type: DataType.STRING(14),
      allowNull: false,
      field: 'telcel'
    },
    cep: {
      type: DataType.STRING(8),
      allowNull: false,
      field: 'cep'
    },
    cidade: {
      type: DataType.STRING(255),
      allowNull: false,
      field: 'cidade'
    },
    uf: {
      type: DataType.STRING(2),
      allowNull: false,
      field: 'uf'
    },
    bairro: {
      type: DataType.STRING(255),
      allowNull: false,
      field: 'bairro'
    },
    rua: {
      type: DataType.STRING(255),
      allowNull: false,
      field: 'rua'
    },
    numero: {
      type: DataType.STRING(10),
      allowNull: false,
      field: 'numero'
    },
    escola: {
      type: DataType.STRING(255),
      allowNull: false,
      field: 'escola'
    },
    serie: {
      type: DataType.STRING(10),
      allowNull: false,
      field: 'serie'
    },
    periodo: {
      type: DataType.STRING(10),
      allowNull: false,
      field: 'periodo'
    },
    direitoviolado: {
      type: DataType.STRING(255),
      allowNull: false,
      field: 'direitoviolado'
    },
    motivodenuncia: {
      type: DataType.TEXT,
      allowNull: false,
      field: 'motivodenuncia'
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

  return Atendimentos;
};
