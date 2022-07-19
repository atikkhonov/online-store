import React from 'react'


const PaginationBlock: React.FC = () => {
  
  return (
    <div className="pagination-block">
      <button className="pagination__button pagination-button-left">
        <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.64912 0L11 1.5675L2.72588 11L11 20.4325L9.64912 22L1.19209e-07 11L9.64912 0Z" fill="#111111"/>
        </svg>
      </button>
      <button className="pagination__item pagination-active">
        <p>1</p>
      </button>
      <button className="pagination__item">
        <p>2</p>
      </button>
      <button className="pagination__item">
        <p>3</p>
      </button>
      <button className="pagination__item">
        <p>4</p>
      </button>
      <button className="pagination__item">
        <p>5</p>
      </button>
      <div className="bread__crumbs">
        <p>...</p>
      </div>
      <button className="pagination__item">
        <p>12</p>
      </button>
      <button className="pagination__item">
        <p>13</p>
      </button>
      <button className="pagination__button pagination-button-right">
        <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.35088 22L0 20.4325L8.27412 11L0 1.5675L1.35088 0L11 11L1.35088 22Z" fill="#111111"/>
        </svg>
      </button>
    </div>
  )
}

export default PaginationBlock