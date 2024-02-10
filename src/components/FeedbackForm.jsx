import { useState, useContext, useEffect } from "react"//to handle input states for our form, context and side effects
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"//because we want to wrap the form in a card
import Button from "./shared/Button"
import feedbackContext from "../context/FeedBackContext"



function FeedbackForm() { //passing handle add function up to the parent

const [text, setText] = useState('')
const [rating, setRating] = useState(10)
const [btnDisabled, setBtnDisabled] = useState('true')
const [message, setMessage] = useState('')

const {addFeedback, feedbackEdit} = useContext(feedbackContext)//feedback

useEffect(() => { //when an item is clicked we want the page to rerender
  if(feedbackEdit.edit === true) {//check if feedbackEdit has data
  setBtnDisabled(false)//enable the button
  setText(feedbackEdit.item.text) //set the value to what's in feedbackEdit.item
  setRating(feedbackEdit.item.rating)
  }
  }, [feedbackEdit])//this is the dependency that triggers the reload

const handleTextChange = (e) => { ///real-time validation
  if (text === '') {
    setBtnDisabled(true)
    setMessage(null)
  } else if (text !== '' && text.trim().length <= 10){
    setMessage('Text must be at least 10 chaaracters')
    setBtnDisabled(true)
  } else {
    setMessage(null)
    setBtnDisabled(false)
  }
    setText(e.target.value)//calls setText to update the text value
}

const handleSubmit = (e) => {
  e.preventDefault()
  if (text.trim().length > 10){//if the text length is greather than 10 create a new feed back object
    const newFeedback = {
      text,
      rating
    }
    addFeedback(newFeedback)//pass in the new feedback to to handle add function
    setText('')// calls setText to clear the text field after submission
  }
}

  return (
    <Card>
      <form onSubmit={handleSubmit}> 
        <h2>How would you rate your service with us
        </h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
            <input 
            onChange={handleTextChange}
            type="text"  
            placeholder="Write a review"
            value= {text}/>
            <Button type="submit" isDisabled={btnDisabled}>Send</Button>

            {message && <div className='message'>{message}</div>}
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
