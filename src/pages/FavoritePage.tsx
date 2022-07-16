import React from 'react'
import Card from '../components/Card'
import FilterBlock from '../components/FilterBlock'

import Footer from '../components/Footer'
import Header from '../components/Header'
import SortBlock from '../components/SortBlock'

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
              <SortBlock/>
              <FilterBlock/>
            </div>
            <p className="favorites__title">Добавленные товары: </p>
            <section className="favorites-items">
              {/* <div className="favorite__item">
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
              </div> */}
            </section>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default FavoritePage