import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice";

const rootRuducer = combineReducers({
  productReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootRuducer
  })
}

export type RootState = ReturnType <typeof rootRuducer>
export type AppStore = ReturnType <typeof setupStore>
export type AppDispath = AppStore['dispatch']