import { createSlice } from "@reduxjs/toolkit";

const initialState = "Все"

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    selectStatus(state, action) {
      console.log(action);
      console.log(action.type)
      state.statusTask = action.payload;
    }
  },
});

export const {
  selectStatus
} = filterSlice.actions;

export default filterSlice.reducer;
