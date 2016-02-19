//galleryElem.js

var React = require('react');
var classNames = require('classnames');

var GalleryElem = React.createClass({
  hoverOn: function() {
    this.props.mouseOver(this.props.elemID);
  },
  hoverOff: function() {
    this.props.mouseOut();
  },
  handleClick: function() {
    this.props.onClick(this.props.elemID);
  },
  render: function() {
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

module.exports = GalleryElem;