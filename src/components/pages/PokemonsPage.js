import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button} from 'react-bootstrap';

import * as actions from '../../actions/pokemonActions';
import * as userActions from '../../actions/userActions';
import PokemonsList from '../common/pokemonsList';

import {config} from '../../config';



class PokemonsPage extends React.Component {
  componentWillMount() {
    const url = config.baseUrl + "/pokemon?offset=30&limit=10";
    this.props.actions.fetchPokemonsList(url);
  }

  componentWillUnmount() {
    this.props.actions.setCurrentPokemon({});
    this.props.actions.setCurrentPokemonsList([]);
  }

  render() {
    return (
      <div className="pokemons-page">
        <div className="buttons">
          <Button
            className="prev"
            bsStyle="info"
            disabled={!this.props.previous}
            onClick={() => {this.props.actions.fetchPokemonsList(this.props.previous);}}>Previous
          </Button>
          <Button
            className="next"
            bsStyle="info"
            disabled={!this.props.next}
            onClick={() => {this.props.actions.fetchPokemonsList(this.props.next);}}>Next
          </Button>
        </div>
        <PokemonsList
          pokemonData={this.props.pokemonData}
          caughtPokemons={this.props.caughtPokemons}
          pokemonsList={this.props.pokemonsList}
          fetchPokemon={this.props.actions.fetchPokemon}
          catchPokemonAction={this.props.userActions.catchPokemon}
          releasePokemonAction={this.props.userActions.releasePokemon}
          fetchingPokemonFail={this.props.fetchingPokemonFail}
        />
      </div>
    );
  }
}

PokemonsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  pokemonData: PropTypes.object.isRequired,
  caughtPokemons: PropTypes.array,
  pokemonsList: PropTypes.array,
  fetchingPokemonFail: PropTypes.bool,
  previous: PropTypes.string,
  next: PropTypes.string
};

function mapStateToProps(state) {
  return {
    pokemonData: state.pokemonsReducer.pokemonData,
    caughtPokemons: state.userReducer.caughtPokemons,
    pokemonsList: state.pokemonsReducer.pokemonsList,
    previous: state.pokemonsReducer.previous,
    next: state.pokemonsReducer.next,
    fetchingPokemonFail: state.pokemonsReducer.fetchingPokemonFail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsPage);
