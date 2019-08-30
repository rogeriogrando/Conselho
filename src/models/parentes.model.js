module.exports = (sequelize, DataType) => {
  const Parentes = sequelize.define('Parentes', {
    nome: {
      type: DataType.STRING(255),
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
    sexo: {
      type: DataType.STRING(10),
      allowNull: false
    },
    parentesco: {
      type: DataType.STRING(50),
      allowNull: false
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'update_at',
    tableName: 'parentes'
  });

  return Parentes;
};
