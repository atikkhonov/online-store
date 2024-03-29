import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { IProduct } from "../../models/IProduct"

import calcTotalPrice from "../../utils/calcTotalPrice";
import { getCartData } from "../../utils/getCartData";

interface CartSlice {
  products: IProduct[];
  totalPrice: number;
}

const { products, totalPrice } = getCartData();

const initialState: CartSlice = {
  products: products,
  totalPrice: totalPrice,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<IProduct>) {
      const findProduct = state.products.find(obj => obj.id === action.payload.id)

      if (findProduct) {
        findProduct.count++;
      } else {
        state.products.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.products)
    },
    removeProductFromCart(state, action: PayloadAction<IProduct>) {
      const findProduct = state.products.find(obj => obj.id === action.payload.id)
      
      if (findProduct && (findProduct.count > 1)) {
        findProduct.count--;
        state.totalPrice = state.totalPrice - findProduct.price;
        return
      } if ((findProduct !== undefined) && (findProduct.count === 1)) {
        return
      } else {
        return
      }
    },
    deleteProductFromCart(state, action: PayloadAction<IProduct>) {
      if (window.confirm(`Вы точно хотите удалить "${action.payload.title}" из корзины ?`)) {
        state.products = state.products.filter((obj) => obj.id !== action.payload.id);
        state.totalPrice = state.totalPrice - (action.payload.price * action.payload.count);
      }
    },
    clearCart(state) {
      if (window.confirm("Вы точно хотите очистить корзину ?")) {
        state.products = [];
        state.totalPrice = 0;
      }
    }
  }
})

export const { addProductToCart, removeProductFromCart, deleteProductFromCart, clearCart } = cartSlice.actions; 

export default cartSlice.reducer