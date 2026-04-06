import React from "react";
import questions from "./data";

function Quiz() {
  return (
    <div>
      <h3>{questions[0].question}</h3>

      {questions[0].options.map((opt, index) => (
        <div key={index}>
          {opt}
        </div>
      ))}
    </div>
  );
}

export default Quiz;