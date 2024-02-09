import { v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'//router implementation. A component for rendering anything in a specific route
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedBackContext'
//import feedbackContext from './context/FeedBackContext'
import AboutIconLink from './components/AboutIconLink'


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
    <FeedbackProvider>
    <Router>
    <Header />
    <div className="container">
        <Routes>
        <Route exact path='/' element={
            <>
             <FeedbackForm  handleAdd={addFeedback}/>
             <FeedbackStats feedback={feedback}/>
             <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/> 
            </>
        }>
       
        </Route>

        <Route path='/about' element={<AboutPage />} /> 
        </Routes> 

        <AboutIconLink />
    </div>
    </Router>
    </FeedbackProvider>
        
    )
}

export default App