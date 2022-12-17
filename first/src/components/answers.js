import React from "react";
import "./answers.css";
import data from "../data.json";
export default function Answer({
  answers,
  setId,
  correct,
  id,
  score,
  setScore,
  setWin,
  setGameOver,
  setOverScore
}) {
  const checkAnswer = (isTrue) => {
    if (isTrue) {
        setId((id += 1))
        setScore((score += 500))
    }
    else {
      setGameOver(true)
      setScore(0)
      setOverScore(score)
    }
  };

  return (
    <div className="answers">
      {answers.map((x) => {
        return (
          <div
            className="answer"
            onClick={(e) => {
              answers.indexOf(e.target.textContent) === correct
                ? checkAnswer(true)
                : checkAnswer(false);
            }}
            >
            {x}
          </div>
        );
      })}
    </div>
  );
}