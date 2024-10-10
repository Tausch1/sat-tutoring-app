import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth/Auth';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const UserProgressDashboard = ({ userProgress, currentSubject, currentConcept }) => {
  const { user } = useAuth();
  const [currentConceptIndex, setCurrentConceptIndex] = useState(0);
  const [concepts, setConcepts] = useState([]);

  useEffect(() => {
    if (userProgress && userProgress.subjects && userProgress.subjects[currentSubject]) {
      const subjectConcepts = Object.keys(userProgress.subjects[currentSubject]);
      setConcepts(subjectConcepts);
      const index = subjectConcepts.indexOf(currentConcept);
      setCurrentConceptIndex(index !== -1 ? index : 0);
    }
  }, [userProgress, currentSubject, currentConcept]);

  const navigateConcept = (direction) => {
    setCurrentConceptIndex((prevIndex) => {
      if (direction === 'left') {
        return prevIndex > 0 ? prevIndex - 1 : concepts.length - 1;
      } else {
        return (prevIndex + 1) % concepts.length;
      }
    });
  };

  if (!user || !userProgress || !currentSubject || concepts.length === 0) {
    return null;
  }

  const currentConceptData = userProgress.subjects[currentSubject][concepts[currentConceptIndex]];

  return (
    <div className="text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Progress Dashboard</h2>
      <p className="mb-2">Welcome, {user.username}!</p>
      <p className="mb-4">Total Points: {userProgress.totalPoints}</p>
      
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => navigateConcept('left')} className="text-white">
          <ChevronLeft size={24} />
        </button>
        <h3 className="text-xl font-semibold">{concepts[currentConceptIndex]}</h3>
        <button onClick={() => navigateConcept('right')} className="text-white">
          <ChevronRight size={24} />
        </button>
      </div>

      {currentConceptData ? (
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(currentConceptData).map(([difficulty, stats]) => (
            <div key={difficulty}>
              <h4 className="font-semibold">{difficulty}</h4>
              <p>{stats.correct}/{stats.total} correct</p>
              <p>Accuracy: {stats.total > 0 ? ((stats.correct / stats.total) * 100).toFixed(2) : 0}%</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No data available for this concept yet.</p>
      )}
    </div>
  );
};

export default UserProgressDashboard;