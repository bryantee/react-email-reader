import React from 'react'

export default function App(props) {
  return (
    <div>
      <h1>Readl-ly</h1>
      <div>
        {props.children}
      </div>
    </div>
  )
}
