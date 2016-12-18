import React from 'react'
import Navbar from './nav-bar'
import SidebarContainer from './sidebar-container'

export default function App(props) {
  return (
    <div>
      <Navbar />
      <SidebarContainer />
      {props.children}
    </div>
  )
}
