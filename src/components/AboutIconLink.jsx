import {Link} from 'react-router-dom'//to prevent pages reloading when navigating
import { FaQuestion } from 'react-icons/fa'

function AboutIconLink() { //this will position it absolute down at the corner
  return (
    <div className='about-link'>
        <Link 
        to='/about'>
         <FaQuestion size={30} />
         </Link>
    </div>
  )
}

export default AboutIconLink
