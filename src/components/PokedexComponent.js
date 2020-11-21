import React, { useEffect } from "react";
import axios from "axios";

import Card from "../components/Card.js";

import "../styles/index.css";

// Node.js require
const PokeAPI = require("pokeapi-typescript");

export default function PokedexComponent(props) {
  const [allPokemon, setAllPokemon] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  let toArray = [];
  let num = 15;

  const fetchAllPokemon = async () => {
    const { data } = await axios.get(
      // 151 - all gen1
      "https://pokeapi.co/api/v2/pokemon/?limit=151"
    );

    // const tempPokeData = await Promise.all(
    const tempPokeData = Promise.all(
      data.results.map(({ url }) => axios.get(url))
    ).then(setLoading(false));
    //  console.log(tempPokeData);
    return tempPokeData;
  };

  const getGen1 = async () => {
    //setLoading(true);

    // Retrieves list for endpoint (number of results to list, offset)
    // var.results contains object containing array of the list
  //  const pokeList = await PokeAPI.Pokemon.list(num, 0);
    //  console.log(pokeList);
    
    for (var i = 1; i < num; i++) {
    
      try {

        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const result = await axios.get(url);
        toArray.push(result.data);
        
    //  setPokemonType(result.data.types[0].type.name);
    
      } catch (e) {
        console.log(e);
      }
    }
    setAllPokemon(toArray);
/*
    let toArray = [];
    for (var i = 1; i < num; i++){
      // Objects and arrays are pushed as pointer to original object, privitive types are pushed as a copy
      toArray.push(PokeAPI.Pokemon.resolve(i));
    }

    console.log(toArray[0]);
    setAllPokemon(toArray);

   
    */

    /*

    // PokeAPI.Pokemon.resolve returns objects not promises
    for (var i = 1; i < num; i++){
      PokeAPI.Pokemon.resolve(i).then(result =>  toArray[result.id] = result);
    };
  //  console.log(toArray);
  //Promise.all(toArray).then((values) => {setAllPokemon(toArray)});
   // toArray.sort(compareIds);
   */
  };

  useEffect(() => {
  //  let temp = fetchAllPokemon();
  //  console.log(temp);
  //  setAllPokemon(temp);
    getGen1();

    //
    //   toArray.sort(compareIds);
    //  setAllPokemon(toArray);
    setLoading(false);
  }, []);

  function compareIds(a, b) {
    return a.id - b.id;
  }
  //
  // getGen1();
  /*
      {allPokemon.map(data => console.log(data.name))}

<Card setSearchedPokemon={props.setSearchedPokemon} pokemonData={data.value} key={i}/>


{loading !== true ? (
        <p>Loading pokemon...</p>
      ) : (
        allPokemon.map((data, i) => <Card getPokeCache={props.getPokeCache} handleSubmit={props.handleSubmit} setSearchedPokemon={props.setSearchedPokemon} pokemonData={data} key={i}/>
      ))}

      {loading ? (
        <p>Loading pokemon...</p>
      ) : (
        allPokemon.map((data, i) => <Card getPokeCache={props.getPokeCache} handleSubmit={props.handleSubmit} setSearchedPokemon={props.setSearchedPokemon} pokemonData={data} key={i}/>
      ))}



      {loading ? (
        <p>Loading pokemon...</p>
      ) : (
        allPokemon.value.map((data, i) => (
          <Card
            getPokeCache={props.getPokeCache}
            handleSubmit={props.handleSubmit}
            setSearchedPokemon={props.setSearchedPokemon}
            pokemonData={data}
            key={i}
          />
        ))
      )}

*/

  //  console.log(loading);
  
  // typeof allPokemon is object
 //  console.log(typeof allPokemon);

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
