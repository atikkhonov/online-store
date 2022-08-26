import React from 'react'
import { Link } from 'react-router-dom'

import AnimationButton from '../components/UI/AnimationButton'
import CartItem from '../components/elements/CartItem'

import { useTypedDispatch, useTypedSelector } from '../hooks/redux'
import { clearCart } from '../store/slices/CartSlice'

const CartPage = () => {
  const dispatch = useTypedDispatch()
  const { products, totalPrice } = useTypedSelector(state => state.cart)
  
  const onClickClearButton = () => {
    dispatch(clearCart())
  }
  
  const productsCurrent = products.reduce((sum, prod) => sum + prod.count, 0)
  
  return (
    <>
      {
        (products.length > 0) ?
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
                <div className="total__items">Всего товаров в корзине <span>&nbsp; {productsCurrent}</span></div>
                <button 
                  className="button button-close"
                  onClick={onClickClearButton}
                > очистить корзину <span>&times;</span></button>
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
        : <div className="empty-cart">
          <div className="container">
            <div className="cart-header">
              <div className="standart__title">
                <p>Корзина</p>
              </div>
              <div className="standart__subtitle">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magnam adipisci delectus cum quae magni nesciunt natus nam a dolorem!</p>
              </div>
            </div>
            <div className="cart-content">
              <div className="cart__title">
                <b>Вы ничего не добавляли в корзину :(</b>
              </div>
              <div className="cart__subtitle">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita iure non sapiente ut suscipit velit quo ullam nobis assumenda. Exercitationem esse inventore accusamus aut optio aliquam. Assumenda, vero explicabo.</p>
              </div>
              <div className="cart__text">
                <p>Ab nemo eius culpa reiciendis neque distinctio, rerum, laudantium consequatur cumque iste illum incidunt ipsam excepturi. Alias amet totam earum quae tenetur dolore cumque debitis sit, ratione, voluptatem, dolorum vitae veritatis repellat.</p>
              </div>
              <Link to="/">
                <AnimationButton text="Перейти к покупкам" className="header__button"/>
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default CartPage