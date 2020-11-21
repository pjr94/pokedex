import React from "react"

import Search from "../components/Search.js";
import SearchedCard from "../components/SearchedCard.js";
import "../styles/index.css"
import "../styles/search-component.css"

export default function SearchComponent(props) {
  //  const [pokemonData, setPokemonData] = React.useState([]);
    /*

    */
  return <div className="flex justify-center search-section">
            <div className="poke-info">
                <SearchedCard  pokemonData={props.pokemonData}/>
                
            </div>
            <div className="search">
                <Search className="margin50" handleSubmit={props.handleSubmit} />
            </div>
            

    </div>
}