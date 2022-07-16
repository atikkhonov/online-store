import React from 'react'

const FilterBlock = () => {
  return (
    <div className="filter-block">
      <p>Фильтрация: </p>
      <div className="filter-items">
        <button className="filter__item">Жидкости</button>
        <button className="filter__item">Моды</button>
        <button className="filter__item">Поды</button>
        <button className="filter__item">AIO-системы</button>
        <button className="filter__item">HQD</button>
      </div>
    </div>
  )
}

export default FilterBlock
