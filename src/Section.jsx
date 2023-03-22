import React from "react";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import { useQuizContext } from "./QuizProvider";

export const Section = () => {
  const { inCorrect, correct } = useQuizContext();
  return (
    <div className="App">
      <header>
        <ScoreBoard />
        {inCorrect + correct < 4 ? <GameBoard /> : <FinalScore />}
      </header>
    </div>
  );
};
