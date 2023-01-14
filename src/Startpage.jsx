import React from 'react'
import Amount from './Amount'
import Category from './Category'
import Difficulty from './Difficulty'
import Type from './Type'

export default function Startpage(props) {
    return (
        <div className="startpage">
            <h1 className='apptitle'>Quizzical App</h1>
            <p className="description">A fun and engaging trivia game app.</p>
            <div className='options'>
                <Amount amount={props.amount} handleAmountOfQuestions={props.handleAmountOfQuestions} />
                <Category category={props.category} handleCategory={props.handleCategory} />
                <Difficulty difficulty={props.difficulty} handleDifficulty={props.handleDifficulty} />
                <Type type={props.type} handleType={props.handleType}/>
            </div>


            <button className="button start" onClick={props.handleStart}>Start</button>
        </div>
    )
}
