import React from 'react';

const SprintModeSelection = ({ onSelectSprintMode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Are you willing to sprint?</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => onSelectSprintMode(true)}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          Yes
        </button>
        <button
          onClick={() => onSelectSprintMode(false)}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default SprintModeSelection;