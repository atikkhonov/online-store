import React from 'react'

import { useTypedDispatch } from '../hooks/redux';
import { addProductToCart } from '../store/slices/CartSlice';

import { IProduct } from '../models/IProduct';

import { addToFavorite } from '../store/slices/FavoriteSlice';
import { addToComparePage } from '../store/slices/CompareSlice';
import { modalReducer } from '../store/slices/ModalSlice';
interface CardProps {
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  product: IProduct;
}

const Card: React.FC<CardProps> = ({ activeModal, setActiveModal, product }) => {
  const dispatch = useTypedDispatch()
  
  const onClickAddToCart = () => {
    const item = {
      id: product.id,
      title: product.title,
      imageURL: product.imageURL,
      price: product.price,
    }
    dispatch(addProductToCart(item))
  }

  const onClickAddToFavorite = () => {
    const item = {
      id: product.id,
      title: product.title,
      imageURL: product.imageURL,
      price: product.price,
    }
    dispatch(addToFavorite(item))
  }

  const onClickAddToCompare = () => {
    dispatch(addToComparePage(product))
  }

  const openModal = () => {
    dispatch(modalReducer(product))
    setActiveModal(true)
  }
  
  return (
    <div className="card-support">
      <div className="card">
        <div className="card-header">
          <div className="card-more-buttons">
            <button 
              className="button card__more_button favorite-button"
              onClick={onClickAddToFavorite}
            >
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="5" fill="#EFEFEF"/>
                <path d="M19 33.25L17.6205 32.0112C13.9643 28.6854 11.0371 25.7837 8.83895 23.3061C6.64075 20.8285 5.54166 18.3174 5.54166 15.7728C5.54166 13.764 6.22018 12.0843 7.57723 10.7339C8.93428 9.38353 10.611 8.70833 12.6073 8.70833C13.7512 8.70833 14.884 8.98176 16.0055 9.52862C17.127 10.0755 18.1252 10.9739 19 12.2238C19.9869 10.9739 21.0075 10.0755 22.0618 9.52862C23.116 8.98176 24.2263 8.70833 25.3927 8.70833C27.389 8.70833 29.0657 9.38353 30.4227 10.7339C31.7798 12.0843 32.4583 13.764 32.4583 15.7728C32.4583 18.3174 31.3592 20.8285 29.161 23.3061C26.9628 25.7837 24.0356 28.6854 20.3795 32.0112L19 33.25ZM19 30.605C22.4094 27.4801 25.1684 24.7681 27.2769 22.4691C29.3853 20.17 30.4396 17.938 30.4396 15.7728C30.4396 14.2997 29.9629 13.0888 29.0096 12.1401C28.0563 11.1915 26.8507 10.7172 25.3927 10.7172C24.2712 10.7172 23.2169 11.0632 22.23 11.7551C21.243 12.4471 20.4355 13.4403 19.8075 14.7349H18.1588C17.5532 13.4403 16.7513 12.4471 15.7532 11.7551C14.755 11.0632 13.7064 10.7172 12.6073 10.7172C11.1269 10.7172 9.91562 11.1915 8.97353 12.1401C8.03145 13.0888 7.56041 14.2997 7.56041 15.7728C7.56041 17.938 8.61464 20.17 10.7231 22.4691C12.8316 24.7681 15.5905 27.4801 19 30.605Z" fill="#999999"/>
              </svg>
            </button>
            <button 
              className="button card__more_button compare-button"
              onClick={onClickAddToCompare}
            >
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="5" fill="#EFEFEF"/>
                <path d="M6.33334 23.363V20.3722L16.1852 10.5907L21.8148 16.2204L31.6667 6.33333V9.32407L21.8148 19.2111L16.1852 13.5815L6.33334 23.363ZM29.5556 31.6667V17.7333L31.6667 15.6222V31.6667H29.5556ZM12.1389 31.6667V23.363L14.25 21.2518V31.6667H12.1389ZM17.9445 31.6667V21.2518L20.0556 23.3981V31.6667H17.9445ZM23.75 31.6667V23.3981L25.8611 21.287V31.6667H23.75ZM6.33334 31.6667V28.9926L8.44445 26.8815V31.6667H6.33334Z" fill="#999999"/>
              </svg>
            </button>
            <button 
              className="button card__more_button modal-button"
              onClick={openModal}
            >
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="5" fill="#EFEFEF"/>
                <path d="M18.6042 24.2118C20.0945 24.2118 21.3593 23.6675 22.3983 22.579C23.4374 21.4904 23.9569 20.1655 23.9569 18.6042C23.9569 17.0428 23.4374 15.7179 22.3983 14.6293C21.3593 13.5408 20.0945 12.9965 18.6042 12.9965C17.1138 12.9965 15.8491 13.5408 14.81 14.6293C13.771 15.7179 13.2514 17.0428 13.2514 18.6042C13.2514 20.1655 13.771 21.4904 14.81 22.579C15.8491 23.6675 17.1138 24.2118 18.6042 24.2118ZM18.6042 22.2986C17.6176 22.2986 16.7832 21.9413 16.101 21.2266C15.4188 20.5119 15.0777 19.6377 15.0777 18.6042C15.0777 17.5706 15.4188 16.6965 16.101 15.9818C16.7832 15.2671 17.6176 14.9097 18.6042 14.9097C19.5908 14.9097 20.4252 15.2671 21.1074 15.9818C21.7896 16.6965 22.1307 17.5706 22.1307 18.6042C22.1307 19.6377 21.7896 20.5119 21.1074 21.2266C20.4252 21.9413 19.5908 22.2986 18.6042 22.2986ZM18.6042 28.5C15.5395 28.5 12.7686 27.5874 10.2917 25.7621C7.81471 23.9369 5.96749 21.5509 4.75 18.6042C5.96749 15.6574 7.81471 13.2714 10.2917 11.4462C12.7686 9.62094 15.5395 8.70833 18.6042 8.70833C21.6689 8.70833 24.4397 9.62094 26.9167 11.4462C29.3936 13.2714 31.2408 15.6574 32.4583 18.6042C31.2408 21.5509 29.3936 23.9369 26.9167 25.7621C24.4397 27.5874 21.6689 28.5 18.6042 28.5ZM18.6042 26.5208C21.1441 26.5208 23.4794 25.8006 25.61 24.3602C27.7406 22.9198 29.3621 21.0012 30.4747 18.6042C29.3621 16.2072 27.7406 14.2885 25.61 12.8481C23.4794 11.4077 21.1441 10.6875 18.6042 10.6875C16.0642 10.6875 13.729 11.4077 11.5984 12.8481C9.46776 14.2885 7.8357 16.2072 6.70218 18.6042C7.8357 21.0012 9.46776 22.9198 11.5984 24.3602C13.729 25.8006 16.0642 26.5208 18.6042 26.5208Z" fill="#999999"/>
              </svg>
            </button>
          </div>
          <div className="card-image">
            <img src={product.imageURL} alt="vape liquid" />
          </div>
        </div>
        <div className="card-content">
          <div className="card__name">
            <p>{product.title} {product.volume}мл/{product.strength}мг</p>
          </div>
          <div className="card__price">
            <b>{product.price} ₽/шт</b>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button onClick={onClickAddToCart} className="card__button">
          <span className="span">В корзину</span>
        </button>
      </div>
    </div>
  )
}

export default Card