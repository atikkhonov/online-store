import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../models/IProduct"

interface CartSlice {
  products: IProduct[];
  totalPrice: number;
}

const initialState: CartSlice = {
  products: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, action) {
      const findProduct = state.products.find(obj => obj.id === action.payload.id)

      if (findProduct) {
        findProduct.count++;
      } else {
        state.products.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.products.reduce((sum, item) => {
        return (item.price * item.count) + sum;
      }, 0)
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
      state.products = state.products.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice = state.totalPrice - (action.payload.price * action.payload.count);
    },
    clearCart(state) {
      state.products = [];
      state.totalPrice = 0;
    }
  }
})

export const { addProductToCart, removeProductFromCart, deleteProductFromCart, clearCart } = cartSlice.actions; 

export default cartSlice.reducer