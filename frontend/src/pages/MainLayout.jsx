import React from 'react'
import Footer from '../mainLayout/Footer'
import Navbar from '../mainLayout/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default MainLayout