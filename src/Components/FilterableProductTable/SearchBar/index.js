import PropType from 'prop-types'
import React from "react"

export const SearchBar = ({ handler }) => {

  const handleChange = (event) => {
    handler(event)
  }

  return (
    <div className="searchBar">
      <input type='search' onChange={handleChange} />
      <label>
        <input type="checkbox" onChange={handleChange}/>
  In Stock Only
</label>
    </div>
  )
}

SearchBar.propTypes = {
  value: PropType.string,
  handler: PropType.func,
}
