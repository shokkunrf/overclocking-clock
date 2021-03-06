/** @jsxImportSource @emotion/react */
import React, { FC, useState } from 'react';
import { css } from '@emotion/react';

import { Clock } from 'container/Clock';
import { Definer } from 'container/Definer';

const mainStyle = css`
  align-items: center;
  background-color: #303030;
  color: #fff;
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
`;

const App: FC = (): JSX.Element => {
  const [baseHour, setBaseHour] = useState(24);

  return (
    <div className="App" css={mainStyle}>
      <div>
        <Definer baseHour={baseHour} setBaseHour={setBaseHour} />
        <Clock baseHour={baseHour} />
      </div>
    </div>
  );
};

export default App;
