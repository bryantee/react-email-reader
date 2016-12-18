import React from 'react'
import EMAILS from '../emails'
import Sidebar from './side-bar'

export default function SidebarContainer(props) {
  const mailboxes = Object.keys(EMAILS).map((mailbox, index) => {
    return <li>{mailbox}</li>;
  });
  return (
    <Sidebar links={mailboxes} />
  );
}
