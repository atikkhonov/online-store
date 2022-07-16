import React from 'react'

import Card from '../components/Card'
import FilterBlock from '../components/FilterBlock'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Modal from '../components/Modal'
import SortBlock from '../components/SortBlock'

function ShopPage () {
  const [ activeModal, setActiveModal ] = React.useState(false)
  const [ items, setItems ] = React.useState([])
  
  React.useEffect(() => {
    fetch('https://62d2faa581cb1ecafa68c825.mockapi.io/vapeLiquids')
      .then((res) => res.json())
      .then((arr) => setItems(arr))
  }, [])
  
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
          <SortBlock/>
          <FilterBlock/>
        </div>
        <section className="cards">
          {
            items.map(item => {
              return <Card
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                product={item}
              />
            })
          }
        </section>
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
      </div>
      <Footer/>
      <Modal active={activeModal} setActive={setActiveModal} />
    </>
  )
}

export default ShopPage
