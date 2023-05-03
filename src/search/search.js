import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { IoCloseOutline } from "react-icons/io5"
import { IoSearchOutline } from "react-icons/io5";

import './search.css'


export default function Navbar_contact() {
  const [input, setInput] = useState('')
  const [elementData, setElementData] = useState([])
  const [output, setOutput] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3020/api/element/getAllElementSearch')
      .then(res => {
        setElementData(res.data)
      })
  }, [])

  const handleFilter = (event) => {

    const searchWord = event.target.value
    setInput(searchWord)
    const Filtered = elementData.filter((val) => { return val.name.toLowerCase().includes(searchWord.toLowerCase()) })
    searchWord.length === 0 ? setOutput([]) : setOutput(Filtered)
  }

  const clearSearch = () => {
    setInput('')
    setOutput([])
  }

  return (
    <div>

      <div id='section'>
        <div className='searchBar_'>
          <input type='text' value={input} placeholder='Search' onChange={handleFilter} />
          <div className='searchBarIcon_'>
            {input.length === 0 ? <IoSearchOutline id='o' size={25} /> : <IoCloseOutline id='x'size={25} onClick={clearSearch} />}</div>
        </div>
        {
          output.length !== 0 &&
          (<div className='searchResult'>
            <ul className='elements'>
              {output
                .map((elem) => <a href='' className='name'><li key={elem._id}>{elem.name}</li></a>)}
            </ul>
          </div>)
        }

      </div>
    </div>

  )
}

