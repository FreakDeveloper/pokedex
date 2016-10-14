import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import pokemonsReducer from './pokemonsReducer';

const rootReducer = combineReducers({
  pokemonsReducer,
  routing: routerReducer
});

export default rootReducer;

