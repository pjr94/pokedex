import React from "react";
import getMultipliers from "../services/getMultipliers";
import uppercaseFirstLetter from "../services/uppercaseFirstLetter";

export default function SearchedCard(props) {
  let types = props.pokemonData.types;
  let multipliers = getMultipliers(types);

  const formatTypes = e => {
    // Fale cases
    let s = "";
    if (e === null) {
      return;
    }

    // Used to display both types in correct style
    e.forEach(element => {
      element = uppercaseFirstLetter(element);
      s = s.concat(element) + " ";
    });
    return s;
  };

  // Maybe refactor this section so don't have to do as many if statements
  // Have to have some if statement checking as first render pokemonData is empty is then populated post-init render
  return (
    <div>
      <div className="table">
        <div className="row">
          <div className="cell text-right searched-headers">
            <h1 >
              {props.pokemonData.name
                ? uppercaseFirstLetter(props.pokemonData.name)
                : null}
            </h1>
          </div>
          <div className="cell">
            {props.pokemonData.name ? <h1>#{props.pokemonData.id}</h1> : null}
          </div>
        </div>
        <div className="row main-sprite">

            {props.pokemonData.sprites ? (
              <img
                src={props.pokemonData.sprites["front_default"]}
              />
            ) : (
              <div>Loading Pokemon...</div>
            )}
        </div>
        <div className="row">
          <div className="cell text-right searched-headers"><h2>Type</h2></div>
          <div className="cell">
            {props.pokemonData.types ? (
              uppercaseFirstLetter(props.pokemonData.types[0].type.name)
            ) : (
              <div></div>
            )}{" "}
            {props.pokemonData.types && props.pokemonData.types.length > 1 ? (
              uppercaseFirstLetter(props.pokemonData.types[1].type.name)
            ) : (
              <div></div>
            )}{" "}
          </div>
        </div>
        <div className="row">
          <div className="cell text-right searched-headers"><h2>Super effective against</h2></div>
          <div className="cell">
            {multipliers ? formatTypes(multipliers[0][0]) : <div></div>}{" "}
            {multipliers > 0 ? formatTypes(multipliers[1][0]) : null}
          </div>
        </div>
        <div className="row">
          <div className="cell text-right searched-headers"><h2>Weak against</h2></div>
          <div className="cell">
            {" "}
            {multipliers ? formatTypes(multipliers[0][1]) : <div></div>}{" "}
            {multipliers > 0 ? formatTypes(multipliers[1][1]) : null}
          </div>
        </div>
        <div className="row">
          <div className="cell text-right searched-headers"><h2>Ineffective against</h2></div>
          <div className="cell">{multipliers ? formatTypes(multipliers[0][2]) : <div></div>}{" "}
              {multipliers > 0 ? formatTypes(multipliers[1][2]) : null}</div>
        </div>
        <div className="row">
          <div className="cell text-right searched-headers"><h2>Strong resistance to</h2></div>
          <div className="cell">{multipliers ? formatTypes(multipliers[0][3]) : <div></div>}{" "}
              {multipliers > 0 ? formatTypes(multipliers[1][3]) : null}</div>
        </div>
        <div className="row">
          <div className="cell text-right searched-headers"><h2>Low resistance to</h2></div>
          <div className="cell">{multipliers ? formatTypes(multipliers[0][4]) : <div></div>}{" "}
              {multipliers > 0 ? formatTypes(multipliers[1][4]) : null}</div>
        </div>
        <div className="row">
          <div className="cell text-right searched-headers"><h2>No Damage from</h2></div>
          <div className="cell">{multipliers ? formatTypes(multipliers[0][5]) : <div></div>}{" "}
              {multipliers > 0 ? formatTypes(multipliers[1][5]) : null}</div>
        </div>
        <div className="row">
          <div className="cell"></div>
          <div className="cell"></div>
        </div>
      </div>
    </div>
  );
}
