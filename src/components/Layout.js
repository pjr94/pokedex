import React from "react"
import "../styles/layout.css"
import Logo from "../../images/pokemon-logo.png"

export default function Layout({ children }) {
  return <div>
    <head>
      <title>Pokedex</title>
      <meta desciprtion="Pokedex site showing strengths and weaknesses of the original 151 Pokemon"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    
    <img className="pokemon-logo" src={Logo} alt="Pokemon Logo"/>
      {children}
    </div>
}