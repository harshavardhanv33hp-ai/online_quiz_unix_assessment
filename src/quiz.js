import React, { useState, useEffect } from "react";
import questions from "./data";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10); // ⏱️ 10 sec per question

  // ⏳ Timer logic
  useEffect(() => {
    if (time === 0) {
      handleNext();
      return;
    }

    const timer = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const handleNext = () => {
    let newScore = score;

    if (selected === questions[current].answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    setSelected("");
    setTime(10); // reset timer

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      alert("Quiz Finished! Your Score: " + newScore);
    }
  };

  return (
    <div>
      <h2>Time Left: {time}s</h2>

      <h3>{questions[current].question}</h3>

      {questions[current].options.map((opt, index) => (
        <div key={index}>
          <input
            type="radio"
            name="option"
            value={opt}
            checked={selected === opt}
            onChange={() => setSelected(opt)}
          />
          {opt}
        </div>
      ))}

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Quiz;