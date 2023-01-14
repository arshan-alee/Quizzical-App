import React from 'react'

export default function Type(props) {
  return (
    <div>
    <label>Select Type:</label>
    <select className='select' value={props.type} onChange={props.handleType}>
        <option value="">Any Type</option>
        <option value="&type=multiple">Multiple Choice</option>
        <option value="&type=boolean">True/False</option>
    </select>
    </div>
  )
}
