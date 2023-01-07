import React from 'react'
import NavBar from './NavBar'
import Notify from './Notify'
import HeroSection from './HeroSection'

function Layout({children}) {
  return (
    <div className='container'>
      <NavBar/>
      <HeroSection/>
      <Notify/> 
    {children}
      
    </div>
  )
}

export default Layout  
