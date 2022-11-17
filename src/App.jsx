import React, { useState, useEffect } from 'react'
import './App.css'
import Blobs from './Blobs'
import QuizPage from './QuizPage'
import Startpage from './Startpage'
import quiz from './quiz.js'
// 


function App() {
  const [isStart, setStart] = React.useState(false)
  const [quizData, setQuizData] = React.useState(quiz.results)
  
  

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=7&category=9&difficulty=hard&type=multiple')
      .then(res => res.json())
      .then(data => (setQuizData(data.results)))
      console.log(quizData)
  }, [])

  function handleStart() {
    setStart(true)
  }
  
  return (
    <div className="App">
      <Blobs/>
      {isStart ? <QuizPage quizData={quizData}/> : <Startpage handleStart={handleStart} />}
    </div>
  )
}

export default App
