import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import pokemonsReducer from './pokemonsReducer';
import userReducer from './userReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  pokemonsReducer,
  ajaxCallsInProgress,
  userReducer,
  routing: routerReducer
});

export default rootReducer;

