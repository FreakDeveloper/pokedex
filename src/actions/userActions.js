import * as types from '../constants/actionTypes';

export function catchPokemon(pokemon) {
  return { type: types.CATCH_POKEMON, pokemon };
}

export function releasePokemon(pokemon) {
  return { type: types.RELEASE_POKEMON, pokemon };
}
