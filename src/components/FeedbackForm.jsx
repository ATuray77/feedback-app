import { useState } from "react"//to handle input states for our form
import Card from "./shared/Card"//because we want to wrap the form in a card
import Button from "./shared/Button"

function FeedbackForm() {

const [text, setText] = useState('')

const handleTextChange = (e) => {
    setText(e.target.value)
}

  return (
    <Card>
      <form> 
        <h2>How would you rate your service with us
        </h2>
        {/* @todo - rating select component */}
        <div className="input-group">
            <input 
            onChange={handleTextChange}
            type="text"  
            placeholder="Write a review"
            value= {text}/>
            <Button type="submit" version='secondary' >Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
