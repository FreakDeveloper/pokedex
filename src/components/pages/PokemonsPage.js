import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, ListGroup, ListGroupItem, Panel} from 'react-bootstrap';

import * as actions from '../../actions/pokemonActions';
import PokemonDetails from '../contents/PokemonDetails';

class PokemonsPage extends React.Component {
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
          bsStyle="primary"
          onClick={() => {this.props.actions.fetchPokemonsList();}}>Get list of Pokemons
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
  pokemonsList: PropTypes.object
};

function mapStateToProps(state) {
  return {
    pokemonData: state.pokemonsReducer.pokemonData,
    pokemonsList: state.pokemonsReducer.pokemonsList
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
