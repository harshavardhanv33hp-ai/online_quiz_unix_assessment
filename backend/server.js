const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// 🧠 Temporary In-memory database
let leaderboard = [
    { name: "Alice", score: 80 },
    { name: "Bob", score: 70 }
];

// ✅ GET leaderboard
app.get("/leaderboard", (req, res) => {
    res.json(leaderboard);
});

// ✅ POST new score
app.post("/leaderboard", (req, res) => {
    const { name, score } = req.body;
    
    if (!name || score === undefined) {
        return res.status(400).json({ message: "Name and score required" });
    }

    // Add new entry
    leaderboard.push({ name, score });

    // Sort (highest first) and keep top 5
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5);

    res.json({
        message: "Score submitted!",
        leaderboard: leaderboard
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));