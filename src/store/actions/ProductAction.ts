import axios from "axios";

import { IProduct } from "../../models/IProduct";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface fetchProductsActionPayload {
  category: number; 
  page: number; 
  sort: string;
  order: string;
  searchValue: string;
} 

export const fetchProducts = createAsyncThunk('product/fetchAll', async (params: fetchProductsActionPayload, thunkAPI) => {
  const { category, page, sort, order, searchValue } = params
    try {
      const response = await axios.get<IProduct[]>(`
      https://62d2faa581cb1ecafa68c825.mockapi.io/vapeLiquids?page=${page}&limit=8${(category > 0) ? `&category=${category}` : ''}${(sort ? `&sortBy=${sort}` : '')}${(order ? `&order=${order}` : '')}${searchValue}
      `)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить страницу")
    }
  }
)