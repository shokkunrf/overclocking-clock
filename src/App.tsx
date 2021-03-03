/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import { Clock } from 'container/clock';

const mainStyle = css`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
`;

const App = (): JSX.Element => (
  <div className="App" css={mainStyle}>
    <Clock />
  </div>
);

export default App;
