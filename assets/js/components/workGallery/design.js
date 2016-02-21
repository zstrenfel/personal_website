import React from 'react'
import Gallery from './galleryBox'
import Data from '../../designData'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState() {
    return {
      selected: null
    };
  },
  handleClick(id) {
    this.setState({ selected: id });
    React.Children.map(this.props.children, (child, i) => {
      if (child.elemId === id) {
        console.log(child);
      }
    })
    return null;
  },
  render() {
    return(
        <Gallery data={Data} />
    )
  }
})