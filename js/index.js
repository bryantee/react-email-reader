require('babel-polyfill');
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Email from './components/email'
import EmailList from './components/email-list'
import EMAILS from './emails'
import ListContainer from './components/list-container'
import EmailContainer from './components/email-container'
import App from './components/app'

const routes = (
  <Router history={hashHistory}>
    <Route path="/:mailboxName" component={App}>
      <IndexRoute component={ListContainer} />
      <Route path=":emailId" component={EmailContainer} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(routes, document.getElementById('app'));
});
