import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../models/IProduct"
import { fetchProducts } from "../actions/ProductAction";

interface ProductState {
  products: IProduct[],
  isLoading: boolean,
  error: string,
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: '',
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    [fetchProducts.pending.type]: (state) => {
      state.isLoading = false;
    },
    [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export default productSlice.reducer;