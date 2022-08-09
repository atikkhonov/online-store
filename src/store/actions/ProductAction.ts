import axios from "axios";

import { IProduct } from "../../models/IProduct";
import { AppDispath } from "../store";
import { productSlice } from "../slices/ProductSlice";

// export const fetchProducts = createAsyncThunk(
//   'product/fetchAll',
//   async(_, thunkAPI) => {
//     try {
//       const response = await axios.get<IProduct[]>(`https://62d2faa581cb1ecafa68c825.mockapi.io/vapeLiquids`)
//       return response.data
//     } catch (e) {
//       return thunkAPI.rejectWithValue("Не удалось загрузить страницу")
//     }
//   }
// )

export const fetchProducts = (
  category: number, 
  sort: string, 
  order: string, 
  page: number,
  searchValue: string,
) => async (dispatch: AppDispath) => {
  try {
    dispatch(productSlice.actions.productsFetching())
    const response = await axios.get<IProduct[]>(`
    https://62d2faa581cb1ecafa68c825.mockapi.io/vapeLiquids?page=${page}&limit=8${(category > 0) ? `&category=${category}` : ''}${(sort ? `&sortBy=${sort}` : '')}${(order ? `&order=${order}` : '')}${searchValue}`)
    dispatch(productSlice.actions.productsFetchingSuccess(response.data))
  } catch (error) {
    dispatch(productSlice.actions.productFetchingError("Не удалось загрузить страницу"))
  }
}
