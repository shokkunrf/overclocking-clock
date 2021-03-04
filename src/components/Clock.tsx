/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/react';

const baseHourStyle = css`
  font-size: 2rem;

  input {
    background-color: #424242;
    border: none;
    border-bottom: 1px solid #888;
    box-sizing: border-box;
    color: #fff;
    font-size: 100%;
    outline: none;
    text-align: right;
    width: 4rem;

    :focus {
      background-color: #383838;
      border-bottom: 2px solid #2196f3;
    }
  }
`;

const clockStyle = css`
  font-size: 5rem;
`;

interface Props {
  time: number;
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

export const Clock: FC<Props> = ({ time, resetTime }): JSX.Element => {
  const clockElements = convertClock(time);

  return (
    <div>
      <div css={baseHourStyle}>
        1day =
        <input
          type="text"
          inputMode="numeric"
          defaultValue="24"
          onChange={(e) => resetTime(Number(e.target.value) || 0)}
        />
        hours
      </div>
      <div css={clockStyle}>
        {clockElements.hour}:{clockElements.minute}:{clockElements.second}
      </div>
    </div>
  );
};
