import axios from 'axios';

export const GET_POKEMONS = "GET_POKEMONS"
export const GET_POKE_BY_NAME = "GET_POKE_BY_NAME"
export const GET_POKE_ID_DETAIL = "GET_POKE_ID_DETAIL"


let BASE_URL = "http://localhost:3001"

export function getPokemons(){
    return async function(dispatch) {
        const response = await axios.get(`${BASE_URL}/pokemon`
        );
        return dispatch ({
            type: "GET_POKEMONS",
            payload: response.data,
        });
    };
}

export function getPokeByName(name){
    return async function (dispatch) {
        const response = await axios.get(`${BASE_URL}/pokemon?name=${name.toLowerCase()}`);
        return dispatch ({
            type: "GET_POKE_BY_NAME",
            payload: response.data,
        });

    };
}

export function getPokeIdDetail(id) {
    return async function (dispatch) {
        const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
        return dispatch({
            type: "GET_POKE_ID_DETAIL",
            payload: response.data
        })
    }
}
