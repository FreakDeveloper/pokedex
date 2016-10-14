import * as types from '../constants/actionTypes';
import axios from 'axios';

export function fetchPokemons() {
  const request = axios.get('http://pokeapi.co/api/v2/pokemon/1');

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: types.GET_POKEMONS, payload: data});
    });
  };
}
