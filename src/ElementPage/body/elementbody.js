import React, { useState } from 'react'


import { BsBookmark } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";

import StarRatings from '../../react-star-ratings/build';

import './elementbody.css'

export default function ElementBody() {

  const [toggleFav, setToggleFav] = useState(false)

  const toggle = () => {
    setToggleFav(!toggleFav)
  }

  return (
    <div>
      <div id='container_' >
        <div id='sep1'></div>
        <div id='main_'>


          {
            toggleFav && (
              <div className='favIcon'>
                <BsBookmark size={70} cursor='pointer' onClick={toggle} />
              </div>
            )
          }

          {
            !toggleFav && (
              <div className='favIcon'>
                <BsFillBookmarkFill size={70} cursor='pointer' onClick={toggle} />
              </div>
            )
          }

          <div>
            <div className='elementName'>
              <h1>azfazfhbfaiyhbgfiuazhiguahbi
                ughbaiubgiabgiebauguibaeiugb</h1>
            </div>
            <div className='elementDesc'>
              <h1>fzfzefzeughbaiubgiabgiebauguibaeiugb
                ughbaiubgiabgiebauguibaeiugb
                ughbaiubgiabgiebauguibaeiugb
              </h1>
            </div>



            <div className='elementInfoR'>
              <img />
              <div className='elementPrice'>$1,456.99</div>
            </div>

            <div className='rating'>
              <StarRatings starDimension='35px' starRatedColor='#4D79D7' rating={2} />
            </div>

            <div className='colorChoice'>
              <h1>Colours shown</h1>

              <div className='color' id='color1'></div>
              <div className='color' id='color2'></div>
            </div>
          </div>

          <a href={''}><button id="btn">Shop now</button></a>

        </div>
        <div id='sep2'></div>
      </div>

    </div>
  )
}
