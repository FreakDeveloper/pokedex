import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button} from 'react-bootstrap';
import uuid from 'node-uuid';

import * as userActions from '../../actions/userActions';
import {capitalizeFirstLetter} from '../../utils';

class PokemonsPage extends React.Component {
  _getPokemonsContent() {
    return this.props.caughtPokemons.map(item => {
      return (
        <div className="pokemon" key={uuid.v4()}>
          <p>{capitalizeFirstLetter(item.name)}</p>
          <div className="pokemon-image">
            <img src={`https://img.pokemondb.net/artwork/${item.name}.jpg`}/>
          </div>
          <div className="button">
            <Button
              bsStyle="danger"
              onClick={this.props.userActions.releasePokemon.bind(this, {id: item.id, name: item.name})}>
              Release
            </Button>
          </div>
        </div>
      );
    });
  }


  render() {
    let content = null;

    if(this.props.caughtPokemons.length === 0) {
      content = "Try to catch some pokemons...";
    } else {
      content = this._getPokemonsContent();
    }

    return (
      <div className="user-page">
        <div className="content">
          {content}
        </div>
      </div>
    );
  }
}

PokemonsPage.propTypes = {
  userActions: PropTypes.object.isRequired,
  caughtPokemons: PropTypes.array
};

function mapStateToProps(state) {
  return {
    caughtPokemons: state.userReducer.caughtPokemons,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsPage);
