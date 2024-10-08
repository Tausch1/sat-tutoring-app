import React from 'react';
import TypingEffect from './TypingEffect';

const SprintModeSelection = ({ onSelectSprintMode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="text-3xl mb-8">
        <TypingEffect 
          text="Are you willing to sprint?"
          speed={70}
          onComplete={() => {}}
        />
      </div>
      <div className="space-x-4 mt-4">
        <button 
          onClick={() => onSelectSprintMode(true)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Yes
        </button>
        <button 
          onClick={() => onSelectSprintMode(false)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default SprintModeSelection;