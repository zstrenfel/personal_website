// workSection.js
import React from 'react'
import Data from "../workData"
import Gallery from './workGallery/galleryBox'
import WorkData from '../workData'
import { Link, IndexLink } from 'react-router'


export default React.createClass({
  render() {
    var children = this.props.children ? React.cloneElement(this.props.children, {data: WorkData}): null;
    return (
      <div className="work">
        <h2> Work </h2>
        <ul>
          <li><IndexLink to="/">Home</IndexLink></li>
        </ul>
        <ul>
          <li><Link to="/work/design">Design</Link></li>
          <li><Link to="/work/developement">Development</Link></li>
        </ul>
        {children}
      </div>
    )
  }
});
