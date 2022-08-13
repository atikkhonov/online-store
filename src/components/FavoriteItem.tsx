import React from 'react'

import { useTypedDispatch } from '../hooks/redux';
import { deleteFromFavorite } from '../store/slices/FavoriteSlice';

import { IProduct } from '../models/IProduct'
interface FavoriteItemProps {
  favoriteProduct: IProduct;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({ favoriteProduct }) => {
  const dispatch = useTypedDispatch()

  const onClickDeleteButton = () => {
    dispatch(deleteFromFavorite(favoriteProduct.id))
  }
  
  return (
    <div className="favorite-item">
      <div className="favorite-item--title">
        <img 
          src={favoriteProduct.imageURL} 
          alt="vape liquid" 
          className="favorite_item__image"
        />
        <div className="favorite_item__name">{favoriteProduct.title}</div>
      </div>
      <div className="favorite-item--more">
        <div className="favorite_item__price">
          <p>{favoriteProduct.price} ₽</p>
          <sub>цена за 1 шт.</sub>
        </div>
      </div>
      <button 
        className="button button-delete"
        onClick={onClickDeleteButton}
      >&times;</button>
    </div>
  )
}

export default FavoriteItem