import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import textReducer from 'pages/reducers';
import counterReducer from 'pages/reducers';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;