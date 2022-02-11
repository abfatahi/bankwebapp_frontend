import { configureStore } from '@reduxjs/toolkit';
import { accountSlice } from './reducers/account';
import { registerSlice } from './reducers/auth/register';

export default configureStore({
  reducer: {
    account: accountSlice.reducer,
    register: registerSlice.reducer,
  },
});
