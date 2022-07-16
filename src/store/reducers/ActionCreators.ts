import axios from "axios";

import { IProduct } from "../../types/types";
import { AppDispath } from "../store";
import productSlice from "./productSlice";

export const fetchProducts = () => async (dispatch: AppDispath) => {
  try {
    dispatch(productSlice.actions.productsFetching())
    const response = await axios.get<IProduct[]>("https://62d2faa581cb1ecafa68c825.mockapi.io/vapeLiquids")
    dispatch(productSlice.actions.productsFetchingSuccess(response.data))
  } catch (e) {
    dispatch(productSlice.actions.productsFetchingError(e.message))
  }
}