import "./styles/game-board.css";
import React, { useContext } from "react";
import { Images } from "../assets/images";
import { useState } from "react";
import { QuizContext } from "../QuizContext";

export const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

// ! Do not add props to gameboard
export const GameBoard = () => {
  const [answer, setAnswer] = useState("");
  const { index, updateCount } = useContext(QuizContext);
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
