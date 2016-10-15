import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_POKEMON:
      return Object.assign({}, state, {pokemonData: action.payload});
      break;
    case types.GET_POKEMONS_LIST:
      return Object.assign({}, state, {pokemonsList: action.payload});
      break;
    default:
      return state;
  }
}
