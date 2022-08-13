import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

const CatalogPage = () => {
  return (
    <>
      <Header/>
      <div className="catalog">
        <div className="container">
          <div className="catalog-items">
            <div className="catalog__item">
              <img src="./images/hqs.jpg" alt="hqs" />
              <div className="item__title">
                <p>Одноразовые электронные парогенераторы</p>
              </div>
            </div>
            <div className="catalog__item">
              <img src="./images/parilks.jpg" alt="podsmods" />
              <div className="item__title">
                <p>Поды / Моды / МехМоды / AIO-системы</p>
              </div>
            </div>
            <div className="catalog__item">
              <img src="./images/jiji.jpg" alt="jiji" />
              <div className="item__title">
                <p>Жидкости</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer mod="footer-b0"/>
    </>
  )
}

export default CatalogPage
