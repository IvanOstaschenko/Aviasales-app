import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const fetchSearchID = createAsyncThunk(
  'tickets/fetchSearchID',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('https://aviasales-test-api.kata.academy/search');
      if (!response.ok) {
        throw new Error('server error!');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async function (_, { rejectWithValue, getState }) {
    const searchID = getState().tickets.searchID;
    try {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchID}`,
      );
      if (!response.ok) {
        throw new Error("Can't get tickets. Server error!");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
const fetchSlice = createSlice({
  name: 'tickets',
  initialState: {
    searchID: null,
    tickets: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchID.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSearchID.fulfilled, (state, action) => {
        state.searchID = action.payload.searchId;
      })
      .addCase(fetchSearchID.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        if (action.payload.stop) {
          state.status = 'resolved';
        } else {
          state.status = 'loading';
          const arr = action.payload.tickets.map((item) => {
            return { ...item, id: nanoid() };
          });
          state.tickets.push(...arr);
        }
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default fetchSlice.reducer;
