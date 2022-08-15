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
        alert("Вы уже добавили этот товар в избранное !")
        return
      } else {
        state.favoriteProducts.push({
          ...action.payload
        });
      }
    },
    deleteFromFavorite(state, action: PayloadAction<number>) {
      if (window.confirm("Вы точно хотите удалить этот товар из ибранного ?")) {
        state.favoriteProducts = state.favoriteProducts.filter((obj) => obj.id !== action.payload);
      }
    },
    clearFavorites(state) {
      if (window.confirm("Вы точно хотите очистить список избранного ?")) {
        state.favoriteProducts = [];
        state.count = 0;
      }
    }
  }
})

export const { addToFavorite, deleteFromFavorite, clearFavorites } = favoriteSlice.actions

export default favoriteSlice.reducer