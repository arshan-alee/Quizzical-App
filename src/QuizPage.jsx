import React, { useState, useEffect } from 'react'
import Questions from './Questions'
import { nanoid } from 'nanoid'

export default function QuizPage(props) {

    const [score, setScore] = useState(0);
    const [isFinished,setIsFinished]= useState(false)

    const quizCard = props.quizData.map((item) => <Questions key={nanoid()} question={item.question} correctans={item.correct_answer} incorrectans= {item.incorrect_answers} setScore={setScore} score={score} isFinished={isFinished} />)

    return (
        <div className='quizpage'>{quizCard}
            <button type="submit" className='button check' onClick={()=>setIsFinished(true)}>Check Answers</button>
            <h3>You scored {score}/5 correct answers</h3></div>
            

    )
}