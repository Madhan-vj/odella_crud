'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      trainerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'Trainers',
          key: 'id'
        }
      },
      trainingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'Trainings',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Locations');
  }
};