import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

interface ModalSlice {
  product: IProduct | undefined;
}

const initialState: ModalSlice = {
  product: undefined,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalReducer(state, action) {
      state.product = action.payload
    }
  }
})

export const { modalReducer } = modalSlice.actions 

export default modalSlice.reducer