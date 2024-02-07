import PropTypes from 'prop-types'


function FeedbackStats({ feedback}) {
    //calculate ratings average
    //use reduce() to loop through all the ratings 
    //add all of them together and divide by the length of the feedback items to get the average
    let average = feedback.reduce((acc, cur ) => {//accumulator and current value
        return acc + cur.rating
    }, 0) / feedback.length //dividing the total by 1

    average = average.toFixed(1).replace(/[.,]0$/, '')//one decimal place. But if there is zero after the decimal place, remove that zero


  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats
