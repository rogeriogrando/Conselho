module.exports = (sequelize, DataType) => {
  const ParentesMenor = sequelize.define('ParentesMenor', {
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
      defaultValue: false
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'update_at',
    tableName: 'parentes_menor'
  });

  ParentesMenor.associate = function (models) {
    ParentesMenor.belongsTo(models.Parentes, {
      foreignKey: 'parente_id',
      as: 'Parentes'
    });
  };

  return ParentesMenor;
};
