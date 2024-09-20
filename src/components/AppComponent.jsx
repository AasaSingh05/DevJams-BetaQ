import React from 'react';
import Sidebar from './sidebar';
import MainContent from './MainContent';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
