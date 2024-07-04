import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/StorePages/Home'
import Cart from '../../Pages/StorePages/Cart'

const MainStore = () => {
  return (
    <div>
      <div className ="bg-slate-900">
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default MainStore
