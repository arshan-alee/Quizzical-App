import React, { useState, useEffect } from 'react'
import Questions from './Questions'
import { nanoid } from 'nanoid'

export default function QuizPage(props) {

    const [score, setScore] = useState(0);
    const [isFinished,setIsFinished]= useState(false)

    const quizCard = props.quizData.map((item) => <Questions key={item.key} question={item.question} correctans={item.correctans} answers= {item.answers} selected={item.selected} setScore={setScore} score={score} isFinished={isFinished} setQuizData={props.setQuizData}/>)

    return (
        <div className='quizpage'>{quizCard}
            <button type="submit" className='button check' onClick={()=>setIsFinished(true)}>Check Answers</button>
            <h3>You scored {score}/7 correct answers</h3></div>
            

    )
}