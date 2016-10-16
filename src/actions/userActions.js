import * as types from '../constants/actionTypes';

export function catchPokemon(pokemonId) {
  return { type: types.CATCH_POKEMON, pokemonId };
}

export function releasePokemon(pokemonId) {
  return { type: types.RELEASE_POKEMON, pokemonId };
}
