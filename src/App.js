import React, { createContext, useState, useEffect } from "react";
import "./App.js";
import QuizCard from "./Components/QuizCard.jsx";
import questionsData from "./Components/QuestionsData.js";
import ResultTable from "./Components/ResultTable.js";

let arr = [];
const ProvidingAnswer = createContext();

function App() {
  const [currentIndex, nextIndex] = useState(0);

  const [answer, selectedAnswer] = useState(null);

  const [timer, setTimer] = useState(20);
  /*   useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000); 
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else if (counter === 0) {
      skipQuestion(); 
    } 
  }); */

  useEffect(() => {
    const startTimer =
      timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(startTimer);
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      if (arr.length < questionsData.length) {
        timeOut();
      }
    }
  });

  let getAnswerMain = (event) => {
    let newAnswer = event.target.value;
    selectedAnswer(newAnswer);
    console.log(newAnswer);
  };

  /* console.log(arr); */
  /* console.log(currentIndex); */
  const [index, settingIndex] = useState(0);

  let nextQue = () => {
    if (answer !== null) {
      arr.push(answer);
      selectedAnswer(null);

      if (currentIndex < questionsData.length - 1) {
        let newIndex = currentIndex + 1;
        setTimer(20);
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
        setTimer(20);
        nextIndex(() => {
          return newIndex;
        });
      } else {
        settingIndex(4);
        /* alert("There is NO next question available."); */
      }
    } else if (answer !== null) {
      console.log("Que Skipped with Selected Value");
      arr.push("Skipped");
      if (currentIndex < questionsData.length - 1) {
        let newIndex = currentIndex + 1;
        setTimer(20);
        nextIndex(() => {
          return newIndex;
        });
      } else {
        settingIndex(4);
        /* alert("There is NO next question available."); */
      }
    }
  };

  let timeOut = () => {
    console.log("Timeout");
    arr.push("TimeOut");
    if (currentIndex < questionsData.length - 1) {
      let newIndex = currentIndex + 1;
      setTimer(20);
      nextIndex(() => {
        return newIndex;
      });
    } else {
      settingIndex(4);
      /* alert("There is NO next question available."); */
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
            timer={timer}
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
