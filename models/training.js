'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Training extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Training.belongsTo(models.Module, {foreignKey: 'moduleId', as: 'module'})
      Training.belongsTo(models.Module, {foreignKey: 'categoryId', as: 'category'})
    }
  };
  Training.init({
    name: DataTypes.STRING,
    moduleId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Training',
  });
  return Training;
};