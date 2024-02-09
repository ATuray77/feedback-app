import { motion, AnimatePresence } from "framer-motion" //fading in and out
import { useContext } from "react"
import Feedbackitem from "./Feedbackitem"
import feedbackContext from "../context/FeedBackContext"



function FeedbackList() {
  const {feedback} = useContext(feedbackContext) //we extract whatever we want from our feedback content by using our useContext hook and then pass in whatever context we want 

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback yet</p>
    }

    return (
      <div className="feedback-list">
        <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
          key={item.id}
          initial= {{opacity: 0}}
          animate= {{opacity: 1}}
          layout
          >
          < Feedbackitem 
          key={item.id} 
          item={item} 
        />
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
    )

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       < Feedbackitem 
  //       key={item.id} 
  //       item={item} 
  //       handleDelete= {handleDelete}/> //passing the handle delete function to app.js
  //     ))}
  //   </div>
  // )
}

export default FeedbackList
