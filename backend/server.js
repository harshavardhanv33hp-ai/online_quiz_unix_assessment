const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection Logic
// 'mongodb://mongo:27017/quizdb' is used for Docker
// 'mongodb://localhost:27017/quizdb' is used for local testing
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/quizdb';

mongoose.connect(dbURI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ Could not connect to MongoDB", err));

// Define Mongoose Schema & Model
const scoreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Score = mongoose.model('Score', scoreSchema);

// Routes
// ✅ GET top 10 scores
app.get("/leaderboard", async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 }).limit(10);
    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: "Error fetching scores" });
  }
});

// ✅ POST new score and return updated leaderboard
app.post("/leaderboard", async (req, res) => {
  try {
    const { name, score } = req.body;
    const newScore = new Score({ name, score });
    await newScore.save();
    
    // Fetch updated top 10 to send back to frontend
    const topScores = await Score.find().sort({ score: -1 }).limit(10);
    res.status(201).json(topScores);
  } catch (err) {
    res.status(400).json({ message: "Error saving score" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});