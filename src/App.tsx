/** @jsxImportSource @emotion/react */
import React from 'react';
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

const App = (): JSX.Element => (
  <div className="App" css={mainStyle}>
    <div>
      <Definer />
      <Clock />
    </div>
  </div>
);

export default App;
