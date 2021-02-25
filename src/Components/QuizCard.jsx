import React from "react";
import AnswerOptions from "./AnswerOptions";
import "../App.js";

function QuizCard(props) {
  return (
    <>
      <div className="main-container">
        <h2>Welcome to the Quiz.</h2>
        <p>Here is your Question and Answer options.</p>
        <p
          style={{
            textAlign: "right",
            marginRight: "20px",
            fontSize: "20px",
          }}
        >
          Time Remaining:
          <span
            style={{ color: "red", fontWeight: "bolder", fontSize: "20px" }}
          >
            {props.timer} seconds
          </span>
        </p>
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
