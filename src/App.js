import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useAuth } from './auth/Auth';
import { createUserProgressModel, updateUserProgress } from './models/UserProgress';
import LandingPage from './components/LandingPage';
import SprintModeSelection from './components/SprintModeSelection';
import ConceptPage from './components/ConceptPage';
import QuestionDisplay from './components/QuestionDisplay';
import AnswerInput from './components/AnswerInput';
import UserProgressDashboard from './components/UserProgressDashboard';
import LoginComponent from './components/LoginComponent';
import questionBank from './components/questionBank';

function App() {
  const { user, login, logout } = useAuth();
  const [userProgress, setUserProgress] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [sprintModeSelected, setSprintModeSelected] = useState(false);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [difficulty, setDifficulty] = useState('Easy');
  const [correctStreak, setCorrectStreak] = useState(0);
  const [incorrectStreak, setIncorrectStreak] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [pointChange, setPointChange] = useState(null);

  useEffect(() => {
    if (user && !userProgress) {
      // In a real app, you'd fetch this from a backend
      setUserProgress(createUserProgressModel(user.id));
    }
  }, [user, userProgress]);

  const questions = useMemo(() => {
    if (!selectedSubject || !selectedConcept) return [];
    const conceptQuestions = questionBank[selectedSubject === 'Ma' ? 'Math' : 'English'][selectedConcept];
    return conceptQuestions?.find(q => q.difficulty === difficulty)?.questions || [];
  }, [selectedSubject, selectedConcept, difficulty]);

  const selectRandomConcept = useCallback((subject) => {
    const concepts = Object.keys(questionBank[subject === 'Ma' ? 'Math' : 'English']);
    const randomConcept = concepts[Math.floor(Math.random() * concepts.length)];
    setSelectedConcept(randomConcept);
  }, []);

  const handleSubjectSelect = useCallback((subject) => {
    setSelectedSubject(subject);
    selectRandomConcept(subject);
  }, [selectRandomConcept]);

  const handleSprintModeSelect = useCallback((isSprint) => {
    setSprintModeSelected(true);
    setTimerEnabled(isSprint);
  }, []);

  const handleLeave = useCallback(() => {
    setSelectedSubject(null);
    setSelectedConcept(null);
    setSprintModeSelected(false);
    setCurrentQuestionIndex(0);
    setPoints(0);
    setDifficulty('Easy');
    setCorrectStreak(0);
    setIncorrectStreak(0);
    setTimeRemaining(60);
  }, []);

  const handleSwitch = useCallback(() => {
    selectRandomConcept(selectedSubject);
    setCurrentQuestionIndex(0);
    setDifficulty('Easy');
    setCorrectStreak(0);
    setIncorrectStreak(0);
    setTimeRemaining(60);
  }, [selectedSubject, selectRandomConcept]);

  const handleSubjectSwitch = useCallback(() => {
    const newSubject = selectedSubject === 'Ma' ? 'En' : 'Ma';
    setSelectedSubject(newSubject);
    selectRandomConcept(newSubject);
    setCurrentQuestionIndex(0);
    setDifficulty('Easy');
    setCorrectStreak(0);
    setIncorrectStreak(0);
    setTimeRemaining(60);
  }, [selectedSubject, selectRandomConcept]);

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
    let isCorrect = false;
    
    if (currentQuestion && answerIndex === currentQuestion.correctAnswer) {
      isCorrect = true;
      switch(difficulty) {
        case 'Easy': pointsToAdd = 1; break;
        case 'Medium': pointsToAdd = 2; break;
        case 'Hard': pointsToAdd = 3; break;
        case 'Diablo': pointsToAdd = 5; break;
        default: pointsToAdd = 1;
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
        default: pointsToAdd = 0;
      }
      setPoints(prevPoints => Math.max(0, prevPoints + pointsToAdd));
      setPointChange(difficulty !== 'Diablo' ? pointsToAdd.toString() : null);
      setIncorrectStreak(prevStreak => prevStreak + 1);
      setCorrectStreak(0);
    }

    if (user && userProgress) {
      const updatedProgress = updateUserProgress(
        userProgress,
        selectedSubject === 'Ma' ? 'Math' : 'English',
        selectedConcept,
        difficulty,
        isCorrect
      );
      setUserProgress(updatedProgress);
      // In a real app, you'd send this update to the backend
    }

    updateDifficulty();

    setCurrentQuestionIndex(prevIndex => (prevIndex + 1) % questions.length);
    if (timerEnabled) {
      setTimeRemaining(60);
    }

    setTimeout(() => setPointChange(null), 2000);
  }, [questions, currentQuestionIndex, difficulty, updateDifficulty, timerEnabled, user, userProgress, selectedSubject, selectedConcept]);

  useEffect(() => {
    let timer;
    if (timerEnabled && timeRemaining > 0 && sprintModeSelected) {
      timer = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    } else if (timerEnabled && timeRemaining === 0) {
      handleAnswerSubmit(null);
    }
    return () => clearInterval(timer);
  }, [timerEnabled, timeRemaining, sprintModeSelected, handleAnswerSubmit]);

  useEffect(() => {
    setCurrentQuestionIndex(0);
  }, [difficulty, selectedConcept]);

  return (
    <div className="App bg-black min-h-screen text-white">
      {!user ? (
        <LoginComponent onLogin={login} />
      ) : !selectedSubject ? (
        <>
          <UserProgressDashboard userProgress={userProgress} />
          <LandingPage onSubjectSelect={handleSubjectSelect} />
        </>
      ) : !sprintModeSelected ? (
        <SprintModeSelection onSelectSprintMode={handleSprintModeSelect} />
      ) : (
        <ConceptPage
          subject={selectedSubject}
          concept={selectedConcept}
          onLeave={handleLeave}
          onSwitch={handleSwitch}
          onSubjectSwitch={handleSubjectSwitch}
        >
          <div className="mb-4">User: {user.username}</div>
          <div className="mb-4">Current Difficulty: {difficulty}</div>
          <div className="mb-4">
            Points: {points} 
            {pointChange && (
              <span className={`ml-2 ${pointChange.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {pointChange}
              </span>
            )}
          </div>
          {timerEnabled && <div className="mb-4">Time Remaining: {timeRemaining} seconds</div>}
          {questions[currentQuestionIndex] && (
            <>
              <QuestionDisplay
                question={questions[currentQuestionIndex].question}
                choices={questions[currentQuestionIndex].choices}
              />
              <AnswerInput
                choices={questions[currentQuestionIndex].choices}
                onAnswerSubmit={handleAnswerSubmit}
                questionId={currentQuestionIndex}
              />
            </>
          )}
        </ConceptPage>
      )}
    </div>
  );
}

export default App;