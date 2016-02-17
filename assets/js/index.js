import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// Components
import App from './app.js'
import Splash from './components/splash'
import Work from './components/work'
import Gallery from './components/workGallery/galleryBox'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Splash}/>
      <Route path="/work" component={Work}>
        <Route path="/work/design" component={Gallery}/>
        <Route path="/work/developement" component={Gallery}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('container')
)