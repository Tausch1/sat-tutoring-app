import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth/Auth';

const LandingPage = ({ onSubjectSelect, userProgress }) => {
  const [displayText, setDisplayText] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    let index = 0;
    const text = 'pick one';
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-8">{displayText}</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => onSubjectSelect('Ma')}
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Ma
          </button>
          <button
            onClick={() => onSubjectSelect('En')}
            className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
          >
            En
          </button>
        </div>
      </div>
      {user && userProgress && (
        <div className="w-full bg-black text-white p-4">
          <h2 className="text-xl font-bold mb-2">Progress Dashboard</h2>
          <p>Welcome, {user.username}!</p>
          <p>Total Points: {userProgress.totalPoints}</p>
          {Object.entries(userProgress.subjects).map(([subject, concepts]) => (
            <div key={subject} className="mt-2">
              <h3 className="text-lg font-semibold">{subject}</h3>
              {/* Add more detailed progress info here if needed */}
            </div>
          ))}
          <p className="mt-2">Last active: {new Date(userProgress.lastActive).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default LandingPage;