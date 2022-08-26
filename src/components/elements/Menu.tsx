import React from 'react'

import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/redux';

import AnimationButton from '../UI/AnimationButton'
import SearchBlock from '../UI/SearchBlock';

interface BurgerMenuProps {
  active: boolean;
  setActive: any;
}

const Menu: React.FC<BurgerMenuProps> = ({ active, setActive }) => {
  const { products } = useTypedSelector(state => state.cart)
  const favoriteProducts = useTypedSelector(state => state.favorite.favoriteProducts)
  const compareProducts = useTypedSelector(state => state.compare.compareProducts)

  const productsCurrent = products.reduce((sum, prod) => sum + prod.count, 0)

  return (
    <section 
      className={active ? 'menu-active' : 'menu'} 
      onClick={() => setActive(false)}
    >
      <div className="blur" />
      <div 
        className="menu-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="more-buttons">
          <Link to="/compare">
            <button className="statistic more-button-item" onClick={() => setActive(false)}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 21.5111V17.7333L12.4444 5.37778L19.5556 12.4889L32 0V3.77778L19.5556 16.2667L12.4444 9.15555L0 21.5111ZM29.3333 32V14.4L32 11.7333V32H29.3333ZM7.33333 32V21.5111L10 18.8444V32H7.33333ZM14.6667 32V18.8444L17.3333 21.5556V32H14.6667ZM22 32V21.5556L24.6667 18.8889V32H22ZM0 32V28.6222L2.66667 25.9556V32H0Z" fill="#555555"/>
              </svg>
              <div className="circle-for-counter">
                <div className="button-counter">
                  {(compareProducts.length <= 6) ? compareProducts.length : 6}
                </div>
              </div>
            </button>
          </Link>
          <Link to="/favorite">
            <button className="favorite more-button-item" onClick={() => setActive(false)}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 32L14.36 30.3847C10.0133 26.0482 6.53333 22.2647 3.92 19.0341C1.30667 15.8035 0 12.5293 0 9.21146C0 6.59209 0.806667 4.402 2.42 2.6412C4.03333 0.8804 6.02667 0 8.4 0C9.76 0 11.1067 0.356526 12.44 1.06958C13.7733 1.78263 14.96 2.95407 16 4.5839C17.1733 2.95407 18.3867 1.78263 19.64 1.06958C20.8933 0.356526 22.2133 0 23.6 0C25.9733 0 27.9667 0.8804 29.58 2.6412C31.1933 4.402 32 6.59209 32 9.21146C32 12.5293 30.6933 15.8035 28.08 19.0341C25.4667 22.2647 21.9867 26.0482 17.64 30.3847L16 32ZM16 28.5512C20.0533 24.4766 23.3333 20.9404 25.84 17.9427C28.3467 14.945 29.6 12.0346 29.6 9.21146C29.6 7.29059 29.0333 5.71169 27.9 4.47476C26.7667 3.23784 25.3333 2.61937 23.6 2.61937C22.2667 2.61937 21.0133 3.07049 19.84 3.97271C18.6667 4.87494 17.7067 6.17008 16.96 7.85812H15C14.28 6.17008 13.3267 4.87494 12.14 3.97271C10.9533 3.07049 9.70667 2.61937 8.4 2.61937C6.64 2.61937 5.2 3.23784 4.08 4.47476C2.96 5.71169 2.4 7.29059 2.4 9.21146C2.4 12.0346 3.65333 14.945 6.16 17.9427C8.66667 20.9404 11.9467 24.4766 16 28.5512Z" fill="#555555"/>
              </svg>
              <div className="circle-for-counter">
                <div className="button-counter">
                  {favoriteProducts.length} 
                </div>
              </div>
            </button>
          </Link>
          <Link to="/cart">
            <button className="cart more-button-item" onClick={() => setActive(false)}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.59946 32C8.78594 32 8.09446 31.7197 7.525 31.1589C6.95554 30.5982 6.67081 29.9174 6.67081 29.1164C6.67081 28.3154 6.95554 27.6345 7.525 27.0738C8.09446 26.5131 8.78594 26.2328 9.59946 26.2328C10.3859 26.2328 11.0706 26.5131 11.6536 27.0738C12.2366 27.6345 12.5281 28.3154 12.5281 29.1164C12.5281 29.9174 12.2434 30.5982 11.6739 31.1589C11.1045 31.7197 10.413 32 9.59946 32ZM25.8697 32C25.0562 32 24.3647 31.7197 23.7953 31.1589C23.2258 30.5982 22.9411 29.9174 22.9411 29.1164C22.9411 28.3154 23.2258 27.6345 23.7953 27.0738C24.3647 26.5131 25.0562 26.2328 25.8697 26.2328C26.6561 26.2328 27.3408 26.5131 27.9238 27.0738C28.5069 27.6345 28.7984 28.3154 28.7984 29.1164C28.7984 29.9174 28.5136 30.5982 27.9442 31.1589C27.3747 31.7197 26.6832 32 25.8697 32ZM7.48432 5.56696L11.9586 14.6984H23.6732L28.7577 5.56696H7.48432ZM6.26405 3.16395H30.222C31.0898 3.16395 31.6389 3.42428 31.8694 3.94493C32.0999 4.46558 32.0253 5.04631 31.6457 5.68711L26.1545 15.4193C25.8833 15.8732 25.5036 16.267 25.0155 16.6008C24.5274 16.9345 23.9986 17.1014 23.4292 17.1014H11.1045L8.82662 21.2666H28.7984V23.6696H9.1927C8.05378 23.6696 7.23349 23.2958 6.73182 22.5482C6.23016 21.8006 6.23694 20.9595 6.75216 20.025L9.3554 15.2991L3.1727 2.403H0V0H4.75905L6.26405 3.16395ZM11.9586 14.6984H23.6732H11.9586Z" fill="#555555"/>
              </svg>
              <div className="circle-for-counter">
                <div className="button-counter">
                  {productsCurrent}
                </div>
              </div>
            </button>
          </Link>
          <button className="close" onClick={() => setActive(false)}>
            <svg width="40" height="40" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="29" cy="29" r="29" fill="#EFEFEF"/>
              <path d="M17.4501 42.65L15.3501 40.55L26.9001 29L15.3501 17.45L17.4501 15.35L29.0001 26.9L40.5501 15.35L42.6501 17.45L31.1001 29L42.6501 40.55L40.5501 42.65L29.0001 31.1L17.4501 42.65Z" fill="#555555"/>
            </svg>
          </button>
        </div>
        <SearchBlock/>
        <div className="menu-content-navigation" onClick={() => setActive(false)}>
          <Link to="/">
            <AnimationButton text={"Категории"} className={"header__button"}/>
          </Link>
          <Link to="/contacts">
            <AnimationButton text={"Контакты"} className={"header__button"}/>
          </Link>
          <AnimationButton text={"Магазины"} className={"header__button"}/>
          <AnimationButton text={"Компания"} className={"header__button"}/>
        </div>
      </div>
    </section>
  )
}

export default Menu