'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curiosidade extends Model {

    static associate(models) {
     
      Curiosidade.belongsTo(models.Pesquisadora);
      Curiosidade.belongsTo(models.Tarefa);
    }
  };
  Curiosidade.init({
    id: DataTypes.INTEGER,
    descricao: DataTypes.INTEGER,
    linkCuriosidade: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Curiosidade',
  });
  return Curiosidade;
};