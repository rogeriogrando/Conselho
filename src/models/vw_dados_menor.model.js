module.exports = (sequelize, DataType) => {
  const VWDadosMenor = sequelize.define('VWDadosMenor', {
    ra: {
      primaryKey: true,
      type: DataType.STRING(20)
    },
    instituicao_id: {
      type: DataType.INTEGER,
      allowNull: false
    },
    sus: {
      type: DataType.STRING(15),
      allowNull: false
    },
    nome_menor: {
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
    },
    nome_instituicao: {
      type: DataType.STRING(255),
      allowNull: false
    },
    tipo: {
      type: DataType.STRING(255),
      allowNull: false
    },
    cep_instituicao: {
      type: DataType.STRING(8),
      allowNull: false
    },
    cidade_instituicao: {
      type: DataType.STRING(255),
      allowNull: false
    },
    uf_instituicao: {
      type: DataType.STRING(2),
      allowNull: false
    },
    rua_instituicao: {
      type: DataType.STRING(255),
      allowNull: false
    },
    numero_instituicao: {
      type: DataType.STRING(10),
      allowNull: false
    },
    nome_parente: {
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
    },
    responsavel: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    tableName: 'vw_dados_menor'
  });

  return VWDadosMenor;
};
