import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { useTypedSelector } from '../hooks/redux';

import AnimationButton from './AnimationButton';
import Menu from './Menu';
import SearchBlock from './SearchBlock';

const Header = () => {
  const [menuActive, setMenuActive] = React.useState<boolean>(false)

  const location = useLocation()

  const products = useTypedSelector(state => state.cart.products)
  const favoriteProducts = useTypedSelector(state => state.favorite.favoriteProducts)
  const compareProducts = useTypedSelector(state => state.compare.compareProducts)
  
  const isMountedCart = React.useRef(false)
  const isMountedFavorite = React.useRef(false)
  const isMountedCompare = React.useRef(false)
  
  const productsCurrent = products.reduce((sum, prod) => sum + prod.count, 0)
  
  React.useEffect(() => {
    if (isMountedCart.current) {
      const json = JSON.stringify(products)
      localStorage.setItem('cart', json)
    }
    isMountedCart.current = true;
  }, [products])

  React.useEffect(() => {
    if (isMountedFavorite.current) {
      const json = JSON.stringify(favoriteProducts)
      localStorage.setItem('favorite', json)
    }
    isMountedFavorite.current = true;
  }, [favoriteProducts])

  React.useEffect(() => {
    if (isMountedCompare.current) {
      const json = JSON.stringify(compareProducts)
      localStorage.setItem('compare', json)
    }
    isMountedCompare.current = true;
  }, [compareProducts])
  
  return (
    <header >
      <div className="container header-container">
        <div className="header-content">
          <div className="header-content__items">
            <Link to="/">
              <div className="logo header__logo">
                <img src="./images/logo.png" alt="" />
              </div>
            </Link>
          </div>
          <div className="header-content__items">
            {
              ((location.pathname !== '/cart') 
                && (location.pathname !== '/favorite') 
                && (location.pathname !== '/compare')
                && (location.pathname !== '/contacts') 
              ) && <SearchBlock />
            }
          </div>
          <div className="more-buttons header__more_buttons">
            <Link to="/compare">
              <button className="statistic more-button-item">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="white"/>
                    <path d="M8 30.9657V27.1879L20.4444 14.8324L27.5556 21.9435L40 9.45459V13.2324L27.5556 25.7213L20.4444 18.6101L8 30.9657ZM37.3333 41.4546V23.8546L40 21.1879V41.4546H37.3333ZM15.3333 41.4546V30.9657L18 28.299V41.4546H15.3333ZM22.6667 41.4546V28.299L25.3333 31.0101V41.4546H22.6667ZM30 41.4546V31.0101L32.6667 28.3435V41.4546H30ZM8 41.4546V38.0768L10.6667 35.4101V41.4546H8Z" fill="#555555"/>
                  <circle cx="36.7272" cy="12.7272" r="9.81818" fill="#3DF1A6"/>
                </svg>
                <div className="button-counter">
                  {(compareProducts.length <= 6) ? compareProducts.length : 6}
                </div>
              </button>
            </Link>
            <Link to="/favorite">
              <button className="favorite more-button-item">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="white"/>
                    <path d="M24 41.4546L22.36 39.8393C18.0133 35.5028 14.5333 31.7193 11.92 28.4887C9.30667 25.2581 8 21.9839 8 18.666C8 16.0467 8.80667 13.8566 10.42 12.0958C12.0333 10.335 14.0267 9.45459 16.4 9.45459C17.76 9.45459 19.1067 9.81112 20.44 10.5242C21.7733 11.2372 22.96 12.4087 24 14.0385C25.1733 12.4087 26.3867 11.2372 27.64 10.5242C28.8933 9.81112 30.2133 9.45459 31.6 9.45459C33.9733 9.45459 35.9667 10.335 37.58 12.0958C39.1933 13.8566 40 16.0467 40 18.666C40 21.9839 38.6933 25.2581 36.08 28.4887C33.4667 31.7193 29.9867 35.5028 25.64 39.8393L24 41.4546ZM24 38.0057C28.0533 33.9312 31.3333 30.395 33.84 27.3973C36.3467 24.3996 37.6 21.4892 37.6 18.666C37.6 16.7452 37.0333 15.1663 35.9 13.9294C34.7667 12.6924 33.3333 12.074 31.6 12.074C30.2667 12.074 29.0133 12.5251 27.84 13.4273C26.6667 14.3295 25.7067 15.6247 24.96 17.3127H23C22.28 15.6247 21.3267 14.3295 20.14 13.4273C18.9533 12.5251 17.7067 12.074 16.4 12.074C14.64 12.074 13.2 12.6924 12.08 13.9294C10.96 15.1663 10.4 16.7452 10.4 18.666C10.4 21.4892 11.6533 24.3996 14.16 27.3973C16.6667 30.395 19.9467 33.9312 24 38.0057Z" fill="#555555"/>
                  <circle cx="37.4545" cy="12.7272" r="9.81818" fill="#3DF1A6"/>
                </svg>
                <div className="button-counter">
                  {favoriteProducts.length} 
                </div>
              </button>
            </Link>
            <Link to="/cart">
              <button className="cart more-button-item">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="white"/>
                    <path d="M17.5995 41.4546C16.7859 41.4546 16.0945 41.1742 15.525 40.6135C14.9555 40.0528 14.6708 39.372 14.6708 38.571C14.6708 37.77 14.9555 37.0891 15.525 36.5284C16.0945 35.9677 16.7859 35.6874 17.5995 35.6874C18.3859 35.6874 19.0706 35.9677 19.6536 36.5284C20.2366 37.0891 20.5281 37.77 20.5281 38.571C20.5281 39.372 20.2434 40.0528 19.6739 40.6135C19.1045 41.1742 18.413 41.4546 17.5995 41.4546ZM33.8697 41.4546C33.0562 41.4546 32.3647 41.1742 31.7953 40.6135C31.2258 40.0528 30.9411 39.372 30.9411 38.571C30.9411 37.77 31.2258 37.0891 31.7953 36.5284C32.3647 35.9677 33.0562 35.6874 33.8697 35.6874C34.6561 35.6874 35.3408 35.9677 35.9238 36.5284C36.5069 37.0891 36.7984 37.77 36.7984 38.571C36.7984 39.372 36.5136 40.0528 35.9442 40.6135C35.3747 41.1742 34.6832 41.4546 33.8697 41.4546ZM15.4843 15.0215L19.9586 24.153H31.6732L36.7577 15.0215H15.4843ZM14.2641 12.6185H38.222C39.0898 12.6185 39.6389 12.8789 39.8694 13.3995C40.0999 13.9202 40.0253 14.5009 39.6457 15.1417L34.1545 24.8739C33.8833 25.3278 33.5036 25.7216 33.0155 26.0553C32.5274 26.3891 31.9986 26.556 31.4292 26.556H19.1045L16.8266 30.7212H36.7984V33.1242H17.1927C16.0538 33.1242 15.2335 32.7504 14.7318 32.0028C14.2302 31.2552 14.2369 30.4141 14.7522 29.4796L17.3554 24.7537L11.1727 11.8576H8V9.45459H12.7591L14.2641 12.6185ZM19.9586 24.153H31.6732H19.9586Z" fill="#555555"/>
                  <circle cx="37.4545" cy="12.7272" r="9.81818" fill="#3DF1A6"/>
                </svg>
                <div className="button-counter">
                  {productsCurrent}
                </div>
              </button>
            </Link>
            <button className="profile">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="white"/>
                <path d="M11.3344 35.0455C13.3963 33.6055 15.4417 32.5009 17.4708 31.7318C19.4999 30.9627 21.6763 30.5782 23.9999 30.5782C26.3235 30.5782 28.5081 30.9627 30.5535 31.7318C32.599 32.5009 34.6526 33.6055 36.7144 35.0455C38.1544 33.2782 39.1772 31.4946 39.7826 29.6946C40.3881 27.8946 40.6908 25.9964 40.6908 24C40.6908 19.2546 39.0953 15.2864 35.9044 12.0955C32.7135 8.90456 28.7453 7.3091 23.9999 7.3091C19.2544 7.3091 15.2863 8.90456 12.0953 12.0955C8.90443 15.2864 7.30898 19.2546 7.30898 24C7.30898 25.9964 7.61989 27.8946 8.24171 29.6946C8.86353 31.4946 9.89443 33.2782 11.3344 35.0455ZM23.9999 25.4727C22.1017 25.4727 20.5063 24.8264 19.2135 23.5336C17.9208 22.2409 17.2744 20.6455 17.2744 18.7473C17.2744 16.8491 17.9208 15.2536 19.2135 13.9609C20.5063 12.6682 22.1017 12.0218 23.9999 12.0218C25.8981 12.0218 27.4935 12.6682 28.7863 13.9609C30.079 15.2536 30.7253 16.8491 30.7253 18.7473C30.7253 20.6455 30.079 22.2409 28.7863 23.5336C27.4935 24.8264 25.8981 25.4727 23.9999 25.4727ZM23.9999 43.6364C21.3163 43.6364 18.7799 43.1209 16.3908 42.09C14.0017 41.0591 11.9153 39.6518 10.1317 37.8682C8.34807 36.0846 6.9408 33.9982 5.90989 31.6091C4.87898 29.22 4.36353 26.6836 4.36353 24C4.36353 21.2836 4.87898 18.7391 5.90989 16.3664C6.9408 13.9936 8.34807 11.9155 10.1317 10.1318C11.9153 8.34819 14.0017 6.94092 16.3908 5.91001C18.7799 4.8791 21.3163 4.36365 23.9999 4.36365C26.7163 4.36365 29.2608 4.8791 31.6335 5.91001C34.0063 6.94092 36.0844 8.34819 37.8681 10.1318C39.6517 11.9155 41.059 13.9936 42.0899 16.3664C43.1208 18.7391 43.6363 21.2836 43.6363 24C43.6363 26.6836 43.1208 29.22 42.0899 31.6091C41.059 33.9982 39.6517 36.0846 37.8681 37.8682C36.0844 39.6518 34.0063 41.0591 31.6335 42.09C29.2608 43.1209 26.7163 43.6364 23.9999 43.6364ZM23.9999 40.6909C25.7999 40.6909 27.559 40.4291 29.2772 39.9055C30.9953 39.3818 32.689 38.4655 34.3581 37.1564C32.689 35.9782 30.9872 35.0782 29.2526 34.4564C27.5181 33.8346 25.7672 33.5236 23.9999 33.5236C22.2326 33.5236 20.4817 33.8346 18.7472 34.4564C17.0126 35.0782 15.3108 35.9782 13.6417 37.1564C15.3108 38.4655 17.0044 39.3818 18.7226 39.9055C20.4408 40.4291 22.1999 40.6909 23.9999 40.6909ZM23.9999 22.5273C25.1126 22.5273 26.0208 22.1755 26.7244 21.4718C27.4281 20.7682 27.7799 19.86 27.7799 18.7473C27.7799 17.6346 27.4281 16.7264 26.7244 16.0227C26.0208 15.3191 25.1126 14.9673 23.9999 14.9673C22.8872 14.9673 21.979 15.3191 21.2753 16.0227C20.5717 16.7264 20.2199 17.6346 20.2199 18.7473C20.2199 19.86 20.5717 20.7682 21.2753 21.4718C21.979 22.1755 22.8872 22.5273 23.9999 22.5273Z" fill="url(#paint0_linear_198_36)"/>
                <defs>
                  <linearGradient id="paint0_linear_198_36" x1="32.6025" y1="11.1136" x2="32.9765" y2="11.1136" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#555555"/>
                    <stop offset="1" stopColor="#34FFAA"/>
                  </linearGradient>
                </defs>
              </svg>
            </button>
            <button onClick={() => setMenuActive(!menuActive)} className="button burger-button">
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="29" cy="29" r="29" fill="#EFEFEF"/>
                <path d="M14 41V38H43V41H14ZM14 30.5V27.5H43V30.5H14ZM14 20V17H43V20H14Z" fill="#555555"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="container navigation-container">
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
      <Menu active={menuActive} setActive={setMenuActive}/>
    </header>
  )
}

export default Header
