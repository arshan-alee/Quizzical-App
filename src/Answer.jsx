import React from 'react'
import { decode } from "html-entities"

export default function Answer(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(-1)
  const [isClicked, setIsClicked] = React.useState(false)

  function handleToggle(event) {
    setIsClicked(!isClicked)
    setSelectedIndex(props.id)
    console.log(selectedIndex)
    checkAnswers(event)

  }

  function checkAnswers(event) {
    let selectedAnswer = event.target.textContent.slice(1)
    console.log("selectedAnswer" + selectedAnswer)
    console.log("props.correctans" + props.correctans)
    console.log("props.selected" + props.selected)
    if (selectedAnswer == props.correctans) {
      props.setScore(prevScore => prevScore + 1);
    }
  }

  

  const styles = {
    backgroundColor: selectedIndex === props.id && isClicked ? "#D6DBF5" : "transparent"
  }
  return (
    <button className='button answers' onClick={(event) => handleToggle(event)} style={styles}> {decode(props.option)}</button>
  )
}
