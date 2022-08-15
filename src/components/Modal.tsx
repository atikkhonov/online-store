import React from 'react'
import { useTypedDispatch, useTypedSelector } from '../hooks/redux';
import { addProductToCart } from '../store/slices/CartSlice';
import { addToComparePage } from '../store/slices/CompareSlice';
import { addToFavorite } from '../store/slices/FavoriteSlice';

interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ active, setActive }) => {
  const dispatch = useTypedDispatch()
  const product = useTypedSelector(state => state.modal.product)
  
  const onClickAddToCart = () => {
    if (product !== undefined) {
      dispatch(addProductToCart(product))
    }
  }

  const onClickAddToFavorite = () => {
    if (product !== undefined) {
      dispatch(addToFavorite(product))
    }
  }

  const onClickAddToCompare = () => {
    if (product !== undefined) {
      dispatch(addToComparePage(product))
    }
  }
  
  return (
    <>
      {
        (product !== undefined) ?
        <div 
          className={active ? "modal modal-active" : "modal"}
          onClick={() => setActive(false)}
        >
          <div className="modal__content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
              <div className="modal__title">{product.title} {product.volume}мл/{product.strength}мг</div>
              <div className="modal-buttons">
                <button 
                  className="modal__button modal__button-favorite"
                  onClick={onClickAddToFavorite}
                >
                  <p>В избранное</p>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 26L11.6675 24.6876C8.13583 21.1642 5.30833 18.09 3.185 15.4652C1.06167 12.8404 0 10.1801 0 7.48431C0 5.35607 0.655417 3.57663 1.96625 2.14598C3.27708 0.715325 4.89667 0 6.825 0C7.93 0 9.02417 0.289677 10.1075 0.869031C11.1908 1.44839 12.155 2.40018 13 3.72442C13.9533 2.40018 14.9392 1.44839 15.9575 0.869031C16.9758 0.289677 18.0483 0 19.175 0C21.1033 0 22.7229 0.715325 24.0337 2.14598C25.3446 3.57663 26 5.35607 26 7.48431C26 10.1801 24.9383 12.8404 22.815 15.4652C20.6917 18.09 17.8642 21.1642 14.3325 24.6876L13 26ZM13 23.1978C16.2933 19.8872 18.9583 17.0141 20.995 14.5784C23.0317 12.1428 24.05 9.77808 24.05 7.48431C24.05 5.9236 23.5896 4.64075 22.6687 3.63574C21.7479 2.63074 20.5833 2.12824 19.175 2.12824C18.0917 2.12824 17.0733 2.49477 16.12 3.22783C15.1667 3.96089 14.3867 5.01319 13.78 6.38472H12.1875C11.6025 5.01319 10.8279 3.96089 9.86375 3.22783C8.89958 2.49477 7.88667 2.12824 6.825 2.12824C5.395 2.12824 4.225 2.63074 3.315 3.63574C2.405 4.64075 1.95 5.9236 1.95 7.48431C1.95 9.77808 2.96833 12.1428 5.005 14.5784C7.04167 17.0141 9.70667 19.8872 13 23.1978Z" fill="white"/>
                  </svg>
                </button>
                <button 
                  className="modal__button modal__button-compare"
                  onClick={onClickAddToCompare}
                >
                  <p>Сравнить</p>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 17.4778V14.4083L10.1111 4.36944L15.8889 10.1472L26 0V3.06944L15.8889 13.2167L10.1111 7.43889L0 17.4778ZM23.8333 26V11.7L26 9.53333V26H23.8333ZM5.95833 26V17.4778L8.125 15.3111V26H5.95833ZM11.9167 26V15.3111L14.0833 17.5139V26H11.9167ZM17.875 26V17.5139L20.0417 15.3472V26H17.875ZM0 26V23.2556L2.16667 21.0889V26H0Z" fill="white"/>
                  </svg>
                </button>
              </div>
              <button className="modal_close_button" onClick={() => setActive(false)}>✕</button>
            </div>
            <div className="modal-content">
              <div className="modal-left-block">
                <img src={product.imageURL} alt="vape liquid" />
              </div>
              <div className="modal-right-block">
                <div className="modal__price">{product.price} ₽/шт</div>
                <div className="modal-order-block">
                  <button 
                    onClick={onClickAddToCart}
                    className="button button-confirm"
                  >Добавить в корзину</button>
                </div>
                <div className="modal__item_name">{product.title}</div>
                <p>Характеристики:</p>
                <div className="modal--items">
                  <div className="modal__item"><span>Бренд</span> — {product.brand}</div>
                  <div className="modal__item"><span>Вкус</span> — {product.taste}</div>
                  <div className="modal__item"><span>Крепость</span> — {product.strength} мг</div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        : <></>
      }
    </>
  )
}

export default Modal
