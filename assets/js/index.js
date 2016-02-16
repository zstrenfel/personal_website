import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// Components
import Splash from './components/splash'
import Work from './components/work'
import Gallery from './components/workGallery/galleryBox'

render(
  <Router history={browserHistory}>
    <Route path="/" component={Splash}/>
      <IndexRoute component={Splash}/>
      <Route path="/work" component={Work}>
        <Route path="/work/design" component={Gallery}/>
        <Route path="/work/developement" component={Gallery}/>
      </Route>
  </Router>,
  document.getElementById('container')
)