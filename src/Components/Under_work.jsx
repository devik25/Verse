import React from 'react'
import { Link } from 'react-router-dom'
import './Components_CSS/Under_work.css'


function Under_work() {
  return (
    <div className='navigate error'>
        <div className='error_gif'>
        </div>
        <ul className='error_points'>
            <li>
                Personalized section are under build.
            </li>
            <li>
                Since it is a first release many features might not work.
            </li>
            <li>
                If you found any difficulty or you want to give any suggestions.<br></br> Kindly email at "devik.kota@gmail.com".
            </li>
            <li>
                Or you might surfed to the wrong page
            </li>
            <Link to={'/'}><button>Go Back</button></Link>
        </ul>
    </div>
  )
}

export default Under_work