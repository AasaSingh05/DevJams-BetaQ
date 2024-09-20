import React from 'react';
import Sidebar from './sidebar';
import MainContent from './MainComponent';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <MainContent/>
    </div>
  );
}

export default App;
