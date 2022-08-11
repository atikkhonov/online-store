import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../hooks/redux';
import AnimationButton from './AnimationButton'
import SearchBlock from './SearchBlock';

interface BurgerMenuProps {
  active: boolean;
  setActive: any;
}

const Menu: FC<BurgerMenuProps> = ({ active, setActive }) => {
  const { products } = useTypedSelector(state => state.cart)
  const favoriteProducts = useTypedSelector(state => state.favorite.favoriteProducts)

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
              <button className="statistic more-button-item">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="white"/>
                    <path d="M8 30.9657V27.1879L20.4444 14.8324L27.5556 21.9435L40 9.45459V13.2324L27.5556 25.7213L20.4444 18.6101L8 30.9657ZM37.3333 41.4546V23.8546L40 21.1879V41.4546H37.3333ZM15.3333 41.4546V30.9657L18 28.299V41.4546H15.3333ZM22.6667 41.4546V28.299L25.3333 31.0101V41.4546H22.6667ZM30 41.4546V31.0101L32.6667 28.3435V41.4546H30ZM8 41.4546V38.0768L10.6667 35.4101V41.4546H8Z" fill="#555555"/>
                  <circle cx="36.7272" cy="12.7272" r="9.81818" fill="#3DF1A6"/>
                </svg>
                <div className="button-counter">
                  {13}
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
          <button className="close" onClick={() => setActive(false)}>
            <svg width="40" height="40" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="29" cy="29" r="29" fill="#EFEFEF"/>
              <path d="M17.4501 42.65L15.3501 40.55L26.9001 29L15.3501 17.45L17.4501 15.35L29.0001 26.9L40.5501 15.35L42.6501 17.45L31.1001 29L42.6501 40.55L40.5501 42.65L29.0001 31.1L17.4501 42.65Z" fill="#555555"/>
            </svg>
          </button>
        </div>
        <SearchBlock/>
        <div className="menu-content-navigation">
          <Link to="/">
            <AnimationButton text={"Категории"} className={"header__button"}/>
          </Link>
          <AnimationButton text={"Магазины"} className={"header__button"}/>
          <Link to="/about">
            <AnimationButton text={"Компания"} className={"header__button"}/>
          </Link>
          <Link to="/contacts">
            <AnimationButton text={"Контакты"} className={"header__button"}/>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Menu