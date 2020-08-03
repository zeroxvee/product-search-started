import PropType from 'prop-types'
import React from "react"

export const SearchBar = ({ value, handler }) => {

  const handleChange = (event) => {
    handler(event)
  }

  return (
    <div className="searchBar">
      <label>Filter product
      <input type='search' onChange={handleChange} />
      </label>
      <label>
        In Stock Only:
        <input type="checkbox" onChange={handleChange} />

      </label>
      <br></br>
      <label>
        Max Price:
        <input type="number" onChange={handleChange} value={value} />

      </label>
    </div>
  )
}

SearchBar.propTypes = {
  value: PropType.number,
  handler: PropType.func,
}
