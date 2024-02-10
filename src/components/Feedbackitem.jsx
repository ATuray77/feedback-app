import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedBackContext' //inorder to use it here

function Feedbackitem({ item }) { //we are extracting deleteFeedBack from context
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    
    return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)}className="close">
        <FaTimes color='purple'/>
      </button>
      <button onClick={() => editFeedback(item)}className="edit">
        <FaEdit color='purple'/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

Feedbackitem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Feedbackitem
