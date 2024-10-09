import React from 'react';

const ConceptPage = ({ subject, concept, onLeave, onSwitch, onSubjectSwitch, children }) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{subject}: {concept}</h1>
        <div>
          <button
            onClick={onLeave}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            LEAVE
          </button>
          <button
            onClick={onSwitch}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            SWITCH
          </button>
          <button
            onClick={onSubjectSwitch}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            {subject === 'Math' ? 'En' : 'Ma'}
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ConceptPage;