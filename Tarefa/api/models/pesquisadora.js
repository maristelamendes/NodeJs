'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pesquisadora extends Model {

    static associate(models) {
      Pesquisadora.hasMany(models.Tarefa);
    }
  };
  Professor.init({
    id:DataTypes.INTEGER,
    nome: DataTypes.STRING,
    areaConhecimento: DataTypes.STRING,
    biografia: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Pesquisadora',
  });
  return Pesquisadora;
};