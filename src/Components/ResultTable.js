import React from "react";
import questionsData from "./QuestionsData";

function ResultTable(props) {
  let answerArr = props.answers;
  /* console.log(answerArr); */

  let getResult = (currentQuestion) => {
    if (
      questionsData[currentQuestion].correct_answer ===
      answerArr[currentQuestion]
    ) {
      console.log(questionsData[currentQuestion].correct_answer);
      return "Correct";
    } else if (answerArr[currentQuestion] === "TimeOut") {
      return "TimeOut";
    } else if (answerArr[currentQuestion] === "Skipped") {
      return "Skipped";
    } else {
      return "Incorrect";
    }
  };

  return (
    <div className="table-container">
      <h1 style={{ color: "white" }}>Here are the results of the Quiz- </h1>
      <table
        border="1"
        cellSpacing="0"
        cellPadding="10"
        className="result-table"
      >
        <tbody>
          <tr style={{ color: "black" }}>
            <th>Question Number</th>
            <th>Selected Option</th>
            <th>Result</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Question 1</td>
            <td>{answerArr[0]}</td>
            <td>{getResult(0)}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Question 2</td>
            <td>{answerArr[1]}</td>
            <td>{getResult(1)}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Question 3</td>
            <td>{answerArr[2]}</td>
            <td>{getResult(2)}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Question 4</td>
            <td>{answerArr[3]}</td>
            <td>{getResult(3)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
