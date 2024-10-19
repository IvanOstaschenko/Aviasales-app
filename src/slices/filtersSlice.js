import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    transfer: {
      all: true,
      content: {
        0: true,
        1: true,
        2: true,
        3: true,
      },
    },
    priceQuality: 'price',
  },
  reducers: {
    toggleTransferFilter: (state, action) => {
      const field = action.payload;
      if (field === 'all') {
        const bool = !state.transfer.all;
        state.transfer.all = bool;
        _.forEach(state.transfer.content, (value, key) => {
          state.transfer.content[key] = bool;
        });
      } else {
        state.transfer.content[field] = !state.transfer.content[field];
        if (!state.transfer.content[field]) {
          state.transfer.all = false;
        }
        const allTrueExceptOne = _.every(state.transfer.content, (value) => value === true);
        allTrueExceptOne && (state.transfer.all = true);
      }
    },
    togglePriceQualityFilter: (state, action) => {
      state.priceQuality = action.payload;
    },
  },
});
export const { toggleTransferFilter, togglePriceQualityFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
