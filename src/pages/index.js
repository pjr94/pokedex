// Basic search function and API hook up from https://github.com/arslanah99/Pokedex-Tutorial/tree/master/src && https://www.youtube.com/watch?v=cNmn72kiZWU

import React, { useEffect } from "react";
import axios from "axios";
// ES6 imports
//import PokeAPI from "pokeapi-typescript";


import Layout from "../components/Layout";

//import "../styles/index.css"

import SearchComponent from "../components/SearchComponent";
import PokedexComponent from "../components/PokedexComponent";
// Node.js require
const PokeAPI = require("pokeapi-typescript");
export default function Home() {
  const [searchedPokemon, setSearchedPokemon] = React.useState("pikachu");
  const [pokemonData, setPokemonData] = React.useState([]);
  const [pokemonType, setPokemonType] = React.useState("");


  
  // https://developer.aliyun.com/mirror/npm/package/pokeapi-typescript/v/1.2.1
  // Using this cache to speed up API gets. If data is not cached hit api, otherwise get from cache. Refreshes every 24 hours
  const getPokeCache = () => {
    PokeAPI.Pokemon.resolve(searchedPokemon).then(result => 
      setPokemonData(result)
    )
  // ;

  };
  
  const getPokemon = async () => {
    const toArray = [];
    
    try {
      
      const url = `https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`;
      const result = await axios.get(url);
       console.log(result);
      
      setPokemonType(result.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };


// useEffect to make sure component reupdates on searchedPokemon change
  const updateSearch = useEffect(() => {
    getPokeCache();
  }, [searchedPokemon]);

  const handleSubmit = (search) => {
  //  e.preventDefault();
  //  if (search === "") { return; }
    setSearchedPokemon(search);

    
//    updateSearch();
   console.log(pokemonData);
  };

  useEffect(() =>{
    getPokeCache();

  }, []);
//getP();
  //  pokemonData.map(data => (
  //  <SearchedCard data={data} />

  /*
  <PokedexComponent handleChange={handleChange} setSearchedPokemon={setSearchedPokemon}/>
      useEffect(() =>{
      getPokeCache();
  
    });

  */
    // Called immediantly after render(). This will happen only the first time it's loaded until the page is refreshes.
   /*   // Second parameter means it is run only once
  React.useEffect(() => {
    getPokeCache();
  }, []);
   

<p>{pokemonData.data.name}</p>
  */
  
  return (
    <Layout>
      <SearchComponent
        pokemonData={pokemonData}
        handleSubmit={handleSubmit}
      />

<PokedexComponent getPokeCache={getPokeCache} handleSubmit={handleSubmit} setSearchedPokemon={setSearchedPokemon}/>
      
      
    </Layout>
  );

  
  //  serviceWorker.unregister();
}
