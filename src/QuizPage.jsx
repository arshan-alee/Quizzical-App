import React, { useState, useEffect } from 'react'
import Questions from './Questions'

export default function QuizPage(props) {

    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false)

    function handleCheckAnswers() {
        props.quizData.forEach((item) => {
            if (item.selected === item.correctans) {
                setScore((prevScore) => prevScore + 1)
            }
        })
    }

    function selectAnswer(questionid, option) {
        if (selectedQuestion === questionid) {
            setSelectedQuestion(null)
        } else {
            setSelectedQuestion(questionid)
        }
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

    function deselectAnswer(questionid, option) {
        props.setQuizData(prev => {
            const newQuizData = prev.map((item) => {
                if (questionid === item.id && item.selected === option) {
                    return ({ ...item, selected: null })
                }
                else {
                    return (item)
                }
            })
            return newQuizData;
        })
    }


    React.useEffect(() => {
        handleCheckAnswers()
    }, [isFinished])

    const quizCard = props.quizData.map((item) => <Questions key={item.key} question={item.question} correctans={item.correctans} answers={item.answers} selected={item.selected} setScore={setScore} score={score} isFinished={isFinished} setQuizData={props.setQuizData} quizData={props.quizData} selectAnswer={selectAnswer} questionid={item.id} deselectAnswer={deselectAnswer} selectedQuestion={selectedQuestion} />)

    return (
        <div className='quizpage'>{quizCard}
            <button type="submit" className='button check' onClick={() => setIsFinished(true)}>Check Answers</button>
            <h3>You scored {score}/7 correct answers</h3></div>


    )
}

