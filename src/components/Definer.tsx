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

interface Props {
  resetTime: (baseHour: number) => void;
}

export const Definer: FC<Props> = ({ resetTime }): JSX.Element => {
  return (
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
  );
};
