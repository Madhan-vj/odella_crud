'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trainings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      reference: {
        type: Sequelize.STRING
      },
      moduleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'Modules',
          key: 'id'
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'Categories',
          key: 'id'
        }
      },
      // customization: {
      //   type: Sequelize.STRING
      // },
      // supportingDocumentUrl: {
      //   type: Sequelize.STRING
      // },
      // supportingDocumentName: {
      //   type: Sequelize.STRING
      // },
      // trainingDescription: {
      //   type: Sequelize.STRING
      // },
      // trainingPrice: {
      //   type: Sequelize.INTEGER
      // },
      // trainingTax: {
      //   type: Sequelize.INTEGER
      // },
      // trainingOffer: {
      //   type: Sequelize.INTEGER
      // },
      // trainingDiscount: {
      //   type: Sequelize.INTEGER
      // },
      // MTP: {
      //   type: Sequelize.BOOLEAN
      // },
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
    await queryInterface.dropTable('Trainings');
  }
};