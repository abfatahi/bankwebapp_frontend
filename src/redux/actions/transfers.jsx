import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL, paystackTestSecretKey } from '../../utils/api';


export const transferFunds = createAsyncThunk(
  'transfer/funds',
  async ({ beneficiaryBankCode, beneficiaryNumber }, thunkAPI) => {
    try {
      const response = await fetch(
        `${baseURL}/transferrecipient`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + paystackTestSecretKey,
          },
        }
      );
      await new Promise((res) => setTimeout(res, 1000));
      let data = await response.json();
      if (data.status === true) {
        return data.data;
      } else if (data.status !== true || undefined) {
        return thunkAPI.rejectWithValue([data]);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue([
        {
          message: 'Failed! To establish internet connection.',
        },
      ]);
    }
  }
);
