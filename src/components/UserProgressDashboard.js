import React from 'react';
import { useAuth } from '../auth/Auth';

const UserProgressDashboard = ({ userProgress }) => {
  const { user } = useAuth();

  if (!user || !userProgress) {
    return <div>Loading progress...</div>;
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Progress Dashboard</h2>
      <p className="mb-2">Welcome, {user.username}!</p>
      <p className="mb-4">Total Points: {userProgress.totalPoints}</p>
      
      {Object.entries(userProgress.subjects).map(([subject, concepts]) => (
        <div key={subject} className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{subject}</h3>
          {Object.entries(concepts).map(([concept, difficulties]) => (
            <div key={concept} className="ml-4 mb-2">
              <h4 className="text-lg font-medium">{concept}</h4>
              {Object.entries(difficulties).map(([difficulty, stats]) => (
                <p key={difficulty} className="ml-2">
                  {difficulty}: {stats.correct}/{stats.total} correct
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
      
      <p className="text-sm text-gray-400">Last active: {new Date(userProgress.lastActive).toLocaleString()}</p>
    </div>
  );
};

export default UserProgressDashboard;