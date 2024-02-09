import { v4 as uuidv4} from 'uuid'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"


function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) 
        {
            setFeedback(feedback.filter((item) => item.id !== id)) //returns an array minus the one we are deleting
        }
      
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()//adds unique IDs
        setFeedback([newFeedback, ...feedback]) //using spread operator to update
    }

    return (
    <>
    <Header />
    <div className="container">
        <FeedbackForm  handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/> 
    </div>
    </>
        
    )
}

export default App