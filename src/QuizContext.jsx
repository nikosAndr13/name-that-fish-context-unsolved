import { createContext } from "react";

export const QuizContext = createContext({
  index: 0,
  inCorrect: 0,
  correct: 0,
  filtered: [],
  updateCount: () => {},
});
