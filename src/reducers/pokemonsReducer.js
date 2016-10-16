import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_POKEMON_SUCCESS:
      return Object.assign({}, state, {
        pokemonData: action.payload.data,
        searchPerformed: !!action.payload.searchPerformed,
        error: false
      });
    case types.GET_POKEMONS_LIST_SUCCESS:
      return Object.assign({}, state, {
        pokemonsList: action.payload.result,
        previous: action.payload.previous,
        next: action.payload.next,
        error: false
      });
    case types.SET_CURRENT_POKEMON_SUCCESS:
      return Object.assign({}, state, {
        pokemonData: action.value,
        error: false
      });
    case types.AJAX_CALL_ERROR:
      return Object.assign({}, state, {
        error: true
      });
    default:
      return state;
  }
}
