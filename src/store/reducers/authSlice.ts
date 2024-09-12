import mockService from '@/services/mockResponseService';
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

interface User {
  email: string | null;
  name: string | null;
}

interface InitialState {
  userCredentials: User;
  isUserAuthorized: boolean;
  isLoading: boolean;
}

const initialState: InitialState = {
  userCredentials: { email: null, name: null },
  isUserAuthorized: false,
  isLoading: false,
};

export const authorize = createAsyncThunk(
  'auth/authorize',
  async (data: { email: string; name: string }) => {
    try {
      const authResp = await mockService.postData(data);

      return authResp;
    } catch (error) {
      console.log('error:', error);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<unknown>) => {
    builder.addCase(authorize.pending, state => {
      state.isLoading = true;
    }),
      builder.addCase(authorize.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userCredentials = action.payload;
        state.isUserAuthorized = true;
      });
  },
});

const { reducer } = authSlice;

export default reducer;
