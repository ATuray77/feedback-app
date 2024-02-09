import { useState } from "react"//to handle input states for our form
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"//because we want to wrap the form in a card
import Button from "./shared/Button"



function FeedbackForm({handleAdd}) { //passing handle add function up to the parent

const [text, setText] = useState('')
const [rating, setRating] = useState(10)
const [btnDisabled, setBtnDisabled] = useState('true')
const [message, setMessage] = useState('')


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
    handleAdd(newFeedback)//pass in the new feedback to to handle add function
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
