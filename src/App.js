import React, { useState } from 'react';
import QuestionDisplay from './QuestionDisplay';
import AnswerInput from './AnswerInput';

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      question: "Jane's garden is expanding by 14.2 in^{2} per year. By approximately how many square feet is the garden expanding? [1 foot = 12 inches]",
      answers: [
        "0.0071",
        "0.099",
        "1.18",
        "1673",
        "2044"
      ],
      correctAnswerIndex: 1
    },
    {
      question: "If zinc costs 43 dollars per cubic foot, how much money is 16 cubic meters of mulch? (3 feet = 1 meter)",
      answers: [
        "0.59",
        "1.78",
        "129",
        "288",
        "432"
      ],
      correctAnswerIndex: 4
    },
    {
      question: "In a certain 300 mi^2 nature preserve in Pennsylvania, there are an average of 271 trees per 0.5 square miles. Due to the state selling off land for construction, this area is contracting by approximately 7 square miles per year. Approximately how many trees are estimated to be lost per 10,000 ft^2 of contraction? (1 mile = 5280 feet)",
      answers: [
        "0.194",
        "3.11",
        "4.82",
        "3794",
        "20032320"
      ],
      correctAnswerIndex: 0
    }
  ];

  const handleAnswerSubmit = (answerIndex) => {
    const currentQuestion = questions[currentQuestionIndex];
    console.log(`Selected answer: ${currentQuestion.answers[answerIndex]}`);
    
    if (answerIndex === currentQuestion.correctAnswerIndex) {
      setScore(prevScore => prevScore + 1);
    }

    // Move to the next question
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-4">The Beast</h1>
      <div className="text-center mb-4">
        <p>Score: {score}</p>
        <p>Question: {currentQuestionIndex + 1} / {questions.length}</p>
      </div>
      {currentQuestion ? (
        <>
          <QuestionDisplay 
            question={currentQuestion.question} 
            answers={currentQuestion.answers} 
          />
          <AnswerInput 
            answers={currentQuestion.answers} 
            onAnswerSubmit={handleAnswerSubmit} 
          />
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p>Final Score: {score} / {questions.length}</p>
        </div>
      )}
    </div>
  );
}

export default App;