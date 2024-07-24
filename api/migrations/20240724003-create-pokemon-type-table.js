'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pokemon_type', {
      PokemonId: {
        type: Sequelize.UUID, // Usar UUID para PokemonId
        references: {
          model: 'Pokemons', // Nombre de la tabla en mayúsculas
          key: 'id'
        },
        onDelete: 'CASCADE',
        primaryKey: true
      },
      TypeId: {
        type: Sequelize.INTEGER, // Usar INTEGER para TypeId
        references: {
          model: 'Types', // Nombre de la tabla en mayúsculas
          key: 'id'
        },
        onDelete: 'CASCADE',
        primaryKey: true
      }
    }, {
      indexes: [
        {
          unique: true,
          fields: ['PokemonId', 'TypeId']
        }
      ]
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('pokemon_type');
  }
};
