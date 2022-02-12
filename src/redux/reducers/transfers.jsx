// import { createSlice } from '@reduxjs/toolkit';
// import { transferFunds } from '../actions/transfers';

// export const transferSlice = createSlice({
//   name: 'transfer',
//   initialState: {
//     transfers:[],
//   },
// //   reducers: {
// //     toggleShowBalance: (state) => {
// //       state.showBalance = !state.showBalance;
// //       return state;
// //     },
// //     toggleShowTranferModal: (state) => {
// //       state.showTransferModal = !state.showTransferModal;
// //       return state;
// //     },
// //   },
//   extraReducers: {
//     [validateAccount.pending]: (state) => {
//       state.validateBankLoading = true;
//       return state;
//     },
//     [validateAccount.fulfilled]: (state, { payload }) => {
//       state.validateBankLoading = false;
//       state.validateBankError = false;
//       state.validateBankSuccess = true;
//       state.accountName = payload.account_name;
//       return state;
//     },
//     [validateAccount.rejected]: (state) => {
//       state.validateBankLoading = false;
//       state.validateBankError = true;
//       state.validateBankSuccess = false;
//       return state;
//     },
//   },
// });

// export const { toggleShowBalance, toggleShowTranferModal } =
//   accountSlice.actions;

// export const accountSelector = (state) => state.account;
