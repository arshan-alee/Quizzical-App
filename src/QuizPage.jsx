import React, { useState, useEffect } from 'react'
import Questions from './Questions'

export default function QuizPage(props) {

    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false)

    function handleCheckAnswers() {
        props.quizData.forEach((item) => {
            if (item.selected === item.correctans) {
                setScore((prevScore) => prevScore + 1)
            }
        })
    }

    function playAgain(){
        if (isFinished) {
            props.setStart(false);
        }    }

    function selectAnswer(questionid, option) {

        props.setQuizData(prev => {
            const newQuizData = prev.map((item) => {
                if (questionid === item.id) {
                    return ({ ...item, selected: option })
                }
                else {
                    return (item)
                }
            })
            return newQuizData;
        })
        console.log('option' + option)
    }

    React.useEffect(() => {
        handleCheckAnswers()
    }, [isFinished])

    const quizCard = props.quizData.map((item) => <Questions key={item.key} question={item.question} correctans={item.correctans} answers={item.answers} selected={item.selected} setScore={setScore} score={score} isFinished={isFinished} setQuizData={props.setQuizData} quizData={props.quizData} selectAnswer={selectAnswer} questionid={item.id} />)

    return (
        <div className='quizpage'>{quizCard}
        <div className='check'>    
            {!isFinished?<button type="submit" className='button checkbtn' onClick={() => setIsFinished(true)}>Check Answers</button>:<>
            <h3 className='score'>You scored {score}/{props.selectedAmount} correct answers</h3>
            <button type="submit" className='button checkbtn' onClick={playAgain}>Play Again</button>
        </>}
            </div></div>


    )
}

