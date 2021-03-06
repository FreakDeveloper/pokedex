import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_POKEMON_SUCCESS:
      return Object.assign({}, state, {
        pokemonData: action.payload.data,
        searchPerformed: !!action.payload.searchPerformed,
        fetchingPokemonFail: false,
        speciesDescriptions: []
      });
    case types.GET_POKEMONS_LIST_SUCCESS:
      return Object.assign({}, state, {
        pokemonsList: action.payload.results,
        previous: action.payload.previous,
        next: action.payload.next,
        fetchingPokemonFail: false
      });
    case types.SET_CURRENT_POKEMON:
      return Object.assign({}, state, {
        pokemonData: action.value
      });
    case types.SET_CURRENT_POKEMONS_LIST:
      return Object.assign({}, state, {
        pokemonsList: action.value
      });
    case types.GET_POKEMON_FAILED:
      return Object.assign({}, state, {
        fetchingPokemonFail: true
      });
    case types.GET_POKEMONS_SPECIES_SUCCESS:
      return Object.assign({}, state, {
            speciesDescriptions: action.payload
          });
    default:
      return state;
  }
}
