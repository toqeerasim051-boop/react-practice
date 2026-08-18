import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
     <Header />
     <Outlet/>
     <Footer />
{/* this outlet dyanmically put things in between header and footer and other things remain fixed */}
    </>
  )
}

export default Layout
