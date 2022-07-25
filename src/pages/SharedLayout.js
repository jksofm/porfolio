import React from 'react'
import {Outlet} from "react-router-dom"
import {Navbar,Sidebar} from "../components"
function SharedLayout() {
  return (
    <>
    <Sidebar/>
    <Navbar />
    <Outlet />
    </>
  )
}

export default SharedLayout