import React from 'react'

export default function Email(props) {
  return (
    <div className="row">
      <div className="col sm12 m12 l8">
        <div className="card">
          <div className="card-content">
            <div className="section">
              <span className="card-title">{props.title}</span>
              <p>To: {props.to}</p>
              <p>From: {props.from}</p>
            </div>
            <div className="divider"></div>
            <div className="section">
              <p className="flow-text">{props.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
