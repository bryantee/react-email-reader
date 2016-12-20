import React from 'react'
import EMAILS from '../emails'
import Sidebar from './side-bar'

export default function SidebarContainer(props) {
  return (
    <Sidebar links={EMAILS} />
  );
}
