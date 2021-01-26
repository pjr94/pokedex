import React from "react";
import "../styles/pokecard-types.css";
import uppercaseFirstLetter from "../services/uppercaseFirstLetter";
import "../styles/index.css"

export default function Card(props) {
  const updateSearch = () => {
    props.setSearchedPokemon(props.pokemonData.name);
    props.getPokeCache();
  };

  return (
    <div className="width poke-card">
      <div
        className={props.pokemonData.types[0].type.name}
        onClick={() => updateSearch()}
      >
        <p>{props.pokemonData.id}</p>
        <img
          alt={`${props.pokemonData.name} sprite`}
          className="sprite"
          src={props.pokemonData.sprites["front_default"]}
        />
        <p className="pokecard-name">{uppercaseFirstLetter(props.pokemonData.name)}</p>
      </div>
    </div>
  );
}
