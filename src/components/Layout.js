import React from "react"
import "../styles/layout.css"
import Logo from "../../images/pokemon-logo.png"

export default function Layout({ children }) {
  return <div>
    <img className="pokemon-logo" src={Logo} alt="Pokemon Logo"/>
      {children}
    </div>
}