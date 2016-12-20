import React from 'react'

export default function Navbar(props) {
  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-4">
        <div className="brand-logo">
          {props.title}
        </div>
      </div>
    </nav>
);
}
