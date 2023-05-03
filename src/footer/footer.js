import React, { useState, useEffect } from 'react'

import { AiOutlineSend } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai"
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import './footer.css'

export default function Footer() {

  const [input, setInput] = useState('')

  const [dropDown1, setDropDown1] = useState(false)
  const [dropDown2, setDropDown2] = useState(false)
  const [dropDown3, setDropDown3] = useState(false)


  const dropDown1Style = {
    displayStyle: {
      display: dropDown1 ? 'block' : 'none'
    }
  }

  const dropDown2Style = {
    displayStyle: {
      display: dropDown2 ? 'block' : 'none'
    }
  }

  const dropDown3Style = {
    displayStyle: {
      display: dropDown3 ? 'block' : 'none'
    }
  }


  const toggleDropDown1 = () => {

    setDropDown1(!dropDown1)
  }

  const toggleDropDown2 = () => {

    setDropDown2(!dropDown2)
  }

  const toggleDropDown3 = () => {

    setDropDown3(!dropDown3)
  }


  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const submit = (event) => {
    setInput('')
    event.preventDefault()
  }


  return (
    <div>
      <div className='upFooter_'>
        <ul className='info_' id='all'>
          <li className='headTitle_'>Hot links {
            dropDown1 ?
              <span className='chevronUp' onClick={toggleDropDown1}><BsChevronUp /></span> :
              <span className='chevronUp' onClick={toggleDropDown1}><BsChevronDown /></span>
          }
          </li>

          <div className='collapsingFooterSection'>
            <li className='links_'><a href="" >Home</a></li>
            <li className='links_'><a href="" >Shop</a></li>
            <li className='links_'><a href="" >Blog</a></li>
            <li className='links_'><a href="" >Contact</a></li>
          </div>

          <div className='dropdown' id='1' style={dropDown1Style.displayStyle}>
            <li className='links_'><a href="" >Home</a></li>
            <li className='links_'><a href="" >Shop</a></li>
            <li className='links_'><a href="" >Blog</a></li>
            <li className='links_'><a href="" >Contact</a></li>
          </div>



        </ul>
        <ul className='info_' id='all' >
          <li className='headTitle_'>More info {
            dropDown2 ?
              <span className='chevronUp' onClick={toggleDropDown2}><BsChevronUp /></span> :
              <span className='chevronUp' onClick={toggleDropDown2}><BsChevronDown /></span>
          }
          </li>

          <div className='collapsingFooterSection'>
            <li className='links_'><a href="" >How it works</a></li>
            <li className='links_'><a href="" >About us </a></li>
            <li className='links_'><a href="" >Decline rules</a></li>
            <li className='links_'><a href="" >Terms & Conditions</a></li>
          </div>

          <div className='dropdown' id='2' style={dropDown2Style.displayStyle}>
            <li className='links_'><a href="" >How it works</a></li>
            <li className='links_'><a href="" >About us </a></li>
            <li className='links_'><a href="" >Decline rules</a></li>
            <li className='links_'><a href="" >Terms & Conditions</a></li>
          </div>



        </ul>
        <ul className='info_' id='all'>
          <li className='headTitle_'>Customer care {
            dropDown3 ?
              <span className='chevronUp' onClick={toggleDropDown3}><BsChevronUp /></span> :
              <span className='chevronUp' onClick={toggleDropDown3}><BsChevronDown /></span>
          }
          </li>

          <div className='collapsingFooterSection'>
            <li className='links_'><a href="" >FAQ</a></li>
            <li className='links_'><a href="" >Terms of use</a></li>
            <li className='links_'><a href="" >Privacy Policy</a></li>
            <li className='links_'><a href="" >Discount system</a></li>
          </div>

          <div className='dropdown' id='3' style={dropDown3Style.displayStyle}>
            <li className='links_'><a href="" >FAQ</a></li>
            <li className='links_'><a href="" >Terms of use</a></li>
            <li className='links_'><a href="" >Privacy Policy</a></li>
            <li className='links_'><a href="" >Discount system</a></li>
          </div>



        </ul>
        <ul className='info_' id='unique'>
          <li className='headTitle_' >Get newsletter</li>
          <li id='link_'><a>Get updates about appliances</a></li>

          <form id='footer-form' onSubmit={submit}>
            <input type='text' id='input_' value={input} onChange={handleChange} placeholder='Type your email...'></input>
            <button className='sendbtn_'><AiOutlineSend size={25}></AiOutlineSend></button>
          </form>

        </ul>
      </div>

      <div className='downFooter_'>
        <div className='copyright_'><h3>© Appliances Shopping all rights reserved</h3></div>
        <div className='social_'>
          <div className='img_'><a href=""><AiOutlineInstagram id='cs' size={20} /></a></div>
          <div className='img_'><a href=""><AiOutlineTwitter size={20} /></a></div>
          <div className='img_'><a href=""><GrFacebookOption size={20} /></a></div>
        </div>
      </div>


    </div>



  )
}
