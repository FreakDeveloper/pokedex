import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../actions/pokemonActions';
import PokemonsList from '../common/pokemonsList';
import {config} from '../../config';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      type: ''
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value});
  }

  updateType(event) {
    this.setState({type: event.target.value});
  }

  searchForPokemon() {
    if (this.state.search.length != 0) {
      const url = config.baseUrl + "/pokemon/";
      this.props.actions.setCurrentPokemon({});
      this.props.actions.fetchPokemon(url + this.state.search);
    }
  }

  searchForPokemonType() {
    if (this.state.type.trim().length != 0) {
      const url = config.baseUrl + "/type/";
      this.props.actions.setCurrentPokemon({});
      this.props.actions.fetchPokemonsListByType(url + this.state.type);
    }
  }

  _getPokemonInfo() {
    if (this.props.searchPerformed) {
      if (!this.props.fetchingPokemonFail && this.props.pokemonData.name) {
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
          <input
            name="name"
            type="text"
            placeholder="Search by name..."
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}/>
          <Button
            type="primary"
            onClick={this.searchForPokemon.bind(this)}>
            Search
          </Button>
          <input
            name="type"
            type="text"
            placeholder="Search by type..."
            value={this.state.type}
            onChange={this.updateType.bind(this)}/>
          <Button
            type="primary"
            onClick={this.searchForPokemonType.bind(this)}>
            Search
          </Button>
        </div>
        <PokemonsList
          pokemonData={this.props.pokemonData}
          pokemonsList={this.props.pokemonsList}
          fetchPokemon={this.props.actions.fetchPokemon}/>
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  pokemonData: PropTypes.object.isRequired,
  pokemonsList: PropTypes.object,
  searchPerformed: PropTypes.bool,
  fetchingPokemonFail: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    pokemonData: state.pokemonsReducer.pokemonData,
    pokemonsList: state.pokemonsReducer.pokemonsList,
    searchPerformed: state.pokemonsReducer.searchPerformed,
    fetchingPokemonFail: state.pokemonsReducer.fetchingPokemonFail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
