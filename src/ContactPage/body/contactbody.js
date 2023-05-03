import React from 'react'

import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

import map from '../img/map.png'
import logo from '../img/logo.png'
import yt from '../img/youtube.png'
import tw from '../img/twitter.png'
import pin from '../img/pinterest.jpg'

import './contactbody.css'

export default function contactbody() {
  return (
    <div>
      <div id='container'>
        <div id="main">
          
          <img id='map' src={map} alt='store location' />
          
          <div id='marker'>
          </div>
          <div id='name'>
          </div>
          <div id='loc'>
          </div>
          <div id='view'>
          </div>
          <div id='forward'>
          </div>

          
          <div id='stats'>
            <img id='logo' src={logo} alt='store logo' />
            
            <hr id='hr1' />
            
            <div id='contact'>
           
              <ul className='infos'>
                <li id='phone'><FiPhone size={32} /></li>
                <li className='valueName'>Phone</li>
                <li className='value' id='number'>+33 234-231-1111</li>
              </ul>
              
              <ul className='infos'>
                <li id='location'><MdOutlineLocationOn size={40} /></li>
                <li className='valueName'>Address</li>
                <li className='value'>81600 Montand, France</li>
              </ul>
                
              <ul className='infos'>
                <li id='mail'><IoMailOutline size={40} /></li>
                <li className='valueName'>Mail</li>
                <li className='value'>clayshop@gmail.com</li>
              </ul>

            </div>
            
            <hr id='hr2' />
            
            <div className='media'>
                    <div className='section'>
                      <a href=''><img src={yt} alt='youtube' id='yt'/></a>
                      <ul className='mediastats'>
                        <li className='mediaStatsValue'>125</li>
                        <li className='mediaStatsName'>Videos</li>
                      </ul>
                    </div>
                    
                    <div className='section'>         
                      <a href=''><img src={tw} alt='twitter' id='tw'/></a>
                      <ul className='mediastats'>
                        <li className='mediaStatsValue'>820</li>
                        <li className='mediaStatsName'>Tweets</li>
                      </ul>
                    </div>
                    
                    <div className='section'>
                    <a href=''><img src={pin} alt='pinterest' id='pin'/></a>
                      <ul className='mediastats'>
                        <li className='mediaStatsValue'>215</li>
                        <li className='mediaStatsName'>Pins</li>
                      </ul>
                    </div>
            </div>
          </div>
        </div>
      </div>



    </div >

  )
}
