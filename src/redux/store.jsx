import { configureStore } from '@redusjs/toolkit';
import { transferSlice } from './actions/transfer';

export default configureStore({
  reducer: {
    transfer: transferSlice.reducer,
  },
});
