import React from 'react'
import { decode } from "html-entities"

export default function Answer(props) {
  const [isClicked, setIsClicked] = React.useState(false)

  React.useEffect(() => {
    if (props.selected !== props.option) {
      setIsClicked(false)
    }
  }, [props.selected])
  
  function handleToggle(event) {
    const selectedAnswer = event.target.textContent
    setIsClicked(true)
    props.selectAnswer(props.questionid,selectedAnswer)
    console.log('selected answer'+ selectedAnswer)
    console.log('correct answer'+ props.correctans)

  }

  let styles ={}

    function styler() {
        if (!props.isFinished && isClicked) {
            styles = {
                backgroundColor: "#D6DBF5"
            }
        } 
        if (props.isFinished && isClicked && props.selected === props.correctans) {
            styles = {
                backgroundColor: "#94D7A2"
            }
        } 
        else if (props.isFinished && isClicked && props.selected !== props.correctans) {
            styles = {
                backgroundColor: "#F8BCBC",
                opacity: 0.5
            }
        } 
        else if (props.isFinished && !isClicked && props.option === props.correctans) {
            styles = {
              backgroundColor: "#94D7A2",
            }
        } 
        else if (props.isFinished && !isClicked && props.option !== props.correctans) {
            styles = {
              backgroundColor: "transparent",
              opacity: 0.5
            }
        }
        return styles
    }

    styler()

  return (
    <button className='button answers' onClick={handleToggle} style={styles}>{decode(props.option)}</button>
  )
}

