import React from 'react'

export default function Sidebar(props) {

  return (
    <ul id="slide-out" className="side-nav fixed">
      {props.links}
    </ul>
  );
}
