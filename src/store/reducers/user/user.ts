/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
/**
 * @prettier
 */

export type User = {
  lowercaseName?: string;
  name?: string;
  avatar?: string;
  background?: string;
  password?: string;
  description?: string;
  uid?: string;
  phone?: string;
  registrationComplete?: boolean;
};

interface State {
  loading: boolean;
  success: boolean;
  failure: boolean;
  data?: User;
}

const initialState: State = {
  loading: false,
  success: false,
  failure: false,
  data: undefined,
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoading(state) {
      state.loading = true;
      state.success = false;
      state.failure = false;
    },
    userWrite(state, action: PayloadAction<User | undefined>) {
      state.loading = false;
      state.success = true;
      state.data = action.payload;
    },
    userRequestFail(state) {
      state.loading = false;
      state.success = false;
      state.failure = true;
    },
    userWriteLocal(state, action: PayloadAction<User>) {
      state.loading = false;
      state.success = false;
      state.failure = false;
      state.data = action.payload;
    },
    userClear(state) {
      state = initialState;
    },
  },
});

export const {
  userClear,
  userWriteLocal,
  userRequestFail,
  userWrite,
  userLoading,
} = usersSlice.actions;
export default usersSlice.reducer;
