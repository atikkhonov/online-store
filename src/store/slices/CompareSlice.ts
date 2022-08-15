import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../../models/IProduct";

import { getCompareData } from "../../utils/getCompareData"

interface CompareSlice {
  compareProducts: IProduct[];
}

const { compareProducts } = getCompareData()

const initialState: CompareSlice = {
  compareProducts,
}

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers : {
    addToComparePage(state, action: PayloadAction<IProduct>) {
      const findProduct = state.compareProducts.find(obj => obj.id === action.payload.id)

      if (findProduct) {
        alert("Вы уже добавили этот товар в список сравниния !")
        return
      } if (state.compareProducts.length >= 6) {
        return
      } else {
        state.compareProducts.push({
          ...action.payload
        });
      }
    },
    removeFromComparePage(state, action: PayloadAction<IProduct>) {
      if (window.confirm("Вы точно хотите удалить этот товар из списка сравнений ?")) {
        state.compareProducts = state.compareProducts.filter((obj) => obj.id !== action.payload.id);
      }
    },
    clearComparePage(state) {
      if (window.confirm("Вы точно хотите очистить список сравнений ?")) {
        state.compareProducts = []
      }
    }
  }
})

export const { addToComparePage, removeFromComparePage, clearComparePage } = compareSlice.actions

export default compareSlice.reducer