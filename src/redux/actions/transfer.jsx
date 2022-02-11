import { createSlice } from '@reduxjs/toolkit';

export const transferSlice = createSlice({
  name: 'transfer',
  initialState: {
    beneficaryBank: '',
    beneficiaryName: '',
    beneficiaryNumber: 0,
    amount: 0,
    remark: '',
  },
  reducers: {
    // toggletransfer: (state) => {
    //   state.transferActive = !state.transferActive;
    //   return state;
    // },
  },
});

export const { toggletransfer } = transferSlice.actions;

export const transferSelector = (state) => state.transfer;
