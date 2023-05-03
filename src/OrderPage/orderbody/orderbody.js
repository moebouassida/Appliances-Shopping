import React from 'react'
import tick from '../img/tick.png'

import './orderbody.css'

export default function orderbody() {
  return (
    <div>
        <div className='doneSection'>
          <hr id='hr_' />
          <img src={tick} />
          <h3 id='h3'>Successfully Ordered!</h3>
          <a  href=''><button id='shopBtn'>Back to shop</button></a>
        </div>
    </div>
  )
}
