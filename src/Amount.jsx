import React from 'react'

export default function Amount(props) {
  return (
    <div className='amount'>
    <label>Select Number Of Questions:</label>
    <input className='select' type="number" name="amount" id="amount" min='1' max='50' value={props.amount} onChange={props.handleAmountOfQuestions} />
    </div>
  )
}
