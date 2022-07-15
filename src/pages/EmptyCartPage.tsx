import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

import AnimationButton from '../components/AnimationButton'

const EmptyCartPage = () => {
  return (
    <>
      <Header/>
      <div className="empty-cart">
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
            <AnimationButton text="Перейти к покупкам" className="header__button"/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default EmptyCartPage
