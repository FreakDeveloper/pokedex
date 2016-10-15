import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, ListGroup, ListGroupItem, Panel} from 'react-bootstrap';

import * as actions from '../../actions/pokemonActions';
import PokemonDetails from '../contents/PokemonDetails';

class PokemonsPage extends React.Component {
  componentWillMount() {
    const url = "http://pokeapi.co/api/v2/pokemon?offset=0&limit=10";

    this.props.actions.fetchPokemonsList(url);
  }

  _pokemonsTable() {
    let items = [];

    if (this.props.pokemonsList && Array.isArray(this.props.pokemonsList)) {
      items = this.props.pokemonsList.map((item) => {
          return (
            <ListGroupItem
              className="pokemons-list-item"
              onClick={this.props.actions.fetchPokemon.bind(this,item.url)}>
              <div className="pokemons-list-item-name">{item.name}</div>
            </ListGroupItem>);
        }
      );
    }

    return (
      <div className="pokemons-list">
        {items}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.pokemonData.id ? "Pokemon id: " + this.props.pokemonData.id : "" }<br/>
        <Button
          bsStyle="info"
          disabled={!this.props.previous}
          onClick={() => {this.props.actions.fetchPokemonsList(this.props.previous);}}>Previous
        </Button>
        <Button
          bsStyle="info"
          disabled={!this.props.next}
          onClick={() => {this.props.actions.fetchPokemonsList(this.props.next);}}>Next
        </Button>
        <div className="pokemons-list-container">
          <ListGroup className="pokemons-list-group">
            {this._pokemonsTable()}
          </ListGroup>
          <Panel
            className="pokemon-details-container"
            header={this.props.pokemonData.name ? "Something about " + this.props.pokemonData.name : "Pokemon's name"}>
            <PokemonDetails pokemonData={this.props.pokemonData}/>
          </Panel>
        </div>
      </div>
    );
  }
}

PokemonsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  pokemonData: PropTypes.object.isRequired,
  pokemonsList: PropTypes.object,
  previous: PropTypes.string,
  next: PropTypes.string
};

function mapStateToProps(state) {
  return {
    pokemonData: state.pokemonsReducer.pokemonData,
    pokemonsList: state.pokemonsReducer.pokemonsList,
    previous: state.pokemonsReducer.previous,
    next: state.pokemonsReducer.next
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
)(PokemonsPage);
