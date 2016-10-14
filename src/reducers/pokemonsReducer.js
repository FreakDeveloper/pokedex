import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_POKEMONS:
      return Object.assign({}, state, {data: action.payload});
      break;
    default:
      return state;
  }
}
