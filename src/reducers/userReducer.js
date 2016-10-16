import * as types from '../constants/actionTypes';

const initialState = {
  caughtPokemons: []
};


export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.CATCH_POKEMON:
      return Object.assign({}, state, { caughtPokemons:  [...state.caughtPokemons, action.pokemon]});
    case types.RELEASE_POKEMON:
      return Object.assign({}, state, { caughtPokemons: [...state.caughtPokemons.filter(item => item.id != action.pokemon.id)]});
    default:
      return state;
  }
}
