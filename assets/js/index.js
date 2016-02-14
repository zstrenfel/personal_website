import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-route'
// Components
import Splash from './components/splash'
import data from './workData'


render(
  <Router history={browserHistory}>
    <Route path="/" component={Splash}/>
  </Router>,
  document.getElementById('container')
)