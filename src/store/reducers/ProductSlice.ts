import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../types/types"

interface ProductState {
  products: IProduct[],
  isLoading: boolean,
  error: string
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: ''
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productsFetching(state) {
      state.isLoading = true;
    },
    productsFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    productsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

export default ProductSlice.reducer;