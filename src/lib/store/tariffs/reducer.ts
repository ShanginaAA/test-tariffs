import { createSlice } from '@reduxjs/toolkit';
import { fetchTariffs } from './actions';
import { TariffData } from '@/types/tariff.type';

export type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

interface ITariffSliceState {
  items: TariffData[];
  fetchingStatus: RequestStatus;
}

const initialState: ITariffSliceState = {
  items: [],
  fetchingStatus: 'idle',
};

export const tariffSlice = createSlice({
  name: 'tariffSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTariffs.pending, (state) => {
        state.fetchingStatus = 'loading';
        state.items = [];
      })
      .addCase(fetchTariffs.fulfilled, (state, action) => {
        state.items = action.payload;
        state.fetchingStatus = 'succeeded';
      })
      .addCase(fetchTariffs.rejected, (state, action) => {
        state.fetchingStatus = 'failed';
        state.items = [];
      });
  },
});

// export const {  } = tariffSlice.actions;

export default tariffSlice.reducer;
