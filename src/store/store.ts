import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/ProductSlice";
import searchReducer from "./slices/SearchSlice"

const rootRuducer = combineReducers({
  product: productReducer,
  search: searchReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootRuducer
  })
}

export type RootState = ReturnType <typeof rootRuducer>
export type AppStore = ReturnType <typeof setupStore>
export type AppDispath = AppStore['dispatch']

