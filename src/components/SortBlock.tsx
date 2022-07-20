import React from 'react'

const SortBlock = () => {
  const [popupState, setPopupState] = React.useState(false)

  
  return (
    <div className="sort-block">
      <div 
        onClick={() => setPopupState(!popupState)}
        className="sort-block-header"
      >
        <p>Сортировать по:</p>
        {
          !popupState && <b>&nbsp; популярности</b>
        }
      </div>
      {
        popupState && 
        <span className="sort-popup">
          <button className="popup__item" onClick={() => setPopupState(!popupState)}>популярности (убывание)</button>
          <button className="popup__item" onClick={() => setPopupState(!popupState)}>популярности (возрастание)</button>
          <button className="popup__item" onClick={() => setPopupState(!popupState)}>цене (убывание)</button>
          <button className="popup__item" onClick={() => setPopupState(!popupState)}>цене (возрастание)</button>
          <button className="popup__item" onClick={() => setPopupState(!popupState)}>алфавиту (убывание)</button>
          <button className="popup__item" onClick={() => setPopupState(!popupState)}>алфавиту (возрастание)</button>
        </span>
      }
    </div>
  )
}

export default SortBlock