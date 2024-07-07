const { createPokemon, getPokemonById, getAllPokemons } = require("../Controlers/PokemonControl");

const retryDelay = 1000;
const maxRetries = 3;

const getPokemonHandler = async (req, res) => {
  let retries = 0;
  let pokemons = [];

  while (retries < maxRetries) {
    try {
      const { name } = req.query;
      const searchType = name ? 'name' : 'all';
      pokemons = await getAllPokemons(name, searchType);

      if (pokemons.length === 0) {
        const errorMessage = searchType === 'name'
          ? `No se encontraron Pokémon con el nombre '${name}'.`
          : 'No se encontraron Pokémon.';

        if (searchType === 'name') {
          return res.status(404).json({ error: errorMessage });
        }
      } else {
        return res.status(200).json(pokemons);
      }
    } catch (error) {
      console.error(error);
      retries++;
      if (retries < maxRetries) {
        console.log(`Reintentando en ${retryDelay / 1000} segundos...`);
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      } else {
        return res.status(500).json({ error: 'Error interno del servidor' });
      }
    }
  }

  if (req.query.name) {
    return res.status(404).json({ error: `No se encontraron Pokémon con el nombre '${req.query.name}'.` });
  } else {
    return res.status(404).json({ error: 'No se encontraron Pokémon.' });
  }
};


const createPokemonHandler = async (req, res) => {
  const { name, imagen, vida, ataque, defensa, velocidad, altura, peso, types } = req.body;
  try {
    const tipoNombres = types.map(type => type.name);

    const newPokemon = await createPokemon(name, imagen, vida, ataque, defensa, velocidad, altura, peso, tipoNombres);

    await newPokemon.reload({ include: 'Types' });

    const response = {
      id: newPokemon.id,
      name: newPokemon.name,
      imagen: newPokemon.imagen,
      vida: newPokemon.vida,
      ataque: newPokemon.ataque,
      defensa: newPokemon.defensa,
      velocidad: newPokemon.velocidad,
      altura: newPokemon.altura,
      peso: newPokemon.peso,
      types: newPokemon.Types.map(type => ({ name: type.name })),
    };

    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ error: 'El nombre de Pokémon ya existe en la base de datos.' });
  }
};

const getPokemonIdHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";

  try {
    const pokemon = await getPokemonById(id, source);
    return res.status(200).json(pokemon);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};


module.exports = {
  getPokemonHandler,
  getPokemonIdHandler,
  createPokemonHandler
};
