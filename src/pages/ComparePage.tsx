import React from 'react'
import CompareItemHeader from '../components/CompareItemHeader'
import { useTypedDispatch, useTypedSelector } from '../hooks/redux'
import { clearComparePage } from '../store/slices/CompareSlice'

const ComparePage = () => {
  const dispatch = useTypedDispatch()
  const { compareProducts } = useTypedSelector(state => state.compare)
  
  const onClickClearCompare = () => {
    dispatch(clearComparePage())
  }
  
  return (
    <div className="compare">
      <div className="container">
        <div className="standart__subtitle">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magnam adipisci delectus cum quae magni nesciunt natus nam a dolorem!</p>
        </div>
        <div className="compare-title">
          <h1>Сравнение товаров</h1>
          <button 
            className="button button-clear"
            onClick={onClickClearCompare}
          > 
            очистить список <span>&times;</span>
          </button>
        </div>
        <div className="compare-content">
          <div className="compare-content-header">
            {
              compareProducts.map((item) => {
                return <CompareItemHeader key={item.id} item={item}/>
              })
            }
          </div>
          <div className="compare-items">
            <div className="compare-lists">
              <div className="compare_list_item compare_list_item-gray">Цена:</div>
              <div className="compare-items">
                {
                  compareProducts.map(item => {
                    return <div key={item.id} className="compare__item">
                      {item.price} ₽
                    </div>
                  })
                }
              </div>
              <div className="compare_list_item compare_list_item-gray">Вид никотина:</div>
              <div className="compare-items">
                {
                  compareProducts.map(item => {
                    return <div key={item.id} className="compare__item">
                      {item.nicotine}
                    </div>
                  })
                }
              </div>
              <div className="compare_list_item compare_list_item-gray">Бренд:</div>
              <div className="compare-items">
                {
                  compareProducts.map(item => {
                    return <div key={item.id} className="compare__item">
                      {item.brand}
                    </div>
                  })
                }
              </div>
              <div className="compare_list_item compare_list_item-gray">Крепкость:</div>
              <div className="compare-items">
                {
                  compareProducts.map(item => {
                    return <div key={item.id} className="compare__item">
                      {item.strength}
                    </div>
                  })
                }
              </div>
              <div className="compare_list_item compare_list_item-gray">Объем:</div>
              <div className="compare-items">
                {
                  compareProducts.map(item => {
                    return <div key={item.id} className="compare__item">
                      {item.volume}
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComparePage