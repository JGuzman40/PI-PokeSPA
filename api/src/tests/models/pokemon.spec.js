const { Pokemon, conn } = require('../../db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((error) => {
      console.error('Unable to connect to the database:', error);
    }));

  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));

    describe('name', () => {
      // Usa función regular en lugar de función flecha
      it('should throw an error if name is null', function(done) {
        this.timeout(5000); // Configura el timeout aquí

        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch((error) => {
            try {
              // Verificar que el error lanzado es el esperado
              expect(error.message).to.include("notNull Violation: Pokemon.name cannot be null");
              done(); // Finaliza la prueba correctamente
            } catch (err) {
              done(err); // Asegúrate de pasar el error a `done`
            }
          });
      });

      it('should work when its a valid name', () => {
        return Pokemon.create({ name: 'Pikachu' })
          .then((pokemon) => {
            expect(pokemon.name).to.equal('Pikachu'); // Asegura que el name sea correcto
          });
      });
    });
  });
});
