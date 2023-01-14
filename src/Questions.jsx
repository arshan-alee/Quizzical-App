import React from 'react'
import Answer from './Answer'
import { decode } from "html-entities"

export default function Questions(props) {

    const choices = props.answers.map((ans, index) => <Answer key={index} id={index} option={ans} selected={props.selected} correctans={props.correctans} isFinished={props.isFinished}  selectAnswer={props.selectAnswer}  questionid={props.questionid} />)

    return (
        <div>
            <h2 className='question'>{decode(props.question)} </h2>
            <>{choices}</>
            <hr />
        </div>
    )
}

