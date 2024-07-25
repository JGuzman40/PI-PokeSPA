const { Router } = require('express');
const { getPokemonHandler, getPokemonIdHandler, createPokemonHandler, updatePokemonHandler, deletePokemonHandler } = require('./Handlers/pokemonHandler');

const pokemonRouter = Router();

pokemonRouter.get("/", getPokemonHandler);
pokemonRouter.post("/", createPokemonHandler); 
pokemonRouter.get("/:id", getPokemonIdHandler); 
pokemonRouter.put("/:id", updatePokemonHandler);
pokemonRouter.delete("/:id", deletePokemonHandler);

module.exports = pokemonRouter;