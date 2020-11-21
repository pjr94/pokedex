import React from "react"

export default function Search(props) {
  //
  const [search, setSearch] = React.useState("");;

  const handleChange = e => {
    setSearch(e.target.value.toLowerCase());
  };

  const send = (e) => {
    e.preventDefault()
    if (search){
      props.handleSubmit(search)
    } };
  /*


  */

  return (
    <div>
      
      <form onSubmit={send}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search Pokemon"
            onClick={() => setSearch("")}
            value={search}
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </div>
  )
}
