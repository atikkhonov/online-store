import React from 'react'

import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Modal from '../components/Modal'

function ShopPage () {
  const [ activeModal, setActiveModal ] = React.useState(false)
  
  return (
    <>
      <Header/>
      <div className="container">
        <div className="standart__title">
          <p>Продукция</p>
        </div>
        <div className="standart__subtitle">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magnam adipisci delectus cum quae magni nesciunt natus nam a dolorem!</p>
        </div>
        <div className="sort-and-filter-block">
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
        </div>
        <section className="cards">
          <Card activeModal={activeModal} setActiveModal={setActiveModal}/> 
          <Card activeModal={activeModal} setActiveModal={setActiveModal}/> 
          <Card activeModal={activeModal} setActiveModal={setActiveModal}/> 
          <Card activeModal={activeModal} setActiveModal={setActiveModal}/> 
          <Card activeModal={activeModal} setActiveModal={setActiveModal}/> 
          <Card activeModal={activeModal} setActiveModal={setActiveModal}/> 
          <Card activeModal={activeModal} setActiveModal={setActiveModal}/> 
          <Card activeModal={activeModal} setActiveModal={setActiveModal}/> 
        </section>
        <div className="pagination-block">
          <button className="pagination__button pagination-button-left">
            <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.64912 0L11 1.5675L2.72588 11L11 20.4325L9.64912 22L1.19209e-07 11L9.64912 0Z" fill="#111111"/>
            </svg>
          </button>
          <div className="pagination__item pagination-active">
            <p>1</p>
          </div>
          <div className="pagination__item">
            <p>2</p>
          </div>
          <div className="pagination__item">
            <p>3</p>
          </div>
          <div className="pagination__item">
            <p>4</p>
          </div>
          <div className="pagination__item">
            <p>5</p>
          </div>
          <div className="bread__crumbs">
            <p>...</p>
          </div>
          <div className="pagination__item">
            <p>12</p>
          </div>
          <div className="pagination__item">
            <p>13</p>
          </div>
          <button className="pagination__button pagination-button-right">
            <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.35088 22L0 20.4325L8.27412 11L0 1.5675L1.35088 0L11 11L1.35088 22Z" fill="#111111"/>
            </svg>
          </button>
        </div>
      </div>
      <Footer/>
      <Modal active={activeModal} setActive={setActiveModal} />
    </>
  )
}

export default ShopPage
