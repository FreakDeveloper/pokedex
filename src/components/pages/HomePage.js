import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../actions/pokemonActions';
import * as userActions from '../../actions/userActions';
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

  componentWillUnmount() {
    this.props.actions.setCurrentPokemon({});
    this.props.actions.setCurrentPokemonsList([]);
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
      this.props.actions.setCurrentPokemonsListType({});
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
      <div className="home-container">
        <div className="home-image"></div>
        <h2>Lets find your favourite Pokemon!</h2>

        <div className="pokemon-search">
          <div className="section">
            <input
              name="name"
              type="text"
              placeholder="Search by name..."
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}/>
            <Button
              bsStyle="default"
              onClick={this.searchForPokemon.bind(this)}>
              Search
            </Button>
          </div>
          <div className="section">
            <input
              name="type"
              type="text"
              placeholder="Search by type..."
              value={this.state.type}
              onChange={this.updateType.bind(this)}/>
            <Button
              bsStyle="default"
              onClick={this.searchForPokemonType.bind(this)}>
              Search
            </Button>
          </div>
        </div>
        <PokemonsList
          pokemonData={this.props.pokemonData}
          caughtPokemons={this.props.caughtPokemons}
          pokemonsList={this.props.pokemonsList}
          fetchPokemon={this.props.actions.fetchPokemon}
          fetchingPokemonFail={this.props.fetchingPokemonFail}
          catchPokemonAction={this.props.userActions.catchPokemon}
          releasePokemonAction={this.props.userActions.releasePokemon}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  pokemonData: PropTypes.object.isRequired,
  caughtPokemons: PropTypes.array,
  pokemonsList: PropTypes.array,
  searchPerformed: PropTypes.bool,
  fetchingPokemonFail: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    pokemonData: state.pokemonsReducer.pokemonData,
    caughtPokemons: state.userReducer.caughtPokemons,
    pokemonsList: state.pokemonsReducer.pokemonsList,
    searchPerformed: state.pokemonsReducer.searchPerformed,
    fetchingPokemonFail: state.pokemonsReducer.fetchingPokemonFail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
