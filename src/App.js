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
  const { user, login } = useAuth();
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
  const [conceptOrder, setConceptOrder] = useState([]);
  const [currentConceptIndex, setCurrentConceptIndex] = useState(0);
  const [questionIndices, setQuestionIndices] = useState({});

  useEffect(() => {
    if (user && !userProgress) {
      setUserProgress(createUserProgressModel(user.id));
    }
  }, [user, userProgress]);

  const questions = useMemo(() => {
    if (!selectedSubject || !selectedConcept) return [];
    const conceptQuestions = questionBank[selectedSubject === 'Ma' ? 'Math' : 'English'][selectedConcept];
    return conceptQuestions?.find(q => q.difficulty === difficulty)?.questions || [];
  }, [selectedSubject, selectedConcept, difficulty]);

  // Helper function to shuffle array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const selectInitialConcept = useCallback(() => {
    if (conceptOrder.length > 0) {
      setSelectedConcept(conceptOrder[0]);
      setCurrentConceptIndex(0);
    }
  }, [conceptOrder]);

  const selectNextConcept = useCallback(() => {
    setCurrentConceptIndex((prevIndex) => (prevIndex + 1) % conceptOrder.length);
    setSelectedConcept(conceptOrder[(currentConceptIndex + 1) % conceptOrder.length]);
  }, [conceptOrder, currentConceptIndex]);

  const handleSubjectSelect = useCallback((subject) => {
    setSelectedSubject(subject);
    const concepts = Object.keys(questionBank[subject === 'Ma' ? 'Math' : 'English']);
    const shuffledConcepts = shuffleArray(concepts);
    setConceptOrder(shuffledConcepts);
    
    const newQuestionIndices = {};
    concepts.forEach(concept => {
      newQuestionIndices[concept] = {
        Easy: 0,
        Medium: 0,
        Hard: 0,
        Diablo: 0
      };
    });
    setQuestionIndices(newQuestionIndices);
  }, []);

  const handleSprintModeSelect = useCallback((isSprint) => {
    setSprintModeSelected(true);
    setTimerEnabled(isSprint);
    selectInitialConcept();
  }, [selectInitialConcept]);

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
    setConceptOrder([]);
    setCurrentConceptIndex(0);
    setQuestionIndices({});
  }, []);

  const handleSwitch = useCallback(() => {
    selectNextConcept();
    setCurrentQuestionIndex(0);
    setDifficulty('Easy');
    setCorrectStreak(0);
    setIncorrectStreak(0);
    setTimeRemaining(60);
  }, [selectNextConcept]);

  const handleSubjectSwitch = useCallback(() => {
    const newSubject = selectedSubject === 'Ma' ? 'En' : 'Ma';
    setSelectedSubject(newSubject);
    handleSubjectSelect(newSubject);
    setCurrentQuestionIndex(0);
    setDifficulty('Easy');
    setCorrectStreak(0);
    setIncorrectStreak(0);
    setTimeRemaining(60);
  }, [selectedSubject, handleSubjectSelect]);

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
    }

    updateDifficulty();

    setQuestionIndices(prevIndices => ({
      ...prevIndices,
      [selectedConcept]: {
        ...prevIndices[selectedConcept],
        [difficulty]: prevIndices[selectedConcept][difficulty] + 1
      }
    }));

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
    if (selectedConcept) {
      setCurrentQuestionIndex(questionIndices[selectedConcept][difficulty]);
    }
  }, [difficulty, selectedConcept, questionIndices]);

  useEffect(() => {
    if (conceptOrder.length > 0 && !selectedConcept) {
      selectInitialConcept();
    }
  }, [conceptOrder, selectedConcept, selectInitialConcept]);

  return (
    <div className="App bg-black min-h-screen text-white flex flex-col">
      <div className="flex-grow">
        {!user ? (
          <LoginComponent onLogin={login} />
        ) : !selectedSubject ? (
          <LandingPage onSubjectSelect={handleSubjectSelect} />
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
      {user && userProgress && (
        <div className="w-full bg-black text-white">
          <UserProgressDashboard 
            userProgress={userProgress}
            currentSubject={selectedSubject === 'Ma' ? 'Math' : 'English'}
            currentConcept={selectedConcept}
          />
        </div>
      )}
    </div>
  );
}

export default App;