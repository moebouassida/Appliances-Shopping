import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

// import Element from './ElementPage/element'
// import Contact from './ContactPage/contact'
// import Order from './OrderPage/order'
// import Notfound from '../src/404 not found/404'
import Shop from "./Shop/components/Shop"
import Home from './Home/Home'

export default function App() {
  return (
      <div>
        {/* <Router>
        <Routes>
          <Route path='/' element={<Element />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Order' element={<Order />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Router> */}
      <Shop /> 
      {/* <Home /> */}
      </div>
  )
}
