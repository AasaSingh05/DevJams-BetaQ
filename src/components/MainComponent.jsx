import React from 'react';

const MainContent = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">Obsidian</h1>
      <p className="text-gray-500 mb-6">Version 1.6.7</p>
      <button className="bg-purple-600 text-white px-4 py-2 rounded mb-4">Create</button>
      <button className="bg-gray-700 text-white px-4 py-2 rounded mb-4">Open</button>
      <button className="bg-gray-700 text-white px-4 py-2 rounded">Sign in</button>
      <select className="mt-4 p-2 bg-gray-800 text-white rounded">
        <option>English</option>
      </select>
    </div>
  );
};

export default MainContent;
