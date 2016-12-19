import React from 'react'
import {Link} from 'react-router'
import EMAILS from '../emails'
import Sidebar from './side-bar'

export default function SidebarContainer(props) {
  const mailboxes = Object.keys(EMAILS).map((mailbox, index) => {
    return (
      <li>
        <Link to={`${mailbox}`}>
          {mailbox}
        </Link>
      </li>
      );
  });
  return (
    <Sidebar links={mailboxes} />
  );
}
