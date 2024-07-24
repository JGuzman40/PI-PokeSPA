'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Types', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, // Hacerlo autoincremental
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Types');
  }
};
