'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrainingPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TrainingPrice.init({
    memBand: DataTypes.INTEGER,
    tax: DataTypes.INTEGER,
    offer: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    trainingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TrainingPrice',
  });
  return TrainingPrice;
};