import React from 'react'
import Card from '../components/Card'

import Footer from '../components/Footer'
import Header from '../components/Header'

const FavoritePage = () => {
  const [ activeModal, setActiveModal ] = React.useState(false)

  return (
    <>
      <Header/>
      <div className="favorites">
        <div className="container">
          <div className="standart__title">
            <p>Избранное</p>
          </div>
          <div className="standart__subtitle">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magnam adipisci delectus cum quae magni nesciunt natus nam a dolorem!</p>
          </div>
          <div className="favorites-content">
            <div className="favorites-sort-and-filter">
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
            <p className="favorites__title">Добавленные товары: </p>
            <section className="favorites-items">
              <div className="favorite__item">
                <Card activeModal={activeModal} setActiveModal={setActiveModal}/>
              </div>
              <div className="favorite__item">
                <Card activeModal={activeModal} setActiveModal={setActiveModal}/>
              </div>
              <div className="favorite__item">
                <Card activeModal={activeModal} setActiveModal={setActiveModal}/> 
              </div>
              <div className="favorite__item">
                <Card activeModal={activeModal} setActiveModal={setActiveModal}/>
              </div>
              <div className="favorite__item">
                <Card activeModal={activeModal} setActiveModal={setActiveModal}/>
              </div>
              <div className="favorite__item">
                <Card activeModal={activeModal} setActiveModal={setActiveModal}/>
              </div>
              <div className="favorite__item">
                <Card activeModal={activeModal} setActiveModal={setActiveModal}/>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default FavoritePage