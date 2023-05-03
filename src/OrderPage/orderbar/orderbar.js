import React from 'react'

import './orderbar.css'

export default function orderbar() {
  return (
    <div>
      <div className='bar'>  
        <ul className='order'>
          <li className='procedure' id='cart'>01. Cart</li>
          <li className='procedure' id='ship'>02. Shipping</li>
          <li className='procedure' id='done'>03. Done</li>
        </ul>
      </div>

    </div>
  )
}
