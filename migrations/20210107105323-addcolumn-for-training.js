'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Trainings', 'customization', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('Trainings', 'supportingDocumentUrl', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('Trainings', 'supportingDocumentName', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('Trainings', 'trainingDescription', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('Trainings', 'trainingPrice', {
      type: Sequelize.FLOAT
    })
    await queryInterface.addColumn('Trainings', 'trainingTax', {
      type: Sequelize.FLOAT
    })
    await queryInterface.addColumn('Trainings', 'trainingOffer', {
      type: Sequelize.FLOAT
    })
    await queryInterface.addColumn('Trainings', 'trainingDiscount', {
      type: Sequelize.FLOAT
    })
    await queryInterface.addColumn('Trainings', 'MTP', {
      type: Sequelize.BOOLEAN
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn(
      'Trainings',
      'customization'
    );
    await queryInterface.removeColumn(
      'Trainings',
      'supportingDocumentUrl'
    );await queryInterface.removeColumn(
      'Trainings',
      'supportingDocumentName'
    );await queryInterface.removeColumn(
      'Trainings',
      'trainingDescription'
    );await queryInterface.removeColumn(
      'Trainings',
      'trainingPrice'
    );await queryInterface.removeColumn(
      'Trainings',
      'trainingTax'
    );await queryInterface.removeColumn(
      'Trainings',
      'trainingOffer'
    );await queryInterface.removeColumn(
      'Trainings',
      'trainingDiscount'
    );await queryInterface.removeColumn(
      'Trainings',
      'MTP'
    )
  }
};
