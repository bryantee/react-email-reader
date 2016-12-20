import React from 'react'
import {Link} from 'react-router'

export default function Sidebar(props) {
  const links = Object.keys(props.links).map((link, index) => {
    return (
      <li>
        <Link to={`${link}`}>
          {link}
        </Link>
      </li>
      );
  });
  return (
    <ul id="slide-out" className="side-nav fixed">
      {links}
    </ul>
  );
}
