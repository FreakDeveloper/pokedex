import React, {PropTypes} from 'react';

const PokemonDetails = (data) => {
  return(
    <div>
      {data.pokemonData.order ? "Order: " + data.pokemonData.order : ""}<br/>
      {data.pokemonData.height ? "Height: " + data.pokemonData.height : ""}<br/>
      {data.pokemonData.weight ? "Weight: " + data.pokemonData.weight : ""}<br/>
      {data.pokemonData.base_experience ? "Base experience: " + data.pokemonData.base_experience : ""}<br/>
    </div>
  );
};

PokemonDetails.propTypes = {
  data: PropTypes.object.isRequired
};

export default PokemonDetails;
