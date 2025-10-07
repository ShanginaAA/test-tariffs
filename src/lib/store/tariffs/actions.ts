import { TariffData } from '@/types/tariff.type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../AppStore';

export const fetchTariffs = createAsyncThunk<TariffData[], void, { state: RootState }>(
  'tariffs/fetchTariffs',
  async (_, { rejectWithValue, getState }) => {
    return await axios
      .get(`https://t-core.fit-hub.pro/Test/GetTariffs`)
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        return rejectWithValue(error.response.data);
      });
  },
);
