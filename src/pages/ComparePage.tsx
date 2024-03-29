import React from 'react'

import AnimationButton from '../components/UI/AnimationButton'
import CompareItem from '../components/elements/CompareItem'

import { Link } from 'react-router-dom'
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
        {
          (compareProducts.length !== 0) ?
          <>
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
                <div className="compare-items">
                  {
                    compareProducts.map((item) => {
                      return <CompareItem key={item.id} item={item}/>
                    })
                  }
                  <div className="compare_list_item compare_list_item-gray">Цена:</div>
                    {
                      compareProducts.map(item => {
                        return <div key={item.id} className="compare__item">
                          {item.price} ₽
                        </div>
                      })
                    }
                  <div className="compare_list_item compare_list_item-gray">Вид никотина:</div>
                    {
                      compareProducts.map(item => {
                        return <div key={item.id} className="compare__item">
                          {item.nicotine}
                        </div>
                      })
                    }
                  <div className="compare_list_item compare_list_item-gray">Бренд:</div>
                    {
                     compareProducts.map(item => {
                       return <div key={item.id} className="compare__item">
                         {item.brand}
                       </div>
                     })
                    }
                  <div className="compare_list_item compare_list_item-gray">Крепкость:</div>
                    {
                      compareProducts.map(item => {
                        return <div key={item.id} className="compare__item">
                          {item.strength}
                        </div>
                      })
                    }
                  <div className="compare_list_item compare_list_item-gray">Объем:</div>
                    {
                     compareProducts.map(item => {
                       return <div key={item.id} className="compare__item">
                         {item.volume}
                       </div>
                     })
                    }
                </div>
            </div>
          </>
          : 
          <>
            <h1>Сравнение товаров</h1>
            <div className="compare-empty-container">
              <div className="compare__title">
                <b>Список сравнений пуст :(</b>
              </div>
              <div className="compare__subtitle">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita iure non sapiente ut suscipit velit quo ullam nobis assumenda. Exercitationem esse inventore accusamus aut optio aliquam. Assumenda, vero explicabo.</p>
              </div>
              <div className="compare__text">
                <p>Ab nemo eius culpa reiciendis neque distinctio, rerum, laudantium consequatur cumque iste illum incidunt ipsam excepturi. Alias amet totam earum quae tenetur dolore cumque debitis sit, ratione, voluptatem, dolorum vitae veritatis repellat.</p>
              </div>
              <Link to="/">
                <AnimationButton 
                  text="Перейти не главную" 
                  className="header__button"
                />
              </Link>
            </div> 
          </>
        }
      </div>
    </div>
  )
}

export default ComparePage