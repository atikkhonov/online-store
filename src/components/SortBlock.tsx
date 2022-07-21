import React from 'react'

const popupItems = [
  "популярности (убывание)",
  "популярности (возрастание)",
  "цене (убывание)",
  "цене (возрастание)",
  "алфавиту (убывание)",
  "алфавиту (возрастание)"
]

const SortBlock = () => {
  const [popupState, setPopupState] = React.useState(false)
  
  return (
    <div className="sort-block">
      <div 
        onClick={() => setPopupState(!popupState)}
        className="sort-block-header"
      >
        <p>Сортировать по:</p>
        <b>&nbsp; популярности</b>
        {
          popupState 
          ? <svg width="15" height="6" viewBox="0 0 15 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6L7.5 0L15 6H0Z" fill="#111111"/>
          </svg> 
          : <svg width="15" height="6" viewBox="0 0 15 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 6L0 0H15L7.5 6Z" fill="#111111"/>
          </svg>
        }
      </div>
      {
        popupState && 
        <span className="sort-popup">
          {
            popupItems.map((popupItem, index) => {
              return <button 
                key={index}
                className="popup__item" 
                onClick={() => setPopupState(!popupState)}
              >{popupItem}</button>
            })
          }
        </span>
      }
    </div>
  )
}

export default SortBlock