import React from 'react';

const AnswerInput = ({ choices, onAnswerSubmit, questionId }) => {
  return (
    <div>
      {choices && choices.length > 0 ? (
        choices.map((choice, index) => (
          <button
            key={`${questionId}-${index}`}
            onClick={() => onAnswerSubmit(index)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
          >
            {choice}
          </button>
        ))
      ) : (
        <p>No choices available</p>
      )}
    </div>
  );
};

export default AnswerInput;