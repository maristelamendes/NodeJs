'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conteudo extends Model {

    static associate(models) {
     
      Conteudo.belongsTo(models.Pesquisadora);
      Conteudo.belongsTo(models.Tarefa);
    }
  };
  conteudos.init({
    id: DataTypes.INTEGER,
    artigos: DataTypes.INTEGER,
   idPesquisadora: DataTypes.DATEONLY,
    linkArtigo: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Conteudo',
  });
  return Conteudo;
};