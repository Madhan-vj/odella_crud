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
      Training.belongsTo(models.Module, {foreignKey: 'moduleId', as: 'module'});
      Training.belongsTo(models.Module, {foreignKey: 'categoryId', as: 'category'});  
      Training.hasMany(models.Location, {as: 'Location'});
      Training.hasMany(models.TrainingPrice, {as: 'trainingPrice'});
      Training.belongsToMany(models.Tag, {through: 'TrainingTags', foreignKey: 'trainingId', as: 'tag'})
    }
  };
  Training.init({
    name: DataTypes.STRING,
    reference: DataTypes.STRING,
    moduleId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    // customization: DataTypes.STRING,
    // supportingDocumentUrl: DataTypes.STRING,
    // supportingDocumentName: DataTypes.STRING,
    // trainingDescription: DataTypes.STRING,
    // trainingPrice: DataTypes.FLOAT,
    // trainingTax: DataTypes.FLOAT,
    // trainingOffer: DataTypes.FLOAT,
    // trainingDiscount: DataTypes.FLOAT,
    // MTP: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Training',
  });
  return Training;
};