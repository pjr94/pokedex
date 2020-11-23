import React from "react";
import getMultipliers from "../services/getMultipliers";
import uppercaseFirstLetter from "../services/uppercaseFirstLetter";
import allTypes from "../data/AllTypes.json";
import ifExists from "../services/ifExists";

export default function SearchedCard(props) {
  let types = props.pokemonData.types;
  let multipliers = getMultipliers(types);

  const formatTypes = e => {
    let s = "";
    if (e === null) {
      return;
    }

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
      {props.pokemonData.sprites ? (
        <img
          className="sprite"
          src={props.pokemonData.sprites["front_default"]}
        />
      ) : (
        <div>empty</div>
      )}
      <table>
        <thead>
          <tr>
            <th>{props.pokemonData.name}</th>
            <td>#{props.pokemonData.id}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Type</th>
            <td>
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
            </td>
          </tr>
          <tr>
            <th>Super effective against</th>
            <td>
              {multipliers ? formatTypes(multipliers[0][0]) : <div></div>}{" "}
              {multipliers > 0 ? formatTypes(multipliers[1][0]) : null}
            </td>
          </tr>
          <tr>
            <th>Weak against</th>
            <td>
              {multipliers ? formatTypes(multipliers[0][1]) : <div></div>}{" "}
              {multipliers > 0 ? formatTypes(multipliers[1][1]) : null}
            </td>
          </tr>
          <tr>
            <th>Ineffective against</th>
            <td>
              {multipliers ? formatTypes(multipliers[0][2]) : <div></div>}{" "}
              {multipliers > 0 ? formatTypes(multipliers[1][2]) : null}
            </td>
          </tr>
          <tr>
            <th>Strong resistance to</th>
            <td>
              {multipliers ? formatTypes(multipliers[0][3]) : <div></div>}{" "}
              {multipliers > 0 ? formatTypes(multipliers[1][3]) : null}
            </td>
          </tr>
          <tr>
            <th>Low resistance to</th>
            <td>
              {multipliers ? formatTypes(multipliers[0][4]) : <div></div>}{" "}
              {multipliers > 0 ? formatTypes(multipliers[1][4]) : null}
            </td>
          </tr>
          <tr>
            <th>No Damage from</th>
            <td>
              {multipliers ? formatTypes(multipliers[0][5]) : <div></div>}{" "}
              {multipliers > 0 ? formatTypes(multipliers[1][5]) : null}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
