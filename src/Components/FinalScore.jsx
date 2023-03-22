import React from "react";
import { useQuizContext } from "../QuizProvider";
// ! Do Not Add Props Here
export const FinalScore = () => {
  const { correct, inCorrect } = useQuizContext();
  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correct}</p>
        <hr />
        <p>{correct + inCorrect}</p>
      </div>
    </div>
  );
};
