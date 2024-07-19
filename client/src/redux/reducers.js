import { 
    GET_POKEMONS,
    GET_POKE_BY_NAME, 
    GET_POKE_ID_DETAIL,
    SET_TYPE_SUCCESS,
    SET_ORIGIN_FILTER,
    SET_SORT_ORDER,
    SET_CURRENT_PAGE,
    LOAD_TYPES_SUCCESS, 
    CREATE_POKEMON_REQUEST,
    CREATE_POKEMON_SUCCESS,
    CREATE_POKEMON_FAILURE,

} from "./actions";

let initialState = {
    allPokemons:[],
    pokemonsCopy: [],
    selectedPokemon: null,
    typeFilter:"",
    originFilter:"",
    sortOrder: 1,
    currentPage: 1,
    types:[],
    creatingPokemon: false,
    createdPokemon: null,
    createPokemonError: null,
};


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
        
        case LOAD_TYPES_SUCCESS:
            return {
                ...state,
                types: action.payload,
            }
        
        case SET_TYPE_SUCCESS:
            return {
                ...state,
                typeFilter: action.payload,
            }
        
        case SET_ORIGIN_FILTER:
            return {
                ...state,
                originFilter: action.payload,
            }

        case SET_SORT_ORDER:
            return {
                ...state,
                sortOrder: action.payload,
            }

        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload,
            }

        case CREATE_POKEMON_REQUEST:
            return{
                ...state,
                creatingPokemon: true,
                createPokemonError: null,
            }
        
        case CREATE_POKEMON_SUCCESS:
            return {
                ...state,
                creatingPokemon: false,
                createdPokemon: action.payload,
                createPokemonError: null,
            }

        case CREATE_POKEMON_FAILURE:
            return {
                ...state,
                creatingPokemon: false,
                createdPokemon: null,
                createPokemonError: action.payload,
            }

        default:
            return state;
    }
}

export default rootReducer;