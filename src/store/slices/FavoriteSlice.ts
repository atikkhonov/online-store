import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

interface FavoriteSliceProps {
  favoriteProducts: IProduct[];
  count: number;
}

const initialState: FavoriteSliceProps = {
  favoriteProducts: [],
  count: 0,
}

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state, action) {
      const findProduct = state.favoriteProducts.find(obj => obj.id === action.payload.id)

      if (findProduct) {
        return
      } else {
        state.favoriteProducts.push({
          ...action.payload
        });
      }
    },
    deleteFromFavorite(state, action: PayloadAction<number>) {
      state.favoriteProducts = state.favoriteProducts.filter((obj) => obj.id !== action.payload);
    },
    clearFavorites(state) {
      state.favoriteProducts = [];
      state.count = 0;
    }
  }
})

export const { addToFavorite, deleteFromFavorite, clearFavorites } = favoriteSlice.actions

export default favoriteSlice.reducer