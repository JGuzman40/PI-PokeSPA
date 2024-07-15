import { GET_POKEMONS, GET_POKE_BY_NAME, GET_POKE_ID_DETAIL } from "./actions";

let initialState = {
    allPokemons:[],
    pokemonsCopy: [],
    selectedPokemon: null,
}


function rootReducer(state = initialState, action){
    switch(action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                pokemonsCopy: action.payload,
            }

        case GET_POKE_BY_NAME:
            return {
                ...state,
                allPokemons: action.payload,
            }
        
        case GET_POKE_ID_DETAIL:
            return {
                ...state,
                selectedPokemon: action.payload,
            }
        

        default:
            return state
    }
}

export default rootReducer;