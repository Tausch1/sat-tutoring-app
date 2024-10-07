import React, { useState } from 'react';

const AnswerInput = ({ answers, onAnswerSubmit }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      onAnswerSubmit(selectedAnswer);
    }
  };

  return (
    <div className="mt-4">
      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => setSelectedAnswer(index)}
          className={`block w-full text-left p-2 my-2 rounded ${
            selectedAnswer === index ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {answer}
        </button>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-600"
        disabled={selectedAnswer === null}
      >
        Submit Answer
      </button>
    </div>
  );
};

export default AnswerInput;