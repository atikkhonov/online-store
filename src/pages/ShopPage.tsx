import React from 'react'

import Card from '../components/Card'
import FilterBlock from '../components/FilterBlock'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Modal from '../components/Modal'
import SortBlock from '../components/SortBlock'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchProducts } from '../store/actions/ProductAction'

function ShopPage () {
  const dispatch = useAppDispatch()
  const { products, isLoading, error } = useAppSelector(state => state.product)
  const [ activeModal, setActiveModal ] = React.useState(false)

  const pages = [1, 2, 3, 4, 5]
  
  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [ ])

  
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
          {isLoading && <h1>Идет загрузка...</h1>}
          {error && <h1>{error}</h1>}
          {
            products.map(product => {
              return <Card
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                product={product}
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
          {
            pages.map((page, index) => <button 
              key={index}
            >
              <p>{page}</p>
            </button>
            )
          }
          <button className="pagination__button pagination-button-right">
            <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.35088 22L0 20.4325L8.27412 11L0 1.5675L1.35088 0L11 11L1.35088 22Z" fill="#111111"/>
            </svg>
          </button>
        </div>
      </div>
      <Modal active={activeModal} setActive={setActiveModal}/>
      <Footer/>
    </>
  )
}

export default ShopPage
