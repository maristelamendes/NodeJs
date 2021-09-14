'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {

    static associate(models) {
      Usuario.hasMany(models.Tarefa);
    }
  };
  Usuario.init({
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.INTEGER,
    telefone: DataTypes.INTEGER,
    genero: DataTypes.STRING,
    instagram: DataTypes.STRING,
    linkedin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};