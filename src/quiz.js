import React, { useState } from "react";
import questions from "./data";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);

  const handleNext = () => {
    // ✅ check answer
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    setSelected("");

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      alert("Quiz Finished! Your Score: " + score);
    }
  };

  return (
    <div>
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