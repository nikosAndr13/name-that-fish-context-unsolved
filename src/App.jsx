import React from "react";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import { QuizContext } from "./QuizContext";
import "./Components/styles/final-score.css";
import { useState } from "react";
import { initialFishes } from "./Components/GameBoard";
const answersLeft = ["trout", "salmon", "tuna", "shark"];

function App() {
  const [index, setIndex] = useState(0);
  const [inCorrect, setInCorrect] = useState(0);
  const [correct, setCorrect] = useState(0);
  const filtered = answersLeft.slice(index);

  const updateCount = (answer) => {
    setIndex(index + 1);
    if (answer === initialFishes[index].name) {
      setCorrect(correct + 1);
    } else {
      setInCorrect(inCorrect + 1);
    }
  };

  const contextValue = {
    index,
    inCorrect,
    correct,
    filtered,
    updateCount,
  };

  return (
    <div className="App">
      <header>
        <QuizContext.Provider value={contextValue}>
          <ScoreBoard />
          {inCorrect + correct < 4 ? <GameBoard /> : <FinalScore />}
        </QuizContext.Provider>
      </header>
    </div>
  );
}

export default App;
