import axios from 'axios';

export const GET_POKEMONS = "GET_POKEMONS"


let BASE_URL = "http://localhost:3001"

export function getPokemons(){
    return async function(dispatch) {
        const response = await axios.get(`${BASE_URL}/pokemon`);
        return dispatch ({
            type: "GET_POKEMONS",
            payload: response.data
        })
    }
}

