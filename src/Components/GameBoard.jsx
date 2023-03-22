import "./styles/game-board.css";
import React from "react";
import { useState } from "react";
import { useQuizContext } from "../QuizProvider";
import { initialFishes } from "../QuizProvider";

export const GameBoard = () => {
  const { index, updateCount } = useQuizContext();
  const [answer, setAnswer] = useState("");
  const nextFishToName = initialFishes[index];

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          updateCount(answer);
          setAnswer("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};
