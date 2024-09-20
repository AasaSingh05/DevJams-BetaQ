import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'; // Make sure to update this if your App component path change
//import './index.css'; // Optional: for global styles

// Create a root container and render the app inside it
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

