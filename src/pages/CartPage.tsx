import React from 'react'
import AnimationButton from '../components/AnimationButton'
import Footer from '../components/Footer'
import Header from '../components/Header'

const CartPage = () => {
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
                <b>Итого: 1313 ₽</b>
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
            <div className="cart-item">
                <div className="cart-item--title">
                  <img src="./images/image.jpg" alt="jija" className="cart_item__image"/>
                  <div className="cart_item__name">ЖИДКОСТЬ ESSENCE TOBACCO (SALT) GRAPE 30мл/20мг</div>
                </div>
                <div className="cart-item--more">
                  <div className="cart_item__price">
                    <p>180 ₽</p>
                    <sub>цена за 1 шт.</sub>
                  </div>
                  <div className="cart-item--amount">
                    <div className="cart-item--buttons">
                      <button className="button button-add">
                        <span> + </span>
                      </button>
                      <span className="total__items">
                        <p>13</p>
                      </span>
                      <button className="button button-remove">
                        <span> - </span>
                      </button>
                    </div>
                    <sub>кол-во товара</sub>
                  </div>
                <div className="cart_item__total_price">
                  <p>360 ₽</p>
                </div>
                </div>
              </div><div className="cart-item">
                <div className="cart-item--title">
                  <img src="./images/image.jpg" alt="jija" className="cart_item__image"/>
                  <div className="cart_item__name">ЖИДКОСТЬ ESSENCE TOBACCO (SALT) GRAPE 30мл/20мг</div>
                </div>
                <div className="cart-item--more">
                  <div className="cart_item__price">
                    <p>180 ₽</p>
                    <sub>цена за 1 шт.</sub>
                  </div>
                  <div className="cart-item--amount">
                    <div className="cart-item--buttons">
                      <button className="button button-add">
                        <span> + </span>
                      </button>
                      <span className="total__items">
                        <p>13</p>
                      </span>
                      <button className="button button-remove">
                        <span> - </span>
                      </button>
                    </div>
                    <sub>кол-во товара</sub>
                  </div>
                <div className="cart_item__total_price">
                  <p>360 ₽</p>
                </div>
                </div>
              </div><div className="cart-item">
                <div className="cart-item--title">
                  <img src="./images/image.jpg" alt="jija" className="cart_item__image"/>
                  <div className="cart_item__name">ЖИДКОСТЬ ESSENCE TOBACCO (SALT) GRAPE 30мл/20мг</div>
                </div>
                <div className="cart-item--more">
                  <div className="cart_item__price">
                    <p>180 ₽</p>
                    <sub>цена за 1 шт.</sub>
                  </div>
                  <div className="cart-item--amount">
                    <div className="cart-item--buttons">
                      <button className="button button-add">
                        <span> + </span>
                      </button>
                      <span className="total__items">
                        <p>13</p>
                      </span>
                      <button className="button button-remove">
                        <span> - </span>
                      </button>
                    </div>
                    <sub>кол-во товара</sub>
                  </div>
                <div className="cart_item__total_price">
                  <p>360 ₽</p>
                </div>
                </div>
              </div><div className="cart-item">
                <div className="cart-item--title">
                  <img src="./images/image.jpg" alt="jija" className="cart_item__image"/>
                  <div className="cart_item__name">ЖИДКОСТЬ ESSENCE TOBACCO (SALT) GRAPE 30мл/20мг</div>
                </div>
                <div className="cart-item--more">
                  <div className="cart_item__price">
                    <p>180 ₽</p>
                    <sub>цена за 1 шт.</sub>
                  </div>
                  <div className="cart-item--amount">
                    <div className="cart-item--buttons">
                      <button className="button button-add">
                        <span> + </span>
                      </button>
                      <span className="total__items">
                        <p>13</p>
                      </span>
                      <button className="button button-remove">
                        <span> - </span>
                      </button>
                    </div>
                    <sub>кол-во товара</sub>
                  </div>
                <div className="cart_item__total_price">
                  <p>360 ₽</p>
                </div>
                </div>
              </div><div className="cart-item">
                <div className="cart-item--title">
                  <img src="./images/image.jpg" alt="jija" className="cart_item__image"/>
                  <div className="cart_item__name">ЖИДКОСТЬ ESSENCE TOBACCO (SALT) GRAPE 30мл/20мг</div>
                </div>
                <div className="cart-item--more">
                  <div className="cart_item__price">
                    <p>180 ₽</p>
                    <sub>цена за 1 шт.</sub>
                  </div>
                  <div className="cart-item--amount">
                    <div className="cart-item--buttons">
                      <button className="button button-add">
                        <span> + </span>
                      </button>
                      <span className="total__items">
                        <p>13</p>
                      </span>
                      <button className="button button-remove">
                        <span> - </span>
                      </button>
                    </div>
                    <sub>кол-во товара</sub>
                  </div>
                <div className="cart_item__total_price">
                  <p>360 ₽</p>
                </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default CartPage