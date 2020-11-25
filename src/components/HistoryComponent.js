import React from "react";

import uppercaseFirstLetter from "../services/uppercaseFirstLetter";

export default function HistoryComponent(props) {

  return (
    <div className="">
      <ul>
        {[...props.history].reverse().map((item, i) => 
          <li key={i}><a href="#" onClick={() => props.handleSubmit(item)}>{uppercaseFirstLetter(item)}</a></li>
        )}
      </ul>
 
    </div>
  );
}
