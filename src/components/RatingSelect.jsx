import { useState, useContext, useEffect } from "react"
import feedbackContext from "../context/FeedBackContext"

function RatingSelect({select}) {

const [selected, setSelected] = useState(5) //state for selected rating
const {feedbackEdit} = useContext(feedbackContext)

useEffect(() => { //when feedbackEdit button is clicked grab the rating
  setSelected(feedbackEdit.item.rating)
}, [feedbackEdit])

const handleChange = (e) => { //when we select a rating, we call setSelected to document the change
    setSelected(+e.currentTarget.value)// '+e' change the type to a number
    select(+e.currentTarget.value)//calls the select function and pass in the new value. updating the value
}

  return (
    <ul className='rating'>
      <li>
        <input
          type='radio'
          id='num1'
          name='rating'
          value='1'
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor='num1'>1</label>
      </li>
      <li>
        <input
          type='radio'
          id='num2'
          name='rating'
          value='2'
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor='num2'>2</label>
      </li>
      <li>
        <input
          type='radio'
          id='num3'
          name='rating'
          value='3'
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor='num3'>3</label>
      </li>
      <li>
        <input
          type='radio'
          id='num4'
          name='rating'
          value='4'
          onChange={handleChange}
          checked={selected === 4}
        />
        <label htmlFor='num4'>4</label>
      </li>
      <li>
        <input
          type='radio'
          id='num5'
          name='rating'
          value='5'
          onChange={handleChange}
          checked={selected === 5}
        />
        <label htmlFor='num5'>5</label>
      </li>
      <li>
        <input
          type='radio'
          id='num6'
          name='rating'
          value='6'
          onChange={handleChange}
          checked={selected === 6}
        />
        <label htmlFor='num6'>6</label>
      </li>
      <li>
        <input
          type='radio'
          id='num7'
          name='rating'
          value='7'
          onChange={handleChange}
          checked={selected === 7}
        />
        <label htmlFor='num7'>7</label>
      </li>
      <li>
        <input
          type='radio'
          id='num8'
          name='rating'
          value='8'
          onChange={handleChange}
          checked={selected === 8}
        />
        <label htmlFor='num8'>8</label>
      </li>
      <li>
        <input
          type='radio'
          id='num9'
          name='rating'
          value='9'
          onChange={handleChange}
          checked={selected === 9}
        />
        <label htmlFor='num9'>9</label>
      </li>
      <li>
        <input
          type='radio'
          id='num10'
          name='rating'
          value='10'
          onChange={handleChange}
          checked={selected === 10}
        />
        <label htmlFor='num10'>10</label>
      </li>
    </ul>
  )

}

export default RatingSelect
