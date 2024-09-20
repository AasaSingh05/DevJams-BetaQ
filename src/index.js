import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'; // Make sure to update this if your App component path change
import './index.css'; // Optional: for global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
