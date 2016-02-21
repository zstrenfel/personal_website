//galleryElem.js

import React from 'react'
import classNames from'classnames'
import {Link} from 'react-router'

export default React.createClass({
  hoverOn() {
    this.props.mouseOver(this.props.elemID);
  },
  hoverOff() {
    this.props.mouseOut();
  },
  handleClick() {
    this.props.onClick(this.props.elemID);
  },
  render() {
    //set classname
    var elemClass = classNames("gallery-elem", this.props.className,
      {
        emphasis: this.props.hover,
      });

    return(
      <div className={elemClass} onMouseOver={this.hoverOn} onMouseOut={this.hoverOff} onClick={this.handleClick}>
        <div className="inner">
          <div className="title">
            <h3>{this.props.title}</h3>
            <h5>{this.props.tags}</h5>
          </div>
        </div>
      </div>
    );
  }
});
