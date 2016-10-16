import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';

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
    <div>
      <div>
        <img src={`https://img.pokemondb.net/artwork/${pokemonData.name}.jpg`}/>
      </div>
      {pokemonData.order ? "Order: " + pokemonData.order : ""}<br/>
      {pokemonData.height ? "Height: " + pokemonData.height : ""}<br/>
      {pokemonData.weight ? "Weight: " + pokemonData.weight : ""}<br/>
      {pokemonData.base_experience ? "Base experience: " + pokemonData.base_experience : ""}<br/>
      {button}
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
