import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// Components
import App from './app.js'
import Splash from './components/splash'
import Work from './components/work'
import Development from './components/workGallery/development'
import Design from './components/workGallery/design'
import Example from './components/workGallery/work/example'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Splash}/>
      <Route path="/work" component={Work}>
        <IndexRoute component={Development}/>
        <Route path="/work/development" component={Development}/>
        <Route path="/work/development/example" component={Example}/>
        <Route path="/work/design" component={Design}/>
        <Route path="/work/design/example" component={Example}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('container')
)