import React from 'react'

export default function EmailList(props) {
  const emails = Object.keys(props.emails).map((key) => {
    const email = props.emails[key]
    return (
      <div>
        <h1>{email.title}</h1>
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
