import React, { useState, useEffect } from 'react';
import QuestionDisplay from './QuestionDisplay';
import AnswerInput from './AnswerInput';

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedConcept, setSelectedConcept] = useState('all');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [currentDifficulty, setCurrentDifficulty] = useState('easy');
  const [showHint, setShowHint] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);

  const questions = [
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
      question: "In a certain 300 mi^2 nature preserve in Pennsylvania, there are an average of 271 trees per 0.5 square miles. Due to the state selling off land for construction, this area is contracting by approximately 7 square miles per year. Approximately how many trees are estimated to be lost per 10,000 ft^2 of contraction? (1 mile = 5280 feet)",
      answers: ["0.194", "3.11", "4.82", "3794", "20032320"],
      correctAnswerIndex: 0,
      subject: "Math",
      concept: "Square and Cubic Units",
      difficulty: "hard",
      hint: "Calculate trees per square mile, then convert to trees per square foot, and finally to trees per 10,000 square feet."
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
  ];

  const subjects = ["all", "Math", "English"];
  const concepts = [...new Set(questions.map(q => q.concept))];

  const filteredQuestions = questions.filter(q => 
    (selectedSubject === 'all' || q.subject === selectedSubject) &&
    (selectedConcept === 'all' || q.concept === selectedConcept)
  );

  useEffect(() => {
    let timer;
    if (timerEnabled && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timerEnabled && timeRemaining === 0) {
      handleAnswerSubmit(null);
    }
    return () => clearInterval(timer);
  }, [timerEnabled, timeRemaining]);

  const handleAnswerSubmit = (answerIndex) => {
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswerIndex;
    
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      setConsecutiveCorrect(prev => prev + 1);
      // Increase difficulty if the user gets 3 correct in a row
      if (consecutiveCorrect === 2) {
        setCurrentDifficulty(prev => {
          if (prev === 'easy') return 'medium';
          if (prev === 'medium') return 'hard';
          return prev;
        });
        setConsecutiveCorrect(0);
      }
    } else {
      setShowHint(true);
      setConsecutiveCorrect(0);
      // Decrease difficulty if the user gets a wrong answer
      setCurrentDifficulty(prev => {
        if (prev === 'hard') return 'medium';
        if (prev === 'medium') return 'easy';
        return prev;
      });
    }

    setAnsweredQuestions(prev => [...prev, {
      ...currentQuestion,
      userAnswerIndex: answerIndex,
      isCorrect
    }]);

    if (currentQuestionIndex + 1 < filteredQuestions.length) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setTimeRemaining(60);
      setShowHint(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const toggleTimer = () => {
    setTimerEnabled(!timerEnabled);
    setTimeRemaining(60);
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    setSelectedConcept('all');
    resetQuiz();
  };

  const handleConceptChange = (event) => {
    setSelectedConcept(event.target.value);
    resetQuiz();
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setAnsweredQuestions([]);
    setCurrentDifficulty('easy');
    setShowHint(false);
    setReviewMode(false);
    setConsecutiveCorrect(0);
  };

  const startReview = () => {
    setReviewMode(true);
    setCurrentQuestionIndex(0);
  };

  const nextReviewQuestion = () => {
    if (currentQuestionIndex + 1 < answeredQuestions.length) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setReviewMode(false);
      setCurrentQuestionIndex(0);
    }
  };

  const currentQuestion = reviewMode 
    ? answeredQuestions[currentQuestionIndex]
    : filteredQuestions[currentQuestionIndex];

  const ResultsPage = () => (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-xl mb-4">Final Score: {score} / {filteredQuestions.length}</p>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Performance by Subject:</h3>
        {subjects.filter(s => s !== 'all').map(subject => {
          const subjectQuestions = answeredQuestions.filter(q => q.subject === subject);
          const subjectScore = subjectQuestions.filter(q => q.isCorrect).length;
          return (
            <p key={subject}>{subject}: {subjectScore} / {subjectQuestions.length}</p>
          );
        })}
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Performance by Concept:</h3>
        {concepts.map(concept => {
          const conceptQuestions = answeredQuestions.filter(q => q.concept === concept);
          const conceptScore = conceptQuestions.filter(q => q.isCorrect).length;
          return (
            <p key={concept}>{concept}: {conceptScore} / {conceptQuestions.length}</p>
          );
        })}
      </div>
      <button 
        onClick={startReview}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Review Answers
      </button>
      <button 
        onClick={resetQuiz}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Start New Quiz
      </button>
    </div>
  );

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-4">The Beast</h1>
      {!quizCompleted && !reviewMode ? (
        <div className="text-center mb-4">
          <select 
            value={selectedSubject} 
            onChange={handleSubjectChange}
            className="mb-4 p-2 border rounded mr-2"
          >
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject === 'all' ? 'All Subjects' : subject}</option>
            ))}
          </select>
          <select 
            value={selectedConcept} 
            onChange={handleConceptChange}
            className="mb-4 p-2 border rounded"
          >
            <option value="all">All Concepts</option>
            {concepts.map(concept => (
              <option key={concept} value={concept}>{concept}</option>
            ))}
          </select>
          <p>Score: {score}</p>
          <p>Question: {currentQuestionIndex + 1} / {filteredQuestions.length}</p>
          <p>Question Difficulty: {currentQuestion.difficulty}</p>
          <p>Current Challenge Level: {currentDifficulty}</p>
          <button 
            onClick={toggleTimer}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {timerEnabled ? 'Disable Timer' : 'Enable Timer'}
          </button>
          {timerEnabled && <p>Time Remaining: {timeRemaining} seconds</p>}
        </div>
      ) : null}
      {currentQuestion && !quizCompleted ? (
        <>
          <QuestionDisplay 
            question={currentQuestion.question} 
            answers={currentQuestion.answers} 
          />
          {reviewMode ? (
            <div className="text-center mb-4">
              <p>Your answer: {currentQuestion.answers[currentQuestion.userAnswerIndex]}</p>
              <p>Correct answer: {currentQuestion.answers[currentQuestion.correctAnswerIndex]}</p>
              <button 
                onClick={nextReviewQuestion}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Next Question
              </button>
            </div>
          ) : (
            <>
              <AnswerInput 
                answers={currentQuestion.answers} 
                onAnswerSubmit={handleAnswerSubmit} 
              />
              {showHint && (
                <div className="text-center mt-4">
                  <p className="font-bold">Hint:</p>
                  <p>{currentQuestion.hint}</p>
                </div>
              )}
            </>
          )}
        </>
      ) : null}
      {quizCompleted && !reviewMode ? <ResultsPage /> : null}
    </div>
  );
}

export default App;