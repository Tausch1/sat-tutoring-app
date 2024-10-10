export const createUserProgressModel = (userId) => ({
    userId,
    subjects: {
      Math: {},
      English: {}
    },
    totalPoints: 0,
    lastActive: new Date()
  });
  
  export const updateUserProgress = (userProgress, subject, concept, difficulty, isCorrect) => {
    const subjectProgress = userProgress.subjects[subject];
    if (!subjectProgress[concept]) {
      subjectProgress[concept] = {
        Easy: { correct: 0, total: 0 },
        Medium: { correct: 0, total: 0 },
        Hard: { correct: 0, total: 0 },
        Diablo: { correct: 0, total: 0 }
      };
    }
    
    const conceptProgress = subjectProgress[concept][difficulty];
    conceptProgress.total += 1;
    if (isCorrect) {
      conceptProgress.correct += 1;
    }
  
    userProgress.totalPoints += isCorrect ? getDifficultyPoints(difficulty) : 0;
    userProgress.lastActive = new Date();
  
    return { ...userProgress };
  };
  
  const getDifficultyPoints = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 1;
      case 'Medium': return 2;
      case 'Hard': return 3;
      case 'Diablo': return 5;
      default: return 0;
    }
  };