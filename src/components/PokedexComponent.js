import React, { useEffect } from "react";
import axios from "axios";

import Card from "../components/Card.js";
import "../styles/index.css";

export default function PokedexComponent(props) {
  const [allPokemon, setAllPokemon] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  let tempPokemonArray = [];
  // number of pokemon to render
  let num = 15;

  const fetchAllPokemon = async () => {
    for (var i = 1; i < num; i++) {
      try {
        // any function with ByName can also be passed an integer ID (ByID can't be passed a non-ID however)
        // Push promise onto array rather than pushing result (otherwise temp array might still be empty by the time you want to do something)
        tempPokemonArray.push(props.P.getPokemonByName(i));
      } catch (e) {
        console.log(e);
      }
    }

    try {
      // Promise.all takes an array of individual promises & gives you back a single promise that is resolved when all of the ones given are or rejected when any are rejected
      const result = await Promise.all(tempPokemonArray);
      setAllPokemon(result);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  // Populate with pokemon
  useEffect(() => {
    fetchAllPokemon();
  }, []);

  return (
    <div className="flex card-section flex-wrap">
      {loading ? (
        <p>Loading pokemon...</p>
      ) : (
        allPokemon.map((data, i) => (
          <Card
            getPokeCache={props.getPokeCache}
            handleSubmit={props.handleSubmit}
            setSearchedPokemon={props.setSearchedPokemon}
            pokemonData={data}
            key={i}
          />
        ))
      )}
    </div>
  );
}
