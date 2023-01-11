import React, { useState, useEffect } from 'react'
import Answer from './Answer'
import { decode } from "html-entities"

export default function Questions(props) {

    const choices = props.answers.map((ans, index) => <Answer key={index} id={index} option={ans} selected={props.selected} correctans={props.correctans} setScore={props.setScore} isFinished={props.isFinished} setQuizData={props.setQuizData} quizData={props.quizData} selectAnswer={props.selectAnswer} setSelectedOption={props.setSelectedOption} selectedOption={props.selectedOption} questionid={props.questionid} deselectAnswer={props.deselectAnswer} selectedQuestion={props.selectedQuestion}/>)

    return (
        <div>
            <h2 className='question'>{decode(props.question)} </h2>
            <>{choices}</>
            <hr />
        </div>
    )
}

