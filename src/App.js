import React from 'react';
import type { Node } from 'react';

import Counter from './components/Counter';

import './styles/App.scss';

function App(): Node {
  return (
    <div className="App">
      <Counter incrementText="Increase Count" decrementText="Decrease Count" />
    </div>
  );
}

export default App;
