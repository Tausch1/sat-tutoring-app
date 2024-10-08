import React, { useState } from 'react';
import TypingEffect from './TypingEffect';

const LandingPage = ({ onSubjectSelect }) => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="text-3xl mb-8">
        <TypingEffect 
          text="In what would you like to train?"
          speed={70}
          onComplete={() => setShowButtons(true)}
        />
      </div>
      {showButtons && (
        <div className="space-x-4">
          <button 
            onClick={() => onSubjectSelect('Math')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Math
          </button>
          <button 
            onClick={() => onSubjectSelect('English')}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;