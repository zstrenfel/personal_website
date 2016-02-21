import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      selected: null;
    }
  },

  render() {
    var Children;
    return (
      <div className="gallery-container">
        {Children}
      </div>
    )
  }
})