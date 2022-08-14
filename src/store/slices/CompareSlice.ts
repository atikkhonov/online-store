import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

interface CompareSlice {
  compareProducts: IProduct[];
}

const initialState: CompareSlice = {
  compareProducts: [],
}

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers : {
    addToComparePage(state, action: PayloadAction<IProduct>) {
      const findProduct = state.compareProducts.find(obj => obj.id === action.payload.id)

      if (findProduct) {
        findProduct.count++;
      } if (state.compareProducts.length >= 6) {
        return
      } else {
        state.compareProducts.push({
          ...action.payload
        });
      }
    },
    removeFromComparePage(state, action: PayloadAction<IProduct>) {
      state.compareProducts = state.compareProducts.filter((obj) => obj.id !== action.payload.id);
    },
    clearComparePage(state) {
      state.compareProducts = []
    }
  }
})

export const { addToComparePage, removeFromComparePage, clearComparePage } = compareSlice.actions

export default compareSlice.reducer