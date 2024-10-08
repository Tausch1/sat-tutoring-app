import React from 'react';

const QuestionDisplay = ({ question, choices }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{question || 'No question available'}</h2>
      {choices && choices.length > 0 ? (
        <ul>
          {choices.map((choice, index) => (
            <li key={index} className="mb-2">{choice}</li>
          ))}
        </ul>
      ) : (
        <p>No choices available</p>
      )}
    </div>
  );
};

export default QuestionDisplay;