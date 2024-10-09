import React, { useState, useEffect } from 'react';

const LandingPage = ({ onSubjectSelect }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = "pick one";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">{typedText}</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => onSubjectSelect('Ma')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ma
        </button>
        <button
          onClick={() => onSubjectSelect('En')}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          En
        </button>
      </div>
    </div>
  );
};

export default LandingPage;