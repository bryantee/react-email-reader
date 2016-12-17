import React, {Component} from 'react'
import EMAILS from '../emails'
import EmailList from './email-list'

export default class ListContainer extends Component {
  render() {
    let emails = EMAILS[this.props.params.mailboxName]
    return (
      <div>
        <EmailList emails={emails} />
        {this.props.children}
      </div>
    );
  }
}
