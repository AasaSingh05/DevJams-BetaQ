import React from 'react';
import AppComponent from './components/AppComponent';
import MainComponent from './components/MainComponent';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainComponent />
      <AppComponent />
    </div>
  );
}

export default App;
