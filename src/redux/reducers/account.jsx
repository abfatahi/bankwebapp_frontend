import { createSlice } from '@reduxjs/toolkit';
import { validateAccount } from '../actions/account';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    validateBankLoading: false,
    validateBankError: false,
    validateBankSuccess: false,
    accountName: '',
  },
  reducers: {},
  extraReducers: {
    [validateAccount.pending]: (state) => {
      state.validateBankLoading = true;
      return state;
    },
    [validateAccount.fulfilled]: (state, { payload }) => {
      state.validateBankLoading = false;
      state.validateBankError = false;
      state.validateBankSuccess = true;
      state.accountName = payload.account_name;
      return state;
    },
    [validateAccount.rejected]: (state) => {
      state.validateBankLoading = false;
      state.validateBankError = true;
      state.validateBankSuccess = false;
      return state;
    },
  },
});

// export const {  } = accountSlice.actions;

export const accountSelector = (state) => state.account;
