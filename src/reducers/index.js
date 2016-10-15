import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import pokemonsReducer from './pokemonsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  pokemonsReducer,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;

