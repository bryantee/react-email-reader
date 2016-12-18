import React from 'react'
import Navbar from './nav-bar'

export default function App(props) {
  return (
    <div>
      <Navbar />
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}
