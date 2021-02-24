import React, { useContext } from "react";
import "./App.css";
import { ProvidingAnswer } from "./App";

function AnswerOptions(props) {
  let renderOPtions = props.allOptions;
  const collectingAnswers = useContext(ProvidingAnswer);

  let allAnswers = (event) => {
    collectingAnswers(event);
  };

  return (
    <>
      {renderOPtions.map((cVal, index) => {
        return (
          <>
            <li key={index} style={{ listStyleType: "none" }}>
              <input
                type="radio"
                id={`option${index}`}
                name="options"
                value={cVal}
                required="required"
                onClick={allAnswers}
              />
              <label key={index} htmlFor={`option${index}`}>
                {cVal}
              </label>
            </li>

            <br />
          </>
        );
      })}
    </>
  );
}

/*  <form className="option-form">
        <fieldset>
          <legend>Selet Your Answer Here </legend>
          <input
            type="radio"
            id="first"
            name="options"
            value={props.allOptions[0]}
            required="required"
          />
          <label htmlFor="first">{props.allOptions[0]}</label>
          <br />
          <br />
          <input
            type="radio"
            id="second"
            name="options"
            value={props.allOptions[1]}
            required="required"
          />
          <label htmlFor="second">{props.allOptions[1]}</label>
          <br />
          <br />
          <input
            type="radio"
            id="third"
            name="options"
            value={props.allOptions[2]}
            required="required"
          />
          <label htmlFor="third">{props.allOptions[2]}</label>
          <br />
          <br />
          <input
            type="radio"
            id="four"
            name="options"
            value={props.allOptions[3]}
            required="required"
          />
          <label htmlFor="four">{props.allOptions[3]}</label>
          <br />
          <br />
          <button type="submit" onClick={props.nextQuestion}>
            Submit Answer
          </button>
        </fieldset>
      </form> */

export default AnswerOptions;
