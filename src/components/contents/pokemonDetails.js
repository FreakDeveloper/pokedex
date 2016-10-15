import React, {PropTypes} from 'react';

const PokemonDetails = (props) => {
  return(
    <div>
      {props.pokemonData.order ? "Order: " + props.pokemonData.order : ""}<br/>
      {props.pokemonData.height ? "Height: " + props.pokemonData.height : ""}<br/>
      {props.pokemonData.weight ? "Weight: " + props.pokemonData.weight : ""}<br/>
      {props.pokemonData.base_experience ? "Base experience: " + props.pokemonData.base_experience : ""}<br/>
    </div>
  )
};

PokemonDetails.propTypes = {
  props: PropTypes.object.isRequired
};

export default PokemonDetails;
