import React from 'react'
import { decode } from "html-entities"

export default function Answer(props) {
  // const [selectedOption, setSelectedOption] = React.useState()
  // const [isCorrect, setIsCorrect] = React.useState(false)
  const [isClicked, setIsClicked] = React.useState(false)

  React.useEffect(() => {
    if (props.selected !== props.option) {
      setIsClicked(false)
    }
  }, [props.selected])
  
  function handleToggle(event) {
    const selectedAnswer = event.target.textContent
    setIsClicked(!isClicked)
    props.selectAnswer(props.questionid,selectedAnswer)
    console.log('selected answer'+ selectedAnswer)
    console.log('correct answer'+ props.correctans)

  }

  const styles = {
    backgroundColor: isClicked  ? "#D6DBF5" : "transparent"
  }
  return (
    <button className='button answers' onClick={handleToggle} style={styles}>{decode(props.option)}</button>
  )
}

