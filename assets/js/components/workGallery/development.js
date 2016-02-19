import React from 'react'
import Gallery from './galleryBox'
import Data from '../../devData'

export default React.createClass({
  render() {
    return(
      <Gallery data={Data} />
    )
  }
})