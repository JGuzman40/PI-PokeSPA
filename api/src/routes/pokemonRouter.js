const { Router } = require('express');
const { getPokemonHandler, getPokemonIdHandler, createPokemonHandler } = require('./Handlers/pokemonHandler');

const pokemonRouter = Router();

pokemonRouter.get("/", getPokemonHandler);
pokemonRouter.post("/", createPokemonHandler); 
pokemonRouter.get("/:id", getPokemonIdHandler); 

module.exports = pokemonRouter;