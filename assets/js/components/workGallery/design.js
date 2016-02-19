import React from 'react'
import Gallery from './galleryBox'
import Data from '../../designData'

export default React.createClass({
  render() {
    return(
        <Gallery data={Data} />
    )
  }
})