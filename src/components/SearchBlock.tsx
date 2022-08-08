import axios from 'axios'
import React from 'react'
import useDebounce from '../hooks/useDebounce'
import { IProduct } from '../models/IProduct'

const SearchBlock = () => {
  const [ search, setSearch ] = React.useState('')
  const [ prods, setProds ] = React.useState<IProduct[]>([])

  const debounced = useDebounce(search)
  
  async function searchProducts() {
    const response = await axios.get<IProduct[]>('https://62d2faa581cb1ecafa68c825.mockapi.io/vapeLiquids')
    console.log(response.data);
    setProds(response.data)
  }
  
  React.useEffect(() => {
    if (debounced.length > 3) {
      searchProducts()
    }
    console.log(debounced);
  }, [debounced])
  
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