import React from 'react'
import {Link} from 'react-router'

export default function EmailList(props) {
  const mailboxName = props.mailbox;
  const emails = Object.keys(props.emails).map((key) => {
    const email = props.emails[key]
    return (
      <div>
        <Link to={`${mailboxName}/${email.id}`}>
          <h1>{email.title}</h1>
        </Link>
        <h2>{email.from}</h2>
      </div>
    );
  });
  return (
    <div>
      {emails}
    </div>
  )
}
