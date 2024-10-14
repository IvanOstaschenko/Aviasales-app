import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const filterOfTransferSlice = createSlice({
  name: 'filterOfTransfer',
  initialState: {
    all: true,
    none: false,
    one: false,
    two: true,
    three: true,
  },
  reducers: {
    toggleTransferFilter: (state, action) => {
      const field = action.payload;
      if (field === 'all') {
        const bool = !state.all;
        _.forEach(state, (value, key) => {
          state[key] = bool;
        });
      } else {
        state[field] = !state[field];
        if (!state[field]) {
          state.all = false;
        }
        const allTrueExceptOne = _.every(_.omit(state, 'all'), (value) => value === true);
        allTrueExceptOne && (state.all = true);
      }
    },
  },
});
export const { toggleTransferFilter } = filterOfTransferSlice.actions;
export default filterOfTransferSlice.reducer;
