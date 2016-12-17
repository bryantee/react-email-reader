import React from 'react'

export default function Email(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>To:{props.to}</h2>
      <h2>From: {props.from}</h2>
      <p>{props.content}</p>
    </div>
  );
};
