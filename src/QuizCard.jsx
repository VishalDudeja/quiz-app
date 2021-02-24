import React, { useState, useEffect } from "react";
import AnswerOptions from "./AnswerOptions";
import "./App.css";

function QuizCard(props) {
  /*   let startTimer = setInterval(() => {
    if (timer === 0) {
      stopTimer();
    } else {
      let newTime = timer - 1;
      setTimer(newTime);
    }
  }, 1000);

  let stopTimer = () => {
    clearInterval(startTimer);
  }; */
  /*  const [counter, setCounter] = useState(20);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  
  <span className="timer ">Time Remaining:{counter}</span>*/

  return (
    <>
      <div className="main-container">
        <h2>Welcome to the Quiz.</h2>
        <span>Here is your Question and Answer options.</span>
        <div className="question-options-card">
          <div className="question">
            <p>Question:{props.currentQuestion + 1} out of 4</p>
            <h2>{props.question}</h2>
          </div>
          <div className="options">
            <form
              className="option-form"
              id="optionform"
              key={props.currentQuestion}
            >
              <fieldset>
                <legend>Selet Your Answer Here </legend>
                <AnswerOptions allOptions={props.options} />
              </fieldset>
            </form>
          </div>
        </div>
        <button type="submit" onClick={props.nextQuestion} id="optionform">
          Submit Answer
        </button>
        <button type="submit" onClick={props.skipQue}>
          Skip Question
        </button>
      </div>
    </>
  );
}

export default QuizCard;
