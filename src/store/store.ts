import { combineReducers, configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/ProductSlice";
import searchReducer from "./slices/SearchSlice";
import cartReducer from "./slices/CartSlice";
import favoriteReducer from "./slices/FavoriteSlice"
import compareReducer from "./slices/CompareSlice"
import modalReducer from "./slices/ModalSlice"


const rootRuducer = combineReducers({
  product: productReducer,
  search: searchReducer,
  cart: cartReducer,
  favorite: favoriteReducer,
  compare: compareReducer,
  modal: modalReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootRuducer
  })
}

export type RootState = ReturnType <typeof rootRuducer>
export type AppStore = ReturnType <typeof setupStore>
export type AppDispath = AppStore['dispatch']

