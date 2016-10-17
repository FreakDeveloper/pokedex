import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import PokemonTypes from './pokemonTypes';

const PokemonDetails = ({pokemonData, caughtPokemons, catchPokemonAction, releasePokemonAction}) => {
  let button = null;
  if (caughtPokemons.filter(pokemon => pokemon.id === pokemonData.id).length > 0) {
    button = <Button
      bsStyle="danger"
      onClick={releasePokemonAction.bind(this, {id: pokemonData.id, name: pokemonData.name})}>
      Release
    </Button>;
  } else {
    button = <Button
      bsStyle="info"
      onClick={catchPokemonAction.bind(this, {id: pokemonData.id, name: pokemonData.name})}>
      Catch
    </Button>;
  }

  return (
    <div className="pokemon-details">
      <div className="pokemon-details-top">
        {button}
        <div className="pokemon-image">
          <img src={`https://img.pokemondb.net/artwork/${pokemonData.name}.jpg`}/>
        </div>
      </div>

      <p>{pokemonData.order ? "Order: " + pokemonData.order : ""}</p>
      <p>{pokemonData.height ? "Height: " + pokemonData.height : ""}</p>
      <p>{pokemonData.weight ? "Weight: " + pokemonData.weight : ""}</p>
      <p>{pokemonData.base_experience ? "Base experience: " + pokemonData.base_experience : ""}</p>

      <PokemonTypes species={pokemonData.species} />
    </div>
  );
};

PokemonDetails.propTypes = {
  pokemonData: PropTypes.object.isRequired,
  caughtPokemons: PropTypes.array,
  catchPokemonAction: PropTypes.func,
  releasePokemonAction: PropTypes.func
};

export default PokemonDetails;
