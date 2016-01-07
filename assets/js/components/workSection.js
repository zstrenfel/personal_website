// workSection.js
var React = require('react');
var GalleryBox = require('./workGallery/galleryBox');

var WorkSection = React.createClass({
  render: function() {
    return (
      <div className="work">
        <h2> Work </h2>
        <GalleryBox data={this.props.data}/>
      </div>
    );
  }
});

module.exports = WorkSection;