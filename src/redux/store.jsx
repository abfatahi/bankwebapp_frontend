import { configureStore } from '@reduxjs/toolkit';
import { transferSlice } from './reducers/account';

export default configureStore({
  reducer: {
    transfer: transferSlice.reducer,
  },
});
