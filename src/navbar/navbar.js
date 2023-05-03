import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import axios from 'axios'

import { BsSuitHeart } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5"


import Search from '../search/search';
import Contact from '../ContactPage/contact';

import './navbar.css'

export default function Navbar() {

  const [secNavSliderInput, setSecNavSliderInput] = useState('')
  const [secNavSliderElementData, setSecNavSliderElementData] = useState([])
  const [secNavSliderOutput, setSecNavSliderOutput] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3020/api/element/getAllElementSearch')
      .then(res => {
        setSecNavSliderElementData(res.data)
        console.log(secNavSliderElementData)
      })
  }, [])

  const handleFilter = (event) => {

    const searchWord = event.target.value
    setSecNavSliderInput(searchWord)
    const Filtered = secNavSliderElementData.filter((val) => { return val.name.toLowerCase().includes(searchWord.toLowerCase()) })
    searchWord.length === 0 ? setSecNavSliderOutput([]) : setSecNavSliderOutput(Filtered)
  }

  const clearSearch = () => {
    setSecNavSliderInput('')
    setSecNavSliderOutput([])
  }

  const [toggleSearch, setToggleSearch] = useState(false)
  const [Nav, setNav] = useState(false)

  const navStyle = {
    borderStyling: {
      borderBottomLeftRadius: toggleSearch ? '0px' : '14px',
      borderBottomRightRadius: toggleSearch ? '0px' : '14px'
    },

    secNavStyling: {
      slider: {
        visibility: Nav ? 'visible' : 'hidden'
      }
    }

  }

  const searchToggle = () => {
    setToggleSearch(!toggleSearch)
  }


  const toggleNav = () => {
    setNav(!Nav)

    if (searchToggle)
      setToggleSearch(!searchToggle)
  }

  return (
    <div>

      <div className='border' style={navStyle.borderStyling}>
        <ul className='firstNav'>
          <li><a href="" className='title'>Home</a></li>
          <li><a href="" className='title'>Shop</a></li>
          <li><Link className='title' to="/Contact" exact element={<Contact />}>Contact</Link></li>
        </ul>

        <ul className='secNav'>
          <li>
            <a href="" className='icon'><BsSuitHeart size={20} /></a>
          </li>
          <li>
            <IoSearchOutline id='searchIcon' className='icon' size={22} onClick={searchToggle} />
          </li>
          <li>
            <a href="" className='icon'><BiUser size={20} /></a>
          </li>
          <li>
            <a href="" className='icon'><BsHandbag size={20} /></a>
          </li>
        </ul>

        <ul className='secNav' id='secNavSlider' style={navStyle.secNavStyling.slider}>

          <li>

            <div className='secNavSliderSearchBar'>
              <input type='text' value={secNavSliderInput} placeholder='Search' onChange={handleFilter} />
              <div className='secNavSliderSearchBarIcon'>
                {secNavSliderInput.length === 0 ? <IoSearchOutline id='secNavSliderSearchIcon' size={25} /> : <IoCloseOutline id='secNavSliderCloseIcon' size={25} onClick={clearSearch} />}</div>
            </div>
          </li>

          {
            secNavSliderOutput.length !== 0 ?
              (<div className='secNavSliderSearchResult'>
                <div className='test'>
                  <div className='secNavSliderElements'>
                    {secNavSliderOutput
                      .map((elem) => <a href='' className='secNavSliderElementsName'><p key={elem._id}>{elem.name}</p></a>)}
                  </div>
                </div>

              </div>) :
              (<div>
                <li>
                  <a href="" className='icon'><BsSuitHeart size={20} />
                    <span id='help'>Favorites</span>
                  </a>
                </li>
                <li>
                  <a href="" className='icon'><BiUser size={20} />
                    <span id='help'>Account</span>
                  </a>
                </li>
                <li>
                  <a href="" className='icon'><BsHandbag size={20} />
                    <span id='help'>Shopping Bag</span>
                  </a>
                </li>
              </div>
              )
          }

        </ul >


        <div className='secNavSelector'>
          {!Nav ?
            <span className='selector' id='openSelector' onClick={toggleNav}>&#9776;</span> :
            <span className='selector' id='closeSelector' onClick={toggleNav}>&times;</span>}
        </div>


        {
          toggleSearch && (<div id='searchSection'>
            <Search />
          </div>)
        }
      </div >

    </div >
  )
}     