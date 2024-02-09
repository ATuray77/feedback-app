import React from 'react'
import { FaQuestion } from 'react-icons/fa'

function AboutIconLink() { //this will position it absolute down at the corner
  return (
    <div className='about-link'>
        <a href='/about'>
         <FaQuestion size={30} />
         </a>
    </div>
  )
}

export default AboutIconLink
