import React, { useState, useEffect } from 'react'
import './App.css'
import Blobs from './Blobs'
import QuizPage from './QuizPage'
import Startpage from './Startpage'
import quiz from './quiz.js'
import { nanoid } from 'nanoid'


function App() {
  const [isStart, setStart] = React.useState(false)
  const [quizData, setQuizData] = React.useState(quiz.results)



  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=7&category=9&difficulty=hard&type=multiple')
      .then(res => res.json())
      .then(data => (setQuizData(data.results)))
      .then(() => {
        setQuizData(prevdata => {
          const reconstructData = new Array(prevdata.length)
          for (let i = 0; i < prevdata.length; i++) {
            let correctAnswer = prevdata[i].correct_answer
            let incorrectAnswers = []
            for (let j = 0; j < prevdata[i].incorrect_answers.length; j++) {
              incorrectAnswers.push(prevdata[i].incorrect_answers[j])
            }
            let answersArr = [correctAnswer, ...incorrectAnswers]
            reconstructData[i] = {
              key: nanoid(),
              id: nanoid(),
              question: prevdata[i].question,
              correctans: prevdata[i].correct_answer,
              selected: undefined,
              answers: answersArr.sort((a, b) => Math.random() - 0.5)
            }
          }
          setQuizData(reconstructData)
          console.log(quizData)
        })
      })
  }, [isStart])

  function handleStart() {
    setStart(true)
  }

  return (
    <div className="App">
      <Blobs />
      {isStart ? <QuizPage quizData={quizData} setQuizData={setQuizData}  setStart={setStart}/> : <Startpage handleStart={handleStart} />}
    </div>
  )
}

export default App

