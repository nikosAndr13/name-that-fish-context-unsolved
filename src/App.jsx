import React from "react";
import "./App.css";
import { Section } from "./Section";
import { QuizProvider } from "./QuizProvider";

function App() {
  return (
    <QuizProvider>
      <Section />
    </QuizProvider>
  );
}

export default App;
