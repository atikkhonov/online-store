import React from 'react'

import { SearchContext } from '../App'

const SearchBlock: React.FC = React.memo(() => {
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
})

export default SearchBlock