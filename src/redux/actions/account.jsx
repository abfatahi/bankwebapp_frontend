// account_number={0154305609}&bank_code=058
import { createAsyncThunk } from '@reduxjs/toolkit';
import { mayLancerURL } from '../../utils/api';

export const validateAccount = createAsyncThunk(
  'validate/account',
  async ({ beneficiaryBankCode, beneficiaryNumber }, thunkAPI) => {
    try {
      const response = await fetch(
        `${mayLancerURL}account_number=${beneficiaryNumber}&bank_code=${beneficiaryBankCode}`,
        {
          method: 'GET',
        }
      );
      await new Promise((res) => setTimeout(res, 1000));
      let data = await response.json();
      if (response.status === 200) {
        return data;
      } else if (data === null || undefined) {
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
