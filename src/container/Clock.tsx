import React, { FC, useEffect, useState } from 'react';

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

  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(getTime(baseHour, new Date()));
    const intervalID = setInterval(() => {
      setTime((preTime) => preTime + 1000);
    }, (1000 * 24) / baseHour);

    return () => {
      clearInterval(intervalID);
    };
  }, [baseHour]);

  return <Presenter time={time} />;
};
