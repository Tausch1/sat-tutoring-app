import React from 'react';

const QuestionDisplay = ({ question = "", answers = [] }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4">
      <h2 className="text-2xl font-bold mb-4">{question}</h2>
      {answers.length > 0 ? (
        <ul className="space-y-2">
          {answers.map((answer, index) => (
            <li key={index} className="bg-gray-100 p-3 rounded hover:bg-gray-200 cursor-pointer">
              {answer}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No answer options available.</p>
      )}
    </div>
  );
};

export default QuestionDisplay;