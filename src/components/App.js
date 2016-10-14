import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Link, IndexLink } from 'react-router';
import * as actions from '../actions/pokemonActions';

const App = (props) => {
  return (
    <div>
      <IndexLink to="/">Home</IndexLink>
      <Link to="/about">About</Link>
      <br/>
      <div onClick={() => {props.actions.fetchPokemons();}}>Get Pokemons</div>
      {props.children}
      {props.data.id ? "Pokemon id: " + props.data.id : "" }
    </div>
  );
};

App.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state) {
  return {
    data: state.pokemonsReducer.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
