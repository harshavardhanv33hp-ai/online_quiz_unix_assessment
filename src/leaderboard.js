import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/leaderboard')
      .then(res => res.json())
      .then(data => setScores(data))
      .catch(() => console.log("Backend offline?"));
  }, []);

  return (
    <div className="leaderboard">
      <h2>🏆 Leaderboard</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Score</th></tr>
        </thead>
        <tbody>
          {scores.map((s, i) => (
            <tr key={i}><td>{s.name}</td><td>{s.score}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;