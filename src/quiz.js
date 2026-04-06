import React from "react";
import questions from "./data";

function Quiz() {
  return (
    <div>
      <h3>{questions[0].question}</h3>
    </div>
  );
}

export default Quiz;