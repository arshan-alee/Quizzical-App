import React from 'react'
import './App.css'
import Blobs from './Blobs'
import QuizPage from './QuizPage'
import Startpage from './Startpage'
import quiz from './quiz.js'
import { nanoid } from 'nanoid'


function App() {
  const [isStart, setStart] = React.useState(false)
  const [quizData, setQuizData] = React.useState(quiz.results)
  const [category, setCategory] = React.useState('');
  const [difficulty, setDifficulty] = React.useState('');
  const [amount, setAmount] = React.useState(10);
  const [type, setType] = React.useState('');

  const url = `https://opentdb.com/api.php?amount=${amount}${category}${difficulty}${type}`

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
    setCategory(event.target.value)
  }

  function handleDifficulty(event) {
    setDifficulty(event.target.value)
  }

  function handleAmountOfQuestions(event) {
    setAmount(event.target.value)
  }
  function handleType(event) {
    setType(event.target.value)
  }

  return (
    <div className="App">
      <Blobs />
      {isStart ? <QuizPage quizData={quizData} setQuizData={setQuizData}  setStart={setStart} amount={amount} /> : <Startpage handleStart={handleStart} category={category} difficulty={difficulty} amount={amount} type={type} handleCategory={handleCategory} handleDifficulty={handleDifficulty} handleAmountOfQuestions={handleAmountOfQuestions} handleType={handleType}
      />}
    </div>
  )
}

export default App

