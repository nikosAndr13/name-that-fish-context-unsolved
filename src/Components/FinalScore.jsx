import React from "react";
import { useQuizContext } from "../QuizProvider";
import styles from "./styles/final-score.module.css";

// ! Do Not Add Props Here
export const FinalScore = () => {
  const { correct, inCorrect } = useQuizContext();
  return (
    <div className={`${styles["final-score"]}`}>
      <h1>Your Final Score Was</h1>
      <div className={`${styles["final-score"]}`}>
        <p>{correct}</p>
        <hr />
        <p>{correct + inCorrect}</p>
      </div>
    </div>
  );
};
