import { configureStore } from '@reduxjs/toolkit';
import { accountSlice } from './reducers/account';
import { registerSlice } from './reducers/auth/register';
import { loginSlice } from './reducers/auth/login';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const reducers = combineReducers({
  account: accountSlice.reducer,
  register: registerSlice.reducer,
  login: loginSlice.reducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
