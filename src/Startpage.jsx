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
                <Amount selectedAmount={props.selectedAmount} handleAmountOfQuestions={props.handleAmountOfQuestions} />
                <Category selectedCategory={props.selectedCategory} handleCategory={props.handleCategory} />
                <Difficulty selectedDifficulty={props.selectedDifficulty} handleDifficulty={props.handleDifficulty} />
                <Type selectedType={props.selectedType} handleType={props.handleType}/>
            </div>


            <button className="button start" onClick={props.handleStart}>Start</button>
        </div>
    )
}
