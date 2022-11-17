import React from 'react'
import { decode } from "html-entities"

export default function Answer(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(-1)
  
  const [isClicked, setIsClicked] = React.useState()
  
  
  function toggleClick() {
    setIsClicked(!isClicked)
  }
  function handleClick(event) {
    toggleClick()
    setSelectedIndex(props.id)
    props.setSelectedAnswer(event.target.textContent)

    props.checkAnswers()
  }

  const styles = {
    backgroundColor: selectedIndex === props.id && isClicked ? "#D6DBF5" : "transparent"
  }
  return (
    <button className='button answers' onClick={(event) => handleClick(event)} style={styles}> {decode(props.option)}</button>
  )
}
