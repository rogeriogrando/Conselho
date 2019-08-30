module.exports = (sequelize, DataType) => {
  const Instituicoes = sequelize.define('Instituicoes', {
    papeis_id: {
      type: DataType.STRING(255),
      allowNull: false,
      references: {
        model: 'papeis',
        key: 'nome'
      }
    },
    nome: {
      type: DataType.STRING(255),
      allowNull: false
    },
    tipo: {
      type: DataType.STRING(255),
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
    tableName: 'instituicoes'
  });

  return Instituicoes;
};
