import React, { FC } from 'react';

import { Definer as Presenter } from 'components/Definer';

interface Props {
  baseHour: number;
  setBaseHour: (hour: number) => void;
}

export const Definer: FC<Props> = ({ baseHour, setBaseHour }): JSX.Element => {
  const setHour = (hour: number): void => {
    if (hour < 1) {
      return;
    }

    setBaseHour(hour);
  };

  return <Presenter baseHour={baseHour} setHour={setHour} />;
};
