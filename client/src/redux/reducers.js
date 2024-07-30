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
    UPDATE_POKEMON_REQUEST,
    UPDATE_POKEMON_SUCCESS,
    UPDATE_POKEMON_FAILURE,
    DELETE_POKEMON_REQUEST,
    DELETE_POKEMON_SUCCESS,
    DELETE_POKEMON_FAILURE,
} from "./actions";

let initialState = {
    allPokemons: [],
    pokemonsCopy: [],
    selectedPokemon: null,
    typeFilter: "",
    originFilter: "",
    sortOrder: 1,
    currentPage: 1,
    types: [],
    creatingPokemon: false,
    createdPokemon: null,
    updatePokemonError: null,
    updatingPokemon: false,
    deletingPokemon: false,
    error: null
};

function rootReducer(state = initialState, action) {
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
            return {
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
        
        case UPDATE_POKEMON_REQUEST:
            return {
                ...state,
                updatingPokemon: true,
                updatePokemonError: null,
            }

        case UPDATE_POKEMON_SUCCESS:
            return {
                ...state,
                updatingPokemon: false,
                updatedPokemon: action.payload,
                updatePokemonError: null,
                allPokemons: state.allPokemons.map(pokemon =>
                    pokemon.id === action.payload.id ? action.payload : pokemon
                )
            };

        case UPDATE_POKEMON_FAILURE:
            return {
                ...state,
                updatingPokemon: false,
                updatePokemonError: action.payload,
            };
        
        case DELETE_POKEMON_REQUEST:
            return {
                ...state,
                deletingPokemon: true,
                error: null,
            };

        case DELETE_POKEMON_SUCCESS:
            return {
                ...state,
                deletingPokemon: false,
                allPokemons: state.allPokemons.filter(pokemon => pokemon.id !== action.payload)
            };

        case DELETE_POKEMON_FAILURE:
            return {
                ...state,
                deletingPokemon: false,
                error: action.payload,
            };
            
        default:
            return state;
    }
}

export default rootReducer;
