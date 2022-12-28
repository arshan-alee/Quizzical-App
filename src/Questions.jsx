import React, { useState, useEffect } from 'react'
import Answer from './Answer'
import { decode } from "html-entities"

export default function Questions(props) {

    const [options, setOptions] = React.useState([])

    React.useEffect(() => {
        const answers = [props.correctans, ...props.incorrectans]
        const shuffledAnswers = answers.sort(() => Math.random() - 0.5)
        setOptions(shuffledAnswers)
    }, [])
    const choices = options.map((ans, index) => <Answer key={index} id={index} option={ans} correctans={props.correctans} setScore={props.setScore} isFinished={props.isFinished} />)

    return (
        <div>
            <h2 className='question'>{decode(props.question)} </h2>
            <>{choices}</>
            <hr />
        </div>
    )
}
