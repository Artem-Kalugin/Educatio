/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
/**
 * @prettier
 */

type Toast = {
  text: string;
  type: 'warning' | 'success' | 'reject';
  id: string;
};

interface ToastsState {
  items: Toast[];
}

const initialState: ToastsState = {
  items: [],
};

const toastSlice = createSlice({
  name: 'toasts',
  initialState,
  reducers: {
    addToast(state, action: PayloadAction<Toast>) {
      state.items = [action.payload, ...state.items];
    },
    deleteToast(state, action) {
      state.items = state.items.filter(el => action.payload !== el.id);
    },
    clearToasts(state) {
      state = initialState;
    },
  },
});

export const { addToast, deleteToast, clearToasts } = toastSlice.actions;
export default toastSlice.reducer;
