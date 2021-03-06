import React from "react";


export default function Search(props) {
  const [search, setSearch] = React.useState("");


  const handleChange = e => {
    setSearch(e.target.value.toLowerCase());
  };


  const send = e => {
    // PreventDefault to stop page refresh on form submit
    e.preventDefault();
   

    // if search is not an empty string
    if (search) {
      props.handleSubmit(search);
    }
  };

  return (
    <div>
      <form onSubmit={send}>
        <label>
          <input
            className="search-input"
            type="text"
            onChange={handleChange}
            placeholder="Search Pokemon"
            onClick={() => setSearch("")}
            value={search}
          />
          <button className="search-button" type="submit">Search</button>
        </label>
      </form>
      <div className="not-recognised">
        {props.unrecognised === true ? (
          <p>This pokemon is not recognised </p>
        ) : null}
      </div>

    </div>
  );
}
