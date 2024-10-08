import React, { useState, useEffect, useCallback, useMemo } from 'react';
import LandingPage from './components/LandingPage';
import SprintModeSelection from './components/SprintModeSelection';
import QuestionDisplay from './components/QuestionDisplay';
import AnswerInput from './components/AnswerInput';

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [sprintModeSelected, setSprintModeSelected] = useState(false);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60);

  const questions = useMemo(() => [
    {
      question: "Jane's garden is expanding by 14.2 in^{2} per year. By approximately how many square feet is the garden expanding? [1 foot = 12 inches]",
      answers: ["0.0071", "0.099", "1.18", "1673", "2044"],
      correctAnswerIndex: 1,
      subject: "Math",
      concept: "Square and Cubic Units",
      difficulty: "easy",
      hint: "To convert from square inches to square feet, divide by 144 (12 x 12)."
    },
    {
      question: "If zinc costs 43 dollars per cubic foot, how much money is 16 cubic meters of mulch? (3 feet = 1 meter)",
      answers: ["0.59", "1.78", "129", "288", "432"],
      correctAnswerIndex: 4,
      subject: "Math",
      concept: "Square and Cubic Units",
      difficulty: "medium",
      hint: "First, convert cubic meters to cubic feet. Then, calculate the cost."
    },
    {
      question: "Which of the following best describes the author's tone in the passage?",
      answers: ["Sarcastic", "Optimistic", "Neutral", "Critical", "Enthusiastic"],
      correctAnswerIndex: 2,
      subject: "English",
      concept: "Author's Tone",
      difficulty: "medium",
      hint: "Look for language that doesn't show strong emotion or bias."
    }
  ], []);

  const handleAnswerSubmit = useCallback((answerIndex) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion && answerIndex === currentQuestion.correctAnswerIndex) {
      setScore(prevScore => prevScore + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setTimeRemaining(60);
    } else {
      setQuizCompleted(true);
    }
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    let timer;
    if (timerEnabled && timeRemaining > 0 && !quizCompleted) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timerEnabled && timeRemaining === 0) {
      handleAnswerSubmit(null);
    }
    return () => clearInterval(timer);
  }, [timerEnabled, timeRemaining, quizCompleted, handleAnswerSubmit]);

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setSprintModeSelected(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setTimeRemaining(60);
  };

  const handleSprintModeSelect = (isSprint) => {
    setSprintModeSelected(true);
    setTimerEnabled(isSprint);
  };

  const resetQuiz = () => {
    setSelectedSubject(null);
    setSprintModeSelected(false);
    setTimerEnabled(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setTimeRemaining(60);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="App bg-black min-h-screen text-white">
      {!selectedSubject ? (
        <LandingPage onSubjectSelect={handleSubjectSelect} />
      ) : !sprintModeSelected ? (
        <SprintModeSelection onSelectSprintMode={handleSprintModeSelect} />
      ) : !quizCompleted && currentQuestion ? (
        <div className="p-4">
          {timerEnabled && <div className="mb-4">Time Remaining: {timeRemaining} seconds</div>}
          <QuestionDisplay 
            question={currentQuestion.question} 
            answers={currentQuestion.answers} 
          />
          <AnswerInput 
            answers={currentQuestion.answers} 
            onAnswerSubmit={handleAnswerSubmit}
            questionId={currentQuestionIndex}
          />
        </div>
      ) : (
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="text-xl mt-4">Your score: {score} / {questions.length}</p>
          <button 
            onClick={resetQuiz}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default App;