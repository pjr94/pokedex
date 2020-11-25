import React, { useEffect } from "react";

import Layout from "../components/Layout";

//import "../styles/index.css"

import SearchComponent from "../components/SearchComponent";
import PokedexComponent from "../components/PokedexComponent";

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

export default function Home() {
  const [searchedPokemon, setSearchedPokemon] = React.useState("pikachu");
  const [pokemonData, setPokemonData] = React.useState([]);
  const [unrecognised, setUnrecognised] = React.useState(false);
  const [history, setHistory] = React.useState([]);

  let tempHistory = history;
  let lengthOfHistory = 9;
  if (tempHistory.length > lengthOfHistory){
    tempHistory = tempHistory.slice(1, lengthOfHistory);
  }

  const getPokeCache = async () => {
    try {
      const result = await P.getPokemonByName(searchedPokemon); // with Promise
      setUnrecognised(false);
      setPokemonData(result);
    } catch (e) {
      // If not found set to unrecognised
      setUnrecognised(true);
      console.log(e);
    }
  };

  // useEffect to make sure component reupdates on searchedPokemon change
  const updateSearch = useEffect(() => {
    // If its not a duplicate search
    // In this method so that it runs each time searchedPokemon changes
    if (searchedPokemon !== tempHistory[tempHistory.length - 1]) {
      tempHistory.push(searchedPokemon);
      setHistory(tempHistory);
      console.log(history);
    }
    getPokeCache();
  }, [searchedPokemon]);

  const handleSubmit = search => {
    setSearchedPokemon(search);
  };

  // To populate search with intial data
  useEffect(() => {
    getPokeCache();
  }, []);

  return (
    <Layout>
      <SearchComponent
        pokemonData={pokemonData}
        handleSubmit={handleSubmit}
        P={P}
        unrecognised={unrecognised}
        history={history}
      />

      <PokedexComponent
        P={P}
        getPokeCache={getPokeCache}
        handleSubmit={handleSubmit}
        setSearchedPokemon={setSearchedPokemon}
      />
    </Layout>
  );
}
