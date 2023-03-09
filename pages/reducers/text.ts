import { $CombinedState, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'pages/store';

export interface TextState {
  value: string;
}

const initialState: TextState = {
  value: "Lorem IPsum",
};

export const TextSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setVal: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
});

export const { setVal } = TextSlice.actions;
export const getVal = (state: RootState) => state.text.value;

export default TextSlice.reducer;
