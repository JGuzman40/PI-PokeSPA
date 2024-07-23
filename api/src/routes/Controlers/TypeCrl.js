const axios = require('axios');
const { Type } = require('../../db');

const getAllTypes = async () => {
  try {
    // Verificar si ya hay tipos en la base de datos
    const existingTypes = await Type.findAll();
    if (existingTypes.length === 0) {
      // Obtener tipos desde la API
      const apiTypes = await axios.get('https://pokeapi.co/api/v2/type');
      const typesFromAPI = apiTypes.data.results;

      // Preparar datos para guardar en la base de datos
      const typesToSave = typesFromAPI.map(type => ({ name: type.name }));

      // Guardar tipos en la base de datos
      await Type.bulkCreate(typesToSave);
    }

    // Obtener todos los tipos de la base de datos
    const allTypes = await Type.findAll();
    return allTypes;
  } catch (error) {
    throw new Error('Error on get all types: ' + error.message);
  }
};

module.exports = { getAllTypes };


