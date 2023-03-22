import React, { createContext, useContext, useState } from "react";
import { Images } from "./assets/images";

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

export const answersLeft = ["trout", "salmon", "tuna", "shark"];
export const QuizContext = createContext({});

export const QuizProvider = ({ children }) => {
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

  return (
    <QuizContext.Provider
      value={{
        index,
        inCorrect,
        correct,
        filtered,
        updateCount,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};
