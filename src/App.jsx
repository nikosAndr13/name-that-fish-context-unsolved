import React from "react";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import { QuizContext } from "./QuizContext";
import "./Components/styles/final-score.css";
import { useState } from "react";
import {
  correctCount,
  incorrectCount,
  answersLeft,
} from "./Components/ScoreBoard";
import { initialFishes } from "./Components/GameBoard";

function App() {
  const [index, setIndex] = useState(0);
  const [inCorrect, setInCorrect] = useState(incorrectCount);
  const [correct, setCorrect] = useState(correctCount);
  const filtered = answersLeft.slice(index);

  const checkAnswer = () => setIndex(index + 1);

  const updateCount = (answer) => {
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
    checkAnswer,
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
