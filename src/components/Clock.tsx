/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/react';

const clockStyle = css`
  font-size: 5rem;
`;

interface Props {
  time: number;
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

export const Clock: FC<Props> = ({ time }): JSX.Element => {
  const clockElements = convertClock(time);

  return (
    <div css={clockStyle}>
      {clockElements.hour}:{clockElements.minute}:{clockElements.second}
    </div>
  );
};
