import React from 'react';
import './App.css';
import { Clock } from 'container/clock';

const App = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <Clock />
    </header>
  </div>
);

export default App;
