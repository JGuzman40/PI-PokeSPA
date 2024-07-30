import axios from 'axios';

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKE_BY_NAME = "GET_POKE_BY_NAME";
export const GET_POKE_ID_DETAIL = "GET_POKE_ID_DETAIL";

export const SET_TYPE_SUCCESS = "SET_TYPE_SUCCESS";
export const SET_ORIGIN_FILTER = "SET_ORIGIN_FILTER";
export const SET_SORT_ORDER = "SET_SORT_ORDER";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const LOAD_TYPES_SUCCESS = "LOAD_TYPES_SUCCESS";

export const CREATE_POKEMON_REQUEST = "CREATE_POKEMON_REQUEST"; 
export const CREATE_POKEMON_SUCCESS = "CREATE_POKEMON_SUCCESS";
export const CREATE_POKEMON_FAILURE = "CREATE_POKEMON_FAILURE";

export const UPDATE_POKEMON_REQUEST = "UPDATE_POKEMON_REQUEST";
export const UPDATE_POKEMON_SUCCESS = "UPDATE_POKEMON_SUCCESS";
export const UPDATE_POKEMON_FAILURE = "UPDATE_POKEMON_FAILURE";

export const DELETE_POKEMON_REQUEST = "DELETE_POKEMON_REQUEST";
export const DELETE_POKEMON_SUCCESS = "DELETE_POKEMON_SUCCESS";
export const DELETE_POKEMON_FAILURE = "DELETE_POKEMON_FAILURE";

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

export function createPokemon(pokemonData) {
    return async function(dispatch) {
        dispatch({ 
            type: "CREATE_POKEMON_REQUEST"
        })

        try {
            const response = await axios.post(`${BASE_URL}/pokemon`, pokemonData);
            dispatch({
                type: "CREATE_POKEMON_SUCCESS",
                payload: response.data
            });
            return response.data;
        } catch (error) {
            dispatch({
                type: "CREATE_POKEMON_FAILURE",
                payload: error.message
            });
            throw error;
        }
    }
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
    };
}

export function updatePokemon(pokemonData) {
    return async function(dispatch) {
        dispatch({ 
            type: "UPDATE_POKEMON_REQUEST"
        });

        try {
            const payload = {
                ...pokemonData,
                types: pokemonData.types.map(type => type.name || type.tipo) 
            };
            console.log('Payload para la actualización:', payload);

            const response = await axios.put(`${BASE_URL}/pokemon/${payload.id}`, payload);
            dispatch({
                type: "CREATE_POKEMON_SUCCESS",
                payload: response.data
            });

            console.log('Respuesta de la actualización:', response.data);

            dispatch({
                type: "UPDATE_POKEMON_SUCCESS",
                payload: response.data
            });
            return response.data;
        } catch (error) {
            dispatch({
                type: "UPDATE_POKEMON_FAILURE",
                payload: error.message
            });
            throw error;
        }
    };
}



export function deletePokemon(id) {
    return async function(dispatch) {
        dispatch({
            type: "DELETE_POKEMON_REQUEST",
        });

        try {
            await axios.delete(`${BASE_URL}/pokemon/${id}`);
            dispatch({
                type: "DELETE_POKEMON_SUCCESS",
                payload: id
            });
        } catch (error) {
            dispatch({
                type: "DELETE_POKEMON_FAILURE",
                payload: error.message
            });
            throw error;
        }
    }
}

export function loadTypesSuccess() {
    return async function(dispatch) {
        const response = await axios.get(`${BASE_URL}/types`);
        dispatch({
            type: "LOAD_TYPES_SUCCESS",
            payload: response.data,
        });
    };
}

export const setTypeFilter = (type) => ({
    type: "SET_TYPE_SUCCESS",
    payload: type,
});

export const setOriginFilter = (origin) => ({
    type: "SET_ORIGIN_FILTER",
    payload: origin,
});

export const setSortOrder = (order) => ({
    type: "SET_SORT_ORDER",
    payload: order,
});

export const setCurrentPage = (page) => ({
    type: "SET_CURRENT_PAGE",
    payload: page,
});

