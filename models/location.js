'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Location.hasOne(models.Trainer, {foreignKey: 'trainerId', as: 'trainer'});
      Location.belongsTo(models.Training, {foreignKey: 'trainingId', as: 'training'});
    }
  };
  Location.init({
    name: DataTypes.STRING,
    trainerId: DataTypes.INTEGER,
    trainingId: DataTypes.INTEGER,
    startDateAndTime: DataTypes.DATE,
    EndDateAndTime: DataTypes.DATE,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};