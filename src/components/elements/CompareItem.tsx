import React from 'react'
import { useTypedDispatch } from '../../hooks/redux';
import { IProduct } from '../../models/IProduct'
import { removeFromComparePage } from '../../store/slices/CompareSlice';

interface CompareItemProps {
  item: IProduct;
}

const CompareItem: React.FC<CompareItemProps> = ({ item }) => {
  const dispatch = useTypedDispatch()

  const onClickRemoveButton = () => {
    dispatch(removeFromComparePage(item))
  }
  
  return (
    <div className="compare_item_header">
      <img src={item.imageURL} alt="vape liquid" />
      <div className="compare_item_header_title">
        <span>{item.title}</span>
      </div>
      <button 
        className="button button-remove"
        onClick={onClickRemoveButton}
      >
        &times;
      </button>
    </div>
  )
}

export default CompareItem