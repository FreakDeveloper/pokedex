import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import NotFoundPage from './components/pages/NotFoundPage';
import PokemonsPage from './components/pages/PokemonsPage';
import UserPage from './components/pages/UserPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="pokemons" component={PokemonsPage} />
    <Route path="user" component={UserPage} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
