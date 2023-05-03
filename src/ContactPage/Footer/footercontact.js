import React from 'react'

import { AiOutlineSend } from "react-icons/ai"

import './footercontact.css'

export default function footercontact() {
  return (
    <div>
      <div className='upFooter'>
        <ul className='info'>
          <li className='headTitle'>Hot links</li>
          <li className='links'><a href="" >Home</a></li>
          <li className='links'><a href="" >Shop</a></li>
          <li className='links' ><a href="" >Blog</a></li>
          <li className='links'><a href="" >Contact</a></li>
        </ul>
        <ul className='info'>
          <li className='headTitle'>More info</li>
          <li className='links'><a href="" >how it works</a></li>
          <li className='links'><a href="" >About us </a></li>
          <li className='links'><a href="" >Decline rules</a></li>
          <li className='links'><a href="" >Terms & Conditions</a></li>
        </ul>
        <ul className='info'>
          <li className='headTitle'>Customer care</li>
          <li className='links'><a href="" >FAQ</a></li>
          <li className='links'><a href="" >Terms of use</a></li>
          <li className='links'><a href="" >Privacy Policy</a></li>
          <li className='links'><a href="" >Discount system</a></li>
        </ul>
        <ul className='info'>
          <li className='headTitle'>Get newsletter</li>
          <li id='link'><a href="" >Get updates about appliances</a></li>
          <li>
            <input id='input' type="text" name="email" placeholder='Type your email'/>
            <a href=""><button className='sendbtn'><AiOutlineSend size={25} /></button></a>
          </li>
        </ul>

      </div>

      <div className='downFooter'>
          <div className='copyright'><h3>© Appliances Shopping all rights reserved</h3></div>
      </div>    

    </div>
  )
}
