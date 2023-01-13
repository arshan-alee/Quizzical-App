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
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [selectedDifficulty, setSelectedDifficulty] = React.useState('');
  const [selectedAmount, setSelectedAmount] = React.useState(10);
  const [selectedType, setSelectedType] = React.useState('');

  const url = `https://opentdb.com/api.php?amount=${selectedAmount}${selectedCategory}${selectedDifficulty}${selectedType}`

  React.useEffect(() => {
    fetch(url)
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
  
  function handleCategory(event) {
    setSelectedCategory(event.target.value)
  }

  function handleDifficulty(event) {
    setSelectedDifficulty(event.target.value)
  }

  function handleAmountOfQuestions(event) {
    setSelectedAmount(event.target.value)
  }
  function handleType(event) {
    setSelectedType(event.target.value)
  }

  return (
    <div className="App">
      <Blobs />
      {isStart ? <QuizPage quizData={quizData} setQuizData={setQuizData}  setStart={setStart} selectedAmount={selectedAmount} /> : <Startpage handleStart={handleStart} selectedCategory={selectedCategory} selectedDifficulty={selectedDifficulty} selectedAmount={selectedAmount} handleCategory={handleCategory} handleDifficulty={handleDifficulty} handleAmountOfQuestions={handleAmountOfQuestions}
      />}
    </div>
  )
}

export default App

