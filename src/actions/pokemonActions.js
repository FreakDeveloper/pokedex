import * as types from '../constants/actionTypes';
import axios from 'axios';

export function fetchPokemon(url) {
  const request = axios.get(url);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: types.GET_POKEMON, payload: data});
    });
  };
}

export function fetchPokemonsList() {
  const request = axios.get('http://pokeapi.co/api/v2/pokemon?offset=0&limit=10');

  return (dispatch) => {
    request.then(({data}) => {
      if(data && data.results)
      dispatch({type: types.GET_POKEMONS_LIST, payload: data.results});
    });
  };
}
