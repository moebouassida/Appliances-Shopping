import React from 'react'

import Navbar from '../navbar/navbar'
import Body from './body/elementbody'
import Footer from '../footer/footer'

export default function Element() {
  return (
    <div>
        <Navbar />
        <Body/>
        <Footer />    
    </div>
  )
}
