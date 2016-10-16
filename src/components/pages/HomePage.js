import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../actions/pokemonActions';
import {config} from '../../config';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value});
  }

  searchForPokemon() {
    if (this.state.search.length != 0) {
      const url = config.baseUrl + "pokemon/";
      this.props.actions.setCurrentPokemon({});
      this.props.actions.fetchPokemon(url + this.state.search);
    }
  }

  _getPokemonInfo() {
    if (this.props.searchPerformed) {
      if (!this.props.error && this.props.pokemonData.name) {
        return "Pokemon: " + this.props.pokemonData.name;
      } else {
        return "Pokemon not found";
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Pokedex app</h1>
        <h2>Get started</h2>
        <ol>
          <li>Here is gonna be a great Pokedex app soon!</li>
        </ol>
        <div className="pokemon-search">
          <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
          <Button type="primary" onClick={this.searchForPokemon.bind(this)}>Search</Button>
        </div>

        <div style={{backgroundColor: "white"}} id="searchResult">{this._getPokemonInfo()}</div>
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  pokemonData: PropTypes.object.isRequired,
  searchPerformed: PropTypes.bool,
  error: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    pokemonData: state.pokemonsReducer.pokemonData,
    searchPerformed: state.pokemonsReducer.searchPerformed,
    error: state.pokemonsReducer.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
