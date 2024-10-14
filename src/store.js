// store.js
import { configureStore } from '@reduxjs/toolkit';
import filterOfTransferReducer from './slices/filterOfTransferSlice';
import filterPriceQualityReducer from './slices/filterPriceQualSlice.js';

const store = configureStore({
  reducer: {
    toggleTransferFilter: filterOfTransferReducer,
    togglePriceQualityFilter: filterPriceQualityReducer,
  },
});

export default store;
