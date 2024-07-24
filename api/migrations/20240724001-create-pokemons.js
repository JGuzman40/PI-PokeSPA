'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pokemons', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imagen: {
        type: Sequelize.STRING, // URL de la imagen
        allowNull: true,
      },
      vida: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ataque: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      defensa: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      velocidad: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      altura: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      peso: {
        type: Sequelize.FLOAT,
        allowNull: true,
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Pokemons');
  }
};
