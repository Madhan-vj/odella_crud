'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trainer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Trainer.hasOne(models.Location, {as: 'Location'})
      Trainer.hasOne(models.Location, {foreignKey: 'trainerId'});
    }
  };
  Trainer.init({
    name: DataTypes.STRING,
    phone: DataTypes.DOUBLE,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trainer',
  });
  return Trainer;
};