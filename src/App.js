import React, { useState } from 'react';
import Quiz from './Quiz.js'; 
import Leaderboard from './leaderboard'; 
import './App.css';

function App() {
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>UNIX Assess</h1>
        <button onClick={() => setShowLeaderboard(!showLeaderboard)}>
          {showLeaderboard ? "Back to Quiz" : "View Leaderboard"}
        </button>
      </header>
      <main>
        {showLeaderboard ? <Leaderboard /> : <Quiz />}
      </main>
    </div>
  );
}

export default App;