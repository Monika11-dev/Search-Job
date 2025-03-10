import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

interface Filters {
  cats: string[];
  loc: string[];
}

const initialState: Filters = {
  cats: JSON.parse(localStorage.getItem("category") as string) || [],
  loc: JSON.parse(localStorage.getItem("location") as string) || [],
};

export const FiltersSlice = createSlice({
  name: "jobsFilter",
  initialState,
  reducers: {
    setFilter(state, action) {
      const data = action.payload;
      if (state.cats.length === 0) {
        localStorage.setItem("category", JSON.stringify(data.catData));
        state.cats = [...state.cats, data.catData];
      } else if (state.loc.length === 0) {
        localStorage.setItem("location", JSON.stringify(data.locData));
        state.loc = [...state.loc, data.locData];
      }
    },
  },
});

export const filterActions = FiltersSlice.actions;

export default FiltersSlice.reducer;
