import React, {Component} from 'react'
import EMAILS from '../emails'
import Email from './email'

export default class EmailContainer extends Component{
  render() {
    let email = EMAILS[this.props.params.mailboxName][this.props.params.emailId];
    console.log(`email: ${email}`);
    console.log(`email id: ${this.props.params.emailId}`);
    return <Email title={email.title} to={email.to} from={email.from} content={email.content} />;
  }
}
