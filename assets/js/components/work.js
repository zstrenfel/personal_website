// workSection.js
import React from 'react'
import Data from "../workData"
import Gallery from './workGallery/galleryBox'
import WorkData from '../workData'

export default React.createClass({
  render() {
    return (
      <div className="work">
        <h2> Work </h2>
        <Gallery data={WorkData}/>
      </div>
    )
  }
});
