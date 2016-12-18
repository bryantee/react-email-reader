import React from 'react'
import {Link} from 'react-router'

export default function EmailList(props) {
  const mailboxName = props.mailbox;
  const emails = Object.keys(props.emails).map((key) => {
    const email = props.emails[key]
    return (
        <li className="collection-item avatar">
          <Link to={`${mailboxName}/${email.id}`}>
            <img className="circle" src="assets/images/bryan_cat.jpg" />
            <span className="title">{email.title}</span>
          </Link>
          <p>{email.from}</p>
        </li>
    );
  });
  return (
    <div>
      <ul className="collection">
        {emails}
      </ul>
    </div>
  )
}
