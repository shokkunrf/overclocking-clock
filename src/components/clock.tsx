import React, { FC } from 'react';

interface Props {
  time: number;
  baseHour: number;
  resetTime: (baseHour: number) => void;
}

interface ClockElements {
  hour: string;
  minute: string;
  second: string;
}

const convertClock = (millisecTime: number): ClockElements => {
  const zeroPadding = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const time = millisecTime / 1000;
  const sec = Math.floor(time) % 60;
  const min = Math.floor(time / 60) % 60;
  const hour = Math.floor(time / 60 / 60);

  return {
    hour: zeroPadding(hour),
    minute: zeroPadding(min),
    second: zeroPadding(sec),
  };
};

export const Clock: FC<Props> = ({
  time,
  baseHour,
  resetTime,
}): JSX.Element => {
  const clockElements = convertClock(time);

  return (
    <div>
      <div>
        1day =
        <input
          value={baseHour}
          type="number"
          onChange={(e) => resetTime(Number(e.target.value) || 1)}
        />
        hours
      </div>
      <div>
        {clockElements.hour}:{clockElements.minute}:{clockElements.second}
      </div>
    </div>
  );
};
