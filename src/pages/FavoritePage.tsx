import React from 'react'
import FavoriteItem from '../components/FavoriteItem'

import Footer from '../components/Footer'
import Header from '../components/Header'
import { useTypedSelector } from '../hooks/redux'

const FavoritePage = () => {
  const products = useTypedSelector(state => state.favorite.favoriteProducts)
  
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
            <p className="favorites__title">Добавленные товары: </p>
            <section className="favorites-items">
              {
                products.map((item) => {
                  return <FavoriteItem favoriteProduct={item} />
                })
              }
            </section>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default FavoritePage