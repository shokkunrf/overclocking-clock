import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'store/store';

interface timeState {
  value: number;
}

const initialState: timeState = {
  value: 0,
};

/* eslint-disable no-param-reassign */
const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    increment: (state) => {
      state.value += 1000;
    },
  },
});
/* eslint-enable no-param-reassign */

export const timeReducer = timeSlice.reducer;

const { set, increment } = timeSlice.actions;

export const setTime = (baseHour: number, targetDateTime: Date): AppThunk => (
  dispatch,
) => {
  const targetTime =
    targetDateTime.getTime() - targetDateTime.setHours(0, 0, 0, 0);
  const multipliedTime = (targetTime * baseHour) / 24;

  dispatch(set(multipliedTime));
};

export const startToTickAway = (baseHour: number): AppThunk => (dispatch) => {
  const intervalID = window.setInterval(() => {
    dispatch(increment());
  }, (1000 * 24) / baseHour);

  sessionStorage.setItem('intervalID', `${intervalID}`);
};

export const stopToTickAway = (): void => {
  const intervalID = sessionStorage.getItem('intervalID');
  if (intervalID === null) {
    return;
  }
  window.clearInterval(parseInt(intervalID, 10));
};

export const selectTime = (state: RootState): number => state.time.value;
