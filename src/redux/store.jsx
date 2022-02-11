import { configureStore } from '@reduxjs/toolkit';
import { transferSlice } from './reducers/transfer';

export default configureStore({
  reducer: {
    transfer: transferSlice.reducer,
  },
});
