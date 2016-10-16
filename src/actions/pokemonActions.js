import * as types from '../constants/actionTypes';
import axios from 'axios';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function getPokemonSuccess(data) {
  return { type: types.GET_POKEMON_SUCCESS, payload: {data: data, searchPerformed: true}};
}

export function getPokemonsListSuccess(data) {
  return { type: types.GET_POKEMONS_LIST_SUCCESS, payload:
  {result: data.results, previous: data.previous, next: data.next} };
}

export function setCurrentPokemonSuccess(value) {
  return { type: types.SET_CURRENT_POKEMON_SUCCESS, value};
}

export function fetchPokemon(url) {
  const request = axios.get(url);

  return (dispatch) => {
    dispatch(beginAjaxCall());
    request.then(({data}) => {
      dispatch(getPokemonSuccess(data));
    }).catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
    });
  };
}

export function fetchPokemonsList(url) {
  const request = axios.get(url);

  return (dispatch) => {
    dispatch(beginAjaxCall());
    request.then((result) => {
      if(result.data)
      dispatch(getPokemonsListSuccess(result.data));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function setCurrentPokemon(value) {
  return(dispatch) => {
    dispatch(setCurrentPokemonSuccess(value));
  }
}
