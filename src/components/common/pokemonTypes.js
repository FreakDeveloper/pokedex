import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Accordion, Panel} from 'react-bootstrap';
import uuid from 'node-uuid';

import * as actions from '../../actions/pokemonActions';

import {capitalizeFirstLetter} from '../../utils';

class PokemonTypes extends React.Component {
  _getData() {
    if(this.props.species.url && this.props.speciesDescriptions.length === 0) {
      this.props.actions.fetchPokemonSpeciesInfo(this.props.species.url);
    }
  }
  render() {
    var uniques = [];
    this.props.speciesDescriptions.forEach((item) => {
      if(uniques.filter(flavor_text => item.flavor_text === flavor_text).length === 0) {
        uniques.push(item.flavor_text);
      }
    });

    const items = uniques.map(item => {
      return (<p key={uuid.v4()}>{item}</p>);
    });

    return (
      <div className="pokemon-types">
        <Accordion>
          <Panel onClick={this._getData()} defaultExpanded={false} header={`Species: ${capitalizeFirstLetter(this.props.species.name)}`} eventKey="1">
            {items}
          </Panel>
        </Accordion>
      </div>
    );
  }
}

PokemonTypes.propTypes = {
  species: PropTypes.object.isRequired,
  speciesDescriptions: PropTypes.array
};

function mapStateToProps(state) {
  return {
    speciesDescriptions: state.pokemonsReducer.speciesDescriptions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(PokemonTypes);
