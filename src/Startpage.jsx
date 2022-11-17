import React from 'react'

export default function Startpage(props) {
    return (
        <div className="startpage">
            <h1 className='apptitle'>Quizzical App</h1>
            <p className="description">Some description if needed</p>
            <button className="button start" onClick={props.handleStart}>Start</button>
        </div>
    )
}
