import axios from 'axios'
import React from 'react'
import { SearchContext } from '../App'
import useDebounce from '../hooks/useDebounce'
import { IProduct } from '../models/IProduct'

const SearchBlock = () => {
  const { search, setSearch } = React.useContext(SearchContext)
  
  return (
    <div className="search-block header__search_block">
      <input 
        type="text" 
        placeholder="Search . . ."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  )
}

export default SearchBlock