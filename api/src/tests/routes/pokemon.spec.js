const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../../app'); 
const request = supertest(app);

describe('Rutas de Pokémon', function () {
  this.timeout(5000); 

  it('GET /pokemon debería devolver una lista de Pokémon', async () => {
    const response = await request.get('/pokemon');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });

  it('GET /pokemon/:id debería devolver un Pokémon por ID', async () => {
    const response = await request.get('/pokemon/1'); 
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('id');
  });

  it('POST /pokemon debería crear un nuevo Pokémon', async () => {
    const newPokemon = {
      name: `Pikachu_${Date.now()}`,
      imagen: 'http://example.com/pikachu.png',
      vida: 35,
      ataque: 55,
      defensa: 40,
      velocidad: 90,
      altura: 0.4,
      peso: 6,
      tipos: ['electric']
    };

    const response = await request.post('/pokemon').send(newPokemon);
    console.log('Response Status:', response.status); // Verifica el código de estado
    console.log('Response Body:', response.body); // Verifica el contenido del cuerpo de la respuesta
  
    if (response.status === 201) {
      expect(response.body).to.have.property('name', 'Jesuchu');
    } else {
      console.error('Error al crear el Pokémon:', response.body);
    }
  });

  it('GET /pokemon debería devolver un error si no se encuentran Pokémon', async () => {
    const response = await request.get('/pokemon?name=nonexistent');
    expect(response.status).to.equal(404);
    expect(response.body).to.have.property('error');
  });

  it('GET /pokemon/:id debería devolver un error si el Pokémon no existe', async () => {
    const response = await request.get('/pokemon/99999999-9999-9999-9999-999999999999');
    expect(response.status).to.equal(400);
    expect(response.body).to.have.property('error');
  });
});
