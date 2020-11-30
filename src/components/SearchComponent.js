import React from "react";

import Search from "../components/Search.js";
import SearchedCard from "../components/SearchedCard.js";
import HistoryComponent from "../components/HistoryComponent"
import "../styles/index.css";


export default function SearchComponent(props) {
  return (
    <div className="flex justify-center search-section">
      <div className="poke-info">
        <SearchedCard pokemonData={props.pokemonData} />
      </div>
      <div className="search">
        <Search
          className="margin50"
          handleSubmit={props.handleSubmit}
          unrecognised={props.unrecognised}
        />
        <HistoryComponent
          history={props.history}
          handleSubmit={props.handleSubmit}
        />
      </div>
    </div>
  );
}
