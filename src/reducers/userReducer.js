import * as types from '../constants/actionTypes';

const initialState = {
  caughtPokemons: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.CATCH_POKEMON:
      return Object.assign({}, state, { caughtPokemons:  [...state.caughtPokemons, action.pokemonId]});
    case types.RELEASE_POKEMON:
      return Object.assign({}, state, { caughtPokemons: [...state.caughtPokemons.filter(id => id != action.pokemonId)]});
    default:
      return state;
  }
}
