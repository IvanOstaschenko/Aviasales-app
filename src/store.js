// store.js
import { configureStore } from '@reduxjs/toolkit';
import filtersSliceReducer from './slices/filtersSlice.js';
import fetchSliceReducer from './slices/fetchSlice.js';

const store = configureStore({
  reducer: {
    filters: filtersSliceReducer,
    tickets: fetchSliceReducer,
  },
});

export default store;
