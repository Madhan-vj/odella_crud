'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrainingTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TrainingTag.belongsTo(models.Training, {foreignKey: 'trainingId'})

    }
  };
  TrainingTag.init({
    tagId: DataTypes.INTEGER,
    trainingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TrainingTag',
  });
  return TrainingTag;
};