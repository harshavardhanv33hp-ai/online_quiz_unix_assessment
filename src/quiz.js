import React, { useState } from "react";
import questions from "./data";

function Quiz() {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <h3>{questions[0].question}</h3>

      {questions[0].options.map((opt, index) => (
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
    </div>
  );
}

export default Quiz;