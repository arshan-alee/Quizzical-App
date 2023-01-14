import React from 'react'

export default function Difficulty(props) {
  return (
    <div>
    <label>Select Difficulty:</label>
    <select className='select' value={props.difficulty} onChange={props.handleDifficulty}>
        <option value="">Any Difficulty</option>
        <option value="&difficulty=easy">Easy</option>
        <option value="&difficulty=medium">Medium</option>
        <option value="&difficulty=hard">Hard</option>
    </select>
    </div>
  )
}
