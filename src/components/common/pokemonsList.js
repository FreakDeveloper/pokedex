import React, {PropTypes} from 'react';
import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import uuid from 'node-uuid';

import PokemonDetails from '../common/pokemonDetails';
import * as utils from '../../utils';


const PokemonsList = ({
  pokemonData,
  caughtPokemons,
  pokemonsList,
  fetchPokemon,
  catchPokemonAction,
  releasePokemonAction}) => {

  let panel = null;
  if (pokemonData.name) {
    panel = (
      <Panel
        className="pokemon-details-container"
        header={pokemonData.name ? utils.capitalizeFirstLetter(pokemonData.name) : "Pokemon's name"}>
        <PokemonDetails
          pokemonData={pokemonData}
          caughtPokemons={caughtPokemons}
          catchPokemonAction={catchPokemonAction}
          releasePokemonAction={releasePokemonAction}/>
      </Panel>
    );
  }

  return (
    <div className="pokemons-list-container">
      <ListGroup className="pokemons-list-group">
        <div className="pokemons-list">
          {
            pokemonsList.map((item) => {
              return (
                <ListGroupItem key={uuid.v4()}
                               className="pokemons-list-item"
                               onClick={fetchPokemon.bind(this, item.url)}>
                  <div className="pokemons-list-item-name">{utils.capitalizeFirstLetter(item.name)}</div>
                </ListGroupItem>)
            })
          }
        </div>
      </ListGroup>
      {panel}
    </div>
  );
};

PokemonDetails.propTypes = {
  pokemonData: PropTypes.object.isRequired,
  caughtPokemons: PropTypes.array,
  pokemonsList: PropTypes.array,
  fetchPokemon: PropTypes.func,
  catchPokemonAction: PropTypes.func,
  releasePokemonAction: PropTypes.func
};

export default PokemonsList;
