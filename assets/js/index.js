import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// Components
import Splash from './components/splash'
import Work from './components/work'

render(
  <Router history={browserHistory}>
    <Route path="/" component={Splash}/>
    <Route path="/work" component={Work}/>
  </Router>,
  document.getElementById('container')
)