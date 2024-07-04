import React from 'react'
import MainHeader from './MainHeader'
import Home from './Home'
import About from './About'
import Support from './Support'
import NotFound from './NotFound'
import { NavLink, Route, Routes } from 'react-router-dom'

const MainRoute = () => {
  return (
    //WithRoute Rendering or for RouteRender folder
    <div className='App'>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/support'>Support</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<MainHeader />}>

          <Route index element={<Home />} />          {/* This is default Route when render*/}
          
          <Route path='/about' element={<About />} />
          <Route path='/support' element={<Support />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default MainRoute
