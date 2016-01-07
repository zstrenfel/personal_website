//galleryElem.js

var React = require('react');
var classNames = require('classnames')


var GalleryElem = React.createClass({
  render: function() {
    //set classname
    var elemClass = classNames("gallery-elem", this.props.size);

    return(
      <div className={elemClass} >
        <div className="title">
          <h3>{this.props.title}</h3>
          <h5>{this.props.tags}</h5>
        </div>
      </div>
    );
  }
});

module.exports = GalleryElem;