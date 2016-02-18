// workSection.js
import React from 'react'
import Data from "../workData"
import Gallery from './workGallery/galleryBox'
import WorkData from '../workData'
import { Link, IndexLink } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default React.createClass({
  render() {
    var children = this.props.children ? React.cloneElement(this.props.children, {data: WorkData}): null;
    return (
      <div className="work">
        <header>
          <h2> Work </h2>
        </header>
          <nav className="sub-nav left">
            <ul>
              <li><Link to="/work/design" activeClassName="gallery-active">Design</Link></li>
              <li><Link to="/work/developement" activeClassName="gallery-active">Development</Link></li>
            </ul>
          </nav>
        {children}
      </div>
    )
  }
});
