module.exports = (sequelize, DataType) => {
  const Menor = sequelize.define('Menor', {
    ra: {
      primaryKey: true,
      type: DataType.STRING(20)
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

  Menor.associate = function (models) {
    Menor.belongsToMany(models.Parentes, {
      // as: 'Parentes',
      through: 'parentes_menor',
      foreignKey: 'menor_ra',
      otherKey: 'parente_id'
    });
  };
  return Menor;
};
