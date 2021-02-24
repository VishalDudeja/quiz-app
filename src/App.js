import React, { createContext, useState } from "react";
import "./App.css";
import QuizCard from "./QuizCard";
import questionsData from "./QuestionsData";
import ResultTable from "./ResultTable";

let arr = [];
const ProvidingAnswer = createContext();

function App() {
  const [currentIndex, nextIndex] = useState(0);

  const [answer, selectedAnswer] = useState(null);

  let getAnswerMain = (event) => {
    let newAnswer = event.target.value;
    selectedAnswer(newAnswer);
    console.log(newAnswer);
  };

  console.log(arr);
  /* console.log(currentIndex); */
  const [index, settingIndex] = useState(0);

  let nextQue = () => {
    if (answer !== null) {
      arr.push(answer);
      selectedAnswer(null);

      if (currentIndex < questionsData.length - 1) {
        let newIndex = currentIndex + 1;

        nextIndex(() => {
          return newIndex;
        });
      } else {
        settingIndex(4);
        /* alert("There is NO next question available."); */
      }
    } else {
      alert("Please select one answer to continue!");
    }
  };

  let skipQuestion = () => {
    if (answer === null) {
      console.log("Que Skipped");
      arr.push("Skipped");
      if (currentIndex < questionsData.length - 1) {
        let newIndex = currentIndex + 1;
        nextIndex(() => {
          return newIndex;
        });
      } else {
        settingIndex(4);
        /* alert("There is NO next question available."); */
      }
    }
  };

  /*  setTimeout(skipQuestion, 10000); */

  return (
    <>
      {index < 4 ? (
        <ProvidingAnswer.Provider value={getAnswerMain}>
          <QuizCard
            question={questionsData[currentIndex].question}
            options={questionsData[currentIndex].options}
            correctAnswer={questionsData[currentIndex].correct_answer}
            nextQuestion={nextQue}
            currentQuestion={currentIndex}
            skipQue={skipQuestion}
          />
        </ProvidingAnswer.Provider>
      ) : null}
      {index === 4 ? (
        <ResultTable answers={arr} currentQuestion={currentIndex} />
      ) : null}
    </>
  );
}

export default App;
export { ProvidingAnswer };
