import { RootState } from '../AppStore';

export const selectTariffs = (state: RootState) => state.tariffSlice.items;
export const tariffsFetchStatus = (state: RootState) => state.tariffSlice.fetchingStatus;
