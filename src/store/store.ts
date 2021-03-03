import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { timeReducer } from 'store/timeSlice';

export const store = configureStore({
  reducer: {
    time: timeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
