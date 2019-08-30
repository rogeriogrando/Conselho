module.exports = (sequelize, DataType) => {
  const Papeis = sequelize.define('Papeis', {
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
  return Papeis;
};
