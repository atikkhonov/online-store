import React from 'react'
import { useTypedDispatch, useTypedSelector } from '../hooks/redux'
import { setSortBy } from '../store/slices/SearchSlice'
interface SortBlockProps {
  
}

const popupItems = [
  { name: "популярности (убывание)", sortProperty: 'rating' },
  { name: "популярности (возрастание)", sortProperty: '+rating' },
  { name: "цене (убывание)", sortProperty: 'price' },
  { name: "цене (возрастание)", sortProperty: '+price' },
  { name: "алфавиту (убывание)", sortProperty: 'title' },
  { name: "алфавиту (возрастание)", sortProperty: '+title' }
]

const SortBlock: React.FC<SortBlockProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  const dispatch = useTypedDispatch()
  const sortBy = useTypedSelector(state => state.search.sortBy)
  
  const onClickPopupItem = (obj: {name: string; sortProperty: string}) => {
    dispatch(setSortBy(obj))
    setIsOpen(!isOpen)
  }
  
  return (
    <div className="sort-block">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="sort-block-header"
      >
        <p>Сортировать по:</p>
        <b>&nbsp; {sortBy.name}</b>
        {
          isOpen 
          ? <svg width="15" height="6" viewBox="0 0 15 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6L7.5 0L15 6H0Z" fill="#111111"/>
          </svg> 
          : <svg width="15" height="6" viewBox="0 0 15 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 6L0 0H15L7.5 6Z" fill="#111111"/>
          </svg>
        }
      </div>
      {
        isOpen && 
        <span className="sort-popup">
          {
            popupItems.map((popupItem, index) => {
              return <button 
                key={index}
                className={ 
                  (sortBy.sortProperty === popupItem.sortProperty) 
                  ? "popup__item popup__item-active" 
                  : "popup__item"
                } 
                onClick={() => onClickPopupItem(popupItem)!}
              >{popupItem.name}</button>
            })
          }
        </span>
      }
    </div>
  )
}

export default SortBlock