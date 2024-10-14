import { createSlice } from '@reduxjs/toolkit';

const filterPriceQualSlice = createSlice({
  name: 'filterPriceQuality',
  initialState: 'price',
  reducers: {
    filterPriceQuality: (state, action) => {
      return action.payload;
    },
  },
});
export const { filterPriceQuality } = filterPriceQualSlice.actions;
export default filterPriceQualSlice.reducer;
