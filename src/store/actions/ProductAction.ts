import axios from "axios";

import { IProduct } from "../../types/types";
import { createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  'product/fetchAll',
  async(_, thunkAPI) => {
    try {
      const response = await axios.get<IProduct[]>(`https://62d2faa581cb1ecafa68c825.mockapi.io/vapeLiquids?page=1&limit=8`)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить страницу")
    }
  }
)