import { configureStore } from '@reduxjs/toolkit';
import { accountSlice } from './reducers/account';
import { registerSlice } from './reducers/auth/register';
import { loginSlice } from './reducers/auth/login';

export default configureStore({
  reducer: {
    account: accountSlice.reducer,
    register: registerSlice.reducer,
    login: loginSlice.reducer,
  },
});
