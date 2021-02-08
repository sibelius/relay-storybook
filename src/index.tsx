import React from 'react';
import { render } from 'react-dom';

import App from './App';

const renderApp = () => {
  const rootEl = document.getElementById('root');

  render(<App />, rootEl);
};

renderApp();
