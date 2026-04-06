import React, { useState } from 'react';
import { questions } from './data'; // ✅ Must use curly braces

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [username, setUsername] = useState('');

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const submitScore = async () => {
    if (!username.trim()) return alert("Please enter your name!");
    try {
      await fetch('http://localhost:5000/leaderboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: username, score: score }),
      });
      alert("Score submitted!");
      window.location.reload();
    } catch (err) {
      console.error("Error saving score:", err);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Finished! {score} / {questions.length}</h2>
          <input 
            type="text" 
            placeholder="Enter name" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <button onClick={submitScore}>Save Score</button>
        </div>
      ) : (
        <div className="question-card">
          <h3>Question {currentQuestion + 1}</h3>
          <p>{questions[currentQuestion].questionText}</p>
          <div className="options">
            {questions[currentQuestion].answerOptions.map((opt, i) => (
              <button key={i} onClick={() => handleAnswerClick(opt.isCorrect)}>
                {opt.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;