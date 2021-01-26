import React from "react";
import "../styles/index.css"

import uppercaseFirstLetter from "../services/uppercaseFirstLetter";

export default function HistoryComponent(props) {

  return (
    <div className="">
      <h2 className="history-item">History</h2>
      <ul>
        {[...props.history].reverse().map((item, i) => 
          <li className="history-item" key={i}><a href="#" onClick={() => props.handleSubmit(item)}>{uppercaseFirstLetter(item)}</a></li>
        )}
      </ul>
 
    </div>
  );
}
