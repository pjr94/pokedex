import React from "react";
import "../styles/pokecard-types.css";
import uppercaseFirstLetter from "../services/uppercaseFirstLetter";

export default function Card(props) {
  
  const updateSearch = () => {
  //  console.log("click");
    console.log(props.pokemonData.name);
   props.setSearchedPokemon(props.pokemonData.name);
   props.getPokeCache();
   //props.handleSubmit(props.pokemonData.name);
  }
/*
*/
// console.log(props.pokemonData);
  return (
    <div className="width">
        <div className={props.pokemonData.types[0].type.name} onClick={() => updateSearch()}>
          <p>{props.pokemonData.id}</p>
          <img className="sprite" src={props.pokemonData.sprites["front_default"]} />
          {uppercaseFirstLetter(props.pokemonData.name)}
        </div>

    </div>
        

    )
}