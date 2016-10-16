import React, {PropTypes} from 'react';

const PokemonDetails = ({pokemonData}) => {
  return(
    <div>
      <div>
        <img src={`https://img.pokemondb.net/artwork/${pokemonData.name}.jpg`}/>
      </div>
      {pokemonData.order ? "Order: " + pokemonData.order : ""}<br/>
      {pokemonData.height ? "Height: " + pokemonData.height : ""}<br/>
      {pokemonData.weight ? "Weight: " + pokemonData.weight : ""}<br/>
      {pokemonData.base_experience ? "Base experience: " + pokemonData.base_experience : ""}<br/>
    </div>
  );
};

PokemonDetails.propTypes = {
    pokemonData: PropTypes.object.isRequired
};

export default PokemonDetails;
