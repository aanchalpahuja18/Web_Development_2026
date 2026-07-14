import React from 'react'
import "./Search.css"

const Search = ({handleSearchChange}) => {
  return (
    <div className='search-box'>
      <form className='searchForm'>
        <label htmlFor="searchInp" id='searchLabel'>Search Notes:</label>
        <input type="text" id='searchInp' onChange={(e) => handleSearchChange(e.target.value)}/>
      </form>
    </div>
  )
}

export default Search
