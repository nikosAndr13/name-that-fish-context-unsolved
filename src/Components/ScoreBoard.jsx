import "./styles/score-board.css";
import React from "react";
import { useContext } from "react";
import { QuizContext } from "../QuizContext";
//  Where the score is presented
export const incorrectCount = 0;
export const correctCount = 0;
export const answersLeft = ["trout", "salmon", "shark", "tuna"];

// ! do not add props to scoreboard
export const ScoreBoard = () => {
  const { correct, inCorrect, filtered } = useContext(QuizContext);
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
