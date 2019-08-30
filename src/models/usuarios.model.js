const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataType) => {
  const Usuarios = sequelize.define('Usuarios', {
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
    tableName: 'usuarios',
    hooks: {
      beforeCreate: function (Usuarios) {
        Usuarios.set({
          password: hashPassword(Usuarios.get('password'))
        });
      },
      beforeUpdate: function (Usuarios) {
        if (!Usuarios.changed('password')) {
          return;
        }
        Usuarios.set({
          password: hashPassword(Usuarios.get('password'))
        });
      }
    },
    scopes: {
      cliente: (id) => {
        return {
          where: {
            id: id
          }
        };
      }
    }
  });
  Usuarios.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.get('password'));
  };

  Usuarios.associate = function (models) {
    Usuarios.belongsTo(models.Instituicoes, {
      foreignKey: 'instituicoes_id',
      as: 'Instituicao'
    });
  };

  return Usuarios;
};

function hashPassword (password) {
  if (!password) {
    return false;
  }
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}
