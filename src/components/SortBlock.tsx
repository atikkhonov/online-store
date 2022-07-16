import React from 'react'

const SortBlock = () => {
  return (
    <div className="sort-block">
      <p>Сортировать по:</p> 
      <b>&nbsp; популярности</b>
      <span className="sort-popup">
        <div className="popup__item">популярности (убывание)</div>
        <div className="popup__item">популярности (возрастание)</div>
        <div className="popup__item">цене (убывание)</div>
        <div className="popup__item">цене (возрастание)</div>
        <div className="popup__item">алфавиту (убывание)</div>
        <div className="popup__item">алфавиту (возрастание)</div>
      </span>
    </div>
  )
}

export default SortBlock