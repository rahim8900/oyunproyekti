import React, { useEffect, useState } from "react";
import Answer from "../components/answers.js";
import Question from "../components/question.js";
import Score from "../components/score.js";
import Time from '../components/time.js';
import End from '../components/end.js'
import data from "../data.json";
import "./general.css";
export default function General() {
  const [questions, setQuestions] = useState(data.questions[0].question);
  const [answers, setAnswers] = useState(data.questions[0].content);
  const [correctVariant, setCorrectVariant] = useState(data.questions[0].correct);
  const [id, setId] = useState(0);
  const [score, setScore] = useState(0);
  const [overScore, setOverScore] = useState(0);
  let [time, setTime] = useState(1);
  const [endTime, setendTime] = useState(0)
  const [win, setWin] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const checkId = () => {
    if (id == data.questions.length) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (!checkId()) {
      setendTime(time);
      setQuestions(data.questions[id].question);
      setAnswers(data.questions[id].content);
      setCorrectVariant(data.questions[id].correct);
    } else {
      setWin(true);
    }
  }, [id]);

  return (
    <div className="screen">
      <div className="general">
        <div className="header">
          <Score score={score} />
          <Time time={time} setTime={setTime} />
        </div>
        <div className="body">
          <Question question={questions} />
          <Answer
            answers={answers}
            setId={setId}
            id={id}
            correct={correctVariant}
            score={score}
            setScore={setScore}
            setGameOver={setGameOver}
            setOverScore={setOverScore}
          />
        </div>
        {win && !gameOver && <End content="Təbriklər! Bütün suallara düzgün cavab verdiniz!" score={score} time={endTime+1.5} colorbg={"green"} />}
        {!win && gameOver && <End content="Səhv cavab. Oyun bitdi!" score={overScore} time=' - ' colorbg={"red"} />}
      </div>
    </div>
  );
}