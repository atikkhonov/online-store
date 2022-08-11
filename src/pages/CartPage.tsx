import React from 'react'

import AnimationButton from '../components/AnimationButton'
import CartItem from '../components/CartItem'
import Footer from '../components/Footer'
import Header from '../components/Header'

import { useTypedDispatch, useTypedSelector } from '../hooks/redux'

const CartPage = () => {
  const dispatch = useTypedDispatch()
  const { products, totalPrice } = useTypedSelector(state => state.cart)
  
  return (
    <>
      <Header/>
      <div className="cart">
        <div className="container">
          <div className="cart__title">
            <p>Корзина</p>
          </div>
          <div className="cart-header">
            <div className="price-block">
              <div className="total__price">
                <b>Итого: {totalPrice} ₽</b>
              </div>
              <div className="VAT__price">
                <p>Сумма НДС: 0 ₽</p>
              </div>
            </div>
            <AnimationButton text="сделать заказ" className="cart__button"/>
          </div>
          <div className="cart-content">
            <div className="order-block">
              <div className="search-block">
                <input type="text" placeholder="Найти ..."/>
              </div>
              <div className="total__items">Всего товаров в корзине <span>&nbsp; 13</span></div>
              <button className="button button-close"> очистить корзину <span>&times;</span></button>
            </div>
            <section className="cart-items">
              {
                products.map((product) => {
                  return <CartItem
                    key={product.id}
                    cartProduct={product}
                  />
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

export default CartPage