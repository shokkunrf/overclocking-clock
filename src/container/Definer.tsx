import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { setTime, startToTickAway, stopToTickAway } from 'store/timeSlice';
import { Definer as Presenter } from 'components/Definer';

export const Definer: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const resetTime = (argBaseHour: number): void => {
    if (argBaseHour < 1) {
      return;
    }
    stopToTickAway();
    dispatch(setTime(argBaseHour, new Date()));
    dispatch(startToTickAway(argBaseHour));
  };

  return <Presenter resetTime={resetTime} />;
};
