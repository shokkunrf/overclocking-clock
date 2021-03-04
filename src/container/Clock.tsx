import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setTime,
  startToTickAway,
  stopToTickAway,
  selectTime,
} from 'store/timeSlice';
import { Clock as Presenter } from 'components/Clock';

export const Clock: FC = (): JSX.Element => {
  const time = useSelector(selectTime);
  const dispatch = useDispatch();

  const [baseHour, setBaseHour] = useState(24);

  const resetTime = (argBaseHour: number): void => {
    if (argBaseHour < 1) {
      return;
    }
    setBaseHour(argBaseHour);
    stopToTickAway();
    dispatch(setTime(argBaseHour, new Date()));
    dispatch(startToTickAway(argBaseHour));
  };

  return <Presenter time={time} resetTime={resetTime} />;
};
