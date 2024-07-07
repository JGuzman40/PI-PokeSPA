const axios = require('axios');
const { Type } = require('../../db');

const getAllTypes = async () => {
  try {
    const contentTypeTester = await Type.findAll();

    if (contentTypeTester.length === 0) {
      const apiTypes = await axios.get('https://pokeapi.co/api/v2/type');
      const typesFromAPI = apiTypes.data.results;

      // Array para almacenar las promesas de solicitudes individuales
      const typePromises = typesFromAPI.map((type) => axios.get(type.url));

      // Esperar a que todas las promesas se resuelvan
      const typeDetailsResponses = await Promise.all(typePromises);

      // Extraer la información necesaria de cada respuesta
      const detailedTypes = typeDetailsResponses.map((response) => ({
        name: response.data.name,
      }));

      // Guardar los tipos en la base de datos
      await Type.bulkCreate(detailedTypes);
    }

    // Obtener todos los tipos de la base de datos
    const allTypes = await Type.findAll();
    return allTypes;
  } catch (error) {
    throw new Error('Error on get all types: ' + error.message);
  }
};

module.exports = { getAllTypes };

