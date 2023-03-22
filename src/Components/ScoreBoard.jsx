import "./styles/score-board.css";
import React from "react";
import { useQuizContext } from "../QuizProvider";
//  Where the score is presented

// ! do not add props to scoreboard
export const ScoreBoard = () => {
  const { correct, inCorrect, filtered } = useQuizContext();
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {inCorrect}</div>
      <div id="choices-left">
        {filtered.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correct}</div>
    </div>
  );
};
