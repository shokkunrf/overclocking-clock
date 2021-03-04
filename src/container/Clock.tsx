import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectTime } from 'store/timeSlice';
import { Clock as Presenter } from 'components/Clock';

export const Clock: FC = (): JSX.Element => {
  const time = useSelector(selectTime);

  return <Presenter time={time} />;
};
