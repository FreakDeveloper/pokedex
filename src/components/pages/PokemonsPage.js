import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../actions/pokemonActions';

class PokemonsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pokemonData: {},
      pokemonsList: []
    };
  }

  _pokemonsTable() {
    let items = [];

    if (this.props.pokemonsList && Array.isArray(this.props.pokemonsList)) {
      items = this.props.pokemonsList.map((item) => {
          return (
            <div className="pokemons-list-item">
              <div className="pokemons-list-item-name">{item.name}</div>
              <div className="pokemons-list-item-url" onClick={this.props.actions.fetchPokemon.bind(this,item.url)}>
                click
              </div>
            </div>);
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
        <div onClick={() => {this.props.actions.fetchPokemonsList();}}>Get list of Pokemons</div>
        {this._pokemonsTable()}
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
