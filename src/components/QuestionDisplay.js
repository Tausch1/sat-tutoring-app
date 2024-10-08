import React from 'react';

const QuestionDisplay = ({ question, answers }) => {
  return (
    <div className="text-center mt-8">
      <div className="text-xl mb-4">
        {question}
      </div>
      <div className="mt-4">
        {answers.map((answer, index) => (
          <div key={index} className="mb-2">{answer}</div>
        ))}
      </div>
    </div>
  );
};

export default QuestionDisplay;