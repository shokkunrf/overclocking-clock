import React, { FC, useEffect, useRef } from 'react';

import { Clock as Presenter } from 'components/Clock';

interface Props {
  baseHour: number;
}

export const Clock: FC<Props> = ({ baseHour }): JSX.Element => {
  const getTime = (hour: number, targetDateTime: Date): number => {
    const targetTime =
      targetDateTime.getTime() - targetDateTime.setHours(0, 0, 0, 0);
    const multipliedTime = (targetTime * hour) / 24;

    return multipliedTime;
  };

  const timeRef = useRef(getTime(baseHour, new Date()));

  useEffect(() => {
    const intervalID = setInterval(() => {
      timeRef.current += 1000;
    }, (1000 * 24) / baseHour);

    return () => {
      clearInterval(intervalID);
    };
  });

  return <Presenter time={timeRef.current} />;
};
