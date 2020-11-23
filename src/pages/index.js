// Basic search function and API hook up from https://github.com/arslanah99/Pokedex-Tutorial/tree/master/src && https://www.youtube.com/watch?v=cNmn72kiZWU

import React, { useEffect } from "react";
import axios from "axios";

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

  const getPokeCache = async () => {
    try {
      const result = await P.getPokemonByName(searchedPokemon); // with Promise
      setUnrecognised(false);
      setPokemonData(result);
    } catch (e) {
      setUnrecognised(true);
      console.log(e);
    }
  };

  // useEffect to make sure component reupdates on searchedPokemon change
  const updateSearch = useEffect(() => {
    getPokeCache();
  }, [searchedPokemon]);

  const handleSubmit = search => {
    setSearchedPokemon(search);
  //  console.log(pokemonData);
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
