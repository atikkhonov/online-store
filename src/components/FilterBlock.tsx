import React from 'react'
import { useTypedDispatch, useTypedSelector } from '../hooks/redux'
import { setFilter } from '../store/slices/SearchSlice'

const filterItems = [
  "Все",
  "Цитрус",
  "Ягоды",
  "Выпечка",
  "Фрукты",
  "Разное"
]

const FilterBlock = () => {
  const dispatch = useTypedDispatch()
  const categoryID = useTypedSelector(state => state.search.categoryID)

  const onChangeCategory = (id: number) => {
    dispatch(setFilter(id))
  }
  
  return (
    <div className="filter-block">
      <p>Фильтрация: </p>
      <div className="filter-items">
        {
          filterItems.map((item: string, index: number) => {
            return <button 
              key={index}
              className={categoryID === index ? "filter__item selected" : "filter__item"} 
              onClick={() => onChangeCategory(index)}
            >
              {item}
            </button>
          })
        }
      </div>
    </div>
  )
}

export default FilterBlock
