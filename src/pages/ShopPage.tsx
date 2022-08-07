import React from 'react'
import qs from 'qs'

import Card from '../components/Card'
import FilterBlock from '../components/FilterBlock'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Modal from '../components/Modal'
import PaginationBlock from '../components/PaginateBlock/PaginationBlock'
import SortBlock from '../components/SortBlock'

import { useTypedDispatch, useTypedSelector } from '../hooks/redux'
import { fetchProducts } from '../store/actions/ProductAction'
import { setCurrentPage } from '../store/slices/SearchSlice'

function ShopPage () {
  const [ activeModal, setActiveModal ] = React.useState(false)

  const dispatch = useTypedDispatch()
  const { categoryID, sortBy, page } = useTypedSelector(state => state.search)
  const { products, isLoading, error } = useTypedSelector(state => state.product)
  
  React.useEffect(() => {
    const sort = sortBy.sortProperty.replace('+', '');
    const order = sortBy.sortProperty.includes('+') ? 'asc' : 'desc';
    // const search = seachValue ? `&search=${searchValue}` : ''
    
    dispatch(fetchProducts(categoryID, sort, order, page))
  }, [ categoryID, sortBy, page ])
  
  const onChangePage = React.useCallback((number: number) => {
    dispatch(setCurrentPage(number))
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
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>{error}</h1>}
        <section className="cards">
          {
            products.map(product => {
              return <Card
                key={product.id}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                product={product}
              />
            })
          }
        </section>
        <PaginationBlock currentPage={page} onChangePage={onChangePage}/>
      </div>
      <Modal active={activeModal} setActive={setActiveModal}/>
      <Footer/>
    </>
  )
}

export default ShopPage
