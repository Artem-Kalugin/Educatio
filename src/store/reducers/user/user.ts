/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
/**
 * @prettier
 */

const initialState = {
  loading: false,
  success: false,
  failure: false,
  data: {},
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
    userWrite(state, action) {
      state.loading = false;
      state.success = true;
      state.data = action.payload;
    },
    userRequestFail(state) {
      state.loading = false;
      state.success = false;
      state.failure = true;
    },
    userWriteLocal(state, action) {
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
