import React, { useState, useEffect } from 'react';

const AnswerInput = ({ answers, onAnswerSubmit, questionId }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [questionId]);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };

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
          onClick={() => handleAnswerClick(index)}
          className={`block w-full text-left p-2 mb-2 rounded ${
            selectedAnswer === index 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {answer}
        </button>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        disabled={selectedAnswer === null}
      >
        Submit Answer
      </button>
    </div>
  );
};

export default AnswerInput;