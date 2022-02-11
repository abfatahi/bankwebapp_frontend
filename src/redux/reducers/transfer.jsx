import { createSlice } from '@reduxjs/toolkit';

export const transferSlice = createSlice({
  name: 'transfer',
  initialState: {},
  reducers: {
    // toggletransfer: (state) => {
    //   state.transferActive = !state.transferActive;
    //   return state;
    // },
  },
});

export const { toggletransfer } = transferSlice.actions;

export const transferSelector = (state) => state.transfer;
