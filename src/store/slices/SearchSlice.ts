import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchSlice {
  page: number;
  categoryID: number;
  sortBy: {
    name: string;
    sortProperty: string;
  }
}

const initialState: SearchSlice = {
  page: 1,
  categoryID: 0,
  sortBy: {
    name: "популярности (убывание)",
    sortProperty: "rating"
  }
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setSortBy(state, action: PayloadAction<{name: string, sortProperty: string}>) {
      state.sortBy = action.payload
    },
    setFilter(state, action: PayloadAction<number>) {
      state.categoryID = action.payload
    }
  }
})

export const { setCurrentPage, setSortBy, setFilter } = searchSlice.actions 

export default searchSlice.reducer