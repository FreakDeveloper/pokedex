import React, {PropTypes} from 'react';
import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import uuid from 'node-uuid';
import cn from 'classnames';

import PokemonDetails from '../common/pokemonDetails';
import * as utils from '../../utils';

const _getPokemonButton = (pokemonsList, fetchPokemon, caughtPokemons) => {

  return pokemonsList.map((item) => {
    const classNames = cn('pokemons-list-item',
      {'active': caughtPokemons.filter(pokemon => pokemon.name === item.name).length > 0});

    return (
      <ListGroupItem key={uuid.v4()}
                     className={classNames}
                     onClick={fetchPokemon.bind(this, item.url)}>
        <div className="pokemons-list-item-name">{utils.capitalizeFirstLetter(item.name)}</div>
      </ListGroupItem>);
  });
};

const PokemonsList = ({
  pokemonData,
  caughtPokemons,
  pokemonsList,
  fetchPokemon,
  fetchingPokemonFail,
  catchPokemonAction,
  releasePokemonAction
}) => {

  if (fetchingPokemonFail) {
    return (<div className="error-container"><h3>Not found</h3></div>);
  } else {

    let listGroup = null;
    let wide = true;
    if (pokemonsList.length > 0) {
      listGroup = (
        <ListGroup className="pokemons-list-group">
          <div className="pokemons-list">
            {_getPokemonButton(pokemonsList, fetchPokemon, caughtPokemons)}
          </div>
        </ListGroup>
      );
      wide = false;
    }

    let details = null;
    if (pokemonData.name) {

      details = (
        <PokemonDetails
      pokemonData={pokemonData}
      caughtPokemons={caughtPokemons}
      catchPokemonAction={catchPokemonAction}
      releasePokemonAction={releasePokemonAction}/>
      );
    }

    const className = cn("pokemons-list-container", {"wide": wide});
    const containerCn = cn("pokemon-details-container", {"wide": wide});

    return (
      <div className={className}>
        {listGroup}
        <Panel
          className={containerCn}
          header={pokemonData.name ? utils.capitalizeFirstLetter(pokemonData.name) : "Pokemon info"}>
          {details}
        </Panel>
      </div>
    );
  }

};

PokemonsList.propTypes = {
  pokemonData: PropTypes.object.isRequired,
  caughtPokemons: PropTypes.array,
  pokemonsList: PropTypes.array,
  fetchPokemon: PropTypes.func,
  fetchPokemonFail: PropTypes.bool,
  catchPokemonAction: PropTypes.func,
  releasePokemonAction: PropTypes.func,
  fetchingPokemonFail: PropTypes.func
};

export default PokemonsList;
