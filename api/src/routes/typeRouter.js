const { Router } = require ('express');
const { getAllTypes } = require ("./Controlers/TypeCrl")

const typeRouter = Router();


typeRouter.get("/", async (req, res) => {
  try {
    const allTypesPokemon = await getAllTypes()

    res.status(200).json(allTypesPokemon)
  } catch (error) {
    res.status(400).json({error: `error on get / types: ${error.message}`})
  }
});
typeRouter.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

module.exports = typeRouter;