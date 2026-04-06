import React, { useState } from "react";
import questions from "./data";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");

  const handleNext = () => {
    setSelected(""); // reset selection

    if (current < questions.length - 1) {
      setCurrent(current + 1);
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
