import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Me';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Profile />, div);
});