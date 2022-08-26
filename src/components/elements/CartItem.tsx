import React from 'react'

import { IProduct } from '../../models/IProduct';

import { useTypedDispatch } from '../../hooks/redux';
import { addProductToCart, deleteProductFromCart, removeProductFromCart } from '../../store/slices/CartSlice';

interface CartItemProps {
  cartProduct: IProduct;
}

const CartItem: React.FC<CartItemProps> = ({ cartProduct }) => {
  const dispatch = useTypedDispatch()

  const onClickAddButton = () => {
    dispatch(addProductToCart(cartProduct))
  }

  const onClickRemoveButton = () => {
    dispatch(removeProductFromCart(cartProduct))
  }
  
  const onClickDeleteButton = () => {
    dispatch(deleteProductFromCart(cartProduct))
  }
  
  return (
    <div className="cart-item">
      <div className="cart-item--title">
        <img 
          src={cartProduct.imageURL} 
          alt="vape liquid" 
          className="cart_item__image"
        />
        <div className="cart_item__name">{cartProduct.title}</div>
      </div>
      <div className="cart-item--more">
        <div className="cart_item__price">
          <p>{cartProduct.price} ₽</p>
          <sub>цена за 1 шт.</sub>
        </div>
        <div className="cart-item--amount">
          <div className="cart-item--buttons">
            <button 
              className="button button-add"
              onClick={onClickAddButton}
            >
              <span> + </span>
            </button>
            <span className="total__items">
              <p>{cartProduct.count}</p>
            </span>
            <button 
              className="button button-remove"
              onClick={onClickRemoveButton}
            >
              <span> - </span>
            </button>
          </div>
          <sub>кол-во товара</sub>
        </div>
        <div className="cart_item__total_price">
          <p>{cartProduct.price * cartProduct.count} ₽</p>
        </div>
      </div>
      <button 
        className="button button-delete"
        onClick={onClickDeleteButton}
      >&times;</button>
    </div>
  )
}

export default CartItem