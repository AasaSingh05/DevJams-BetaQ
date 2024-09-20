import React from 'react';

const Sidebar = () => {
  const vaults = [
    { name: 'Web Dev', path: 'C:\\Users\\Dell\\Documents\\Development\\Game Dev' },
    { name: 'ExamCooker', path: 'C:\\Users\\Dell\\Documents\\acm\\ExamCooker-2024\\Obsidian Vault' },
    { name: 'Rough', path: 'C:\\Users\\Dell\\Documents\\acm' },
    { name: 'Competitive Coding', path: 'C:\\Users\\Dell\\Documents\\acm' },
    { name: 'Cryptic Hunt', path: 'C:\\Users\\Dell\\Documents\\acm' },
    { name: 'Game dev', path: 'C:\\Users\\Dell\\Documents\\Development\\Game Dev' }
  ];

  return (
    <div className="bg-gray-800 text-white h-full w-1/3 p-4">
      {vaults.map((vault, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg">{vault.name}</h3>
          <p className="text-xs text-gray-400">{vault.path}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
