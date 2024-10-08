import React, { useState, useEffect, useCallback, useMemo } from 'react';
import LandingPage from './components/LandingPage';
import SprintModeSelection from './components/SprintModeSelection';
import QuestionDisplay from './components/QuestionDisplay';
import AnswerInput from './components/AnswerInput';
import questionBank from './components/questionBank';

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [sprintModeSelected, setSprintModeSelected] = useState(false);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [difficulty, setDifficulty] = useState('Easy');
  const [correctStreak, setCorrectStreak] = useState(0);
  const [incorrectStreak, setIncorrectStreak] = useState(0);
  const [pointChange, setPointChange] = useState(null);

  const questions = useMemo(() => {
    return questionBank.find(q => q.difficulty === difficulty)?.questions || [];
  }, [difficulty]);

  const updateDifficulty = useCallback(() => {
    if (correctStreak === 3 && difficulty !== 'Diablo') {
      setDifficulty(prevDifficulty => {
        switch(prevDifficulty) {
          case 'Easy': return 'Medium';
          case 'Medium': return 'Hard';
          case 'Hard': return 'Diablo';
          default: return prevDifficulty;
        }
      });
      setCorrectStreak(0);
    } else if ((incorrectStreak === 2 && difficulty !== 'Easy') || (difficulty === 'Diablo' && incorrectStreak === 1)) {
      setDifficulty(prevDifficulty => {
        switch(prevDifficulty) {
          case 'Diablo': return 'Hard';
          case 'Hard': return 'Medium';
          case 'Medium': return 'Easy';
          default: return prevDifficulty;
        }
      });
      setIncorrectStreak(0);
    }
  }, [correctStreak, incorrectStreak, difficulty]);

  const handleAnswerSubmit = useCallback((answerIndex) => {
    const currentQuestion = questions[currentQuestionIndex];
    let pointsToAdd = 0;
    
    if (currentQuestion && answerIndex === currentQuestion.correctAnswer) {
      switch(difficulty) {
        case 'Easy': pointsToAdd = 1; break;
        case 'Medium': pointsToAdd = 2; break;
        case 'Hard': pointsToAdd = 3; break;
        case 'Diablo': pointsToAdd = 5; break;
      }
      setPoints(prevPoints => prevPoints + pointsToAdd);
      setPointChange(`+${pointsToAdd}`);
      setCorrectStreak(prevStreak => prevStreak + 1);
      setIncorrectStreak(0);
    } else {
      switch(difficulty) {
        case 'Easy': pointsToAdd = -1; break;
        case 'Medium': pointsToAdd = -2; break;
        case 'Hard': pointsToAdd = -3; break;
        case 'Diablo': pointsToAdd = 0; break;
      }
      if (pointsToAdd !== 0) {
        setPoints(prevPoints => Math.max(0, prevPoints + pointsToAdd));
        setPointChange(pointsToAdd.toString());
      }
      setIncorrectStreak(prevStreak => prevStreak + 1);
      setCorrectStreak(0);
    }

    updateDifficulty();

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setTimeRemaining(60);
    } else {
      setQuizCompleted(true);
    }

    // Reset point change display after 1 second
    setTimeout(() => setPointChange(null), 1000);
  }, [currentQuestionIndex, questions, updateDifficulty, difficulty]);

  useEffect(() => {
    setCurrentQuestionIndex(0);
  }, [difficulty]);

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
    setPoints(0);
    setQuizCompleted(false);
    setTimeRemaining(60);
    setDifficulty('Easy');
    setCorrectStreak(0);
    setIncorrectStreak(0);
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
    setPoints(0);
    setQuizCompleted(false);
    setTimeRemaining(60);
    setDifficulty('Easy');
    setCorrectStreak(0);
    setIncorrectStreak(0);
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
          <div className="mb-4">Current Difficulty: {difficulty}</div>
          <div className="mb-4">
            Points: {points} 
            {pointChange && <span className={`ml-2 ${pointChange.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {pointChange}
            </span>}
          </div>
          {timerEnabled && <div className="mb-4">Time Remaining: {timeRemaining} seconds</div>}
          <QuestionDisplay 
            question={currentQuestion.question} 
            choices={currentQuestion.choices || []} 
          />
          <AnswerInput 
            choices={currentQuestion.choices || []} 
            onAnswerSubmit={handleAnswerSubmit}
            questionId={currentQuestionIndex}
          />
        </div>
      ) : (
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="text-xl mt-4">Your final score: {points} points</p>
          <p className="text-xl mt-2">Final Difficulty: {difficulty}</p>
          <button 
            onClick={resetQuiz}
            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default App;