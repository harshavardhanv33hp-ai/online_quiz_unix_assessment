import React, { useEffect, useState } from 'react';

function Leaderboard() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        // Fetch the list we just made in the backend
        fetch("http://localhost:5000/leaderboard")
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);

    return (
        <div className="leaderboard-ui">
            <h2>🏆 High Scores</h2>
            {players.map((p, i) => (
                <div key={i} className="score-row">
                    <span>{i + 1}. {p.name}</span>
                    <span>{p.score} pts</span>
                </div>
            ))}
        </div>
    );
}

export default Leaderboard;