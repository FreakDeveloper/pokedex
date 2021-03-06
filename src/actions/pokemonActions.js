import * as types from '../constants/actionTypes';
import axios from 'axios';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function getPokemonSuccess(data) {
  return { type: types.GET_POKEMON_SUCCESS, payload: {data: data, searchPerformed: true}};
}

export function getPokemonFailed() {
  return { type: types.GET_POKEMON_FAILED};
}

export function getPokemonsListSuccess(data) {
  return { type: types.GET_POKEMONS_LIST_SUCCESS, payload:
  {results: data.results, previous: data.previous, next: data.next} };
}

export function getPokemonsSpeciesSuccess(data) {
  return { type: types.GET_POKEMONS_SPECIES_SUCCESS, payload: data };
}

export function setCurrentPokemonType(value) {
  return { type: types.SET_CURRENT_POKEMON, value};
}

export function setCurrentPokemonsListType(value) {
  return { type: types.SET_CURRENT_POKEMONS_LIST, value};
}

export function fetchPokemon(url) {
  const request = axios.get(url);

  return (dispatch) => {
    dispatch(beginAjaxCall());
    request.then(({data}) => {
      dispatch(getPokemonSuccess(data));
    }).catch(error => {
        dispatch(ajaxCallError(error));
        dispatch(getPokemonFailed());
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

export function fetchPokemonsListByType(url) {
  const request = axios.get(url);

  return (dispatch) => {
    dispatch(beginAjaxCall());
    request.then((result) => {
      if(result.data) {
        let resultsList = [];
        if(result.data.pokemon && Array.isArray(result.data.pokemon)) {
          resultsList = result.data.pokemon.map(item => {
            return item.pokemon;
          });
        }

        dispatch(getPokemonsListSuccess({results: resultsList}));

      }
    }).catch(error => {
      dispatch(ajaxCallError(error));
      dispatch(getPokemonFailed());
      throw(error);
    });
  };
}

export function fetchPokemonSpeciesInfo(url) {
  const request = axios.get(url);

  return (dispatch) => {
    dispatch(beginAjaxCall());
    request.then((result) => {
      if(result.data && result.data.flavor_text_entries) {
        dispatch(getPokemonsSpeciesSuccess(result.data.flavor_text_entries.filter(item => item.language.name === 'en')));
      }
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function setCurrentPokemon(value) {
  return(dispatch) => {
    dispatch(setCurrentPokemonType(value));
  };
}

export function setCurrentPokemonsList(value) {
  return(dispatch) => {
    dispatch(setCurrentPokemonsListType(value));
  };
}
